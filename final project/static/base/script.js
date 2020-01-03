var currentPage = window.location.href.split("/").slice(-1)[0]

var home_link = document.getElementById("home_link");
var about_link = document.getElementById("about_link");
var query_link = document.getElementById("query_link");

switch (currentPage) {
    case "query":
        query_link.className = 'link_disabled';
        break;
    case "about":
        about_link.className = 'link_disabled';   
        break;
    default:
        home_link.className = 'link_disabled'; 
        break;
}