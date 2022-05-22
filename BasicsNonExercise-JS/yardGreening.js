function gardening(input) {
    let edinKvadratenMetar = 7.61; 

    let leafyMetres = Number(input[0]);

    let allDvor = leafyMetres * edinKvadratenMetar
    
    let discount = 0.18 * allDvor;
     
    let totalPrice = allDvor - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

    
}

gardening(['550']);
