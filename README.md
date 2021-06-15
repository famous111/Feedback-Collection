# MERN-based Email Feedback Collection Application
This is a web application for survey distribution and feedback collection. A registered user can create a survey, send out the survey via email and check feedback at the cost of one credit.

- frontend 
  - React: Create pages for login, survey creation, survey feedback dashboard etc.
  - Redux: Use reducers to manage states and handle asynchronous request
  - Passport, Stripe, Sendgrid: Integrate Google account authentication, credit purchase via credit or debit card, bulk email service into the application
  
- backend
  - Express: handle HTTP requests
  - Mongoose: store and update the information of user and survey in mongoDB
  
  
## Usage
- Run the application
  - Production mode:
    try the product [demo](https://murmuring-basin-50574.herokuapp.com) deployed on Heroku platform (You might need to wait for 30 seconds due to dyno sleeping)
  - Development mode:
    Pull this repo. In the working directory and client folder, run `npm install`. Create a file `config/dev.js`, copy the text in `config/prod.js` and replace the values. In the working directory, run `npm run dev`. Then visit http://localhost:3000. 
 
- Login
  Click `Login WIth Google`

- Purchase credits
  The initial credit is zero for a new user. Clike `ADD CREDITS` to purchase credits with card. A fake card number in test mode could be 4242 4242 4242 4242.

- Create a survey
  Click the `+` button at the right-bottom column. Fill the blanks following instruction.

- Check feedback
  After successfully sending out a survey, you will see a dashboard showing the survey feedbacks. Click the choice (Yes/No) in the received email. The feedback status on dashboard should be updated within 30 seconds.
