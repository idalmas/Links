chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url.includes("https://www.youtube.com/")) {
      chrome.tabs.update(details.tabId, {url: "https://www.notion.so/"});
    }
    if (details.url.includes("https://x.com/home")) {
      chrome.tabs.update(details.tabId, {url: "https://www.notion.so/"});
    }
  },
  {
    url: [
      {hostContains: "youtube.com"}
    ]
  }
);