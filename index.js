const firebaseConfig = {
 
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var food = getElementVal("food");
  var size = getElementVal("size");
  var roll = getElementVal("roll");

  saveMessages(name, email, food, size, roll);

  //   enable alert
  // document.querySelector(".alert").style.display = "block";

  //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  //   reset the form
  window.location.href = "thanks.html";
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, food, size, roll) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    food: food,
    size: size,
    roll: roll,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
