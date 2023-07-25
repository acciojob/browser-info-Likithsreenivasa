//your JS code here. If required.
// Function to detect the user's browser name and version
function getBrowserInfo() {
  // Get the user agent string
  const userAgent = navigator.userAgent;

  let browserName;
  let version;

  // Check for Chrome
  if (/Chrome/i.test(userAgent)) {
    browserName = 'Google Chrome';
    version = userAgent.match(/Chrome\/([\d.]+)/)[1];
  }
  // Check for Firefox
  else if (/Firefox/i.test(userAgent)) {
    browserName = 'Mozilla Firefox';
    version = userAgent.match(/Firefox\/([\d.]+)/)[1];
  }
  // Check for Safari
  else if (/Safari/i.test(userAgent)) {
    browserName = 'Apple Safari';
    version = userAgent.match(/Version\/([\d.]+)/)[1];
  }
  // Check for Edge (Chromium-based)
  else if (/Edg/i.test(userAgent)) {
    browserName = 'Microsoft Edge';
    version = userAgent.match(/Edg\/([\d.]+)/)[1];
  }
  // Check for Edge (legacy)
  else if (/Trident/i.test(userAgent)) {
    browserName = 'Microsoft Internet Explorer';
    version = userAgent.match(/rv:([\d.]+)/)[1];
  }
  // Default case
  else {
    browserName = 'Unknown Browser';
    version = 'N/A';
  }

  // Return the browser name and version
  return { browserName, version };
}

// Get the browser information
const { browserName, version } = getBrowserInfo();

// Get the div element with the id "browser_info"
const browserInfoDiv = document.getElementById('browser_info');

// Display the browser information on the page
browserInfoDiv.textContent = 'You are using ' + browserName + ' version ' + version;


