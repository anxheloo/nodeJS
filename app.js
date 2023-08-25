//1. GET INPUT
const readline = require("readline"); //We get the module
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your name: ", (name) => {
  console.log("You entered: " + name);
  rl.close();
});

rl.on("close", () => {
  console.log("Interface closed");
  process.exit(0);
});

*/

//====================================================================================================================

//2. WORK WITH FILE SYSTEM
const fs = require("fs"); // We get the module - fileSystem
/*
let textIn = fs.readFileSync("./Files/input.txt", "utf-8");
console.log(textIn);

let content = `Data read from input.txt: ${textIn} \nDate created ${new Date()}`;
fs.writeFileSync("./Files/output.txt", content);
*/

//====================================================================================================================

//3. Read file asynchronously
/*
fs.readFile("./Files/start.txt", "utf-8", (error1, data1) => {
  console.log(data1);
  fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
    console.log(data2);
    fs.readFile("./Files/append.txt", "utf-8", (error3, data3) => {
      console.log(data3);
      fs.writeFile(
        "./Files/output.txt",
        `${data2}\n\n${data3}\n\nDate created ${new Date()}`,
        () => {
          console.log("File writen successfully");
        }
      );
    });
  });
});

console.log("Reading file....");
*/

//====================================================================================================================

//4. CREATING A SIMPLE WEB SERVER
const http = require("http");
const url = require("url");
/*
const replaceHtml = require("./Modules/replaceHtml");

//we use the fs module we imported in exercise 2 to read the file and use it in our server as a response
const html = fs.readFileSync("./Template/index.html", "utf-8");

//parsing JSON data to JavaScript Object
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"));

const productListHtml = fs.readFileSync(
  "./Template/product-list.html",
  "utf-8"
);

const productDetailHtml = fs.readFileSync(
  "./Template/product-details.html",
  "utf-8"
);

// function replaceHtml(template, product) {

//   let output = template.replace("{{%IMAGE%}}", product.productImage);
//   output = output.replace("{{%NAME%}}", product.name);
//   output = output.replace("{{%MODELNAME%}}", product.modeName);
//   output = output.replace("{{%MODELNUMBER%}}", product.modelNumber);
//   output = output.replace("{{%SIZE%}}", product.size);
//   output = output.replace("{{%CAMERA%}}", product.camera);
//   output = output.replace("{{%PRICE%}}", product.price);
//   output = output.replace("{{%COLOR%}}", product.color);
//   output = output.replace("{{%ID%}}", product.id);
//   output = output.replace("{{%ROM%}}", product.ROM);
//   output = output.replace("{{%DESC%}}", product.Description);

//   return output;
// }

//step 1- create the server
// const server = http.createServer((request, response) => {
//   let { pathname: path, query } = url.parse(request.url, true); // making it true, this parses the strings from url : ?id=10&name=iphone
//   console.log("THIS IS QUERY", query);
//   console.log("THIS IS PATHNAME", path);

//   if (path === "/" || path.toLocaleLowerCase() === "/home") {
//     //we can write the header, also add custom properties like "my-header"
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hellow, world!",
//     }); //-> this should always comes first, before response.end()
//     response.end(html.replace("{{%CONTENT%}}", "Welcome to Home page"));
//   } else if (path.toLocaleLowerCase() === "/about") {
//     response.writeHead(200);
//     response.end(html.replace("{{%CONTENT%}}", "Welcome to About page"));
//   } else if (path.toLocaleLowerCase() === "/contact") {
//     response.writeHead(200);
//     response.end(html.replace("{{%CONTENT%}}", "Welcome to contact page"));
//   } else if (path.toLocaleLowerCase() === "/products") {
//     if (!query.id) {
//       let productHtmlArray = products.map((prod) => {
//         return replaceHtml(productListHtml, prod);
//       });

//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.end(html.replace("{{%CONTENT%}}", productHtmlArray.join(",")));
//     } else {
//       let prod = products[query.id];
//       let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//       response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
//     }
//   } else {
//     response.writeHead(404);
//     response.end("Page not found");
//   }
// });

const server = http.createServer();

// instead of passing (request, response) => as a callback function to createServer(), we listen to "request"
server.on("request", (request, response) => {
  let { pathname: path, query } = url.parse(request.url, true); // making it true, this parses the strings from url : ?id=10&name=iphone
  console.log("THIS IS QUERY", query);
  console.log("THIS IS PATHNAME", path);

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    //we can write the header, also add custom properties like "my-header"
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hellow, world!",
    }); //-> this should always comes first, before response.end()
    response.end(html.replace("{{%CONTENT%}}", "Welcome to Home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200);
    response.end(html.replace("{{%CONTENT%}}", "Welcome to About page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.writeHead(200);
    response.end(html.replace("{{%CONTENT%}}", "Welcome to contact page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let productHtmlArray = products.map((prod) => {
        return replaceHtml(productListHtml, prod);
      });

      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(html.replace("{{%CONTENT%}}", productHtmlArray.join(",")));
    } else {
      let prod = products[query.id];
      let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
      response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
    }
  } else {
    response.writeHead(404);
    response.end("Page not found");
  }
});

//step 2 - start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started!");
});

//  */

//====================================================================================================================

// WORKING WITH CUSTOM EVENTS

/*
const events = require("events");
const user = require("./Modules/user");

let myEmitter = new user();

myEmitter.on("userCreate", (id, name) => {
  console.log(`a new user with id ${id} & name: ${name} is created`);
});

myEmitter.emit("userCreate", 101, "Anxhelo ");
*/

//====================================================================================================================

const server = http.createServer();

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started!");
});

// SOLUTION 1
// this approach may cvrash our app cuz we are dealing with huge amounts of data,
// the server stores them in data variable than send as response. We dont use this way in production

// server.on("request", (req, res) => {
//   fs.readFile("./Files/large-file.txt", (err, data) => {
//     if (err) {
//       res.end("Something went wrong");
//       return;
//     }
//     res.end(data);
//   });
// });

// SOLUTION 2
server.on("request", (req, res) => {
  let readableStream = fs.createReadStream("./Files/large-file.txt");

  readableStream.on("data", (chunkOfData) => {
    res.write(chunkOfData);
    res.end();
  });

  readableStream.on("error", (error) => {
    res.end(error.message);
  });
});
