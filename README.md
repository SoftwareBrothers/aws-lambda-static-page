# AWS Lambda + PUG + SCSS

This is a Boilerplate project deployable on AWS Lambda. It renders a simple HTML page using PUG templates and SCSS/SASS preprocessors.

All styles are embedded into one single HTML file. This makes them easy to deploy and share with others.

## Applications for Business Intelligence processes

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

## Deployment on AWS Lambda

If you work in an OSX environment, before deployment, you have to install npm packages using docker. This is due to the fact, that the node-sass package has to be build on the same environment as environemnt on which it will be run.

```
docker run --name node_bash --rm -i -t -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:8.10 npm install
```

To deploy on aws lambda you have to use AWS-CLI:

```
zip -r lambda.zip ./*
aws lambda update-function-code --function-name FUNCTION_NAME --zip-file fileb://lambda.zip
rm lambda.zip
```

Make sure your aws user has correct rights. Here is an IAM policy which you can use:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "lambda:UpdateFunctionCode",
                "lambda:UpdateFunctionConfiguration", 
                "lambda:InvokeFunction",
                "lambda:GetFunction"
            ],
            "Resource": ["ARN_ADDRESS_OF_YOUR_LAMBDA_FUNCTION"]
        }
    ]
}

```

To test uploaded function run:

```
aws lambda invoke --function-name FUNCTION_NAME out.html
cat out.html
```

## License

asw-lambda-statc-page is Copyright © 2018 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>


We are a software company who provides web and mobile development and UX/UI services, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available to [hire](https://softwarebrothers.co/contact).
* If you want to work for us - checkout the [career page](https://softwarebrothers.co/career).
