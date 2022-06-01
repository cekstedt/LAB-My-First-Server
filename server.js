const express = require('express');
const app = express();
const port = 3000;

// Set what to serve when requests come in. "/" is root domain requests. (Eg: homepage, index.html, etc.)
app.get("/", function(req, res) {
  res.send("<h1>Hello world!</h1>");
});

// Serve different content based on "/contact" route.
app.get("/contact", function(req, res) {
  res.send("Contact me at: example@gmail.com");
});

app.get("/about", function(req, res) {
  res.send('Ever seen a man eat his own weight in chili dogs?<br><img alt="robbie rotten would you like to" data-src="https://i.kym-cdn.com/entries/icons/mobile/000/036/654/Screen_Shot_2021-03-12_at_1.47.58_PM.jpg" src="https://i.kym-cdn.com/entries/icons/mobile/000/036/654/Screen_Shot_2021-03-12_at_1.47.58_PM.jpg" title="Would You Like To?">');
});

app.get("/hobbies", function(req, res) {
  res.send("Kicking bubble gum and eating ass.");
});

// Listen for incoming requests on PORT. Callback function fires when listening begins.
app.listen(port, function() {
  console.log("Server started on port " + port);
});
