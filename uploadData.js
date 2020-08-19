//act as index.js

const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = 'csd-speedhub';
const databaseURL = "https://csd-speedhub.firebaseio.com"
firestoreService.initializeApp(serviceAccount, databaseURL, appName);

// Start exporting your data
firestoreService
  .backup('collection-name')
  .then((data) => console.log(JSON.stringify(data)));