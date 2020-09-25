'use strict';


chrome.extension.onMessage.addListener((request) => {
  if (request === 'enable_buttons_ace7e793-2419-4ab2-b6d6-ece8bf0ce306') {
    let amount = 0;
    document.querySelectorAll("button[disabled]").forEach(function(disabledButton) {
      disabledButton.removeAttribute('disabled');
      amount++;
    });
    console.log(amount + " buttons enabled.");
  }
});
