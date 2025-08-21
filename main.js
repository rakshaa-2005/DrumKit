const drumlength = document.querySelectorAll('.drum').length;

for (let i = 0; i < drumlength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const key = this.classList[0]; // like "w", "a", etc.
        makenoise(key);
    });
}

function makenoise(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tam1_1.wav").play();
            break;
        case "a":
            new Audio("sounds/tam1_2.wav").play();
            break;
        case "s":
            new Audio("sounds/tam1_3.wav").play();
            break;
        case "d":
            new Audio("sounds/tam1_4.wav").play();
            break; 
        case "j":
            new Audio("sounds/tam1_5.wav").play();
            break;
        case "k":
            new Audio("sounds/tam1_6.wav").play();
            break;
        case "l":
            new Audio("sounds/tam1_7.wav").play();
            break;
        case "m":
            new Audio("sounds/tam1_8.wav").play();
            break;
        case "n":
            new Audio("sounds/tam1_1.wav").play();
            break;
        case "o":
            new Audio("sounds/tam1_2.wav").play();
            break;
        case "p":
            new Audio("sounds/tam1_3.wav").play();
            break;
        case "q":
            new Audio("sounds/tam1_4.wav").play();
            break;
        default:
            console.log("No sound assigned for: " + key);
    }
}
