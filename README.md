# Technical screening
Task - Implement the interface using HTML/CSS and Angular.

## Description  
**[Live Demo](https://app-mariskas.herokuapp.com/)** - here is a build version of the test task. 

**Technologies:** 
[Angular CLI](https://github.com/angular/angular-cli) version 10.0.0, HTML/Scss, 
Typescript, HTML/Scss, NgRx, JavaScript.  

**Additional packages:** [angular-svg-icon](https://github.com/czeckd/angular-svg-icon)

**Technologies:** 

## About
1. LocalStorage Service (used to save the selected color scheme(`dark`|| `light` mode) of the project).
1. Added routing.
 - In the case of a **path that does not exist**, **the Page Not Found**
  will be displayed.
 - In the case of an empty path - `redirectTo: '/account'`.
1. Reusable components such as Buttons and Dropdown.
1. Responsive for all components. 
1. Variable system(Css/Scss) - The color variables are made in **CSS** for the ability to quickly change the 
Color Theme and that there is no need to import them into components.
1. [Heroku](https://www.heroku.com/home) - continuous deployment from github to heroku. 
(useful link - [grokonez.com](https://grokonez.com/frontend/angular/angular-deployment/how-to-deploy-angular-application-on-heroku-hosting-with-git-repository))

### Keyboard Accessibility  
Aria label and roles added. But for the full implementation of ADA, 
for example, in dropdowns - Application need's an additional functionality 
using [@angular/cdk](https://github.com/angular/components#readme) 
([dropdown example](https://stackblitz.com/edit/angular-custom-dropdown-cdk?file=src%2Fapp%2Fcustom-dropdown%2Fcustom-select.html)).
