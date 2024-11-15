Simple Shopping App

Shopping Cart App is a mini project built using Angular to demonstrate basic validation in a shopping app/cart scenario. This application allows users to add items to the cart, but with the constraint that they cannot add more than the available quantity. If the user tries to add more than what’s available, an error message is shown. The app is intended to showcase validation features, such as handling out-of-stock situations and quantity checks.


Features

Add to Cart: Users can add items to the cart, but only up to the available quantity.
Quantity Check: The app prevents users from adding more items than the available stock. If they attempt to do so, an error message appears.
Basic Validation: The app demonstrates validation logic, ensuring correct behavior when interacting with the cart.


Technologies Used
Angular: The core framework for building the application.
TypeScript: A superset of JavaScript used for type safety and better tooling.
HTML/CSS: For structuring and styling the application.


Installation
Clone the repository:
Copy code
git clone https://github.com/JustxJiang/Simple-Shopping-App.git   or download zip file.
cd project3 (if you have to)

Install the dependencies:
npm install

Run the application:
ng serve / ng serve --o / ng serve --open
The application will be available at http://localhost:4200.


Usage

- Click the "Add to Cart" button next to a product to add it to your shopping cart (up to the available quantity).
- If you try to add more than the available quantity, an error message will be shown.
- No checkout functionality is implemented; the app only demonstrates the cart behavior and validation.


Components

AppComponent: Shows the shopping cart and the available quantity for the product.
Error Handling: Displays an error message when a user attempts to add more items than are available.
