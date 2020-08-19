# aptiTune

![Team Photo](teampic.JPG)

Here's the API for *Aptitune*, an interactive sheet-music educational experience. This repository utilizes a server powered by *express*, a database built with *MongoDB*, and *mongoose*-powered structuring. The back-end also implements authentication through Google, keeping each user's progress attached to the user in the form of badges awarded to the users.

## Architecture
Technologies:
- Database: MongoDB
- Routing: Express.js
- Mongoose
Information/Features:
- Database holds each lesson module
- Databse also holds user information and user progress on lesson modules
- Authentication
  - Through Google
  - Unique username stored with each user
  - Username serves as key, loads-in progress badges
- Notes and rhythm options held in database; server matches from input given from front-end
- Sends note output back to front-end


## Setup

yarn add express body-parser
yarn add cors path morgan mongoose

## Deployment

The api will be deployed on Heroku. 
[backend](https://aptitune-api.herokuapp.com/)

## Authors

Shane Hewitt 
Jacob Donoghue 
Sathvi Korlanda 
Gia Kim 
Kathy Cui 
Jordan Sanz 

## Acknowledgments
