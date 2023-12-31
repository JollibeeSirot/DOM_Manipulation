const registerPage = document.createElement("section");
registerPage.id = "register";
let users = [
  {
    firstname: "Jhon Doe",
    lastname: "Crux",
    email: "johndoe@gmail.com",
    password: "password",
  },
];

const registrationForm = () => {
  const firstname = document.createElement("input");
  const lastname = document.createElement("input");
  const email = document.createElement("input");
  const password = document.createElement("input");
  const confirmPassword = document.createElement("input");
  const submitButton = document.createElement("input");
  const form = document.createElement("form");

  const labelEmail = document.createElement("label");
  const labelFirstname = document.createElement("label");
  const labelLastname = document.createElement("label");
  const labelPassword = document.createElement("label");
  const labelConfirmPassword = document.createElement("label");

  labelEmail.innerText = "Email: ";
  labelEmail.setAttribute("for", "email");
  labelFirstname.innerText = "Firstname: ";
  labelFirstname.setAttribute("for", "firstname");
  labelLastname.innerText = "Lastname:";
  labelLastname.setAttribute("for", "lastname");
  labelPassword.innerText = "Password:";
  labelPassword.setAttribute("for", "password");
  labelConfirmPassword.innerText = "Confirm Password:";
  labelConfirmPassword.setAttribute("for", "confirmPassword");
  form.method = "POST";

  firstname.type = "firstname";
  firstname.name = "firstname";
  lastname.type = "lastname";
  lastname.name = "lastname";
  email.type = "email";
  email.name = "email";
  password.type = "password";
  password.name = "password";
  confirmPassword.type = "password";
  confirmPassword.name = "confirmPassword";
  submitButton.type = "submit";

  form.appendChild(labelEmail);
  form.appendChild(email);
  form.appendChild(labelFirstname);
  form.appendChild(firstname);
  form.appendChild(labelLastname);
  form.appendChild(lastname);
  form.appendChild(labelPassword);
  form.appendChild(password);
  form.appendChild(labelConfirmPassword);
  form.appendChild(confirmPassword);
  form.appendChild(submitButton);
  registerPage.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    registerUser();
  });

  return form;
};

registerPage.appendChild(registrationForm());

const validateUser = (user) => {
  if (user.email === "" || user.firstname === "" || user.lastname === "" || user.password === "" || user.confirmPassword === ""){
    alert("Some fields are empty.");
    return false;
  }
  if (user.password !== user.confirmPassword){
    alert("Password does not match Confirm Password.");
    return false;
  }
  return true;
};

const registerUser = () => {
  const email = document.querySelector("[name='email']")
  const firstname = document.querySelector("[name='firstname']")
  const lastname = document.querySelector("[name='lastname']")
  const password = document.querySelector("[name='password']")
  const confirmPassword = document.querySelector("[name='confirmPassword']")

const user = {
    email: email.value,
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  }
  if (validateUser(user))
  {
    users.push(user);
    alert('Registered Succesfully');
  }
};

export { users, registrationForm, registerPage, validateUser, registerUser };
