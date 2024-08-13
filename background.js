// background.js
const redirects = {
    "instagram.com": "https://docs.google.com/document/create",
    "facebook.com": "https://trello.com/",
    "twitter.com": "https://asana.com/",
    "reddit.com": "https://www.coursera.org/",
    "youtube.com": "https://www.duolingo.com/",
    "netflix.com": "https://www.edx.org/",
    // Add more redirects as needed
  };
  
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      for (const [unproductive, productive] of Object.entries(redirects)) {
        if (url.hostname.includes(unproductive)) {
          return {redirectUrl: productive};
        }
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );