const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err || !result.githubUser) {
    return 1;
  }
  getDataFromGithub(result.githubUser);
});

prompt.start();
