
const { writeFileSync } = require('fs');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const pkg = require('../package.json');

async function updatePeerDependencies() {
  try {
    const AIRBNB_CONFIG_PACKAGE = 'eslint-config-airbnb';
    const airbnbDependency = `${AIRBNB_CONFIG_PACKAGE}@${pkg.dependencies[AIRBNB_CONFIG_PACKAGE]}`;
    const { stdout } = await exec(`npm info ${airbnbDependency} peerDependencies --json`);

    pkg['peerDependencies'] = JSON.parse(stdout);

    writeFileSync('./package.json', JSON.stringify(pkg, null, 2), 'utf8');

    console.log('Updated peerDependencies to the following:\n', stdout);
  }

  catch (err) {
    console.error(err);
  }
}

updatePeerDependencies();
