# angular-web-notification

[![Bower Version](https://img.shields.io/bower/v/angular-web-notification.svg?style=flat)](https://github.com/sagiegurari/angular-web-notification/releases)

> Web Notifications AngularJS Service

## Overview
The angular-web-notification is an angular service wrapper for the web notifications API.

It is using the HTML5-Desktop-Notifications library which provides a unified API for all browsers.

See [W3 Specification](https://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html) and [HTML5-Desktop-Notifications](https://github.com/ttsvetko/HTML5-Desktop-Notifications) for more information.

## Usage
In order to use the angular service you first must add the relevant dependencies:

```
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

## Release History

 * 2014-12-30   v0.0.4   Doc changes
 * 2014-12-09   v0.0.3   API now enables/disables the capability to automatically request for permissions needed to display the notification.
 * 2014-12-08   v0.0.2   Initial release.

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.
