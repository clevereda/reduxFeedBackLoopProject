# ReduxFeedBackLoopProject

This project involved creating a survey where you would give responses similar to daily reflections and it questioned how one felt in general, how well they understood, how supported they felt, accepted general comments, showed a summary of their review and then sent it to the database upon submission and gave them a chance to retake the survey upon completion.

![sample images](wireframes/booherbg.jpg).


## Description

For this we had to setup the front end and backend. I used express on the serve side, built a router file to handle incoming http requests and then finished up setting up my pool file to connect with the database. 

Instructions were given for creating a database and a table, I did this in postico and the instructions are in a database.md file also for you to replicate.

The responses to feeling, understanding, and support questions had to be number based and could not be left blank. The comment response was optional. Each page showed up in sequence, so components were used to make them.

For linking pages with each question, I used react router and set up combined reducers to handle the global state. In general, inputs were saved in local state on change and then when the user clicked next to go to a different page, the inputs stored in state were dispatched to global state.

To display the response for review, I brought in global state using the connect function. 

