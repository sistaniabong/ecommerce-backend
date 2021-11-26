# ecommerce-backend

## Description
--------------
 A mysql database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv.

This repo consists of backend server for an e-commerce application. This application uses Node.js, Express, Sequalize and MySQL.

The following GIF displays the app's functionality:

![demo](./images/ecommerce-insomnia.gif)


## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Contributing](#contributing)
- [Review & Deploy](#review-and-deploy)
- [Questions](#questions)


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```


## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
---
```bash
npm i

```

## License
---
This application is licensed under:

- [MIT License](https://choosealicense.com/licenses/mit/)


## Usage
---
Run the following command at the root folder of project:

```bash
Create the schema: 
    mysql -u root -p
    Enter PW when prompted
    source db/schema.sql;
    quit
Seed the database:
    node seeds/index.js
Start the server:
    npm start
```

The following GIF displays the app's setup:

![setup](./images/setup.gif)


## Contributing
---
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Review and Deploy
---
To review the code, please go to the [repository](https://github.com/sistaniabong/ecommerce-backend)

Please see below links to see demo videos:
https://drive.google.com/drive/folders/1X3U9h2M4epbYHh9MtBx0ortYZnOz2ifn

https://drive.google.com/drive/folders/1X3U9h2M4epbYHh9MtBx0ortYZnOz2ifn


## Questions
---
If you have any questions, please feel free to check out my github account and email me at the email address below:

Github account: [sistaniabong](https://github.com/sistaniabong)

Email address: sistaniawibonele@gmail.com