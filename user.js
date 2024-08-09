const auth = firebase.auth();
window.onload = function () {
  const usera = document.getElementById("username");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var username = user.displayName;
      console.log(username);
      usera.append(username);
    } else {
      console.log("signed out");
      window.location = "/pokemon/login.html";
    }
  });
};
const btnlogout = document.getElementById("btnlogout");
btnlogout.addEventListener("click", (e) => {
  firebase.auth().signOut();
  window.location = "/pokemon/index.html";
});
