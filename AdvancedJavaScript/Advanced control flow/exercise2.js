//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle(bool) {
    return bool;
}

var experiencePoints = "You've obtained " + winBattle(true) + "experience points!" ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommant("forward"); 
// Undefined

//#3 return value when moveCommant("back");
// "You arrived home"

//#4 return value when moveCommant("right");
// "You found a river"

//#5 return value when moveCommant("left");
// Undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function levelUp(skill) {
    var experiencePoints;
    switch(skill) {
        case "levelTen":
            experiencePoints = "Congratulations you've unlocked the Fire ability!";
            break;
        case "levelTwenty":
            experiencePoints = "Congratulations you've unlocked the Shadow Kingdom!";
            break;
        case "levelThirty":
            experiencePoints = "You've reached max level!";
            break;
        default:
            experiencePoints = "Please enter a valid level!";
    }
    return experiencePoints;
}