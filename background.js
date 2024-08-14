chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable(); // Disable the action button if present
});

chrome.declarativeNetRequest.onRuleRequest.addListener(
  (details) => {
    if (details.url.host === "googleusercontent.com/youtube.com/0" || details.url.host === "googleusercontent.com/youtube.com/1") {
      return { redirectUrl: "https://www.notion.so" };
    }
  },
  { urls: ["<all_urls>"] }
);
