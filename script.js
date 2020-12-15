let size = document.getElementById("size");   //Selet size of pizza
let quantity = document.getElementById("quantity");  // Quantity
let total = document.querySelector("#amount");  //Total price
let discountDiv = document.querySelector(".discount");  // Discount Div 
let discountBtn = document.querySelector("#discount-btn");  // button for discount
let discountCode = document.querySelector("#discount-code"); //input for code to apply

var originalPrice = 0;
let quantityTotal = 0;
let finalAmount = 0;


//  This function wil check the size of pizza and set price total
size.addEventListener("change", function(e){
    if(size.value == "no") {
        quantity.setAttribute("disabled", "disabled");  // if there is no size selection, quantity is disabled
    } else {
        quantity.removeAttribute("disabled", "disabled");
    }
    var price = Number(e.target.value);
    originalPrice = price;
    finalAmount = price *quantityTotal;
    total.innerHTML = finalAmount;
});


//  This function wil check the quantity of pizza and set price total
quantity.addEventListener("change", (e)=>{
    let qt = Number(e.target.value);
    quantityTotal  = qt;
    finalAmount = quantityTotal * originalPrice;
    total.innerHTML = finalAmount;
});

//  This function will apply Discount
discountBtn.addEventListener("click", function(e){
    e.preventDefault();
    let discValue = discountCode.value;
    if (discValue === ""){
        discountDiv.innerHTML = `<p class="discount-error">Please Enter Discount Code</p>`
    } else {
        if(  discValue ==="extracheese"){
            let discountedAmount = finalAmount * .1 ;

            let afterDiscount = finalAmount - discountedAmount;
            
            total.innerHTML = afterDiscount;
            discountDiv.innerHTML = `<p class="discount-success">Successfully applied 10% Discount</p>`
            
        } else {
            discountDiv.innerHTML = `<p class="discount-error">Please Enter Valid Code</p>`
        }
    }
});

if(size.value == "no") {
    quantity.setAttribute("disabled", "disabled");
}

$(document).ready(function(){
    $('#password').keyup(function(){
        passwordValidation();
    });

    $('#size').change(function(){
        extracheeseMsg();
    });

});

// Password Validation
function passwordValidation(){
    let password = $('#password').val();
    if (password.length > 7) {
        $('.error-msg').text("Maximum 7 Character Allowed");
    } else {
        $('.error-msg').text("");
    }
}

// Message to show they selected supersize
function extracheeseMsg(){
    let sizeVal = $('#size').val();
    if (sizeVal == "17") {
        $('.supersize-msg').text("High Calories Product");
    } else {
        $('.supersize-msg').text("");
    }
}
