//Handling the Mouse Presses
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML);

        animateKey(this.innerHTML);

    });

}

//Handling the Keyboard Key Presses 
document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);

    animateKey(event.key);
});


//MakeSound Function is responsible for handling both mouseClick and keyPress

function makeSound(key){

    //All Key states
    switch (key) {
        case "w":
            var drumAudio = new Audio("sounds/crash.mp3");
            drumAudio.play();
            break;

        case "a":
            var drumAudio = new Audio("sounds/kick-bass.mp3");
            drumAudio.play();
            break;

        case "s":
            var drumAudio = new Audio("sounds/snare.mp3");
            drumAudio.play();
            break;

        case "d":
            var drumAudio = new Audio("sounds/tom-1.mp3");
            drumAudio.play();
            break;

        case "j":
            var drumAudio = new Audio("sounds/tom-2.mp3");
            drumAudio.play();
            break;

        case "k":
            var drumAudio = new Audio("sounds/tom-3.mp3");
            drumAudio.play();
            break;

        case "l":
            var drumAudio = new Audio("sounds/tom-4.mp3");
            drumAudio.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function animateKey(key){

    document.querySelector("."+key).classList.add("pressed");

    setTimeout(() => { document.querySelector("."+key).classList.remove("pressed");
        
    }, 200);
}