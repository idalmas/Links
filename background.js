let sourceUrl = '';
let destUrl = '';

// Load saved URLs
function loadUrls() {
  chrome.storage.sync.get(['sourceUrl', 'destUrl'], function(result) {
    sourceUrl = result.sourceUrl || '';
    destUrl = result.destUrl || '';
    updateListener();
  });
}

// Update the web navigation listener
function updateListener() {
  // Remove existing listener if any
  if (chrome.webNavigation.onBeforeNavigate.hasListener(redirectCallback)) {
    chrome.webNavigation.onBeforeNavigate.removeListener(redirectCallback);
  }

  // Add new listener if URLs are set
  if (sourceUrl && destUrl) {
    chrome.webNavigation.onBeforeNavigate.addListener(redirectCallback, {
      url: [{ hostContains: sourceUrl }]
    });
  }
}

// Callback function for the listener
function redirectCallback(details) {
  chrome.tabs.update(details.tabId, { url: destUrl });
}

// Listen for changes in storage
chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (namespace === 'sync' && (changes.sourceUrl || changes.destUrl)) {
    loadUrls();
  }
});

// Initial load
loadUrls();