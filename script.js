function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const size = document.getElementById("size").value;
  const agree = document.getElementById("agree").checked;

  if (name === "" || email === "") {
    alert("Name and Email are required.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email.");
    return false;
  }

  if (size === "") {
    alert("Please select a size.");
    return false;
  }

  if (!agree) {
    alert("You must agree to the terms.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
