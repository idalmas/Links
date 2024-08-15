chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url.includes("youtube.com")) {
      chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/watch?v=lzMkFIw8ETM"});
    }
  },
  {
    url: [
      {hostContains: "youtube.com"}
    ]
  }
);