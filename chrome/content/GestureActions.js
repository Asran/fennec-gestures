/*
  Assigning gestures to some specific browser actions:

    Star: add to favorite
    X: close tab
    Diagonal bottom-down: new tab
    Rotate clockwise/anticlockwise: zoom in/zoom out
    Left/Right: back/forward in history
    Up/Down: previous/next tab

*/

window.addEventListener("Gesture_Star", function() { BrowserUI.doCommand("cmd_star"); }, false);
window.addEventListener("Gesture_X", function() { BrowserUI.closeTab(Browser.selectedTab); }, false);
window.addEventListener("Gesture_DiagonalC", function() { BrowserUI.newTab(); }, false);
window.addEventListener("Gesture_RotateClockwise", function() { Browser.canvasBrowser.zoom(-1) }, false);
window.addEventListener("Gesture_RotateAnticlock", function() { Browser.canvasBrowser.zoom( 1) }, false);
window.addEventListener("Gesture_Left", function() { BrowserUI.doCommand("cmd_back"); }, false);
window.addEventListener("Gesture_Right", function() { BrowserUI.doCommand("cmd_forward"); }, false);

window.addEventListener("Gesture_Up", function() {
  // Go to previous tab
  let i, goal;
  for (i = 0; i < Browser._tabs.length; i++) {
    if (Browser.selectedTab == Browser._tabs[i]) {
      goal = i - 1;
      break;
    }
  }
  if (goal < 0) goal = Browser._tabs.length - 1;

  Browser.selectedTab = Browser._tabs[goal];
}, false);

window.addEventListener("Gesture_Down", function() {
  //Go to next tab
  let i, goal;
  for (i = 0; i < Browser._tabs.length; i++) {
    if (Browser.selectedTab == Browser._tabs[i]) {
      goal = i + 1;
      break;
    }
  }
  if (goal >= Browser._tabs.length) goal = 0;
  
  Browser.selectedTab = Browser._tabs[goal];
}, false);
