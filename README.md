# angular-web-notification

[![Bower Version](https://img.shields.io/bower/v/angular-web-notification.svg?style=flat)](https://github.com/sagiegurari/angular-web-notification/releases) [![Build Status](https://travis-ci.org/sagiegurari/angular-web-notification.svg)](http://travis-ci.org/sagiegurari/angular-web-notification) [![Coverage Status](https://coveralls.io/repos/sagiegurari/angular-web-notification/badge.svg)](https://coveralls.io/r/sagiegurari/angular-web-notification) [![Code Climate](https://codeclimate.com/github/sagiegurari/angular-web-notification/badges/gpa.svg)](https://codeclimate.com/github/sagiegurari/angular-web-notification) [![bitHound Code](https://www.bithound.io/github/sagiegurari/angular-web-notification/badges/code.svg)](https://www.bithound.io/github/sagiegurari/angular-web-notification) [![Inline docs](http://inch-ci.org/github/sagiegurari/angular-web-notification.svg?branch=master)](http://inch-ci.org/github/sagiegurari/angular-web-notification)<br>
[![License](https://img.shields.io/bower/l/angular-web-notification.svg)](https://github.com/sagiegurari/angular-web-notification/blob/master/LICENSE) [![Retire Status](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/sagiegurari/angular-web-notification/master/bower.json)](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/sagiegurari/angular-web-notification/master/bower.json)

> Web Notifications AngularJS Service

* [Overview](#overview)
* [Demo](http://plnkr.co/edit/SUTiBu?p=preview)
* [Usage](#usage)
* [Installation](#installation)
* [Limitations](#limitations)
* [API Documentation](docs/api.md)
* [Contributing](docs/CONTRIBUTING.md)
* [Release History](#history)
* [License](#license)

<a name="overview"></a>
## Overview
The angular-web-notification is an angular service wrapper for the web notifications API.

It is using the HTML5-Desktop-Notifications library which provides a unified API for all browsers.

See [W3 Specification](https://dvcs.w3.org/hg/notifications/raw-file/tip/Overview.html) and [HTML5-Desktop-Notifications](https://github.com/ttsvetko/HTML5-Desktop-Notifications) for more information.

## Demo
[Live Demo at Plunker](http://plnkr.co/edit/SUTiBu?p=preview)

<a name="usage"></a>
## Usage
In order to use the angular service you first must add the relevant dependencies:

```html
<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="HTML5-Desktop-Notifications2/desktop-notify.js"></script>
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
                autoClose: 4000 //auto close the notification after 2 seconds (you can manually close it via hide function)
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

<a name="installation"></a>
## Installation
Run bower install in your project as follows:
```
bower install angular-web-notification --save
```

<a name="limitations"></a>
## Limitations
The web notifications API is not fully supported in all browsers.

Please see http://caniuse.com/#feat=notifications for more information on the official spec support and at [HTML5-Desktop-Notifications](https://github.com/ttsvetko/HTML5-Desktop-Notifications) for more browser specific API support.

## API Documentation
See full docs at: [API Docs](docs/api.md)

## Contributing
See [contributing guide](docs/CONTRIBUTING.md)

<a name="history"></a>
## Release History

| Date        | Version | Description |
| ----------- | ------- | ----------- |
| 2015-12-17  | v0.0.53 | Maintenance |
| 2015-09-26  | v0.0.31 | Update bower dependencies |
| 2015-09-26  | v0.0.30 | Added 'onClick' option to enable adding onclick event handler for the notification |
| 2015-09-02  | v0.0.29 | Maintenance |
| 2015-08-16  | v0.0.22 | uglify fix |
| 2015-08-02  | v0.0.21 | Maintenance |
| 2015-02-16  | v0.0.7  | Automatic unit tests via karma |
| 2015-02-05  | v0.0.5  | Doc changes |
| 2014-12-30  | v0.0.4  | Doc changes |
| 2014-12-09  | v0.0.3  | API now enables/disables the<br>capability to automatically request for<br>permissions needed to display the notification. |
| 2014-12-08  | v0.0.2  | Initial release |

<a name="license"></a>
## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.
