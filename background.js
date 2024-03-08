chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { redirectUrl: "https://claude.ai/chats" };
    },
    {urls: ["*://chat.openai.com/*"]},
    ["blocking"]
  );