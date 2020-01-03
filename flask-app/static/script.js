var homeBTN = document.getElementById("home-btn");
var suite1BTN = document.getElementById("suite1-btn"); 
var suite2BTN = document.getElementById("suite2-btn");

var home = document.getElementById("home");
var suite1 = document.getElementById("suite1"); 
var suite2 = document.getElementById("suite2"); 

homeBTN.addEventListener("click", function(){
    //disable the homeBTN > hide the two other div > show this div
    homeBTN.setAttribute("disabled", "");
    suite1BTN.removeAttribute("disabled");
    suite2BTN.removeAttribute("disabled");
    home.className = 'show';
    suite1.className = 'hide';
    suite2.className = 'hide';
});

suite1BTN.addEventListener("click", function(){
    //disable the homeBTN > hide the two other div > show this div
    suite1BTN.setAttribute("disabled", "");
    homeBTN.removeAttribute("disabled");
    suite2BTN.removeAttribute("disabled");
    suite1.className = 'show';
    home.className = 'hide';
    suite2.className = 'hide';
});

suite2BTN.addEventListener("click", function(){
    //disable the homeBTN > hide the two other div > show this div
    suite2BTN.setAttribute("disabled", "");
    homeBTN.removeAttribute("disabled");
    suite1BTN.removeAttribute("disabled");
    suite2.className = 'show';
    home.className = 'hide';
    suite1.className = 'hide';
});