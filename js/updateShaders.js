 AFRAME.registerComponent('update-shaders', {
  tick: function (t) {
    runtime.updateShaders( clock.getElapsedTime() );
  }
});