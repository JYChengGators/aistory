window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script2 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

};
