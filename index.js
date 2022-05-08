var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrumButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {

        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });

}
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;

    }
}

function buttonAnimation(key) {
    var activeElement = document.querySelector("." + key);
    activeElement.classList.add("pressed");

    setTimeout(function() {
        activeElement.classList.remove("pressed");
    }, 100);
}