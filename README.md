# PickUp
## Welcome to PickUp!
Pickup is an app setup and view other pickup games in the area. Currently, the app only works in Austin but ideally will work depending on the users location. The app is developed with React, Redux, runs on a Node.js server, and stores data in a MongoDB database.

## [You can view the live app here](http://react-sports.herokuapp.com/)

## How it works?
Currently, the app allows for any user to come in and create an application (The app does allow for authentication but for demo purposes, the lack of authentication doesn't prevent someone from creating an event). The database will then go in and purge the events once their start time has happened. The purpose it to make the events very spur of the moment and allow users to join events on the fly. 

## Future releases
* Fully build out authentication. That is, create a more fledged 'user profile', ability to join games from the app, and see what games they have coming up or played in the past.
* Rebuild the weather component to house a live chat feature.
* Convert application to React Native.