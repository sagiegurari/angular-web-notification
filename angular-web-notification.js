/*global notify: false, angular: false */
(function (notifyLib) {
    'use strict';

    var webNotification = angular.module('angular-web-notification', []);

    /**
     * @ngdoc service
     * @name webNotification
     * @returns {object} The service instance
     *
     * @description
     * The web notification service wraps the HTML 5 Web Notifications API as an angular service.
     */
    webNotification.factory('webNotification', function onCreateService() {
        notifyLib.config({
            autoClose: 0
        });

        var isEnabled = function () {
            var enabled = notifyLib.isSupported;

            if (enabled) {
                var permission = notifyLib.permissionLevel();

                if (permission !== notifyLib.PERMISSION_GRANTED) {
                    enabled = false;
                }
            }

            return enabled;
        };

        var createAndDisplayNotification = function (title, options) {
            var notification = notifyLib.createNotification(title, options);

            return function hideNotification() {
                notification.close();
            };
        };

        return {
            /**
             * Shows the notification based on the provided input.<br>
             * The callback invoked will get an error object (in case of an error, null in
             * case of no errors) and a 'hide' function which can be used to hide the notification.
             *
             * @function
             * @memberof! webNotification
             * @public
             * @param {string} title - The notification title text
             * @param {object} options - Holds the notification data (see https://github.com/ttsvetko/HTML5-Desktop-Notifications.git for more info)
             * @param {function} callback - Called after the show is handled.
             * @example
             * webNotification.showNotification('Example Notification', {
             *      body: 'Notification Text...',
             *      icon: 'my-icon.ico'
             * }, function onShow(error, hide) {
             *  if (error) {
             *      window.alert('Unable to show notification: ' + error.message);
             *  } else {
             *      setTimeout(function hideNotification() {
             *          hide();
             *      }, 5000);
             *  }
             * });
             */
            showNotification: function (title, options, callback) {
                var hideNotification = null;
                if (isEnabled()) {
                    hideNotification = createAndDisplayNotification(title, options);
                    callback(null, hideNotification);
                } else {
                    notifyLib.requestPermission(function onRequestDone() {
                        if (isEnabled()) {
                            hideNotification = createAndDisplayNotification(title, options);
                            callback(null, hideNotification);
                        } else {
                            callback(new Error('Notification is not enabled.'), null);
                        }
                    });
                }
            }
        };
    });
}(notify));
