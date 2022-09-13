function toReal(number){

    return number.toLocaleString('pt-br', {style: 'currency', currency: "BRL"});

}

export default toReal