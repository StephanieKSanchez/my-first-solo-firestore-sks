import { booksCollection } from './connectDb.js' // creates object I want to add to the database

const book = {
    title: 'Coding for Dummies',
    author: 'Nikhil Abraham',
    genre: 'Reference Work',
    rating: 3.7
}
booksCollection.add(book) // adding book to my books collection
.then(doc => console.log('Created book', doc.id)) // handle resolve
.catch(err => console.error(err)) // handle reject

const book2 = {
    title: 'Professional Troublemaker',
    author: 'Luvvie Ajayi',
    genre: 'Self-help',
    rating: 4.1
}
booksCollection.add(book2)
.then(doc => console.log('Created book', doc.id))
.catch(err => console.error(err)) 