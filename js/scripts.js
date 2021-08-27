
//Business Logic for pizza object
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let order = new Pizza(1, "beef");
console.log(order);

Pizza.prototype.selectSize = function(size) {
 if ( size === "small") {
    return this.size = 10;
  } else if ( size === "medium") {
    return this.size = 12;
  } else if ( size === "large") {
    return this.size = 15;
  } else {
    return false;
  }
}

console.log(order.selectSize("medium"));

 








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