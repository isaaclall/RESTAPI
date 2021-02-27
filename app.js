const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

//import routes

const postsRoute = require("./routes/posts")

// middleware for router

//middleware for server communication

app.use(cors())

app.use(bodyParser.json())

app.use("/posts", postsRoute)

//Creating routes

app.get("/", (req, res) => {
  res.send("AT HOME BOIS")
})

// Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },

  () => {
    console.log("connected to DB")
  }
)

//Listening to the server
app.listen(3000)
