chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url.includes("youtube.com")) {
      chrome.tabs.update(details.tabId, {url: "https://www.notion.so"});
    }
  },
  {
    url: [
      {hostContains: "youtube.com"}
    ]
  }
);