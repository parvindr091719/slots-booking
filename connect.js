const { getElementById } = require("domutils");  
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
function slot(){
    mobiscroll.datepicker('#demo-booking-multiple', {
        controls: ['calendar', 'timegrid'],
        min: '2022-11-28T00:00',
        max: '2023-05-28T00:00',
        minTime: '08:00',
        maxTime: '19:59',
        stepMinute: 60,
        // example for today's labels and invalids
        labels: [{
            start: '2022-11-28',
            textColor: '#e1528f',
            title: '3 SPOTS'
        }],
        invalid: [{
            start: '2022-11-28T08:00',
            end: '2022-11-28T13:00'
        }, {
            start: '2022-11-28T15:00',
            end: '2022-11-28T17:00'
        }, {
            start: '2022-11-28T19:00',
            end: '2022-11-28T20:00'
        }]
    });
}