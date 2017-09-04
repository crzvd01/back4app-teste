function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("header").style.backgroundColor = "rgba(32,138,236,0.4)";
    document.getElementById("footer1").style.backgroundColor = "rgba(97,97,97,0.4)";
    document.getElementById("footer2").style.backgroundColor = "rgba(34,34,34,0.4)";
 
   
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("header").style.backgroundColor = "rgba(32,138,236,1)";
    document.getElementById("footer1").style.backgroundColor = "rgba(97,97,97,1)";
    document.getElementById("footer2").style.backgroundColor = "rgba(34,34,34,1)";
}