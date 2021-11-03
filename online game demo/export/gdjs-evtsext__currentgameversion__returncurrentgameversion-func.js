gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion = {};

gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.conditionTrue_0 = {val:false};
gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.userFunc0xd63a68 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = runtimeScene.getGame().getGameData().properties.version;
};
gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.userFunc0xd63a68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

