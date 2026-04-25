const form = document.getElementById("myForm2");

const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const dob = document.getElementById("dob");
const parentMobile = document.getElementById("parentMobile");
const course = document.getElementById("course");
const address = document.getElementById("address");
const message = document.getElementById("formMessage2");

// Regex
const nameRegex = /^[A-Za-z ]+$/;
const mobileRegex = /^[0-9]{10}$/;
const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Validation functions
function validateName() {
  if (!nameRegex.test(name.value)) {
    nameError.style.display = "block";
    name.classList.add("error");
    return false;
  }
  nameError.style.display = "none";
  name.classList.remove("error");
  return true;
}

function validateEmail() {
  if (!emailRegex.test(email.value)) {
    emailError.style.display = "block";
    return false;
  }
  emailError.style.display = "none";
  return true;
}

function validateMobile() {
  if (!mobileRegex.test(mobile.value)) {
    mobileError.style.display = "block";
    return false;
  }
  mobileError.style.display = "none";
  return true;
}
function validateParentMobile() {
  if (!mobileRegex.test(parentMobile.value)) {
    parentMobileError.style.display = "block";
    return false;
  }
  parentMobileError.style.display = "none";
  return true;
}

function validateRadio(nameAttr, errorId) {
  const selected = document.querySelector(`input[name="${nameAttr}"]:checked`);
  if (!selected) {
    document.getElementById(errorId).style.display = "block";
    return false;
  }
  document.getElementById(errorId).style.display = "none";
  return true;
}

function validateDOB() {
  if (!dob.value) {
    dobError.style.display = "block";
    return false;
  }
  dobError.style.display = "none";
  return true;
}

function validateCourse() {
  if (course.value === "") {
    courseError.style.display = "block";
    return false;
  }
  courseError.style.display = "none";
  return true;
}

function validateAddress() {
  if (address.value.trim() === "") {
    addressError.style.display = "block";
    return false;
  }
  addressError.style.display = "none";
  return true;
}

// Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateName() &&
    validateEmail() &&
    validateMobile() &&
    validateRadio("gender", "genderError") &&
    validateRadio("nation", "nationError") &&
    validateDOB() &&
    validateMobile(parentMobile) &&
    validateCourse() &&
    validateAddress();

  if (isValid) {
    message.style.display = "block";
    message.style.color = "green";
    message.innerText = "Form submitted successfully ✅";

    form.reset();

    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
  }
});