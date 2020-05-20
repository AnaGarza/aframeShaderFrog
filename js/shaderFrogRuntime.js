//https://github.com/DelvarWorld/ShaderFrog-Runtime
var runtime = new ShaderFrogRuntime();
var clock = new THREE.Clock();

var target = document.querySelector('#target');

runtime.load( 'Neurons.json', function( shaderData ) {
  // Get the Three.js material you can assign to your objects
  var material = runtime.get( shaderData.name );

  target.getObject3D('mesh').material = material;
});