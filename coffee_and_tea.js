// Step 1) I start with a console.log to make sure the JS file is linked to the index file
console.log("this is linked properly")

// Step 2) I have to define my classes
class Coffee {
    constructor (roast, origin) {
        this.roast = roast;
        this.origin = origin;
    }
}

class Tea {
    constructor (type) {
    this.type = type;
    }
}

// Step 3) Then I declare the arrays that will hold the instances of my classes. 
let coffeeTypes = [];

let teaCollection = [];

// Then I create my menu function. It will end up at the bottom of the code,  
// But it is my 4th step, not my last

// Step 5) Here I create my addCoffee / addTea functions
function addCoffee() {
    let roastOptions = ["light roast", "medium roast", "dark roast"]
    roastChoice = prompt("Do you prefer (enter '1', '2' or '3') \n1) light roast \n2) medium roast \n3 dark roast")
    let selectedRoast = roastOptions[parseInt(roastChoice) - 1];
    let selectedOrigin = prompt("Enter a coffee origin: ");
    let newCoffee = new Coffee(selectedRoast, selectedOrigin);
    coffeeTypes.push(newCoffee);
    alert("Coffee added successfully!");
    showOptions();
}

function addTea() {
    selectTea = prompt("Enter the name of a tea that you enjoy");
    let newTea = new Tea(selectTea);
    teaCollection.push(newTea);
    alert ("Thank you!");
    showOptions();
}

// Step 6) Here I create my viewCoffees / viewTeas functions
function viewCoffees() {
    if (coffeeTypes.length === 0) {
        alert("No coffees have been added yet")
    } else {
        let coffeeInfo = "Coffees in collection:\n";
        for (let i = 0; i < coffeeTypes.length; i++) {
            coffeeInfo += `${i+1}. ${coffeeTypes[i].roast}, ${coffeeTypes[i].origin}\n`
        }
        alert(coffeeInfo);
    }
    showOptions();
}

function viewTeas() {
    let listOfTeas = teaCollection;
    if (listOfTeas.length === 0) {
        alert("No teas added yet. Add some teas first.")
    } else {
        let teaInfo = "Teas in collection:\n";
        for (let i = 0; i < listOfTeas.length; i++) {
            teaInfo += `${i + 1}. ${listOfTeas[i].type}\n`
        }
        alert(teaInfo);
    }
    showOptions()
}

// Step 4) Here I create my menu function, showOptions()
function showOptions() {
    var choice = prompt("Please choose from the following options: \n1) Add coffee \n2) Add tea \n3) View Coffees \n4) View teas \n5) Exit menu ")
    
    if (choice === "1") {
        addCoffee();
    } else if (choice === "2") {
        addTea(); 
    } else if (choice === "3") {
        viewCoffees();
    } else if (choice === "4") {
        viewTeas();
    } else if (choice === "5") {
        alert("Exiting menu")
    } else {
        alert("Invalid input. Please enter a number 1 - 5")
        showOptions();
    }
    }

showOptions()