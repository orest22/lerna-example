const cp = require('child_process');
cp.execSync(`cd ${__dirname}; npm ci`);

const core = require('@actions/core');
// const github = require('@actions/github');
const { Changelog } = require('lerna-changelog');
const { load } = require('lerna-changelog/lib/configuration');

// const tagTo = github.context.payload.pull_request.head.sha;
// const tagFrom = github.context.payload.pull_request.base.sha;

const config = load();

const cl = new Changelog(config);

cl.createMarkdown()
  .then((changelog) => core.setOutput('changelog', JSON.stringify(changelog)))
  .catch((err) => core.warning(`Failed generating changelog ${err}`));
