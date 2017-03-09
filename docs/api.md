<a name="webNotification"></a>

## webNotification ⇒ <code>Object</code>
The web notification service wraps the HTML 5 Web Notifications API as an angular service.<br>
See [simple-web-notification](https://github.com/sagiegurari/simple-web-notification/blob/master/docs/api.md) for more API details.

**Kind**: global namespace  
**Returns**: <code>Object</code> - The service instance  
**Ngdoc**: service  
**Author**: Sagie Gur-Ari  
<a name="webNotification.showNotification"></a>

### webNotification.showNotification([title], [options], [callback])
Shows the notification based on the provided input.<br>
The callback invoked will get an error object (in case of an error, null in
case of no errors) and a 'hide' function which can be used to hide the notification.

**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [title] | <code>String</code> |  | The notification title text (defaulted to empty string if null is provided) |
| [options] | <code>Object</code> |  | Holds the notification data (web notification API spec for more info) |
| [options.icon] | <code>String</code> | <code>/favicon.ico</code> | The notification icon (defaults to the website favicon.ico) |
| [options.autoClose] | <code>Number</code> |  | Auto closes the notification after the provided amount of millies (0 or undefined for no auto close) |
| [options.onClick] | <code>function</code> |  | An optional onclick event handler |
| [callback] | <code>ShowNotificationCallback</code> |  | Called after the show is handled. |

**Example**  
```js
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
```
