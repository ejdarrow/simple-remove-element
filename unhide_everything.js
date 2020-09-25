'use strict';


chrome.extension.onMessage.addListener((request) => {
  if (request === 'unhide_everything_ace7e793-2419-4ab2-b6d6-ece8bf0ce307') {
    showAllMyChildren(document);
  }
});

function showAllMyChildren(element) {
  element.show();
  element.children.forEach(child => {
    showAllMyChildren(child);
  });
}
