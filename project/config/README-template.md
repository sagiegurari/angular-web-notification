# {"gitdown": "gitinfo", "name": "name"}

[![Bower Version](https://img.shields.io/bower/v/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://github.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/releases) [![NPM Version](http://img.shields.io/npm/v/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://www.npmjs.org/package/{"gitdown": "gitinfo", "name": "name"}) [![Build Status](https://travis-ci.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}.svg)](http://travis-ci.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Coverage Status](https://coveralls.io/repos/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badge.svg)](https://coveralls.io/r/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![bitHound Code](https://www.bithound.io/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badges/code.svg)](https://www.bithound.io/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Inline docs](http://inch-ci.org/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}.svg?branch=master)](http://inch-ci.org/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"})<br>
[![License](https://img.shields.io/bower/l/{"gitdown": "gitinfo", "name": "name"}.svg)](https://github.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/blob/master/LICENSE) [![Known Vulnerabilities](https://snyk.io/test/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badge.svg)](https://snyk.io/test/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Retire Status](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/master/bower.json)](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/master/bower.json)

> Web Notifications AngularJS Service

* [Overview](#overview)
* [Demo](https://sagiegurari.github.io/angular-web-notification/)
* [Usage](#usage)
* [Installation](#installation)
* [Limitations](#limitations)
* [API Documentation](docs/api.md)
* [Contributing](.github/CONTRIBUTING.md)
* [Release History](#history)
* [License](#license)

<a name="overview"></a>
## Overview
The {"gitdown": "gitinfo", "name": "name"} is an angular service wrapper for the web notifications API.

It is using the [simple-web-notification](https://github.com/sagiegurari/simple-web-notification) library which provides a simple and easy notification API which works across browsers and provides automatic permission handling.

See [W3 Specification](https://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html) and [simple-web-notification](https://github.com/sagiegurari/simple-web-notification) for more information.

### Angular 2 and Up
For angular 2 and above, it is recommanded to use the  [simple-web-notification](https://github.com/sagiegurari/simple-web-notification) library directly.<br>
It provides the same API and it is not dependend on angular.

## Demo
[Live Demo](https://sagiegurari.github.io/angular-web-notification/)

<a name="usage"></a>
## Usage
In order to use the angular service you first must add the relevant dependencies:

```html
<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="simple-web-notification/web-notification.js"></script>
<script type="text/javascript" src="angular-web-notification.js"></script>
```

Next you must define it as a dependency in your main angular module as follows:

```js
angular.module('exampleApp', [
    'angular-web-notification'
]);
```

Now you can inject and use the service into your modules (directives/services/...), for example:

```js
angular.module('exampleApp').directive('showButton', ['webNotification', function (webNotification) {
return {
    ...
    link: function (scope, element) {
        element.on('click', function onClick() {
            webNotification.showNotification('Example Notification', {
                body: 'Notification Text...',
                icon: 'my-icon.ico',
                onClick: function onNotificationClicked() {
                    console.log('Notification clicked.');
                },
                autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
            }, function onShow(error, hide) {
                if (error) {
                    window.alert('Unable to show notification: ' + error.message);
                } else {
                    console.log('Notification Shown.');

                    setTimeout(function hideNotification() {
                        console.log('Hiding notification....');
                        hide(); //manually close the notification (you can skip this if you use the autoClose option)
                    }, 5000);
                }
            });
        });
    }
};
}]);
```

In case you wish to use service worker web notifications, you must provide the serviceWorkerRegistration in the options as follows:

````js
//Get the service worker registeration object at the startup of the application.
//This is an aysnc operation so you should not try to use it before the promise is finished.
var serviceWorkerRegistration;
navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    serviceWorkerRegistration = registration;
});

//when setting on even handlers in different areas of the application, use that registration object instance (must be done after the registration is available)
element.on('click', function onClick() {
    webNotification.showNotification('Example Notification', {
        serviceWorkerRegistration: serviceWorkerRegistration,
        body: 'Notification Text...',
        icon: 'my-icon.ico',
        actions: [
            {
                action: 'Start',
                title: 'Start'
            },
            {
                action: 'Stop',
                title: 'Stop'
            }
        ],
        autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
    }, function onShow(error, hide) {
        if (error) {
            window.alert('Unable to show notification: ' + error.message);
        } else {
            console.log('Notification Shown.');

            setTimeout(function hideNotification() {
                console.log('Hiding notification....');
                hide(); //manually close the notification (you can skip this if you use the autoClose option)
            }, 5000);
        }
    });
});
````

<a name="installation"></a>
## Installation
Run bower install in your project as follows:

```sh
bower install {"gitdown": "gitinfo", "name": "name"} --save
```

Or if you are using NPM to download client libraries, you can install it as follows:

```sh
npm install --save {"gitdown": "gitinfo", "name": "name"}
```

<a name="limitations"></a>
## Limitations
The web notifications API is not fully supported in all browsers.

Please see [supported browser versions](http://caniuse.com/#feat=notifications) for more information on the official spec support.

{"gitdown": "include", "file": "./README-footer-template.md"}
