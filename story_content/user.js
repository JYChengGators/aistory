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
  function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var uuid = uuidv4();
var player = GetPlayer();
player.SetVar("SessionID", uuid);

}

window.Script2 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Email", email);
formData.append("Timestamp", timestamp);

// Save email
fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
})
.then(() => {
  // Then: retrieve progress
  return fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec?Email=" + encodeURIComponent(email));
})
.then(response => response.text())
.then(progress => {
  console.log("Retrieved progress:", progress);
  player.SetVar("UserProgress", progress);
  player.SetVar("ProgressLoaded", true); // unlocks navigation
})
.catch(error => {
  console.error("Fetch error:", error);
});


}

window.Script3 = function()
{
  function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var uuid = uuidv4();
var player = GetPlayer();
player.SetVar("SessionID", uuid);

}

window.Script4 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script5 = function()
{
  function getQueryParam(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param);
}

var player = GetPlayer();
var incomingUserID = getQueryParam("UserID");
if (incomingUserID) {
  player.SetVar("UserID", incomingUserID);
}

}

window.Script6 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module1_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script7 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "focus4_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script8 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module2_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Name", name);
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});
}

window.Script9 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module3_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Name", name);
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script10 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module4_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Name", name);
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script11 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module5_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Name", name);
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script12 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module6_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Name", name);
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script13 = function()
{
  var player = GetPlayer();
var email = player.GetVar("Email");
var progressPoint = "module7_complete";  // Change dynamically as needed
var timestamp = new Date().toISOString();

var formData = new URLSearchParams();
formData.append("Email", email);
formData.append("Progress", progressPoint);
formData.append("Timestamp", timestamp);

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});

}

window.Script14 = function()
{
  var player = GetPlayer();

var formData = new URLSearchParams();
formData.append("Email", player.GetVar("Email"));
formData.append("Progress", "module7_complete");
formData.append("Timestamp", new Date().toISOString());
formData.append("UserID", player.GetVar("UserID"));
formData.append("MatchHazard_Attempts", player.GetVar("MatchHazard_Attempts"));
formData.append("MatchHazard_Correct", player.GetVar("MatchHazard_Correct"));
formData.append("HoC_Attempts", player.GetVar("HoC_Attempts"));
formData.append("HoC_Correct", player.GetVar("HoC_Correct"));
formData.append("Costumer_Attempts", player.GetVar("Costumer_Attempts"));
formData.append("Costumer_Correct", player.GetVar("Costumer_Correct"));
formData.append("Music_Attempts", player.GetVar("Music_Attempts"));
formData.append("Music_Correct", player.GetVar("Music_Correct"));
formData.append("Home_Attempts", player.GetVar("Home_Attempts"));
formData.append("Home_Correct", player.GetVar("Home_Correct"));
formData.append("AI4Safety_Before_Reflection", player.GetVar("AI4Safety_Before_Reflection"));
formData.append("AI4Safety_After_Reflection", player.GetVar("AI4Safety_After_Reflection"));
formData.append("ModelPurpose", player.GetVar("ModelPurpose"));
formData.append("InputNeeded", player.GetVar("InputNeeded"));
formData.append("ExpectedOuput", player.GetVar("ExpectedOuput"));
formData.append("ResultsReport", player.GetVar("ResultsReport"));
formData.append("HumanRole", player.GetVar("HumanRole"));
formData.append("AI_Concerns", player.GetVar("AI_Concerns"));
formData.append("Future_AI", player.GetVar("Future_AI"));

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});
}

window.Script15 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script16 = function()
{
  function getQueryParam(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param);
}

var player = GetPlayer();
var incomingUserID = getQueryParam("PostUserID");
if (incomingUserID) {
  player.SetVar("PostUserID", incomingUserID);
}

}

window.Script17 = function()
{
  var player = GetPlayer();

var formData = new URLSearchParams();
formData.append("Email", player.GetVar("Email"));
formData.append("Progress", "module7_complete");
formData.append("Timestamp", new Date().toISOString());
formData.append("UserID", player.GetVar("UserID"));
formData.append("PostUserID", player.GetVar("PostUserID"));
formData.append("MatchHazard_Attempts", player.GetVar("MatchHazard_Attempts"));
formData.append("MatchHazard_Correct", player.GetVar("MatchHazard_Correct"));
formData.append("HoC_Attempts", player.GetVar("HoC_Attempts"));
formData.append("HoC_Correct", player.GetVar("HoC_Correct"));
formData.append("Costumer_Attempts", player.GetVar("Costumer_Attempts"));
formData.append("Costumer_Correct", player.GetVar("Costumer_Correct"));
formData.append("Music_Attempts", player.GetVar("Music_Attempts"));
formData.append("Music_Correct", player.GetVar("Music_Correct"));
formData.append("Home_Attempts", player.GetVar("Home_Attempts"));
formData.append("Home_Correct", player.GetVar("Home_Correct"));
formData.append("AI4Safety_Before_Reflection", player.GetVar("AI4Safety_Before_Reflection"));
formData.append("AI4Safety_After_Reflection", player.GetVar("AI4Safety_After_Reflection"));
formData.append("ModelPurpose", player.GetVar("ModelPurpose"));
formData.append("InputNeeded", player.GetVar("InputNeeded"));
formData.append("ExpectedOuput", player.GetVar("ExpectedOuput"));
formData.append("ResultsReport", player.GetVar("ResultsReport"));
formData.append("HumanRole", player.GetVar("HumanRole"));
formData.append("AI_Concerns", player.GetVar("AI_Concerns"));
formData.append("Future_AI", player.GetVar("Future_AI"));

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
})
.then(response => response.text())
.then(data => console.log("Response from GAS:", data))
.catch(error => console.error("Error:", error));
}

window.Script18 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script19 = function()
{
  function getQueryParam(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param);
}

var player = GetPlayer();
var incomingUserID = getQueryParam("PostUserID");
if (incomingUserID) {
  player.SetVar("PostUserID", incomingUserID);
}

}

window.Script20 = function()
{
  var player = GetPlayer();

var formData = new URLSearchParams();
formData.append("Email", player.GetVar("Email"));
formData.append("PostUserID", player.GetVar("PostUserID"));

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  body: formData
});
}

};
