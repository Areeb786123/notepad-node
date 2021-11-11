const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
require("dotenv").config();

// mongoose.connect("mongodb+srv://areeb:786@Areeb@cluster0.j9rus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",() =>{
//     console.log('db.connected')
// })

// connection to mongoose
mongoose.connect(
  `mongodb+srv://${process.env.DBURIPASS}@cluster0.j9rus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log("connected 😊");
  }
);

app.use(express.json());
require("./model.js");

app.use(require("./home.js"));

app.listen(PORT, () => {
  console.log("Listening to : " + PORT);
});
