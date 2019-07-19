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

// Vampires.deleteMany({name:{$exists:true}}, (err, vampires)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(vampires)
//   }
// });
  // Vampires.collection.insertMany(vampArray, (err, vampires)=>{
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(vampires);
  //   }
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
// Vampires.find({},(err, vampires)=>{
// if(err)
// {
//  console.log(err);
// }
// else{
//   console.log(vampires);
// }
//
// });
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females
// Vampires.find({gender: 'f'}, (err, vampires)=>{
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampires);
//   }
// })
// have greater than 500 victims
// Vampires.find({},{name:1,victims:1,_id:0}, (err, vampires)=>{
//   if(err){
//     console.log(err)
//   } else{
//     console.log(vampires)
//   }
// }).where('victims').gt(500);
// have fewer than or equal to 150 victims
// Vampires.find({},{name:1,victims:1,_id:0}, (err, vampires)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(vampires)
//   }
// }).where('victims').lte(150);
// have a victim count is not equal to 210234
// Vampires.find({},{name:1,victims:1,_id:0}, (err, vampires)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(vampires)
//   }
// }).where('victims').ne(210234);
// have greater than 150 AND fewer than 500 victims
// Vampires.find({},{name:1,victims:1,_id:0}, (err, vampires)=>{
//   if(err){
//     console.log(err)
//   } else{
//     console.log(vampires)
//   }
// }).where('victims').gt(150).lt(500);
// Vampires.find({},{name:1, victims:1,_id:0}, (err, vampire)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log(vampire)
//   }
// }).where('victims').gt(2);
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// have a title property
// Vampires.find({ title : {$exists : true} }, (err, vampires)=>{
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(vampires);
//   }
//    mongoose.connection.close();
// });
// do not have a victims property
// Vampires.find({victims:{$exists:false}}, (err, vampires)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log(vampires);
//   }
// });
// have a title AND no victims
// Vampires.find({title:{$exists:true}, victims:{$exists:false}}, (err, vampires)=>{
//   if(err){
//     console.log(err);
//   } else{
//     console.log(vampires);
//   }
// })
// have victims AND the victims they have are greater than 1000
// Vampires.find({victims:{$exists:true}}, (err, vampires)=>{
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampires)
//   }
// }).where('victims').gt(1000);
// let query = Vampires.exists({gender: 'f'}, (err, vampires)=>{
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampires);
//   }
// })
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
