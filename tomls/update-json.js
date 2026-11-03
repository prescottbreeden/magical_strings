const { createData } = require('./create-data');
const { maybe } = require('fp-tools');
const { print, parseTomlFiles, readTomlFiles } = require('./helpers');

const args = process.argv.slice(2);
const files = args.length > 0 ? args : ['albums', 'classes', 'events'];

maybe(files)
  .map(print('[ Reading TOML file(s) ]'))
  .map(readTomlFiles)
  .map(print('[ Parsing TOML file(s) ]'))
  .map(parseTomlFiles)
  .map(print('[ Writing Data ]'))
  .map(createData);
