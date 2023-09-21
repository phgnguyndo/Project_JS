function myFunction() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let re_pass = document.getElementById("re_pass").value;

  if (user == "") {
    alert("Ban chua nhap user!");
    return false;
  }
  if (pass == "") {
    alert("Ban chua nhap user!");
    return false;
  }
  if (re_pass != pass) {
    alert("pass khac re_pass");
    return false;
  }
  else
     alert("Dang nhap thanh cong!")
  return true;
}
