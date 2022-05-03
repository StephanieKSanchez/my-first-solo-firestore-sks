
const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

const book = {
    title: 'Coding for Dummies',
    author: 'Nikhil Abraham',
    genre: 'Reference Work',
    rating: 3.7
}

db.collection('books').add(book)
.then(doc => console.log('Created book', doc.id))
.catch(err => console.error(err))