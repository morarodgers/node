const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
// Number guessing game
let item = "Enter something below.";
let randNum = Math.floor(Math.random() * 100) + 1;
let guessRes = "";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const numGuess = (guess) => {
  const guessParsed = parseInt(guess);
  if (isNaN(guessParsed)) {
    guessRes = "Wrong input. It must be an integer";
  } else if (guessParsed < randNum) {
    guessRes = "Your guess is too low";
  } else if (guessParsed > randNum) {
    guessRes = "Your guess is too high";
  } else {
    guessRes = "Well done! You got it right";
  }
};

const form = () => {
  return `
  <body>
  <p>${item}</p>
  <p></p>
  <form method="POST">
  <input name="item" id="num1"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      console.log("Hey there");
      // here, you can add your own logic
      if (body["item"]) {
        item = body["item"];
      }
      if (body["guess"]) {
        numGuess(body["guess"]);
      } else {
        guessRes = "You have not entered any value";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on('request', (req) => {
  console.log("event received: ", req.method, req.url)
})
server.listen(3000);
console.log("The server is listening on port 3000.");
