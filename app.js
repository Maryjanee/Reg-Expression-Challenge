const check = (reg, el) => {
  if (!reg.test(el.value)) {
    el.classList.add("invalid");
    el.nextElementSibling.style.display = "block";
  } else {
    el.nextElementSibling.style.display = "none";
    el.classList.remove("invalid");
  }
};

const validateName = () => {
  const name = document.querySelector("#name");
  const regName = /^[a-zA-Z]{2,20}$/;
  check(regName, name);
};
const validateZip = () => {
  const zip = document.querySelector("#zip");
  const regZip = /^[0-9]{5}(-[0-9]{4})?$/;
  check(regZip, zip);
};
const validateEmail = () => {
  const email = document.querySelector("#email");
  const regEmail = /^[a-zA-Z]{2,20}$/;
  check(regEmail, email);
};
const validatePhone = () => {
  const phone = document.querySelector("#name");
  const regPhone = /^(+[0-9]){2,4}[ ,-]?[0-9]){2,4}[ ,-]?[0-9]){2,4}$/;
  check(regPhone, phone);
};

document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zip").addEventListener("blur", validateZip);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);
