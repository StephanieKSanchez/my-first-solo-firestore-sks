import { booksCollection } from "./connectDb.js"

// delete UL735O5Uzdm3KaWujJJt
booksCollection.doc('UL735O5Uzdm3KaWujJJt').delete()
  .then(res => console.log('Success deleting UL735O5Uzdm3KaWujJJt!!'))
  .catch(err => console.error('Error deleting UL735O5Uzdm3KaWujJJt: ', err))