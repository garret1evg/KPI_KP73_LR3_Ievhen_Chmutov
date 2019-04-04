let numberOfBottlesStr = prompt("Please, enter amount of bottles to drop!");
let numberOfBottles = parseInt(numberOfBottlesStr);
for(let i = numberOfBottles; i >= 1; i--) {
    console.log(PrintBottles(i));
    document.write(PrintBottles(i));
}

function PrintBottles(amountOfBottles) {
    let templateStringIfLotsOfBottles = 
        `
        ${amountOfBottles} пляшок стоїть на стіні, одна упала і залишилось ${amountOfBottles - 1}<br>`
    let templateStringIfAFewOfBottles = 
        `Одна пляшка стоїть на стіні, одна упала і залишилось жодної`
    return amountOfBottles > 1 ? templateStringIfLotsOfBottles : templateStringIfAFewOfBottles;
}