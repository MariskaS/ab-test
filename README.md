# Technical screening
Task - Implement the interface using HTML/CSS and Angular 2 project.

# Description  
**[Live Demo](http://mariskas.github.io/)** - here is a build version of the test task. 

**Technologies:** Angular 8, HTML/Scss, Typescript, HTML/Scss, JavaScript.  

**Tools:** Webstorm, Git, GitHub.

# Comments
### Within the given time to complete the task, I did:
1. Reusable components such as Buttons and Dropdown (in the future it is possible to make reusable components - Tabs and Table)
1. HTML and Scss for components
1. Responsive for all components except the `table`.  
1. Variable system(Css/Scss) - The color variables are made in **CSS** for the ability to quickly change the 
Color Theme and that there is no need to import them into components.
1. Project Documentation  

### Total time spent
**~12h** for creating components with HTML/Scss + several hours for trying to install Angular2.

### Why is Angular 8 used instead of Angular 2?
Angular 8 was the fastest option.
Since the created components do not contain logic specific only to Angular8, these components can be easily transferred to the application on Angular2.

Since Angular 2 is old and not supported anymore by Angular developers, I could not install it quickly using the CLI.

A possible solution could be a Docker Image, 
or a solution like this [angular2-seed](https://github.com/matthias-schuetz/angular2-seed). 
But as part of this test assignment, I did not have time for this.

### Keyboard Accessibility  
Aria label and roles added. But for the full implementation of ADA, 
for example, in dropdowns - Application need's an additional functionality 
using [@angular/cdk](https://github.com/angular/components#readme) 
([dropdown example](https://stackblitz.com/edit/angular-custom-dropdown-cdk?file=src%2Fapp%2Fcustom-dropdown%2Fcustom-select.html).
I didn't have enough time allocated for the Technical screening.

