const cp = require('child_process');
cp.execSync(`cd ${__dirname}; npm ci`);

const core = require('@actions/core');
const { Changelog } = require('lerna-changelog');
const { load } = require('lerna-changelog/lib/configuration');

const tagFrom = core.getInput('from', { required: true });
const tagTo = core.getInput('to', { required: true });
const storybookUrl = 'https://www.npmjs.com/settings/orest22/packages';

const config = load();

const cl = new Changelog(config);

cl.createMarkdown({ tagFrom, tagTo })
  .then((changelog) =>
    core.setOutput(
      'changelog',
      JSON.stringify(`${changelog}\n\n**Storybook:** ${storybookUrl}`)
    )
  )
  .catch((err) => core.warning(`Failed generating changelog ${err}`));
