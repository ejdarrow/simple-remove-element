'use strict';

let selectedElement = null;
let maxDepth = 4;

document.addEventListener('contextmenu', (event) => {
  selectedElement = event.target;
});

chrome.extension.onMessage.addListener((request) => {
  let depth = 0;
  if (request === 'undisable_element_ace7e793-2419-4ab2-b6d6-ece8bf0ce306') {
    while(depth <= maxDepth) {
      if (selectedElement.hasAttribute('disabled')){
        selectedElement.removeAttribute('disabled');
        break;	
      } else {
        depth++;
        selectedElement = selectedElement.parentElement;
      }
    }
  }
});
