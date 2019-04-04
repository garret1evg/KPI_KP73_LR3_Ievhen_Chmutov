let data = {
    "wife": [],
    "numberOfChilderen": [],
    "city": [],
    "occupation": []
}

function FillDataByUserInput(dataToFill) {    
    FillArray(dataToFill.wife, "Enter your future wife`s name");
    FillArray(dataToFill.numberOfChilderen, "Enter number of your children in future");
    FillArray(dataToFill.city, "Enter your future city where you will live");
    FillArray(dataToFill.occupation, "Enter your future occupation");
    console.log(dataToFill);
}

function CreatePrediction() {
    if (data.city.length == 0 || data.numberOfChilderen.length == 0 || data.occupation.length == 0 || data.wife.length == 0)
        FillDataByUserInput(data);
    //get random data here
    let wife = GetRandomArrayItem(data.wife);
    let numberOfChilderen = GetRandomArrayItem(data.numberOfChilderen);
    let occupation = GetRandomArrayItem(data.occupation);
    let city = GetRandomArrayItem(data.city);
    //now forming final strings to show on page
    let resultFamilyStr = `You will be married with ${wife} and you will have ${numberOfChilderen} children`;
    let resultJobStr = `You will move to the ${city} and you will work as ${occupation}`;
    let finalData = [resultFamilyStr, resultJobStr];
    document.getElementById("prediction").innerHTML = finalData[0]; 
    document.getElementById("prediction2").innerHTML = finalData[1];    
}

function ConfirmPrediction() {
    confirm(document.getElementById("prediction").innerHTML);
}

function FillArray(array, message) {
    while(true) {
        let item = prompt(message);
        
        array.push(item);
        if (!confirm("Add new?")) 
            break;
    }
}

function GetRandomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}