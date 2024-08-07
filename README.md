# NoSQL-Social-Network-API
Module 18 Challenge

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [License](#license)

## Description

### User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation
* Clone this repository to your local machine.

* Right click on server.js and select "Open in Integrated Terminal"

* There should be a package.json file included. To install the various npm packages used run the command
```md
npm i
```
You should download Insomnia or postman to test the app

## Usage

See video below for walkthrough.

https://drive.google.com/file/d/1F8nQ2F8s9weh7Z3iP6FFddH47jHfzoc4/view?usp=sharing

Run the following command to get the server running
```md
node server.js
``` 
Then use Insomnia to test the various functions.

## Credits

TA Nick for helping!