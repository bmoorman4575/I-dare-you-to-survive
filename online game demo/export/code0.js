gdjs.configurationCode = {};
gdjs.configurationCode.GDverObjects1= [];
gdjs.configurationCode.GDverObjects2= [];
gdjs.configurationCode.GDNewObjectObjects1= [];
gdjs.configurationCode.GDNewObjectObjects2= [];
gdjs.configurationCode.GDNewObject2Objects1= [];
gdjs.configurationCode.GDNewObject2Objects2= [];
gdjs.configurationCode.GDNewObject3Objects1= [];
gdjs.configurationCode.GDNewObject3Objects2= [];
gdjs.configurationCode.GDerrorObjects1= [];
gdjs.configurationCode.GDerrorObjects2= [];

gdjs.configurationCode.conditionTrue_0 = {val:false};
gdjs.configurationCode.condition0IsTrue_0 = {val:false};
gdjs.configurationCode.condition1IsTrue_0 = {val:false};
gdjs.configurationCode.condition2IsTrue_0 = {val:false};


gdjs.configurationCode.mapOfGDgdjs_46configurationCode_46GDverObjects1Objects = Hashtable.newFrom({"ver": gdjs.configurationCode.GDverObjects1});gdjs.configurationCode.eventsList0 = function(runtimeScene) {

{


gdjs.configurationCode.condition0IsTrue_0.val = false;
{
gdjs.configurationCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.configurationCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://bmoorman4575.github.io/I-dare-you-to-survive/ver.txt", "data-new-gr-c-s-check-loaded=", "GET", "query string", runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wait");
}}

}


{


gdjs.configurationCode.condition0IsTrue_0.val = false;
{
gdjs.configurationCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.configurationCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.configurationCode.GDverObjects1);
{for(var i = 0, len = gdjs.configurationCode.GDverObjects1.length ;i < len;++i) {
    gdjs.configurationCode.GDverObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.configurationCode.condition0IsTrue_0.val = false;
{
gdjs.configurationCode.condition0IsTrue_0.val = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs.configurationCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game code", false);
}}

}


{


gdjs.configurationCode.condition0IsTrue_0.val = false;
gdjs.configurationCode.condition1IsTrue_0.val = false;
{
gdjs.configurationCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.configurationCode.condition0IsTrue_0.val ) {
{
gdjs.configurationCode.condition1IsTrue_0.val = !(gdjs.evtTools.systemInfo.isPreview(runtimeScene));
}}
if (gdjs.configurationCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.configurationCode.GDerrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.configurationCode.GDverObjects1);
{for(var i = 0, len = gdjs.configurationCode.GDverObjects1.length ;i < len;++i) {
    gdjs.configurationCode.GDverObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.configurationCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.configurationCode.GDerrorObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game code", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.configurationCode.GDverObjects1);

gdjs.configurationCode.condition0IsTrue_0.val = false;
gdjs.configurationCode.condition1IsTrue_0.val = false;
{
gdjs.configurationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.configurationCode.mapOfGDgdjs_46configurationCode_46GDverObjects1Objects, runtimeScene, true, false);
}if ( gdjs.configurationCode.condition0IsTrue_0.val ) {
{
gdjs.configurationCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.configurationCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
}

}


};

gdjs.configurationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.configurationCode.GDverObjects1.length = 0;
gdjs.configurationCode.GDverObjects2.length = 0;
gdjs.configurationCode.GDNewObjectObjects1.length = 0;
gdjs.configurationCode.GDNewObjectObjects2.length = 0;
gdjs.configurationCode.GDNewObject2Objects1.length = 0;
gdjs.configurationCode.GDNewObject2Objects2.length = 0;
gdjs.configurationCode.GDNewObject3Objects1.length = 0;
gdjs.configurationCode.GDNewObject3Objects2.length = 0;
gdjs.configurationCode.GDerrorObjects1.length = 0;
gdjs.configurationCode.GDerrorObjects2.length = 0;

gdjs.configurationCode.eventsList0(runtimeScene);
return;

}

gdjs['configurationCode'] = gdjs.configurationCode;
