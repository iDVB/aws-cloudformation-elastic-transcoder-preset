import AWS from 'aws-sdk';

const elastictranscoder = new AWS.ElasticTranscoder();

export const Create = (params, reply) => {
  elastictranscoder.createPreset(params, (err, data) => {
    if (err) {
      console.error(err);
      reply(err);
    } else  {
      reply(null, data.Preset.Id, { "Arn": data.Preset.Arn });
    }
  });
};

export const Update = (physicalId, params, oldParams, reply) => {
  Create(params, (err, newPhysicalId, data) => {
    if (err) return reply(err);
    Delete(physicalId, params, (err) => {
      reply(err, newPhysicalId, data);
    });
  });
};

export const Delete = (physicalId, params, reply) => {
  var p = {
    Id: physicalId
  };
  elastictranscoder.deletePreset(p, (err, data) => {
    if (err) {
      console.error(err)
      if (err.code === 'ResourceNotFoundException') {
        err = null
      }
    }
    reply(err, physicalId);
  });
};