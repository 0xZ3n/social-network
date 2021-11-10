//this code is from module 18 lessons 
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(require("./routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizza-hunt", {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Logs that mongo queries have been executed
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`)); 