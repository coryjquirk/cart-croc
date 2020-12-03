const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const User = require("./models/User");
const Inventory = require("./models/Inventory");
const Receipt = require("./models/Receipt");

mongoose.connect('mongodb://localhost/cashCroc', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log("MongoDB connection established successfully")
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 
//   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   if( req.method === 'OPTIONS'){
//     req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
//   }
//   next();
// });

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);


app.get("/", (req, res) => {
    User.find((err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        } 
    })
})


app.post("/saveUser", (req, res) => {
console.log(req.body)
    const user = new User({
      userName: req.userName,
      password: req.password
    });
    user
    .save()
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// =============================================================
// =============================================================

// const app = express();
// const express = require("express");
// const cors = require("cors")
// const mongoose = require("mongoose")
// const PORT = 6969;
// const savedBooks = require("./models/SavedBooks");
// const Book = require("./models/SavedBooks");

// mongoose.connect('mongodb://127.0.0.1:27017/savedBooks', { useNewUrlParser: true })

// mongoose.connection.once('open', () => {
//     console.log("MongoDB connection established successfully")
// })

// app.get("/", (req, res) => {
//     savedBooks.find((err, books) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(books);
//         }
//     })
// })

// app.post("/save", (req, res) => {
//     const book = new Book(req.body);
//     book
//     .save()
//     .then((book) => {
//         res.json(book);
//     })
//     .chatc((err) => {
//         res.status(500).send(err.message);
//     });
// })

// app.use(cors())
// app.use(express.json())

// app.listen(PORT, () => {
//     console.log("Server is running on port: " + PORT)
// })