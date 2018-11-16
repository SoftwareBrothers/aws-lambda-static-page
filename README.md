# AWS Lambda + PUG + SCSS

This is a Boilerplate project deployable on AWS Lambda. It renders a simple HTML page using PUG templates and SCSS/SASS preprocessors.

All styles are embedded into one single HTML file. This makes them easy to deploy and share with others.

## Application in Business Intelligence

The most obvious application for this way of rendering files is to compute and print various reports for (business intelligence)[https://en.wikipedia.org/wiki/Business_intelligence]: sales, production. Those reports can be easily shared among all team members.

## Running it

```bash
npm install
npm bin/render.js > out.html
```

## Tests

To run automated tests simply run:

```
npm test
```

## License

MIT