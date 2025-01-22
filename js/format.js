function format(amount){
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed(1)
    return mantissa.toFixed(2) + "e" + power
}

function percentage(number){ 
    let newnumber = 100 * number
    newnumber = 100 - newnumber
    return newnumber + "%"
}

function format2(amount){
    return amount.mantissa.toFixed(0) + "e" + amount.exponent.toFixed(1)
}
