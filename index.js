const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const connectDB = require("./config/connect");
const bodyParser = require("body-parser");
const restaurant = require("./models/restaurant");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 3000;
app.use("/static", express.static("static"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", onhome);


// Wordt getoond op de card, zichtbaar voor gebruiker
async function onhome(req, res) {
    try {
        // laat alleen de restaurants zien die de gebruiker nog niet heeft geswiped
        const data = await restaurant.findOne({ voorkeur: "" }).lean().exec()
        res.render("home", { data: data });
    } catch {
        console.log("error");
    }
}

// Wanneer gebruiker een card heeft geliked
app.post("/like", async (req, res) => {
    try {
        await restaurant.findOneAndUpdate({ voorkeur: "" }, { voorkeur: "like" }).lean().exec();
        const data = await restaurant.findOne({ voorkeur: "" }).lean().exec();
        res.render("home", { data: data });
    } catch {
        console.log("fout bij liken");
    }
});

// Wanneer gebruiker een card heeft gedisliked
app.post("/dislike", async (req, res) => {
    try {
        await restaurant.findOneAndUpdate({ voorkeur: "" }, { voorkeur: "dislike" }).lean().exec();
        const data = await restaurant.findOne({ voorkeur: "" }).lean().exec();
        res.render("home", { data: data });
    } catch {
        console.log("fout bij disliken");
    }
});

// Toon lijst met gelikete restaurants
app.post("/favorieten", async (req, res) => {
    try {
        const data = await restaurant.find({ voorkeur: "like" }).lean().exec();
        res.render("favorieten", { data: data });
    } catch {
        console.log("fout bij laden favorieten");
    }
});

// Verwijder uit favorieten
app.post("/verwijder", async (req, res) => {
    try {
        await restaurant.findOneAndUpdate({ naam: req.body.naam },{ voorkeur: "dislike" }).exec();
        const data = await restaurant.find({ voorkeur: "like" }).lean().exec();
        res.render("favorieten", { data: data });
    } catch {
        console.log("fout bij verwijderen");
    }
});

// Refresh de database
app.post("/refresh", async (req, res) => {
    try {
        await restaurant.updateMany({}, { voorkeur: "" }).lean().exec();
        const data = await restaurant.findOne({ voorkeur: "" }).lean().exec();
        res.render("home", { data: data });
    } catch {
        console.log("fout bij refreshen");
    }
});

app.use((req, res) => {
    res.status(404).send("404 page not found");
});

// Moet altijd onderaan blijven!
app.listen(PORT, function () {
    console.log("Port running on ", PORT);
});
