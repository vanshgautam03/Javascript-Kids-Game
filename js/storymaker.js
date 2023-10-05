// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const noun1Display = document.querySelector("#noun1Display");
const verbDisplay = document.querySelector("#verbDisplay");
const adjectiveDisplay = document.querySelector("#adjectiveDisplay");
const noun2Display = document.querySelector("#noun2Display");
const settingDisplay = document.querySelector("#settingDisplay");

// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");
const reset = document.querySelector("#reset");

// Variables for pre-defined arrays
let noun1Array = ["Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The elephant", "The cat"];
let verbArray = ["ate", "sat on", "danced with", "saw", "Kissed", "doesn't like"];
let adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes", "in my house"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

// contants for student id and name 
const studentID = document.querySelector("#studentID");
const studentName = document.querySelector("#studentName");
const myId = 200544016;
const myName = "Vansh Kumar Gautam";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Count++;
    // if-else to change count setting
    if (noun1Count >= noun1Array.length) {
        noun1Count = 0;
    }
    noun1Display.innerHTML = noun1Array[noun1Count];
}

function verb_on_click() {
    verbCount++ ;
    if (verbCount >= verbArray.length) {
        verbCount = 0;
    }
    verbDisplay.innerHTML = verbArray[verbCount];
}

function adjective_on_click() {
    adjectiveCount++;
    if (adjectiveCount >= adjectiveArray.length) {
        adjectiveCount = 0;
    }
    adjectiveDisplay.innerHTML = adjectiveArray[adjectiveCount];
}

function noun2_on_click() {
    noun2Count++;
    if (noun2Count >= noun2Array.length) {
        noun2Count = 0;
    }
    noun2Display.innerHTML = noun2Array[noun2Count];
}

function setting_on_click() {
    settingCount++;
    if (settingCount >= settingArray.length) {
        settingCount = 0;
    }
    settingDisplay.innerHTML = settingArray[settingCount];
}

// concatenate the user story and display
function playback_on_click() {
    story.innerHTML = noun1Array[noun1Count]+" "+verbArray[verbCount]+" "+adjectiveArray[adjectiveCount]+" "+noun2Array[noun2Count]+" "+settingArray[settingCount];
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    let randomNoun1 = Math.floor(Math.random() * noun1Array.length);
    let randomVerb = Math.floor(Math.random() * verbArray.length);
    let randomAdjective = Math.floor(Math.random() * adjectiveArray.length);
    let randomNoun2 = Math.floor(Math.random() * noun2Array.length);
    let randomSetting = Math.floor(Math.random() * settingArray.length);
    noun1Display.innerHTML = noun1Array[randomNoun1];
    verbDisplay.innerHTML = verbArray[randomVerb];
    adjectiveDisplay.innerHTML = adjectiveArray[randomAdjective];
    noun2Display.innerHTML = noun2Array[randomNoun2];
    settingDisplay.innerHTML = settingArray[randomSetting];
    story.innerHTML = noun1Array[randomNoun1]+" "+verbArray[randomVerb]+" "+adjectiveArray[randomAdjective]+" "+noun2Array[randomNoun2]+" "+settingArray[randomSetting];
}

// reset button to clear all the display
function reset_on_click() {
    noun1Display.innerHTML = "";
    verbDisplay.innerHTML = "";
    adjectiveDisplay.innerHTML = "";
    noun2Display.innerHTML = "";
    settingDisplay.innerHTML = "";
    story.innerHTML = "";
}

/* Event Listeners
-------------------------------------------------- */
// Event listeners for main buttons
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
// Event Listeners for final buttons
playbackButton.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
reset.addEventListener("click", reset_on_click);
// Event Listener for student id and name
studentID.innerHTML = myId;
studentName.innerHTML = myName;