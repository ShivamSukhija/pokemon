const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const auth = firebase.auth();
const email_signin = document.getElementById("email-signin");
const pass_signin = document.getElementById("pass-signin");
const username = document.getElementById("username-signup");
const email_signup = document.getElementById("email-signup");
const pass_signup = document.getElementById("email-signup");
const btn_signin = document.getElementById("botn-signin");
const btn_signup = document.getElementById("botn-signup");
const errorbox1 = document.getElementById("errorbox1");
const errorbox2 = document.getElementById("errorbox2");
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
btn_signin.addEventListener("click", (e) => {
  const email = email_signin.value;
  const pass = pass_signin.value;
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch((call) => {
    console.log(call.message);
    errorbox1.innerHTML = call.message;
  });
});
btn_signup.addEventListener("click", (e) => {
  const user = username.value;
  const email = email_signup.value;
  const pass = pass_signup.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(function (result) {
      return result.user.updateProfile({
        displayName: user,
      });
    })
    .catch(function (error) {
      console.log(error);
      errorbox2 = error;
    });
});

firebase.auth().onAuthStateChanged((firebaseuser) => {
  if (firebaseuser) {
    console.log(firebaseuser.uid);
    console.log("before");
    wait(3000);
    window.location = "/pokemon/user.html";
  } else {
    console.log("not logged in");
  }
});
