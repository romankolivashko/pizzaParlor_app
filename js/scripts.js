
//Business Logic for pizza object
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
  this.salesTax = 0.1;
}

let order = new Pizza(1, "beef");
console.log(order);

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








// let toppings = {
//   meat: ["Beef", "Ham", "Bacon", "Chicken", "Sausage", "Pepperoni"], 
//   veg: ["Onions", "Peppers", "Olives", "Tomatoes", "Pineapple"]
// } 

























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