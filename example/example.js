/*global console: false */
/*jslint unparam: true*/

window.angular.module('exampleApp', [
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
                    icon: '../bower_components/HTML5-Desktop-Notifications2/alert.ico',
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
