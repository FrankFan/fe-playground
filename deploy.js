const ghpages = require('gh-pages');
const ora = require('ora');
const spinner = ora('Deploying...').start();

ghpages.publish('dist', function(err) {
  if (err) {
    spinner.text = 'Deploy Failed';
    spinner.fail();
    return;
  }
  spinner.text = 'Deploy Succeed';
  spinner.succeed();
});
