var n = Math.floor(Math.random()*100) + 1;

var button = document.getElementById("calculate");
button.addEventListener("click", function(){
    alert("Your love compatibility score is: " + n + "%");
})