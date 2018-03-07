# AWS CloudFormation Custom Resource for AWS ElasticTranscoder Preset

This custom resource is based on [cfn-lambda](https://github.com/andrew-templeton/cfn-lambda), you can see this project for more advanced configuration. Additionally, the project is using the Serverless Framework to handle cli testing and deployment.

## Install

Clone the repository. Inside the root folder:

```bash
yarn install
sls deploy
```

This command deploy the lambda helper on your default AWS region using the Serverless Framework

## Example

You can test the custom resource by running `example/preset.cform`. This only parameter is the name of the lambda function created during the installation.

## Docs

All parameters usable is the same of the parameters use by aws-sdk to [create a preset](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ElasticTranscoder.html#createPreset-property)

## Special Thanks

Mathieu Desvé <mailto:mathieu.desve@me.com> initial author of this custom resource.
