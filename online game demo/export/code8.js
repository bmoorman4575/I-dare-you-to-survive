gdjs.DeathCode = {};
gdjs.DeathCode.GDyoudiedObjects1= [];
gdjs.DeathCode.GDyoudiedObjects2= [];
gdjs.DeathCode.GDdeathreasonObjects1= [];
gdjs.DeathCode.GDdeathreasonObjects2= [];
gdjs.DeathCode.GDrealdeathreasonObjects1= [];
gdjs.DeathCode.GDrealdeathreasonObjects2= [];
gdjs.DeathCode.GDreatrtObjects1= [];
gdjs.DeathCode.GDreatrtObjects2= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};
gdjs.DeathCode.condition2IsTrue_0 = {val:false};


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("deathreason"), gdjs.DeathCode.GDdeathreasonObjects1);
gdjs.copyArray(runtimeScene.getObjects("realdeathreason"), gdjs.DeathCode.GDrealdeathreasonObjects1);
gdjs.copyArray(runtimeScene.getObjects("reatrt"), gdjs.DeathCode.GDreatrtObjects1);
gdjs.copyArray(runtimeScene.getObjects("youdied"), gdjs.DeathCode.GDyoudiedObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDrealdeathreasonObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDrealdeathreasonObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "deathsound.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.DeathCode.GDyoudiedObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDyoudiedObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.DeathCode.GDdeathreasonObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDdeathreasonObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.DeathCode.GDrealdeathreasonObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDrealdeathreasonObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.DeathCode.GDreatrtObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDreatrtObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadein");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("youdied"), gdjs.DeathCode.GDyoudiedObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDyoudiedObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDyoudiedObjects1[i].setOpacity(gdjs.DeathCode.GDyoudiedObjects1[i].getOpacity() + (6));
}
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "fadein");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("deathreason"), gdjs.DeathCode.GDdeathreasonObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDdeathreasonObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDdeathreasonObjects1[i].setOpacity(gdjs.DeathCode.GDdeathreasonObjects1[i].getOpacity() + (6));
}
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.8, "fadein");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("realdeathreason"), gdjs.DeathCode.GDrealdeathreasonObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDrealdeathreasonObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDrealdeathreasonObjects1[i].setOpacity(gdjs.DeathCode.GDrealdeathreasonObjects1[i].getOpacity() + (6));
}
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fadein");
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reatrt"), gdjs.DeathCode.GDreatrtObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDreatrtObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDreatrtObjects1[i].setOpacity(gdjs.DeathCode.GDreatrtObjects1[i].getOpacity() + (6));
}
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
gdjs.DeathCode.condition1IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.DeathCode.condition0IsTrue_0.val ) {
{
gdjs.DeathCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}}
if (gdjs.DeathCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game code", false);
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDyoudiedObjects1.length = 0;
gdjs.DeathCode.GDyoudiedObjects2.length = 0;
gdjs.DeathCode.GDdeathreasonObjects1.length = 0;
gdjs.DeathCode.GDdeathreasonObjects2.length = 0;
gdjs.DeathCode.GDrealdeathreasonObjects1.length = 0;
gdjs.DeathCode.GDrealdeathreasonObjects2.length = 0;
gdjs.DeathCode.GDreatrtObjects1.length = 0;
gdjs.DeathCode.GDreatrtObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
