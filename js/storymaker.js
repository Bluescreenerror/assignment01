// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns = ["dog", "car", "robot", "apple"];
const verbs = ["runs", "hits", "jumps", "flies"];
const adjectives = ["red", "quick", "happy", "bright"];
const settings = ["in the park", "at the beach", "on the moon", "in a dream"];

// Variables to store user selections or random story elements
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";

/* Functions */
// Function to handle noun1 button click
function noun1_on_click() {
  selectedNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  choosenNoun1.textContent = selectedNoun1;
}

// Function to handle verb button click
function verb_on_click() {
  selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
  choosenVerb.textContent = selectedVerb;
}

// Function to handle adjective button click
function adjective_on_click() {
  selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  choosenAdjective.textContent = selectedAdjective;
}

// Function to handle noun2 button click
function noun2_on_click() {
  selectedNoun2 = nouns[Math.floor(Math.random() * nouns.length)];
  choosenNoun2.textContent = selectedNoun2;
}

// Function to handle setting button click
function setting_on_click() {
  selectedSetting = settings[Math.floor(Math.random() * settings.length)];
  choosenSetting.textContent = selectedSetting;
}

// Function to concatenate the user story and display
function playback_on_click() {
  const userStory = `The ${selectedNoun1} ${selectedVerb} ${selectedAdjective} over the ${selectedNoun2} ${selectedSetting}.`;
  storyParagraph.textContent = userStory;
}

// Function to grab random elements from arrays, concatenate, and display
function random_on_click() {
  const randomStory = `The ${nouns[Math.floor(Math.random() * nouns.length)]} ${
    verbs[Math.floor(Math.random() * verbs.length)]
  } ${adjectives[Math.floor(Math.random() * adjectives.length)]} over the ${
    nouns[Math.floor(Math.random() * nouns.length)]
  } ${settings[Math.floor(Math.random() * settings.length)]}.`;
  storyParagraph.textContent = randomStory;
}

/* Event Listeners */
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
