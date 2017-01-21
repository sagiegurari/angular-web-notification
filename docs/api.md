<a name="webNotification"></a>

## webNotification ⇒ <code>Object</code>
The web notification service wraps the HTML 5 Web Notifications API as an angular service.<br>
See [simple-web-notification](https://github.com/sagiegurari/simple-web-notification/blob/master/docs/api.md) for detailed API.

**Kind**: global namespace  
**Returns**: <code>Object</code> - The service instance  
**Ngdoc**: service  
**Author:** Sagie Gur-Ari  
**Example**  
```js
angular.module('exampleApp').directive('showButton', ['webNotification', function (webNotification) {
  return {
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
