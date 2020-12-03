
// future development if I may use an API for some reason

export default {
  // Gets all posts
  // getUser: function() {
  //   return axios.get("/api/posts");
  // },
  
  // Gets All Users

  // TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
  // ======================================================================================================================
  // TODO: Figure out how to get this to return the thign its suppposed to return.
  // ======================================================================================================================


    // REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: REMINDER: 
  // ======================================================================================================================
  // REMINDER: : REMEMBER THAT HEROKU CAN"T USE LOCALHOST BRUH
  // ======================================================================================================================

  getAllUsers: function () {
    return fetch("/users").then(res => res.json())},


  getAllItems: function () {
    return fetch("/inventory").then(res => res.json())},


  // Deletes the post with the given id
//   deletePost: function(id) {
//     return axios.delete("/api/posts/" + id);
//   },

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


  // Saves a post to the database
  saveUser: function (user) {fetch("/saveUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })},

  saveItem: function (user) {fetch("/saveItem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })}
};