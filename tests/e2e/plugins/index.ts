import TypeScriptPreprocessor from './ts-preprocessor';

export default (on) => {
  on('file:preprocessor', TypeScriptPreprocessor);
};
