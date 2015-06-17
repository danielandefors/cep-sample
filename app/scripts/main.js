
/** Onload event handler that injects environment info into the doc. */
window.onload = function() {

  /** Simple function to set the text inside an element. */
  function text(selector, value) {
    document.querySelector(selector).textContent = value;
  }

  /** Describe a UIColor object */
  function describeUIColor(color) {
    if (color.type === 1) {
      return describeRGBColor(color.color);
    } else {
      return '';
    }
  }

  /** Describe a RGBColor object */
  function describeRGBColor(color) {
    if (!color) return 'n/a';
    return "rgba(" +
      Math.round(color.red) + ", " +
      Math.round(color.green) + ", " +
      Math.round(color.blue) + ", " +
      (color.alpha/255.0) + ")";
  }

  var cs = new CSInterface();

  // API version
  var version = cs.getCurrentApiVersion();
  text("#apiVer", [version.major, version.minor, version.micro].join('.'));

  // Host environment info
  var host = cs.getHostEnvironment();
  text("#appId", host.appId);
  text("#appName", host.appName);
  text("#appVersion", host.appVersion);
  text("#appLocale", host.appLocale);
  text("#appUILocale", host.appUILocale);
  text("#isAppOnline", host.isAppOnline);
  text("#appVersion", host.appVersion);
  text("#baseFontFamily", host.appSkinInfo.baseFontFamily);
  text("#baseFontSize", host.appSkinInfo.baseFontSize);
  text("#appBarBackgroundColor", describeUIColor(host.appSkinInfo.appBarBackgroundColor));
  text("#panelBackgroundColor", describeUIColor(host.appSkinInfo.panelBackgroundColor));
  text("#appBarBackgroundColorSRGB", describeUIColor(host.appSkinInfo.appBarBackgroundColorSRGB));
  text("#panelBackgroundColorSRGB", describeUIColor(host.appSkinInfo.panelBackgroundColorSRGB));
  text("#systemHighlightColor", describeRGBColor(host.appSkinInfo.systemHighlightColor));

};
