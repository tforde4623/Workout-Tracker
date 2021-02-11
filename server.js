// required modules
const express = require('express');
const mongoose = require('mongoose');

// set up port for local or env variable for deployment
const PORT = process.env.PORT || 8080;

// setup express server var
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// setup connection to mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

// mongodb+srv://workout-app-admin:JkdxvvE7yzXz5lrf@cluster0.xvq6e.mongodb.net/workout?retryWrites=true&w=majority