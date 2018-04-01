exports.config = {
  namespace: 'raxxgooglemaps',
  outputTargets:[
    { type: 'dist' },
    { type: 'www' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
