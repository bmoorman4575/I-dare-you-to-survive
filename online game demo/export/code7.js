gdjs.PauseCode = {};
gdjs.PauseCode.GDpausedObjects1= [];
gdjs.PauseCode.GDpausedObjects2= [];
gdjs.PauseCode.GDexittolauncherObjects1= [];
gdjs.PauseCode.GDexittolauncherObjects2= [];
gdjs.PauseCode.GDquitgameObjects1= [];
gdjs.PauseCode.GDquitgameObjects2= [];
gdjs.PauseCode.GDoptionsObjects1= [];
gdjs.PauseCode.GDoptionsObjects2= [];
gdjs.PauseCode.GDresumeObjects1= [];
gdjs.PauseCode.GDresumeObjects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.PauseCode.GDresumeObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.PauseCode.GDresumeObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDquitgameObjects1Objects = Hashtable.newFrom({"quitgame": gdjs.PauseCode.GDquitgameObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDquitgameObjects1Objects = Hashtable.newFrom({"quitgame": gdjs.PauseCode.GDquitgameObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.PauseCode.GDresumeObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDquitgameObjects1Objects = Hashtable.newFrom({"quitgame": gdjs.PauseCode.GDquitgameObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDexittolauncherObjects1Objects = Hashtable.newFrom({"exittolauncher": gdjs.PauseCode.GDexittolauncherObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDexittolauncherObjects1Objects = Hashtable.newFrom({"exittolauncher": gdjs.PauseCode.GDexittolauncherObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDexittolauncherObjects1Objects = Hashtable.newFrom({"exittolauncher": gdjs.PauseCode.GDexittolauncherObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDoptionsObjects1Objects = Hashtable.newFrom({"options": gdjs.PauseCode.GDoptionsObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDoptionsObjects1Objects = Hashtable.newFrom({"options": gdjs.PauseCode.GDoptionsObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDoptionsObjects1Objects = Hashtable.newFrom({"options": gdjs.PauseCode.GDoptionsObjects1});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 0.2, 0.2, "", 0, 1, 0.2, 0.2, 0.5, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.PauseCode.GDresumeObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDresumeObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].setColor("0;182;230");
}
}{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.PauseCode.GDresumeObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDresumeObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitgame"), gdjs.PauseCode.GDquitgameObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDquitgameObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDquitgameObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDquitgameObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDquitgameObjects1[i].setColor("0;182;230");
}
}{for(var i = 0, len = gdjs.PauseCode.GDquitgameObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDquitgameObjects1[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitgame"), gdjs.PauseCode.GDquitgameObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDquitgameObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDquitgameObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDquitgameObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDquitgameObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PauseCode.GDquitgameObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDquitgameObjects1[i].setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.PauseCode.GDresumeObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitgame"), gdjs.PauseCode.GDquitgameObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDquitgameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exittolauncher"), gdjs.PauseCode.GDexittolauncherObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDexittolauncherObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDexittolauncherObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDexittolauncherObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDexittolauncherObjects1[i].setColor("0;182;230");
}
}{for(var i = 0, len = gdjs.PauseCode.GDexittolauncherObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDexittolauncherObjects1[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exittolauncher"), gdjs.PauseCode.GDexittolauncherObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDexittolauncherObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "launcher", true);
}{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exittolauncher"), gdjs.PauseCode.GDexittolauncherObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDexittolauncherObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDexittolauncherObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDexittolauncherObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDexittolauncherObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PauseCode.GDexittolauncherObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDexittolauncherObjects1[i].setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.PauseCode.GDoptionsObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDoptionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDoptionsObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDoptionsObjects1[i].setColor("0;182;230");
}
}{for(var i = 0, len = gdjs.PauseCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDoptionsObjects1[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.PauseCode.GDoptionsObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDoptionsObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDoptionsObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDoptionsObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PauseCode.GDoptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDoptionsObjects1[i].setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.PauseCode.GDoptionsObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDoptionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "launcher", true);
}{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDpausedObjects1.length = 0;
gdjs.PauseCode.GDpausedObjects2.length = 0;
gdjs.PauseCode.GDexittolauncherObjects1.length = 0;
gdjs.PauseCode.GDexittolauncherObjects2.length = 0;
gdjs.PauseCode.GDquitgameObjects1.length = 0;
gdjs.PauseCode.GDquitgameObjects2.length = 0;
gdjs.PauseCode.GDoptionsObjects1.length = 0;
gdjs.PauseCode.GDoptionsObjects2.length = 0;
gdjs.PauseCode.GDresumeObjects1.length = 0;
gdjs.PauseCode.GDresumeObjects2.length = 0;

gdjs.PauseCode.eventsList0(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
