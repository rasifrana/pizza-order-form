let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let total = document.querySelector("#amount");
let discountDiv = document.querySelector(".discount");
let discountBtn = document.querySelector("#discount-btn");
let discountCode = document.querySelector("#discount-code");

var originalPrice = 0;
let quantityTotal = 0;
let finalAmount = 0;

size.addEventListener("change", function(e){
    if(size.value == "no") {
        quantity.setAttribute("disabled", "disabled");
    } else {
        quantity.removeAttribute("disabled", "disabled");
    }
    var price = Number(e.target.value);
    originalPrice = price;
    finalAmount = price *quantityTotal;
    total.innerHTML = finalAmount;
});

quantity.addEventListener("change", (e)=>{
    let qt = Number(e.target.value);
    quantityTotal  = qt;
    finalAmount = quantityTotal * originalPrice;
    total.innerHTML = finalAmount;
});

discountBtn.addEventListener("click", function(e){
    e.preventDefault();
    let discValue = discountCode.value;
    if (discValue === ""){
        discountDiv.innerHTML = `<h3 class="discount-error">Please Enter Coupon</h3>`
    } else {
        if(  discValue ==="asif"){
            let discountedAmount = finalAmount * .2 ;

            let afterDiscount = finalAmount - discountedAmount;
            
            total.innerHTML = afterDiscount;
            discountDiv.innerHTML = `<h3 class="discount-success">Successfully applied 20% Discount</h3>`
            
        } else {
            discountDiv.innerHTML = `<h3>Wrong Answer</h3>`
        }
        
    }
    
    
});

if(size.value == "no") {
    quantity.setAttribute("disabled", "disabled");
}
