export default {
  // ======================================================================================================================
  // TODO: Have a good one bro
  // ======================================================================================================================


  // REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: 
  // ======================================================================================================================
  // REMINDER: : REMEMBER THAT HEROKU CAN"T USE LOCALHOST BRUH
  // which is why the fetch uses just "/" routing instead of localhost:3000/
  // ======================================================================================================================

  getAllUsers: function () {
    return fetch("/users").then(res => res.json())
  },

  saveUser: function (user) {
    fetch("/saveUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  },

  saveItem: function (user) {
    fetch("/saveItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  },

  updateItem: function (itemData, id) {
    fetch(`/updateItem/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData)
    }).then(res => res.json());
  },

  getAllItems: function () {
    return fetch("/inventory").then(res => res.json())
  },

  getItem: function (id) {
    return fetch(`/edit/${id}`).then(res => res.json()
    ).catch((error) => {
      console.log(error);
    })
  },

  //===================================================================
  // Cart API routes

  getCartItem: function (id) {
    return fetch(`/cartEdit/${id}`).then(res => res.json()
    ).catch((error) => {
      console.log(error);
    })
  },

  saveCartItem: function (user) {
    console.log(user);
    fetch("/saveCartItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  },

  updateCartItem: function (itemData, id) {
    fetch(`/updateCartItem/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData)
    }).then(res => res.json());
  },

  getAllCartItems: function () {
    return fetch("/cart").then(res => res.json())
  },

  // Deletes the post with the given id
  // deleteCartItem: function(id) {
  //   console.log(id);
  //   return fetch("/deleteCartItem/"+ id).then(res => res.json())
  // },

  deleteCartItem: function (id) {
    fetch('/deleteCartItem/' + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
  },



};








  // updateItem: function (id) {
  //   fetch(`/updateItem/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify()
  //   })
  // },

  // updateItem: function () {
  //   fetch("/api/workouts/:id", (req, res) => {
  //     Inven
  //   })
  // }
  //   ("/api/workouts/:id", (req, res) => {
  //   Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { useFindAndModify: false })
  //     .then((data) => {
  //       res.json(data);
  //     }).catch((err) => {
  //       res.json(err);
  //     });
  // });



  //   deleteMethod: {
  //     method: 'DELETE', // Method itself
  //     headers: {
  //      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
  //     },
  //     // No need to have body, because we don't send nothing to the server.
  //    }
  //    // Make the HTTP Delete call using fetch api
  //    fetch(url, deleteMethod) 
  //    .then(response => response.json())
  //    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
  //    .catch(err => console.log(err)) // Do something with the error

  //    deleteUser: function (user) {fetch("/saveUser", {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   })}
  // };
