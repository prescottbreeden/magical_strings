const yargs = require('yargs-parser');
const { maybe, trace } = require('fp-tools');
const {
  continueIfTrue,
  print,
  parseTomlFiles,
  readTomlFiles,
} = require('./helpers');
const { createData } = require('./create-data');
const { _: files, classes, events, harpshop } = yargs(process.argv.slice(2));

console.log(files, classes);
const data = maybe(files)
  .map(continueIfTrue(classes || events || harpshop))
  .map(print('[ Reading TOML file(s) ]'))
  .map(readTomlFiles)
  .map(print('[ Parsing TOML file(s) ]'))
  .map(parseTomlFiles);

data
  .map(continueIfTrue(classes))
  .map(print('[ Writing Data ]'))
  .map(createData);
