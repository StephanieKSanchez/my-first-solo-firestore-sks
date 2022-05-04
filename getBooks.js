import { booksCollection } from './connectDb.js'

// restaurantsCol.get() // get ALL restaurants
//   .then(snapshot => {
//     // loop through all results
//     snapshot.docs.forEach(doc => console.log(doc.data()))
//   })
//   .catch(console.error)

booksCollection
  // .where('rating', '>=', 4.0)
  .where('rating', '>=', 4.0)
  .get()
  .then(snapshot => {
    // loop through all results
    snapshot.docs.forEach(doc => console.log(doc.data()))
  })
  .catch(console.error)