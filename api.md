<a name="webNotification"></a>
#webNotification
The web notification service wraps the HTML 5 Web Notifications API as an angular service.

**Returns**: `object` - The service instance  
**Author**: Sagie Gur-Ari  
**Members**

* [webNotification](#webNotification)
  * [webNotification.allowRequest](#webNotification.allowRequest)
  * [webNotification.showNotification([title], [options], callback)](#webNotification.showNotification)

<a name="webNotification.allowRequest"></a>
##webNotification.allowRequest
True to enable automatic requesting of permissions if needed.

<a name="webNotification.showNotification"></a>
##webNotification.showNotification([title], [options], callback)
Shows the notification based on the provided input.<br>
The callback invoked will get an error object (in case of an error, null in
case of no errors) and a 'hide' function which can be used to hide the notification.

**Params**

- \[title\] `string` - The notification title text (defaulted to empty string if null is provided)  
- \[options\] `object` - Holds the notification data (web notification API spec for more info)  
- callback `function` - Called after the show is handled.  

**Example**  
```js
webNotification.showNotification('Example Notification', {
   body: 'Notification Text...',
   icon: 'my-icon.ico'
}, function onShow(error, hide) {
   if (error) {
       window.alert('Unable to show notification: ' + error.message);
   } else {
       setTimeout(function hideNotification() {
           hide();
       }, 5000);
   }
});
```

