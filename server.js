const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const User = require("./models/User");
const InventoryItem = require("./models/InventoryItem");
const Receipt = require("./models/Receipt");
require("dotenv").config();
// console.log(process.env.mysecret)

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cashCroc",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
mongoose.connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.pluralize(null);

var bodyParser = require("body-parser");
const { Inventory } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

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
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  InventoryItem.findById(id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/users", (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

app.post("/saveUser", (req, res) => {
  const user = new User({
    username: req.body.userName,
    password: req.body.password,
  });
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/inventory", (req, res) => {
  InventoryItem.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// app.get("/:id", (req, res) => {
//   const id = req.params.id;
//   Todo.findById(id, (err, todo) => {
//     res.json(todo);
//   });
// });

app.post("/saveItem", (req, res) => {
  const inventoryItem = new InventoryItem({
    itemName: req.body.itemName,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
  });
  inventoryItem
    .save()
    .then((inventoryItem) => {
      res.json(inventoryItem);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/updateItem/:id", (req, res) => {
  let id = req.params.id;
  InventoryItem.findById(id, (err, item) => {
    if (!item) {
      res
        .status(401)
        .send("Item not found, something likely went wrong on our end.");
    } else {
      (item.itemName = req.body.itemName),
        (item.price = req.body.price),
        (item.description = req.body.description),
        (item.quantity = req.body.quantity);
      item
        .save()
        .then((item) => {
          res.json(item);
        })
        .catch((err) => res.status(500).send("I hate bologna" + err.message));
    }
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
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
