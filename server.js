const express = require("express");
const app = express();
const port = 3000;

// Set what to serve when requests come in. "/" is root domain requests. (Eg: homepage, index.html, etc.)
app.get("/", function(req, res) {
  res.send(
    `<h1>Hello world!</h1>
     <p><a href="/contact">contact me</a></p>
     <p><a href="/about">about me</a></p>
     <p><a href="/hobbies">my hobbies</a></p>
     `
  );
});

// Serve different content based on "/contact" route.
app.get("/contact", function(req, res) {
  res.send("<p>Contact me at: example@gmail.com</p>");
});

app.get("/about", function(req, res) {
  res.send(
    `<h1>Ever seen a man eat his own weight in chili dogs?</h1>
     <img alt="robbie rotten would you like to"
      data-src="https://i.kym-cdn.com/entries/icons/mobile/000/036/654/Screen_Shot_2021-03-12_at_1.47.58_PM.jpg"
      src="https://i.kym-cdn.com/entries/icons/mobile/000/036/654/Screen_Shot_2021-03-12_at_1.47.58_PM.jpg"
      title="Would You Like To?">
      `
  );
});

app.get("/hobbies", function(req, res) {
  res.send("<p>Kicking bubble gum and eating ass.</p>");
});

// Listen for incoming requests on PORT. Callback function fires when listening begins.
app.listen(port, function() {
  console.log("Server started on port " + port);
});
