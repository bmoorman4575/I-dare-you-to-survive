var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let debuggerTools;
    (function(debuggerTools2) {
      debuggerTools2.pause = function(runtimeScene) {
        runtimeScene.getGame().pause(true);
      };
      debuggerTools2.enableDebugDraw = function(runtimeScene, enableDebugDraw2, showHiddenInstances, showPointsNames, showCustomPoints) {
        runtimeScene.enableDebugDraw(enableDebugDraw2, showHiddenInstances, showPointsNames, showCustomPoints);
      };
    })(debuggerTools = evtTools2.debuggerTools || (evtTools2.debuggerTools = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=debuggertools.js.map
