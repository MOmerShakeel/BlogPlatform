const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB Connection
const uri = process.env.MONGO_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


//Routes
// const blogRoutes = require("./routes/blogRoutes");
// app.use("/api/blogs", blogRoutes);

//Starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));