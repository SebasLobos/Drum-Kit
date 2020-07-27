function makeNoise(buttonSelect){
    
    switch (buttonSelect) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
        
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kbass= new Audio("sounds/kick-bass.mp3");
            kbass.play();
            break;                
        
        default:
            console.log(buttonSelect);
            break;
    }

}

// Detecting Button press

var numOfButton=document.querySelectorAll(".drum").length;

for (var i = 0; i<numOfButton; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonSelect = this.innerText;
        makeNoise(buttonSelect);
        buttonAnimation( buttonSelect)
    })
}

// Detecting Keyboard press

document.addEventListener("keydown", function(event){
    makeNoise( event.key);
    buttonAnimation( event.key);
})

function buttonAnimation( buttonSelect){
    var buttonPress= document.querySelector("."+buttonSelect);

    buttonPress.classList.add("pressed");

    setTimeout( function (){
        buttonPress.classList.remove("pressed")
    }, 100);
}