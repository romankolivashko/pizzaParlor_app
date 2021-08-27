
//Business Logic for pizza object
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
  this.salesTax = 0.1;
}

//instantiate new object
let order = new Pizza(1, "beef");
console.log(order);

//Set price based on size selection
Pizza.prototype.selectSize = function(size) {
 if ( size === "small") {
    return this.price = 15;
  } else if ( size === "medium") {
    return this.price = 20;
  } else if ( size === "large") {
    return this.price = 25;
  } else {
    return false;
  }
}

//Add $5 if less than 3 toppings
//Add $10 for anything above 3 toppings
Pizza.prototype.addToppings = function(toppings) {
  if ( toppings <= 3) {
     return this.price += 5;
   } else if ( toppings > 3 ) {
   return this.price += 10;
   } else {
     return false;
   }
}

Pizza.prototype.finalPrice = function() {
  //add sales tax to the order
  return this.price += (this.price * this.salesTax);
}

 
 console.log(order.selectSize("medium"));
 console.log(order.addToppings(4));
 console.log(order.finalPrice());


 $(document).ready(function() {
  //attachContactListeners();    // <--- This line is new!
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    //store contact details
    const inputtedName = $("input#name").val();
    const inputtedEmail = $("input#email").val();

    //store pizza specs
    const inputtedSize = $("input#pizza-size").val();
    const inputtedToppingsNum = $("input#toppings")
    const inputtedHomeAddress = $("input#new-home-address").val();
    const inputtedWorkAddress = $("input#new-work-address").val();
    
    //get the number of toppings selected
    let numberOfChecked = $('input:checkbox:checked').length;
    console.log(numberOfChecked);
    //clear form input fields
    $("input#new-name").val("");
    $("input#new-email").val("");
  
    let order = new Pizza(inputtedSize, inputtedToppingsNum);
    // let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedHomeAddress, inputtedWorkAddress, allEmails);

    // addressBook.addContact(newContact);
    // displayContactDetails(addressBook);
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