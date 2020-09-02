//click event

var content = document.getElementById("ptag1");
content.addEventListener('click', function () {
    content.style.color = "red";
    content.style.fontSize = "large";
});

//keyboard event
var content1 = document.getElementById("body");
content1.addEventListener('keydown', function (eventDetails) {
    console.log(eventDetails);
    if (eventDetails.key == " ") {
        var content3 = document.getElementById("ptag2");
        content3.style.transition = "all 0.25s linear";
        content3.style.color = "purple";
        content3.style.fontSize = "large";
    }
});

//mouse hover event
var content4=document.getElementById("h1tag1");
content4.addEventListener('mouseenter',function() {
    content4.style.color="crimson";

});
content4.addEventListener('mouseleave',function() {
    content4.style.color="black";

});

