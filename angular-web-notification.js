/**
 * @ngdoc method
 * @function
 * @memberof! webNotification
 * @alias webNotification.initWebNotification
 * @private
 *
 * @description
 * Initializes the angular web notification service.
 *
 * @param {Object} webNotificationAPI - The simplified web notification API
 */
(function initWebNotification(webNotificationAPI) {
    'use strict';

    var webNotification = window.angular.module('angular-web-notification', []);

    /**
     * @ngdoc service
     * @name webNotification
     * @namespace webNotification
     * @author Sagie Gur-Ari
     * @returns {Object} The service instance
     *
     * @description
     * The web notification service wraps the HTML 5 Web Notifications API as an angular service.<br>
     * See [simple-web-notification](https://github.com/sagiegurari/simple-web-notification/blob/master/docs/api.md) for more API details.
     */
    webNotification.factory('webNotification', function onCreateService() {
        /**
         * Shows the notification based on the provided input.<br>
         * The callback invoked will get an error object (in case of an error, null in
         * case of no errors) and a 'hide' function which can be used to hide the notification.
         *
         * @function
         * @memberof! webNotification
         * @alias webNotification.showNotification
         * @public
         * @param {String} [title] - The notification title text (defaulted to empty string if null is provided)
         * @param {Object} [options] - Holds the notification data (web notification API spec for more info)
         * @param {String} [options.icon=/favicon.ico] - The notification icon (defaults to the website favicon.ico)
         * @param {Number} [options.autoClose] - Auto closes the notification after the provided amount of millies (0 or undefined for no auto close)
         * @param {function} [options.onClick] - An optional onclick event handler
         * @param {ShowNotificationCallback} [callback] - Called after the show is handled.
         * @example
         * ```js
         * //show web notification when button is clicked
         * webNotification.showNotification('Example Notification', {
         *   body: 'Notification Text...',
         *   icon: 'my-icon.ico',
         *   onClick: function onNotificationClicked() {
         *     console.log('Notification clicked.');
         *   },
         *   autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
         * }, function onShow(error, hide) {
         *   if (error) {
         *     window.alert('Unable to show notification: ' + error.message);
         *   } else {
         *     console.log('Notification Shown.');
         *
         *     setTimeout(function hideNotification() {
         *       console.log('Hiding notification....');
         *       hide(); //manually close the notification (you can skip this if you use the autoClose option)
         *     }, 5000);
         *   }
         * });
         *
         * //service worker example
         * navigator.serviceWorker.register('service-worker.js').then(function(registration) {
         *   webNotification.showNotification('Example Notification', {
         *       serviceWorkerRegistration: registration,
         *       body: 'Notification Text...',
         *       icon: 'my-icon.ico',
         *       actions: [
         *           {
         *               action: 'Start',
         *               title: 'Start'
         *           },
         *           {
         *               action: 'Stop',
         *               title: 'Stop'
         *           }
         *       ],
         *       autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
         *   }, function onShow(error, hide) {
         *       if (error) {
         *           window.alert('Unable to show notification: ' + error.message);
         *       } else {
         *           console.log('Notification Shown.');
         *
         *           setTimeout(function hideNotification() {
         *               console.log('Hiding notification....');
         *               hide(); //manually close the notification (you can skip this if you use the autoClose option)
         *           }, 5000);
         *       }
         *   });
         * });
         * ```
         */
        var showNotification = webNotificationAPI.showNotification;

        if (showNotification) {
            return webNotificationAPI;
        }
    });
}(window.webNotification));
