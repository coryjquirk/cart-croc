const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// const port = process.env.PORT || 5000;

// const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
// const app = express();
const User = require("./models/User");
const InventoryItem = require("./models/InventoryItem");
const CartItem = require("./models/Cart");
const Order = require("./models/OrderHistory");

// const Receipt = require("./models/Receipt");
const userController = require("./controllers/userController");
require ("dotenv").config();
// console.log(process.env.mysecret)
// passport???
var session = require("express-session");
// Requiring passport as we've configured it
// var passport = require("./config/passport");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cashCroc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.pluralize(null);

// var bodyParser = require("body-parser");
const { Inventory } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// passport????
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//===================================================================
// User DB routes

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

//===================================================================
// Inventory DB routes

app.get("/getItem/:id", (req, res) => {
  const id = req.params.id;
  InventoryItem.findById(id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});


app.get("/getItemName/:name", (req, res) => {
  const name = req.params.name;
  InventoryItem.findOne({ itemName: name }, function (err, inventoryItem) {
    if (err) {
      console.log(err);
    } else {
      console.log("SEARCH BY NAME RESULTS", inventoryItem)
      res.json(inventoryItem);
    }
  })
});

app.use("/", userController)

app.get("/inventory", (req, res) => {
  InventoryItem.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

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
        .status(404)
        .send("Item not found, something likely went wrong on our end.");
    } else {
      if (req.body.itemName) {
        item.itemName = req.body.itemName;
      }
      if (req.body.description) {
        item.description = req.body.description;
      }
      if (req.body.price) {
        item.price = req.body.price;
      }
      if (req.body.quantity) {
        item.quantity = req.body.quantity;
      }
      item
        .save()
        .then((item) => {
          console.log(item);
          res.json(item);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

//===================================================================
// Cart DB routes

app.get("/cartItem/:id", (req, res) => {
  const id = req.params.id;
  CartItem.findById(id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/cart", (req, res) => {
  CartItem.find((err, cartItems) => {
    if (err) {
      console.log(err);
    } else {
      res.json(cartItems);
    }
  });
});

app.post("/saveCartItem", (req, res) => {
  const cartItem = new CartItem({
    username: req.body.username,
    itemName: req.body.itemName,
    price: req.body.price,
    description: req.body.description,
    sellQuantity: req.body.cartQuantity,
    inventoryQuantity: req.body.inventoryQuantity
  });
  cartItem
    .save()
    .then((cartItem) => {
      res.json(cartItem);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/updateCartItem/:id", (req, res) => {
  let id = req.params.id;
  CartItem.findById(id, (err, item) => {
    if (!item) {
      res
        .status(404)
        .send("Item not found, something likely went wrong on our end.");
    } else {
      (item.sellQuantity = req.body.sellQuantity),
        item
          .save()
          .then((item) => {
            res.json(item);
          })

          .catch((err) =>
            res.status(500).send("Error message :" + err.message)
          );
    }
  });
});

app.delete("/deleteCartItem/:id", (req, res) => {
  let id = req.params.id;
  console.log("THE ID WE IS GETTING IS AS FOLLOWS");
  console.log(id);
  CartItem.findByIdAndDelete(id, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });
});

// =============================================================
// Order History DB routing

app.get("/cartItem/:id", (req, res) => {
  const id = req.params.id;
  CartItem.findById(id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/orders", (req, res) => {
  Order.find((err, orderHistory) => {
    if (err) {
      console.log(err);
    } else {
      res.json(orderHistory);
    }
  });
});

app.post("/saveOrder", (req, res) => {
  const order = new Order({

    // PASSPORT WILL = req.user.username
    username: "Placeholder Username",
    order: req.body,
    orderDate: Date.now()
  });

  order
    .save()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/updateCartItem/:id", (req, res) => {
  let id = req.params.id;
  CartItem.findById(id, (err, item) => {
    if (!item) {
      res
        .status(404)
        .send("Item not found, something likely went wrong on our end.");
    } else {
      (item.sellQuantity = req.body.sellQuantity),
        item
          .save()
          .then((item) => {
            res.json(item);
          })
          .catch((err) =>
            res.status(500).send("Error message :" + err.message)
          );
    }
  });
});

app.delete("/deleteCartItem/:id", (req, res) => {
  let id = req.params.id;
  console.log("THE ID WE IS GETTING IS AS FOLLOWS");
  console.log(id);
  CartItem.findByIdAndDelete(id, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
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
