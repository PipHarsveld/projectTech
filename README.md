# :heart:Dinder:fork_and_knife:
Dinder, the app where Tinder and Dinner come together! Dinder is a matching application where users can match with restaurants. Users can create an account, fill in their preferences and set filters. Then the app shows a list of restaurants that meet the user's wishes and the user can start swiping the cards left and right. All restaurants that the user swiped to the right will appear in the favorites list, where the user can chat with the restaurant or place a reservation immediately.

## :sparkles:Features
I have chosen to focus on the functionality where the user can swipe the cards and save the favorites in a favorites list.
|Features|
|:-------|
|Swipe left and right on cards|
|Save the liked cards in favorites list|
|Start all over with swiping|
|Remove cards from favorites list|


## :rocket:Install and Run the project
To use Dinder, you will have to clone this repo. You can do this by typing the following command in your terminal:
```
git clone https://github.com/PipHarsveld/projectTech
```

The next step is to install the corresponding npm packages with the following command:
```
npm install
```

This project uses a MongoDB database. Unfortunately it is not possible to use my database, but it is quite easy to arrange this yourself. You can create an account at [MongoDB](https://www.mongodb.com/cloud/atlas/register) and then you can create a database there. Then you can create an .env file in your code editor and put the following line in it:
```
MONGO_URI=Link to your own database
```

You have now linked Dinder to your own database! All you have to do now is fill the database with restaurants. You can find more information about this at the [database structure](https://github.com/PipHarsveld/projectTech/wiki/database-structure) page in my wiki.

The only thing left to do is run the application with:
```
npm start
```

Congrats, you are now all set! Go to localhost:3000 in your browser and enjoy using Dinder!


## :busts_in_silhouette:Contribute
If you have any questions or suggestions, please contact me! You can do this by creating an [issue](https://github.com/PipHarsveld/projectTech/issues), and I'll answer you as fast as I can :)

## :memo:Documentation
For further documentation, see the [wiki](https://github.com/PipHarsveld/projectTech/wiki) of this repository

## :technologist:Author
This project is designed and created by [Pip Harsveld](https://github.com/PipHarsveld).

## :page_facing_up:License
Copyright © 2022 Pip Harsveld.<br>
This project is [MIT](https://github.com/PipHarsveld/projectTech/blob/main/LICENSE) licensed.
