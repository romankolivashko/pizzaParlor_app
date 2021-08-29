//Business Logic for Pizza object
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
  //this.salesTax = 0.1;
}

Pizza.prototype.selectSize = function(size) {
 if ( size === "Small") {
    this.price = 15;
    //return this.price;
  } else if ( size === "Medium") {
    this.price = 20;
    //return this.price = 20;
  } else if ( size === "Large") {
    this.price = 25;
    //return this.price;
  } else {
    return false;
  }
}

Pizza.prototype.addToppings = function(toppingsNum) {
  if ( toppingsNum <= 3) {
     return this.price += 5;
   } else if ( toppingsNum > 3 ) {
   return this.price += 10;
   } else {
     return false;
   }
}

Pizza.prototype.salesTax = function() {
  this.price += this.price * 0.1;
}

//Business logic for Contact object
function Contact(fName, lName, email) {
  this.fName = fName;
  this.lName = lName;
  this.email = email;
}

//Capitalize and put both names together
Contact.prototype.fullName = function() {
  let fullNameToCap = this.fName + " " + this.lName;
  return fullNameToCap.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//UI Logic
 $(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    $("#new-order").hide();
    $("#show-order").show();
    //store contact details
    const inputtedFirstName = $("input#firstName").val();
    const inputtedLastName = $("input#lastName").val();
    const inputtedEmail = $("input#email").val();
    //store pizza specs
    const inputtedSize = $('input:radio:checked').val();
    const inputtedToppingsNum = $('input:checkbox:checked').length;
    //main function implementation
    let contact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail);
    let order = new Pizza(inputtedSize, inputtedToppingsNum);
    order.selectSize(inputtedSize);
    order.addToppings(inputtedToppingsNum);
    order.salesTax(order.price);
    //write back to html
    $(".name").html(contact.fullName(contact));
    $(".email").html(inputtedEmail);
    $(".pizza-size").html(inputtedSize);
    $(".toppings").html(inputtedToppingsNum); 
    $(".total").html(order.price.toFixed(2)); //toFixed() not required but will be needed if prices change
    //clear form input fields
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#email").val("");
    $('input:checkbox:checked').val("");
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