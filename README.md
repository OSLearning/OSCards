# OS Cards <img src="./img_src/yeti.png" alt="YetiCrab logo - half yeti, half crab" width=75 align=right>

## Overview

OS Cards is a flashcard based, open-source, learning aid application intended to provide options for targeting an individual's preferred learning style - i.e. visual, auditory, kinesthetic, etc.

<br>

![An infographic by "Integrated Learning Strategies" displaying learning styles -- Visual, Aural, Verbal, Physical, Logical, Social, and Solitary -- along with their descriptions](https://ilslearningcorner.com/wp-content/uploads/2016/02/learning-styles-infographic-header.jpg) 

<br><br>

## Installation

- Fork from this orginizational repository (should you be interested in contributing to this project) 
- Clone the repository to your local terminal and access the project from within your preferred IDE or code editor (e.g. VS Code, Atom, Sublime)
- Use the following commands to have node package manager install application dependencies and initialize the development server :

```bash
npm install 
npm run dev
```
<br>

## Contribution Guidelines

- Create your feature branch local to your terminal
```bash
git checkout -b feature/<name your feature>
```
- Commit your changes 
```bash
git commit -m 'feature branch description'
```
- Push to your Github repository 
```bash
git push origin feature/fooBar
```
- Create a new [Pull Request](https://github.com/OSLearning/OSCards/pulls)
<br><br>

## Notes to Prospective Contributors

### Front End Notes
- Component have their own independent sheets to implement styling
- Each Component also is routed to their associated index.js file
- We have implemented [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) into our styling
- All requests to our backend/database are through [Axios](https://github.com/axios/axios)
- To route between our pages, we used [React Routers](https://reactrouter.com/web/guides/quick-start)
- For reference to our use of 'this.props.location.state' refer to the [React Router docs](https://reactrouter.com/web/api/location)

### Front End Stretch Features
- Provide flashcard text-to-speech functionality: (refer to [Google text-to-speech API](https://any-api.com/googleapis_com/speech/docs/API_Description))
- Provide gifs/images in addition to text (here's one solution: [giphy-API](https://developers.giphy.com/docs/api#endpoint))
- Provide haptic touch response for mobile user interaction ([Here](https://developer.apple.com/design/human-interface-guidelines/ios/user-interaction/haptics/) and [here](https://medium.com/better-programming/adding-haptics-to-your-app-57439c358e8e) are some good readings on the topic)
- Provide [accelerometer response](https://developer.android.com/guide/topics/sensors/sensors_overview) for mobile user interaction
- Provide a more robust UX implementing additional styling and/or motion design features
- Provide delete and update functionality to the DECK component
- Provide a "quiz" style component rendering individual flashcards showing only term or definition; tap/click to flip; swipe to deal new card
- Create a social network of users to share saved decks
<br>
<hr>

### Back-End Features
- Predominant backend packages: [Express](https://expressjs.com/) and [Mongoose](https://mongoosejs.com/docs/)
- All persistent data is stored in a [Mongo DB Atlas](https://docs.mongodb.com/manual/introduction/) server
- Web page is connected to Mongo DB Atlas via a 'mongoURI'. *The existing 'mongoURI' is private and a new database cluster must be established in any future iterations of osCards.** 
- In the current iteration of OSCards, all data is stored in a single 'cards' collection; individual card documents are structured per the 'cardSchema'
- The server is comprised of a main server.js file that directs requests to the proper router; the router in turn directs these requests to the appropriate controller file
- The server is setup to handle: 
  - POST requests to create a new document in the MongoDB database
  - GET requests to retrieve data from MongoDB

### Back-End Stretch Features
- Provide [OAuth functionality](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- Enable users to 'copy' other users' existing decks
- Modify 'cardSchema' to allow non-text data to be stored in 'card' documents
- Handle PUT requests to modify the contents of an existing 'card' document
- Handle DELETE requests to delete a 'card' document from the 'cards' collection
- Handle DELETE and PUT requests to delete or modify a deck
- Restructure database to accommodate multiple users
- Serve deck data to the frontend as a doubly-linked-list to enable "quiz" mode. Doubly-linked-list data structure will enable forward and backward progression through a queue of cards
- Randomize the order of cards in "quiz" mode

## License

OS Cards is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html), also included in our repository in the COPYING file.
