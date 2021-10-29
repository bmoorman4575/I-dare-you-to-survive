gdjs.evtsExt__CameraShake__StopShaking = {};

gdjs.evtsExt__CameraShake__StopShaking.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__StopShaking.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__StopShaking.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__CameraShake__StopShaking.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__StopShaking.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__StopShaking.condition0IsTrue_0.val = gdjs.evtsExt__CameraShake__IsShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__CameraShake__StopShaking.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress").setNumber(-(1));
}}

}


};

gdjs.evtsExt__CameraShake__StopShaking.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__StopShaking.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

