function Login(){
    let user=document.getElementById("username").value
let pass=document.getElementById("password").value

let masage=document.getElementById("masage")

if(user==""||pass==""){
  masage.innerHTML="Ban chua nhap du thong tin"
  masage.style.color=red;
}
else{
  masage.innerHTML="Successfull"
  masage.color="blue"
}
}