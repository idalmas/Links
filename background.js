chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url.includes("youtube.com")) {
      chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/watch?v=lzMkFIw8ETM"});
    }
    if (details.url.includes("x.com")) {
      chrome.tabs.update(details.tabId, {url: "https://x.com/paulg/status/1823866572127220173"});
    }
  },
  {
    url: [
      {hostContains: "youtube.com"}
    ]
  }
);