//validacion formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const femail = form.elements["femail"].value;
  const fpassword = form.elements["fpassword"].value;
  const fname = form.elements["fname"].value;
  const fusername = form.elements["fusername"].value;

  if (!femail || !fpassword || !fname || !fusername) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido");
  } 
});

//crear funcion validateEmail(femail)
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}