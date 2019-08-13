# FriendFinder

This website will take in a survey of opinions from a user, and will choose for them another like minded individual from the database to be their new best friend. The site is being hosted using express on Heroku, and is capable of routing the user and their data.

### Prerequisites

The following npm packages are required for this program:

express: "^4.17.1"<br/>
path: "^0.12.7"

## Site Operation

The site was designed to be simple for the user to navigate.

Once the user is on the home page located at: https://thawing-fortress-65413.herokuapp.com they will need to click on the Go to Survey button.

![Start](/app/data/images/1.png?raw=true "Home Page")

This will load up the page with the survey where the can input their name, a link to a picture, and answer questions about themselves on a 1 to 5 scale.

![Survey](/app/data/images/2.png?raw=true "Take our Survey")

Once the user has filled out the survey, they can click on the Submit button, and they will be matched with another user.

![Match](/app/data/images/3.png?raw=true "Who will it Be?")

The user will then be shown who they matched with, in a pop up modal showing a picture of their new best friend, along with their name. Other users will now be able to match with this user.

Note: A user will never match with themselves