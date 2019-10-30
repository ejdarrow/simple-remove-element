'use strict';

let chosenElement = null;

document.addEventListener('contextmenu', (event) => {
  chosenElement = event.target;
});

chrome.extension.onMessage.addListener((request) => {
  if (request === 'remove_element_ace7e793-2419-4ab2-b6d6-ece8bf0ce305') {
    chosenElement.parentElement.removeChild(chosenElement);
  }
});
