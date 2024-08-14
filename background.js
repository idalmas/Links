chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable(); // Disable the action button if present
});

chrome.declarativeNetRequest.onRuleRequest.addListener(
  (details) => {
    if (details.url.host.includes("youtube.com")) {
      return { redirectUrl: "https://www.notion.so" };
    }
  },
  { urls: ["<all_urls>"] }
);