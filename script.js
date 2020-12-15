let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let total = document.querySelector("#amount");


var originalPrice = 0;
let quantityTotal = 0;

size.addEventListener("change", function(e){
    var price = Number(e.target.value);
    originalPrice = price;
});

quantity.addEventListener("change", (e)=>{
    let qt = Number(e.target.value);
    quantityTotal  = qt;
    let finalAmount = quantityTotal * originalPrice;
    total.innerHTML = finalAmount;
});


