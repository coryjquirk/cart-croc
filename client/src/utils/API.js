
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

  getAllUsers: function () {fetch("http://localhost:3001/").then(res => res.json)},

  // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },

  
  // Saves a post to the database
  saveUser: function (user) {fetch("http://localhost:3001/saveUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })}
};