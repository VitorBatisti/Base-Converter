function decimalToBinary(decimal)
{
    var bin = ''; 
    var remainder;
    while (decimal>0)
    {
        remainder = decimal % 2;
        bin = remainder + bin;
        decimal = parseInt(decimal/2);
    }
    return bin;
}

function binaryToDecimal(binary)
{
    
    var decimal = 0; 
    for(var i = 0; i < binary.length; i++)
    {
        decimal = decimal * 2 + parseInt(binary.substr(i,1));
    }
    return decimal;
}

function decimalToHex(decimal)
{
    var hex='';
    var remainder;
    var dec = decimal;
    while (dec > 0)
    {
        remainder = dec % 16;
        hex = "0123456789ABCDEF".substr(remainder,1) + hex;
        dec = parseInt(dec/16);
    }
    return hex;
}

function hexToDecimal(hex)
{
    var decimal = 0;
    var dig;
    for (var i=0; i< hex.length; i++)
    {
        dig = hex.substr(i,1);
        if(dig >= '0' && dig <= '9') decimal = decimal * 16 + parseInt(dig);
        if(dig >= 'A' && dig <= 'F') decimal = decimal * 16 + dig.charCodeAt(0) - "A".charCodeAt(0) + 10;
    }
    return decimal;
}

function clearDisplay()
{
    document.getElementById("number_input").value = '';
}

function appendDigit(d)
{
    var display = document.getElementById("number_input").value;
    var base;
    if(document.getElementById("binary_radio").checked) { base = 'binary';}
    else if(document.getElementById("hex_radio").checked) { base = 'hex';}
    else{ document.getElementById("decimal_radio").checked = true; base = 'decimal'; }

    switch(base) {
        case 'decimal':
            if(d >= '0' && d <= '9') display += '' + d;
            break;
        case 'hex':
            if(d >= '0' && d <= '9' || d >= 'A' && d <= 'F') display += '' + d;
            break;
        case 'binary':
            if(d == '0' || d == '1') display += '' + d;
            break;
    }
    document.getElementById("number_input").value = display;
    document.getElementById("number_base").innerHTML = base;
}

function baseConvert(toBase)
{
    var argument = document.getElementById("number_input").value;
    var fromBase = document.getElementById("number_base").innerHTML;
    var result;
    if(argument.length > 0 && fromBase > '')
    {
        if(fromBase == 'binary' && toBase == 'decimal')
        {
            result = binaryToDecimal(argument);
        }
        else
        if(fromBase == 'decimal' && toBase == 'binary')
        {
            result = decimalToBinary(argument);
        }
        if(fromBase == 'hex' && toBase == 'decimal')
        {
            result = hexToDecimal(argument);
        }
        else
        if(fromBase == 'decimal' && toBase == 'hex')
        {
            result = decimalToHex(argument);
        }
        if(fromBase == 'binary' && toBase == 'hex')
        {
            result = decimalToHex(binaryToDecimal(argument));
        }
        else
        if(fromBase == 'hex' && toBase == 'binary')
        {
            result = decimalToBinary(hexToDecimal(argument));
        }
    }
    document.getElementById("number_input").value = result;
    document.getElementById("number_base").innerHTML = toBase;
}