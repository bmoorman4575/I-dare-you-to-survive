gdjs.evtsExt__InternetConnectivity__IsDeviceOnline = {};

gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.conditionTrue_0 = {val:false};
gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.userFunc0x12a4aa0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = typeof navigator !== "undefined" && navigator.onLine;


};
gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.userFunc0x12a4aa0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

