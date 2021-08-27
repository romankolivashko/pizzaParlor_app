//Business Logic for pizza object
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
  this.salesTax = 0.1;
}

//Set price based on size selection
Pizza.prototype.selectSize = function(size) {
 if ( size === "10") {
    this.price = 15;
    //return this.price;
  } else if ( size === "14") {
    this.price = 20;
    //return this.price = 20;
  } else if ( size === "18") {
    this.price = 25;
    //return this.price;
  } else {
    return false;
  }
}

//Add $5 if less than 3 toppings
//Add $10 for anything above 3 toppings
Pizza.prototype.addToppings = function(toppingsNum) {
  if ( toppingsNum <= 3) {
     return this.price += 5;
   } else if ( toppingsNum > 3 ) {
   return this.price += 10;
   } else {
     return false;
   }
}

Pizza.prototype.finalPrice = function() {
  //add sales tax to the order
  return this.price += (this.price * this.salesTax);
}

 $(document).ready(function() {
  //attachContactListeners();    // <--- This line is new!
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    
    //store contact details
    const inputtedName = $("input#name").val();
    const inputtedEmail = $("input#email").val();

    //store pizza specs
    const inputtedSize = $('input:radio:checked').val();
    const inputtedToppingsNum = $('input:checkbox:checked').length;
    let order = new Pizza(inputtedSize, inputtedToppingsNum);
    let toppingsNum = $('input:checkbox:checked').length;
    order.selectSize(inputtedSize);
    order.addToppings(toppingsNum);
    order.finalPrice()
    

    //write back to html
    $(".total").html(order.finalPrice());
    //debugger;
    //clear form input fields
    $("input#new-name").val("");
    $("input#new-email").val("");
    $('input:checkbox:checked').val("");
    
    
    //test
    console.log(inputtedToppingsNum);
    console.log(order.price);
    //console.log(order.selectSize("10"));
    console.log(order.finalPrice());
    debugger;
  });
});
























// $(document).ready(function() {
//   $(".content").click(function() {
//     $(".card-showing").toggle();
//     $(".card-hidden").toggle();
//   });
// });

// $(document).ready(function() {
//   attachContactListeners();
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     const inputtedFirstName = $("input#new-first-name").val();
//     const inputtedLastName = $("input#new-last-name").val();
//     const inputtedPhoneNumber = $("input#new-phone-number").val();

//     // The next three lines are new:
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-phone-number").val("");

//     let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
//     addressBook.addContact(newContact);
//     displayContactDetails(addressBook);
//   });
// });