'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    contexts: ['page', 'frame', 'selection', 'link', 'editable', 'image', 'video', 'audio'],
    id: 'ace7e793-2419-4ab2-b6d6-ece8bf0ce305',
    title: 'Remove Element',
  });
  chrome.contextMenus.create({
    type: 'normal',
    contexts: ['page', 'frame', 'selection', 'link', 'editable', 'image', 'video', 'audio'],
    id: 'ace7e793-2419-4ab2-b6d6-ece8bf0ce306',
    title: 'Un-disable Element',
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'ace7e793-2419-4ab2-b6d6-ece8bf0ce305') {
    chrome.tabs.sendMessage(tab.id, 'remove_element_ace7e793-2419-4ab2-b6d6-ece8bf0ce305');
  } else if (info.menuItemId === 'ace7e793-2419-4ab2-b6d6-ece8bf0ce306') {
    chrome.tabs.sendMessage(tab.id, 'undisable_element_ace7e793-2419-4ab2-b6d6-ece8bf0ce306');
  }
});
