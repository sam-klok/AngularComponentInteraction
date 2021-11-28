This is demo of Angular Component interaction.
I tried to simplify it as much as possible.

Based on:

1.1. Sharing data between child and parent directives and components
by using EventEmitter
https://angular.io/guide/inputs-outputs

1.2.Component interaction
https://angular.io/guide/component-interaction

2. Angular Fundamentals by Jim Cooper and Joe Eames
https://app.pluralsight.com/library/courses/angular-fundamentals



What I did:

1. Create project:
ng new AngularComponentInteraction
(let's do without routing to simplify)

2. Verify if it's working:
cd AngularComponentInteraction
ng serve --open
http://localhost:4200/

2.1. To stop it:
Ctrl + Break
Terminate batch job (Y/N)? Y

3. Create two components:
3.1. ng generate component Parent
3.2. ng g c Child