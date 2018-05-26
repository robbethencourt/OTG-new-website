# OTG-new-website

A new website design for Office To Go

### dev environment

* navigate to root folder in the command line
* run this command: gulp watch
* this will open up a development server pointed to the root of the dist folder that will automatically open your browser
* page will automatically reload when saving any .handlebars, .css or .js files

### image and font files

* these need to be run separately with the following commands:
  &nbsp; - gulp images
  $nbsp; - gulp fonts

### build for production

* need to run the images and fonts gulp tasks manually

### Project Automation

need to add \_# and whatever the issue number is when creating a branch. This way pull requests get automatically tagged as in progress in the project. As an example enhancement/handlebars\_#2 should send the #2 issue to In Progress in our Project
