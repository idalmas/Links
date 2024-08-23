chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url === "https://www.youtube.com/") {
      chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/shorts/Lw4KMMzZ9i0"});
    }
  },
  {url: [{urlEquals : "https://www.youtube.com/"}]}
);

chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url === "https://x.com/") {
      chrome.tabs.update(details.tabId, {url: "https://x.com/cory/status/1823571266156028408"});
    }
  },
  {url: [{urlEquals : "https://x.com/"}]}
);