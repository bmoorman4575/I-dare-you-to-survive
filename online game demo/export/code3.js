gdjs.MenuCode = {};
gdjs.MenuCode.GDfpstextObjects1= [];
gdjs.MenuCode.GDfpstextObjects2= [];
gdjs.MenuCode.GDidutsrtextObjects1= [];
gdjs.MenuCode.GDidutsrtextObjects2= [];
gdjs.MenuCode.GDplayObjects1= [];
gdjs.MenuCode.GDplayObjects2= [];
gdjs.MenuCode.GDfadeObjects1= [];
gdjs.MenuCode.GDfadeObjects2= [];
gdjs.MenuCode.GDBTMgamesObjects1= [];
gdjs.MenuCode.GDBTMgamesObjects2= [];
gdjs.MenuCode.GDcreditsObjects1= [];
gdjs.MenuCode.GDcreditsObjects2= [];
gdjs.MenuCode.GDverObjects1= [];
gdjs.MenuCode.GDverObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.MenuCode.GDplayObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BTMgames"), gdjs.MenuCode.GDBTMgamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.MenuCode.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.MenuCode.GDverObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fade");
}{for(var i = 0, len = gdjs.MenuCode.GDBTMgamesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBTMgamesObjects1[i].setPosition(gdjs.evtTools.window.getWindowInnerWidth() / 5,gdjs.evtTools.window.getWindowInnerHeight() / 5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\sounds\\IDYS Theme.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDfadeObjects1[i].setPosition(-(610),-(275));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.MenuCode.GDBTMgamesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBTMgamesObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDverObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDverObjects1[i].setString(gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fade");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BTMgames"), gdjs.MenuCode.GDBTMgamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.MenuCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDfadeObjects1[i].setOpacity(gdjs.MenuCode.GDfadeObjects1[i].getOpacity() - (1));
}
}{for(var i = 0, len = gdjs.MenuCode.GDBTMgamesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBTMgamesObjects1[i].setOpacity(gdjs.MenuCode.GDBTMgamesObjects1[i].getOpacity() - (2));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fpstext"), gdjs.MenuCode.GDfpstextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDfpstextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDfpstextObjects1[i].setString("FPS: " + gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (0.3));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fade"));
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BTMgames"), gdjs.MenuCode.GDBTMgamesObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBTMgamesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBTMgamesObjects1[i].setOpacity(gdjs.MenuCode.GDBTMgamesObjects1[i].getOpacity() + (2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.MenuCode.GDplayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game code", false);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDfpstextObjects1.length = 0;
gdjs.MenuCode.GDfpstextObjects2.length = 0;
gdjs.MenuCode.GDidutsrtextObjects1.length = 0;
gdjs.MenuCode.GDidutsrtextObjects2.length = 0;
gdjs.MenuCode.GDplayObjects1.length = 0;
gdjs.MenuCode.GDplayObjects2.length = 0;
gdjs.MenuCode.GDfadeObjects1.length = 0;
gdjs.MenuCode.GDfadeObjects2.length = 0;
gdjs.MenuCode.GDBTMgamesObjects1.length = 0;
gdjs.MenuCode.GDBTMgamesObjects2.length = 0;
gdjs.MenuCode.GDcreditsObjects1.length = 0;
gdjs.MenuCode.GDcreditsObjects2.length = 0;
gdjs.MenuCode.GDverObjects1.length = 0;
gdjs.MenuCode.GDverObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
