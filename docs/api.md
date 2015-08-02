## Objects
<dl>
<dt><a href="#webNotification">webNotification</a> ⇒ <code>object</code></dt>
<dd><p>The web notification service wraps the HTML 5 Web Notifications API as an angular service.</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#ShowNotificationCallback">ShowNotificationCallback</a> : <code>function</code></dt>
<dd><p>&#39;showNotification&#39; callback.</p>
</dd>
</dl>
<a name="webNotification"></a>
## webNotification ⇒ <code>object</code>
The web notification service wraps the HTML 5 Web Notifications API as an angular service.

**Kind**: global namespace  
**Returns**: <code>object</code> - The service instance  
**Ngdoc**: service  
**Author:** Sagie Gur-Ari  

* [webNotification](#webNotification) ⇒ <code>object</code>
  * [.allowRequest](#webNotification.allowRequest)
  * [.showNotification([title], [options], callback)](#webNotification.showNotification) ⇒ <code>\*</code>

<a name="webNotification.allowRequest"></a>
### webNotification.allowRequest
True to enable automatic requesting of permissions if needed.

**Access:** public  
<a name="webNotification.showNotification"></a>
### webNotification.showNotification([title], [options], callback) ⇒ <code>\*</code>
Shows the notification based on the provided input.<br>
The callback invoked will get an error object (in case of an error, null in
case of no errors) and a 'hide' function which can be used to hide the notification.

**Returns**: <code>\*</code> - The callback function return value or undefined  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| [title] | <code>string</code> | The notification title text (defaulted to empty string if null is provided) |
| [options] | <code>object</code> | Holds the notification data (web notification API spec for more info) |
| callback | <code>[ShowNotificationCallback](#ShowNotificationCallback)</code> | Called after the show is handled. |

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
<a name="ShowNotificationCallback"></a>
## ShowNotificationCallback : <code>function</code>
'showNotification' callback.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [error] | <code>error</code> | The error object in case of any error |
| [hide] | <code>function</code> | The hide notification function |

