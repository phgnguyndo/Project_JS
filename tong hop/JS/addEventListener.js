var input=document.getElementById("inp")

input.addEventListener("keyup", function(){
    document.getElementById("out").innerHTML=input.value
})

input.addEventListener('keyup', function(){
    if(input.value.length>5)
       alert("ahihi")
})