/*global angular: false, window: false, console: false */

angular.module('exampleApp', [
    'angular-web-notification'
]).directive('showButton', ['webNotification', function (webNotification) {
    'use strict';

    return {
        restrict: 'C',
        template: 'Show Notification',
        link: function (scope, element) {
            element.on('click', function onClick() {
                webNotification.showNotification('Example Notification', {
                    body: 'Notification Text...',
                    icon: '../bower_components/HTML5-Desktop-Notifications/alert.ico'
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
