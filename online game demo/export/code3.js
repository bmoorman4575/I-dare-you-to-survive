gdjs.singleplayer_32menuCode = {};
gdjs.singleplayer_32menuCode.GDfpstextObjects1= [];
gdjs.singleplayer_32menuCode.GDfpstextObjects2= [];
gdjs.singleplayer_32menuCode.GDidutsrtextObjects1= [];
gdjs.singleplayer_32menuCode.GDidutsrtextObjects2= [];
gdjs.singleplayer_32menuCode.GDplayObjects1= [];
gdjs.singleplayer_32menuCode.GDplayObjects2= [];

gdjs.singleplayer_32menuCode.conditionTrue_0 = {val:false};
gdjs.singleplayer_32menuCode.condition0IsTrue_0 = {val:false};
gdjs.singleplayer_32menuCode.condition1IsTrue_0 = {val:false};


gdjs.singleplayer_32menuCode.eventsList0 = function(runtimeScene) {

{


gdjs.singleplayer_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.singleplayer_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.singleplayer_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fpstext"), gdjs.singleplayer_32menuCode.GDfpstextObjects1);
{for(var i = 0, len = gdjs.singleplayer_32menuCode.GDfpstextObjects1.length ;i < len;++i) {
    gdjs.singleplayer_32menuCode.GDfpstextObjects1[i].setString("FPS: " + gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}}

}


};

gdjs.singleplayer_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.singleplayer_32menuCode.GDfpstextObjects1.length = 0;
gdjs.singleplayer_32menuCode.GDfpstextObjects2.length = 0;
gdjs.singleplayer_32menuCode.GDidutsrtextObjects1.length = 0;
gdjs.singleplayer_32menuCode.GDidutsrtextObjects2.length = 0;
gdjs.singleplayer_32menuCode.GDplayObjects1.length = 0;
gdjs.singleplayer_32menuCode.GDplayObjects2.length = 0;

gdjs.singleplayer_32menuCode.eventsList0(runtimeScene);
return;

}

gdjs['singleplayer_32menuCode'] = gdjs.singleplayer_32menuCode;