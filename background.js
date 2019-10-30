'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    contexts: ['all'],
    id: 'ace7e793-2419-4ab2-b6d6-ece8bf0ce305',
    title: 'Remove Element',
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ace7e793-2419-4ab2-b6d6-ece8bf0ce305") {
    chrome.tabs.sendMessage(tab.id, 'remove_element_ace7e793-2419-4ab2-b6d6-ece8bf0ce305');
  }
});
