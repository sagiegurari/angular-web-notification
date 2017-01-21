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
     * See [simple-web-notification](https://github.com/sagiegurari/simple-web-notification/blob/master/docs/api.md) for detailed API.
     *
     * @example
     * ```js
     * angular.module('exampleApp').directive('showButton', ['webNotification', function (webNotification) {
     *   return {
     *     link: function (scope, element) {
     *     element.on('click', function onClick() {
     *       webNotification.showNotification('Example Notification', {
     *         body: 'Notification Text...',
     *         icon: 'my-icon.ico',
     *         onClick: function onNotificationClicked() {
     *           console.log('Notification clicked.');
     *         },
     *         autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
     *         }, function onShow(error, hide) {
     *           if (error) {
     *             window.alert('Unable to show notification: ' + error.message);
     *           } else {
     *             console.log('Notification Shown.');
     *
     *             setTimeout(function hideNotification() {
     *               console.log('Hiding notification....');
     *               hide(); //manually close the notification (you can skip this if you use the autoClose option)
     *             }, 5000);
     *           }
     *         });
     *       });
     *     }
     *   };
     * }]);
     * ```
     */
    webNotification.factory('webNotification', function onCreateService() {
        return webNotificationAPI;
    });
}(window.webNotification));
