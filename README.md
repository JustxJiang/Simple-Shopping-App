<h1>Simple Shopping App</h1>

Shopping Cart App is a mini project built using Angular to demonstrate basic validation in a shopping app/cart scenario. This application allows users to add items to the cart, but with the constraint that they cannot add more than the available quantity. If the user tries to add more than what’s available, an error message is shown. The app is intended to showcase validation features, such as handling out-of-stock situations and quantity checks.


<h2>Features</h2>

<b>Add to Cart:</b> Users can add items to the cart, but only up to the available quantity.
<b>Quantity Check:</b> The app prevents users from adding more items than the available stock. If they attempt to do so, an error message appears.
<b>Basic Validation:</b> The app demonstrates validation logic, ensuring correct behavior when interacting with the cart.


<h2>Technologies Used</h2>

<b>Angular:</b> The core framework for building the application.<\n>
<b>TypeScript:</b> A superset of JavaScript used for type safety and better tooling.
<b>HTML/CSS:</b> For structuring and styling the application.


<h2>Installation</h2>

<b>Clone the repository:</b>
1. Copy code
2. git clone https://github.com/JustxJiang/Simple-Shopping-App.git   or download zip file.
3. cd project3 (if you have to)

<b>Install the dependencies:</b>
npm install

<b>Run the application:</b>
ng serve / ng serve --o / ng serve --open
The application will be available at http://localhost:4200.


<h2>Usage</h2>

- Click the "Add to Cart" button next to a product to add it to your shopping cart (up to the available quantity).
- If you try to add more than the available quantity, an error message will be shown.
- No checkout functionality is implemented; the app only demonstrates the cart behavior and validation.


<h4>Components</h4>

AppComponent: Shows the shopping cart and the available quantity for the product.
Error Handling: Displays an error message when a user attempts to add more items than are available.
