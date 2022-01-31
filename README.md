# NEM-Boilerplate

This is a boilerplate REST API built with Node, Express and MongoDB. You can use this code to start your own project and modify it to your liking and requirements.

## Run Locally

Clone the project

```bash
  git clone https://github.com/mydubs/nem-boilerplate
```

Navigate to the project directory

```bash
  cd nem-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

**Important** -- To run this project, you will need to create a .env file in the nem-boilerplate directory and add the following values.

You can modify these values to match your desired confiruation to work with your front-end or application. There are hard-coded backup values for development environments in `./config/env/development` file - these fail safe values are only set when the `NODE_ENV` is set for development and will **not** be set for production.

There are basic validations and error/warning checks in the file `./config/env/validations.js`. These validations will ensure proper values are set for the .env and will give some basic warnings if the value isn't critical or if it's not completely sure the value is invalid. The validations will give errors and prevent the server from running if the values are completely wrong.

```bash
MONGODB_URL=mongodb://localhost:27017/
MONGODB_COLLECTION=moodringerDEV
MONGODB_USER=admin
MONGODB_PASS=password

NODE_ENV=development
JWT_SECRET=supergoodsecret

PORT=3000
APP_NAME="Test App"
FE_URL=http://localhost:4200
```

#### MongoDB Configurations

```bash
MONGODB_URL=mongodb://localhost:27017/
MONGODB_COLLECTION=your-collection-name
MONGODB_USER=mongoUser
MONGODB_PASS=mongoUserPassword
```

You should be able to set your MongoDB url to a remote server or local - though I have not tested a remote server with this yet.

#

#### App/Express Configurations

```bash
NODE_ENV=development
JWT_SECRET=supergoodsecret
PORT=3000
APP_NAME="Test App"
FE_URL=http://localhost:4200
```

Set `NODE_ENV` to `production` if you're deploying this. Otherwise it's suggested to leave it as development.

Set `JWT_SECRET` to a secure value - as this will be used to hash your JSON Web Tokens.

Set `PORT` to whatever port you want your app to run on.

Set `FE_URL` (Front End URL) to the local address of your front end to fix CORS errors.

```bash
FE_URL=http://localhost:4200
```

Set `APP_NAME` to really anything - it's only used for terminal output really. Not very important.

## API Documentation & Testing

_Coming soon..._

I'm working on using and configuring [Thunder Client](https://www.thunderclient.com/) for a seemless VSCode development expierence. This will allow routes to be tested within VSCode via the Thunder Client extension. Not to say you couldn't import the file `thunder-collection_NEM-Sample.json` into an application such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) and utilize those for testing the API you build from this. I won't official debug or support those applications though; However I do recommend trying different REST API Clients!

## Author

- [Dubs](https://www.github.com/mydubs)

## License

[MIT](https://choosealicense.com/licenses/mit/)
