# LoginForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements

Complete a simple login form for this app.

1. Hardwire "login.routes.ts" to the feature module "LoginModule";
2. Lazy load "LoginModule" in the main app;
3. Create a "login.service" with method "login".
4. Call the "login" method and pass a username and password when the form is submitted. You can use template driven forms. You can use "https://jsonplaceholder.typicode.com/todos/1" to mock a login request.
5. Add validation to the login form. Check if a user's password and name are not empty, and if they are, display an error message.
6. If the login process is successful, console.log the response that has come from the server.
7. Center the login form using flexbox (horizontally and vertically)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
