# Zen
Live Link: https://zen-frontend.herokuapp.com/

This frontend is deployed on Heroku.
The backend is deployed on Render and can be found on GitHub at: https://github.com/rominadouk/zen_backend
This project was engineered and designed by Romina Douk. 

## Languages: 
HTML, CSS, JavaScript, JSX

## Technologies used: 
MongoDB Atlas, Express JS, React JS, Node, React-Bootstrap, CORS, Axios, Mongoose, Moment, Postman, .env, third-party API’s

## Wireframes: 
https://whimsical.com/project-zen-wireframes-AYjN7dz9nnstmyr9r9BxpY

##Third-Party API’s used
https://www.boredapi.com/
https://api-ninjas.com/api/exercises
https://api-ninjas.com/api/jokes

## User Stories: 
As a user,  I want to be able to identify my emotions. 
As a user,  I want to be able to view my past emotions. 
As a user,  I want resources to ease my emotions. 
As a user,  I want different resources than I have already seen. 
As a user,  I want to be able to talk more in depth about my emotions.
As a user,  I want to be able to access my past logs quickly. 

## Stretch Goals: 
User Authentication
Pie Chart displaying past picked Emotions
Ability to save Emotions
Pulling from different API’s
Display a Correct Date

Purpose:
A mental health app designed to help users visualize how they have been feeling lately, provides a journal space to talk about their emotions, and provides tips, or activities users can make and participate in to improve their mental health. This app also provides a daily affirmation for users.

Process:
This app is a single-page application designed using the MERN stack. MongoDB Atlas was used for the database, Express was used for the backend, React is used for the frontend. The backend is deployed separately on render and can be found on my github, the front is deployed on Heroku. I began identifying the purpose for this project and identified functionality according to project requirements. I built out the backend using Express and created models for the data I wanted. I pulled some data from third party API’s to generate content for the Self-Care page. After testing all routes with Postman I moved onto the frontend. I created wireframes based on a mobile-first design and built out my React interface using that. After I built out all elements and made the site functional I moved on to the desktop designs and built that using media queries and React-Bootstrap. After ensuring that I reached MVP I attempted to deploy on Heroku, then I built some extra features such as date formatting. 

##Issues
When deploying, a “webpack deprecated” error displays. *Will update
User Authentication (could not Authenticate using JWT, will revisit Authentication with sessions).
useEffect will sometimes throw a dependency error, error has been fixed for now.
Some info pulled from a third-party API on the self-care page has a second delay on loading.
Important Note!! ‘Jokes’ component includes jokes pulled from a third-party API, this content is NOT moderated by me, and may contain a few jokes that are inappropriate to some. They do NOT reflect my views. This will be moderated in the future. This is included in my app for now for development purposes only.

## Future Updates: 
Color Scheme/Theme Picker
User Authentication 
The ability to save emotions, and view them in a Pie Chart. 
Correctly displays the current time. 
Jokes will be moderated
More personalization
Exercises will be changed to more simple, yoga exercises. 

##Installation Instructions (Fork this Repo)
Fork the Zen Backend and Zen Frontend repositories on GitHub.
Clone the forked repositories to your local machine using Git.
Navigate to the backend directory in your terminal and run npm install to install all the required dependencies.
Create a .env file in the root directory of the backend and set the environment variable to access MongoDB Atlas. If you want to access the third-party API’s you will need to create an account and obtain your API key for https://api-ninjas.com/. The API https://www.boredapi.com/ does not require an API key. Hide all API keys in a .env file. 
Run the backend server by navigating into the ‘controllers’ file and running the command ‘nodemon server.js’.
Open a new terminal window (keep the backend running at the same time) and navigate to the zen_frontend.
Run npm install to install all dependencies for the React frontend.
Run the frontend server by running the command npm start. The frontend should open in your default browser at http://localhost:3000 and you should see the Zen app running.

Note: The above steps assume you have Node JS and npm installed.

