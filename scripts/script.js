const form = document.getElementById("my-form");
    
async function handleSubmit(e) {
  e.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for keeping in touch!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "OOP– Let's try that again!"
  });
}
form.addEventListener("submit", handleSubmit)