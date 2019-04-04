function DrawTriangle () {
    let array = [];
    let i, j;
    let size=prompt("Enter size");   
    document.write ('<p>');    
    NulifyArray(array, size);
    array[0] = 1;
    for(j = 1; j <= size; j++)
    {
        for(i = j; i >= 1 ; i--)
        {
            document.write ('\n<b>' + array[i-1] + '</b>');
            array[i] = array[i-1] + array[i];
        }
        document.write('<p>');
 
    }
    for(i = 0; i <= size ; i++)
    {
        document.write (' <b>' + array[i] + '</b>');
    }
 
}
DrawTriangle();

function NulifyArray(arrayToNulify, size) {
    for(i = 1; i <= size; i++)
    {
        arrayToNulify[i] = 0;
    }
}