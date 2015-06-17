# Simple CEP Sample

A simple HTML5/JavaScript extension for Adobe Illustrator CC 2014 and CC 2015 built with CEP 5.x.

- As usual, begin by installing dependencies with npn and bower
- Run `./player-debug.mode.sh` to be able to run unsigned extensions
- Then run `gulp deploy` or `gulp watch` to deploy the extension
- Run `gulp undeploy` to uninstall the extension

Note that you need to restart Illustrator after you've made changes to the source even if you do `gulp watch`.

If you want to sign the extension you need to install [ZXPSignCmd](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD), and get a certificate. Note that if you wish to use the `./sign.sh` script you should make sure that ZXPSignCmd is available on the PATH (e.g., by `ln -s` it to a bin directory).

[Official CEP samples](https://github.com/Adobe-CEP/Samples)


