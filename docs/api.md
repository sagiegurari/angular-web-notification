<a name="webNotification"></a>
## webNotification ⇒ <code>object</code>
The web notification service wraps the HTML 5 Web Notifications API as an angular service.

**Kind**: global namespace  
**Returns**: <code>object</code> - The service instance  
**Ngdoc**: service  
**Author:** Sagie Gur-Ari  

* [webNotification](#webNotification) ⇒ <code>object</code>
  * [.allowRequest](#webNotification.allowRequest)
  * [.showNotification([title], [options], callback)](#webNotification.showNotification)

<a name="webNotification.allowRequest"></a>
### webNotification.allowRequest
True to enable automatic requesting of permissions if needed.

**Access:** public  
<a name="webNotification.showNotification"></a>
### webNotification.showNotification([title], [options], callback)
Shows the notification based on the provided input.<br>
The callback invoked will get an error object (in case of an error, null in
case of no errors) and a 'hide' function which can be used to hide the notification.

**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| [title] | <code>string</code> | The notification title text (defaulted to empty string if null is provided) |
| [options] | <code>object</code> | Holds the notification data (web notification API spec for more info) |
| callback | <code>function</code> | Called after the show is handled. |

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
