document.addEventListener('DOMContentLoaded', function() {
    // Load saved URLs
    chrome.storage.sync.get(['sourceUrl', 'destUrl'], function(result) {
      document.getElementById('sourceUrl').value = result.sourceUrl || '';
      document.getElementById('destUrl').value = result.destUrl || '';
    });
  
    // Save URLs when button is clicked
    document.getElementById('saveButton').addEventListener('click', function() {
      var sourceUrl = document.getElementById('sourceUrl').value;
      var destUrl = document.getElementById('destUrl').value;
  
      // Simple URL validation
      if (!sourceUrl || !destUrl || !isValidUrl(sourceUrl) || !isValidUrl(destUrl)) {
        document.getElementById('status').textContent = 'Please enter valid URLs';
        return;
      }
  
      chrome.storage.sync.set({
        sourceUrl: sourceUrl,
        destUrl: destUrl
      }, function() {
        document.getElementById('status').textContent = 'Settings saved';
        setTimeout(function() {
          document.getElementById('status').textContent = '';
        }, 3000);
      });
    });
  });
  
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }