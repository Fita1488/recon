const Jetpack = require('fs-jetpack');
const {CONFIG_FILE_NAME} = require('./shared');

/**
 * Generate a full config for a working directory and any user config
 * - Will manage any sensible merging of configs as complexity grows
 */
function getConfig(uc, {cwd = process.cwd()} = {}) {
  // TODO: Search for definition within package.json
  const rc = Jetpack.cwd(cwd).read(CONFIG_FILE_NAME, 'json');
  if (!rc) {
    throw new Error(
      "Oops! Doesn't look like there is a valid .reconrc file" +
        'defined in your project root. See: https://github' +
        '.com/lystable/recon/tree/master/packages/recon-config for info.'
    ); // eslint-disable-line max-len
  }
  return Object.assign({}, rc, uc);
}

module.exports = getConfig;
