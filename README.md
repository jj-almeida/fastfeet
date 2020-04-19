<h1 align="center">
    <img alt="Fastfeet App" src="https://github.com/almeida-joseantonio/fastfeet/blob/master/frontend/src/assets/fastfeet-logo.png" />
</h1>

<h3 align="center">
  A fictional app to manage deliveries
</h3>

## Technologies
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
  * [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  * [Redux](https://redux.js.org/)
* [React Native](https://reactnative.dev/)

## Requirements
To run this application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Docker](https://https://www.docker.com/) (Optional)
* [Yarn](https://yarnpkg.com/) (Optional)

## How to run this project
To run this project you'll need a Postgres database instance and a Redis instance. Afther that, fill the .env file with your credentials.

The mobile app is available for Android.

To run this project, follow the next steps in your terminal:

```bash
$ git clone https://github.com/almeida-joseantonio/fastfeet

$ cd fastfeet

# Install dependencies for backend
$ cd backend
$ yarn

$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

# Run the backend server for the development environment
$ yarn dev

# Run the process to manage e-mail sending:
$ yarn queue 

# Install dependencies for frontend
$ cd frontend
$ yarn

# Run the frontend server for the development environment
$ yarn start

# Install dependencies for mobile
$ cd mobile
$ yarn

# Run the app
$ react-native run-android

# Run the mobile server for the development environment
$ react-native start
```