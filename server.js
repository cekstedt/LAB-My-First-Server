const express = require('express');
const app = express();
const port = 3000;

// Set what to serve when requests come in. "/" is root domain requests. (Eg: homepage, index.html, etc.)
app.get("/", function(request, response) {
  // normally use req and res for variables.
  response.send("Hello");
});

// Listen for incoming requests on PORT. Callback function fires when listening begins.
app.listen(port, function() {
  console.log("Server started on port " + port);
});
