const R = require('ramda');
const fs = require('fs-extra');
const { compose, map, trace } = require('fp-tools');
const { entityName } = require('./helpers');
const { OUTPUT_DIR } = require('./file-paths');

// buildProperties :: object -> string
const buildProperties = data => {
  let startString = '';
  startString += `export const ${entityName(data)} = {\n`;

  const properties = R.keys(data.classes).reduce((acc, curr) => {
    return (acc += `  ${curr}: ${data.classes[curr]};\n`);
  }, startString);

  return properties;
};

const buildClass = data => {
  let startString = 'class: [\n  {\n';
  const classInfo = data.class.reduce((cumthingy, classthiny) => {
    return (cumthingy += R.keys(classthiny).reduce((acc, curr) => {
      return Array.isArray(classthiny[curr])
        ? acc
        : (acc += `  ${curr}: ${classthiny[curr]};\n`);
    }, ''));
  }, startString);
  const res = R.concat(classInfo, ']\n  }\n');
  console.log(res);
  return res;
};

// buildData :: object -> string
const buildData = data => {
  return [buildProperties, buildClass].map(R.applyTo(data)).join('\n');
};

// createType :: object[] -> (undefined | null)[]
const createData = map(
  R.tryCatch(
    R.converge(fs.writeFileSync, [
      compose(R.concat(R.__, '.const.js'), R.concat(OUTPUT_DIR), entityName),
      buildData,
    ]),
    e => trace('errored', e)
  )
);

module.exports = {
  createData,
};
