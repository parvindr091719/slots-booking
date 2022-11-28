const { getElementById } = require("domutils");  
const { closeSync } = require("fs");
function btn(){
 localStorage.setItem("user", "alumi");
 localStorage.setItem("password", "alumi");
 localStorage.setItem("user1", "student1");
 localStorage.setItem("password1", "student1");
 localStorage.setItem("user2", "student2");
 localStorage.setItem("password2", "student2");
 const user=document.getElementById("user").value;
 const password=document.getElementById("password").value;
 if(user==localStorage.getItem("user")){
    if(password==localStorage.getItem("password")){
        document.location="alumi.html";
    }else{
        alert("please enter correct password")
    }
 }else if(user==localStorage.getItem("user1")){
    if(password==localStorage.getItem("password1")){
        document.location="student1.html";
    }else{
        alert("please enter correct password")
    }
 }else if(user==localStorage.getItem("user2")){
    if(password==localStorage.getItem("password2")){
        document.location="student2.html";
    }else{
        alert("please enter correct password")
    }
 }else{
    alert("please enter correct user name");
 }
}
function reset() {
    document.getElementsByClassName('butTime').style.backgroundColor = "white";
 }
function find(){
    const date = document.getElementsByClassName("slots").value
    let time 
    document.getElementsByClassName("butTime").addEventListener("click", function(){
       time = document.getElementsByClassName("butTime").value
       document.body.style.backgroundColor = "blue";

       if(localStorage.getItem(time) && localStorage.key(date)){
        alert("slot's not exits");
       }else{
        localStorage.setItem(date, time)
       }
    })
}