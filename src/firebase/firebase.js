import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();



export { firebase, database as default };

// child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });



// child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });



// child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });







// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childsnapshot) => {
//     expenses.push({
//       id: childsnapshot.key,
//       ...childsnapshot
//     });
//   });

//   console.log(expenses);
// });





// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childsnapshot) => {
//     expenses.push({
//       id: childsnapshot.key,
//       ...childsnapshot
//     });
//   });

//   console.log(expenses);
// });







// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 109000,
//   createdAt: 678967898
// });


// Adds to database. Uses promises.

// database.ref().set({
//     name: 'Tyrone',
//     age: 26,
//     isSingle: true,
//     location: {
//       city: "Lagos",
//       country: "Nigeria"
//     }
// }).then((data) => {
//   console.log('Saved new db file');
// }).catch(() => {
//   console.log('An error occurred');
// });

// .update updates data

// removes this key value pair from the database. Also uses promises.

// database.ref('isSingle').remove();


// Reads from the database once. It's not subscribed.

// database.ref('lovation/city').once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
// console.log('An error occurred:', e);
// });


// Reads from the database and subscribes for changes

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (error) => {
//   console.log('an error occurred', error);
// });