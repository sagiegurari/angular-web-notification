# angular-web-notification

[![Bower Version](https://img.shields.io/bower/v/angular-web-notification.svg?style=flat)](https://github.com/sagiegurari/angular-web-notification/releases) [![Build Status](https://img.shields.io/travis/sagiegurari/angular-web-notification.svg?style=flat)](http://travis-ci.org/sagiegurari/angular-web-notification) [![Coverage Status](https://img.shields.io/coveralls/sagiegurari/angular-web-notification.svg?style=flat)](https://coveralls.io/r/sagiegurari/angular-web-notification) [![Code Climate](https://codeclimate.com/github/sagiegurari/angular-web-notification/badges/gpa.svg)](https://codeclimate.com/github/sagiegurari/angular-web-notification) [![bitHound Score](https://www.bithound.io/sagiegurari/angular-web-notification/badges/score.svg)](https://www.bithound.io/sagiegurari/angular-web-notification) [![Inline docs](http://inch-ci.org/github/sagiegurari/angular-web-notification.svg?branch=master)](http://inch-ci.org/github/sagiegurari/angular-web-notification)
[![License](https://img.shields.io/github/license/sagiegurari/angular-web-notification.svg)](https://github.com/sagiegurari/angular-web-notification/blob/master/LICENSE)

> Web Notifications AngularJS Service

## Overview
The angular-web-notification is an angular service wrapper for the web notifications API.

It is using the HTML5-Desktop-Notifications library which provides a unified API for all browsers.

See [W3 Specification](https://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html) and [HTML5-Desktop-Notifications](https://github.com/ttsvetko/HTML5-Desktop-Notifications) for more information.

## Demo
[Live Demo at Plunker](http://plnkr.co/edit/anlhIr?p=preview)

## Usage
In order to use the angular service you first must add the relevant dependencies:

```html
<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="HTML5-Desktop-Notifications/desktop-notify.js"></script>
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
                icon: 'my-icon.ico'
            }, function onShow(error, hide) {
                if (error) {
                    window.alert('Unable to show notification: ' + error.message);
                } else {
                    console.log('Notification Shown.');

                    setTimeout(function hideNotification() {
                        console.log('Hiding notification....');
                        hide();
                    }, 5000);
                }
            });
        });
    }
};
}]);
```

## Installation
Run bower install in your project as follows:
```
bower install angular-web-notification --save
```

## Limitations
The web notifications API is not fully supported in all browsers.

Please see http://caniuse.com/#feat=notifications for more information on the official spec support and at [HTML5-Desktop-Notifications](https://github.com/ttsvetko/HTML5-Desktop-Notifications) for more browser specific API support.

## API Documentation
See full docs at: [API Docs](docs/api.md)

## Release History

| Date        | Version | Description |
| ----------- | ------- | ----------- |
| 2015-08-02  | v0.0.21 | Maintenance |
| 2015-02-16  | v0.0.7  | Automatic unit tests via karma |
| 2015-02-05  | v0.0.5  | Doc changes |
| 2014-12-30  | v0.0.4  | Doc changes |
| 2014-12-09  | v0.0.3  | API now enables/disables the<br>capability to automatically request for<br>permissions needed to display the notification. |
| 2014-12-08  | v0.0.2  | Initial release |

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.
