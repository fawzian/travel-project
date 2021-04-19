# Travel Tracker

- **Author:** Fawzia Nur
- **Link to Live Site:** https://salty-springs-56460.herokuapp.com/


## Project Summary

This app allows you to keep track of any activites you are interested in partaking in while traveling. It also allows you to easily view whether or not you have booked each activity.

## Technology Used

NodeJS
HTML
CSS
Javascript
Express

## Models

Activity Model:
 - name => String, required
 - description => String, required
 - booked => Boolean
 - username: String

User Model:
 - username => String, unique, required
 - password => String, required


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/activities" | List all Samples (activities/index.ejs) |
|GET| "/activities/:id | Display single Sample (activities/show.ejs)|
|GET| "/activities/new | Render form for New Sample (activities/new.ejs)|
|POST| "/activities" | Uses Form Submission to Create new Sample |
|GET| "/activities/:id/edit" | Render form to edit Sample (activities/edit.ejs)|
|PUT| "/activities/:id" | Uses Form Submission to edit Sample |
|DELETE| "/activities/:id" | Delete a particular Sample |


## Challenges


## Existing Bugs

 - create new activity and view all activities button is visible on the edit page 