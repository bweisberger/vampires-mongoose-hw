// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampires = require('./models/vampire');
const vampArray = require('./populateVampires.js');
// 3. Connect your database and collection name
connectionString = 'mongodb://localhost/vampires';
mongoose.connect(connectionString, {userNewUrlParser: true});
// 4. Open your mongoose connection
mongoose.connection.on('connected', ()=>{
  console.log('connected on ', connectionString);
})

mongoose.connection.on('disconnected', ()=>{
  console.log('disconnected on ', connectionString);
})

mongoose.connection.on('error', (err)=>{
  console.log('error: ', err);
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// vampArray.forEach(function(vampire, index){
//
//   Vampires.create(vampire, (err, vampire)=>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vampire);
//     }
//   })
// });

// ### Add some new vampire data
// Vampires.create({name: 'Jimmy'}, (err, vampire)=>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampires.find({},{name:1, victims:1,_id:0}, (err, vampire)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log(vampire)
//   }
// }).where('victims').gt(2);
/////////////////////////////////////////////////
// ### Select by exists or does not exist
let query = Vampires.exists({gender: 'f'}, (err, vampires)=>{
  if (err){
    console.log(err);
  } else {
    console.log(vampires);
  }
})
/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
