let data = [
	{value: 100, type: 'USD'},
	{value: 215, type: 'EUR'},
	{value: 7, type: 'EUR'},	
	{value: 99, type: 'USD'},
	{value: 354, type: 'USD'},
	{value: 12, type: 'EUR'},
	{value: 77, type: 'USD'},
];

let arrayEUR = [];
let sumUSD = 0;
data.forEach(element => {
    if (element.type == "USD" && element.value < 100)
        sumUSD += element.value;
    if (element.type == "EUR")
        arrayEUR.push(element);
});
DoubleValue(arrayEUR);
document.write("Sum of all USD with value less than 100 is <b>" + sumUSD + "</b><br><hr><br>Array of EUR  with doubled value:<br>");
document.write(JSON.stringify(arrayEUR, null, 4));


function DoubleValue(array) {
    array.forEach(element => {
        element.value *= 2;
    });
}