# _Pizza Parlor App_

#### _The application will let user select a pizza of certain size with toppings of preference_

#### By _**Roman Kolivashko**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery

## Description

_This is an applicaton that helps user choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._

## Specifications

**Describe: pizzaOrder()**

|  **Case #1** |
|---|
| **Test:** Create a pizza order object constructor  |
|  **Code:** let order = new Pizza("medium", "beef"); |  
|  **Expected Output:** Pizza { size: "medium", toppings: 'beef' } |  

|  **Case #2** |
|---|
| **Test:** Create prototype method to select size |
|  **Code:** order.selectSize("medium") |  
|  **Expected Output:** 12 | 

|  **Case #3** |
|---|
| **Test:** Create prototype method to add toppings |
|  **Code:** if (toppings > 3) |  
|  **Expected Output:** this.price += 10; | 

|  **Case #4** |
|---|
| **Test:** Create prototype method to add sales tax |
|  **Code:** (order.selectSize("medium") + order.addToppings(4)) + 10% tax |  
|  **Expected Output:** 33 | 

## Setup/Installation Requirements

* _Run_ `git clone https://github.com/romankolivashko/pizzaParlor_app.git`
* _Open `index.html` file in browser._

## How to access the app from the web
* _Follow the link [here](https://romankolivashko.github.io/app_name/)_ 

## Known Bugs

* _NO bugs have been reported yet_

## License

_The MIT License (MIT)_

Copyright (c) 2021 Roman Kolivashko

## Contact Information

_rkolivashko@gmail.com_