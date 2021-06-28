const TypeScriptPreprocessor = require('./ts-preprocessor');

module.exports = (on) => {
  on('file:preprocessor', TypeScriptPreprocessor);
};
