const CfnLambda = require('cfn-lambda');
import AWS from 'aws-sdk';
import { Create, Update, Delete } from './Preset';
import Schema from './schema.json';

module.exports.presetHandler = (event, context) => {
  const ElasticTranscoderPreset = CfnLambda({
    Create: Create,
    Update: Update,
    Delete: Delete,
    Schema,
  });
  AWS.config.region = currentRegion(context);
  return ElasticTranscoderPreset(event, context);
};

const currentRegion = context => {
  return context.invokedFunctionArn.match(/^arn:aws:lambda:(\w+-\w+-\d+):/)[1];
};
