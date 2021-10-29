gdjs.tape0Code = {};
gdjs.tape0Code.GDtape0Objects1= [];
gdjs.tape0Code.GDtape0Objects2= [];

gdjs.tape0Code.conditionTrue_0 = {val:false};
gdjs.tape0Code.condition0IsTrue_0 = {val:false};
gdjs.tape0Code.condition1IsTrue_0 = {val:false};


gdjs.tape0Code.eventsList0 = function(runtimeScene) {

{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tape0"), gdjs.tape0Code.GDtape0Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "effects");
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Effects", "effect", false);
}{for(var i = 0, len = gdjs.tape0Code.GDtape0Objects1.length ;i < len;++i) {
    gdjs.tape0Code.GDtape0Objects1[i].setCurrentTime(0);
}
}{for(var i = 0, len = gdjs.tape0Code.GDtape0Objects1.length ;i < len;++i) {
    gdjs.tape0Code.GDtape0Objects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "randome");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tape0"), gdjs.tape0Code.GDtape0Objects1);

gdjs.tape0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tape0Code.GDtape0Objects1.length;i<l;++i) {
    if ( gdjs.tape0Code.GDtape0Objects1[i].isEnded() ) {
        gdjs.tape0Code.condition0IsTrue_0.val = true;
        gdjs.tape0Code.GDtape0Objects1[k] = gdjs.tape0Code.GDtape0Objects1[i];
        ++k;
    }
}
gdjs.tape0Code.GDtape0Objects1.length = k;}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.05, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, " sadvb vuoh bs boasifgn");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "vbasdu nasvi nsaiv navi ns");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.15, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "kn vads iansis nvisd bfininf");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "n vj siv nsai bsinb ggas");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "da f sdni sgin gvinsngibvs");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "svj yugbsivuk bsiuvhbasuov");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.35, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "n vian visan voianvg");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "v dsoin ovihnoi b 8dbvnfban");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.45, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "as fbf hbab adbba nbbf");
}}

}


{


gdjs.tape0Code.condition0IsTrue_0.val = false;
{
gdjs.tape0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "randome");
}if (gdjs.tape0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, " asfbvf asvf dv basagb");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "randome");
}}

}


};

gdjs.tape0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tape0Code.GDtape0Objects1.length = 0;
gdjs.tape0Code.GDtape0Objects2.length = 0;

gdjs.tape0Code.eventsList0(runtimeScene);
return;

}

gdjs['tape0Code'] = gdjs.tape0Code;
