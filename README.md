## To run project
1. Git clone project
2. Run `npm install` to fetch NPM dependencies
3. Run `npm run start` to run the app or `npm run dev` to run in dev environment with `nodemon`. Note that you will need to have installed `nodemon` on your machine as [I installed it globally](https://www.npmjs.com/package/nodemon). EDIT: This is no longer necessary as I have made this a `dev-dependency` using the NPM `--save-dev` flag, so you should be able to just run it with `npm run dev` without needing to have installed `nodemon` globally.

## Depends on
- NPM packages: 
    - `postman-request`: to make HTTP API requests
    - `dotenv`: to manage secrets and env vars
    - `express`: web server
    - `hbs`: templating engine
- Valid access tokens for MapBox API (50,000 requests per month limit) as well as Weather Stack API (250 requests per month limit). Currently using `dotenv` package and storing it locally in a `.env` config file.

## Key lessons
- How to use `Express.js` to build a web server that can serve files (HTML, CSS, JS), JSON and other assets like images.
- How to use `hbs` to create dynamic pages with templating. How to use `partials` to create reusable HTML components.
- Basic CSS styling to make app look better. 
    - Saw how a little `,` can make a big difference.
    - `padding: 0, 16px;`: this comma stuffed up the style of the entire page when viewed on smaller devices. Took some time to find it.
- Building a HTTP JSON endpoint with Express.
- Using `ES6` default function params to prevent the app crashing in certain situations by providing fallback default values.
- Passing data from a browser form to our JSON endpoint using query strings.
- More practice with asynchronous Node.js, callback chaining and error handling
- Distinguish between server side JS and client side JS and understand some of the differences.
- Using Fetch API (only available in browser not Node.js) to make browser HTTP requests from your client side JS.
- Setting up SSH keys to authenticate with TP services like GitHub and Heroku.
- How to make several changes to code to prepare it to be deployed to Heroku + how to deploy on Heroku without a `Procfile`
- How to use the NPM `package.json` script feature to create scripts for running in Prod and in Dev environment using `nodemon`
- Best practice of avoiding global NPM modules where possible, to make it easier for other people to collaborate with you on a project.

## Demo site
https://sunny-weather-forecast-app.herokuapp.com/

For this to work, remember it relies on 2 config vars setup on Heroku.
https://devcenter.heroku.com/articles/config-vars 