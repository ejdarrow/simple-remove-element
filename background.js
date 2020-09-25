'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    contexts: ['page', 'frame', 'selection', 'link', 'editable', 'image', 'video', 'audio'],
    id: 'ace7e793-2419-4ab2-b6d6-ece8bf0ce306',
    title: 'Enable All Buttons',
  });
  chrome.contextMenus.create({
    type: 'normal',
    contexts:['page', 'frame', 'selection', 'link', 'editable', 'image', 'video', 'audio'],
    id: 'ace7e793-2419-4ab2-b6d6-ece8bf0ce307',
    title: 'Unhide Everything',
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'ace7e793-2419-4ab2-b6d6-ece8bf0ce306') {
    chrome.tabs.sendMessage(tab.id, 'enable_buttons_ace7e793-2419-4ab2-b6d6-ece8bf0ce306');
  } else if (info.menuItemId === 'ace7e793-2419-4ab2-b6d6-ece8bf0ce307') {
    chrome.tabs.sendMessage(tab.id, 'unhide_everything_ace7e793-2419-4ab2-b6d6-ece8bf0ce307');
  }
});
