# Course & project Angular 2
Examples for the course.
Project based on webpack-Seed -->https://github.com/preboot/angular2-webpack

### Prerequisites

You need git to clone the repository.
You can get git

You must have node.js and its package manager (npm) installed.  
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Setting work environment for this course
We will need to install:

* install node.js
* install git
* install [Source tree](https://www.sourcetreeapp.com/) or GITHUB desktop.
* Download the source code from [GITHUB](https://github.com/JohnProg/Angular2example.git)
* install [webpack](https://webpack.github.io/)
$ npm install -g webpack
* install [json-server](https://github.com/typicode/json-server)
$ npm install -g json-server


### Quick start

```bash
# clone our repo
$ git clone https://github.com/JohnProg/Angular2example

# change directory to your app
$ cd ng2-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:3080](http://localhost:3080) in your browser.


# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm`
* Ensure you're running Node (`v5.x.x`+) and NPM (`3.x.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Developing

After you have installed all dependencies you can now start developing with:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:3080`.

As an alternative, you can work using Hot Module Replacement (HMR):

* `npm run start:hmr`

And you are all set! You can now modify your components on the fly without having to reload the entire page.

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.org/)) for your code with the following:

* `npm run docs`

## Run the Fake REST API

$ json-server json-server/dbProducts.json
