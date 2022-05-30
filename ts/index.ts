import generateName from "./generateName.ts";
import generateSkyline, { colors, windows } from "./generateSkyline.ts";
import { random } from "./deps.ts";

// UI
const select = document.querySelector.bind(document);
const ui = {
  theme: select('meta[name="theme-color"]')!,
  sun: select("#sun")!,
  skyline: select("#skyline")!,
  svg: select("svg")!,
  infoButton: select("#infoButton")!,
  name: select("#name")!,
  refreshButton: select("#refreshButton")!,
};

// Sun
const LIGHT_MODE_PREF_KEY = "light-mode";
let inDarkMode = true;

const toggleMode = () => {
  if (inDarkMode) {
    setLightMode();
  } else {
    setDarkMode();
  }
};

const setLightMode = () => {
  ui.theme.setAttribute("content", "white");
  document.body.classList.add("light-mode");
  window.localStorage.setItem(LIGHT_MODE_PREF_KEY, "");
  ui.sun.textContent = "☼";
  inDarkMode = false;
};

const setDarkMode = () => {
  ui.theme.setAttribute("content", "black");
  document.body.classList.remove("light-mode");
  window.localStorage.removeItem(LIGHT_MODE_PREF_KEY);
  ui.sun.textContent = "☽";
  inDarkMode = true;
};

const useLightMode =
  (window.localStorage.getItem(LIGHT_MODE_PREF_KEY) !== null) ||
  (window.matchMedia("(prefers-color-scheme: light)").matches);

if (useLightMode) {
  setLightMode();
} else {
  setDarkMode();
}

// Skyline
let intervalID: number | null = null;

const getIntervalMS = () => {
  const ms = 80_000 / windows.length;
  return Math.min(ms, 1000);
};

const startLights = () => {
  intervalID = setInterval(() => {
    const window = random.element(windows);
    window.setAttribute("fill", random.element(colors));
  }, getIntervalMS());
};

const stopLights = () => {
  if (intervalID === null) {
    return;
  }

  clearInterval(intervalID);
  intervalID = null;
};

const refreshSkyline = () => {
  stopLights();

  const { clientWidth, clientHeight } = ui.skyline;
  const skyline = generateSkyline({
    width: clientWidth,
    height: clientHeight,
  });

  ui.svg.replaceChildren(skyline);
  startLights();
};

// Footer
const refreshFooter = () => {
  let tag = "h2";
  if (document.body.clientWidth > 700) {
    tag = "h1";
  }

  const element = document.createElement(tag);
  element.id = "name";
  element.textContent = generateName();

  ui.name.replaceWith(element);
  ui.name = element;
};

// Generate
const refresh = () => {
  // Make sure to generate footer first, so its height will be set
  // when skyline uses its own (impacted) height to lay things out
  refreshFooter();
  refreshSkyline();
};

refresh();

// Info
const goToGitHub = () => {
  window.open("https://github.com/davidsteinberg/skylines", "_blank");
};

// User interaction
ui.sun.addEventListener("click", toggleMode);
ui.refreshButton.addEventListener("click", refresh);
ui.infoButton.addEventListener("click", goToGitHub);
