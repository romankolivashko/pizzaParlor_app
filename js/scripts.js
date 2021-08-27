
//Create super class
function PizzaOrder(size, toppings) {
  this.size = size; 
  this.toppings = toppings;
}

PizzaOrder.prototype.selectSize = function() {
  this.size = { 
    small: 10, 
    medium: 12, 
    large: 15, 
    xLarge: 20
  }
}

PizzaOrder.prototype.addToppings = function() {
  this.toppings = {
    meat: ["Beef", "Ham", "Bacon", "Chicken", "Sausage", "Pepperoni"], 
    veg: ["Onions", "Peppers", "Olives", "Tomatoes", "Pineapple"]
  } 
}

let pizza = new PizzaOrder;

console.log(pizza.selectSize[1])























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