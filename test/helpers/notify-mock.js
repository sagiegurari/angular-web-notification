window.Notification = (function Notification() {
    'use strict';

    var permissionInfo = {
        value: null
    };

    var oncePermission;

    var Lib = function (title, options) {
        Lib.validateNotification(title, options);

        var self = this;
        self.close = function () {
            if (options.onClick) {
                self.onclick();
            }
        };
    };

    Lib.MOCK_NOTIFY = true;

    Object.defineProperty(Lib, 'permission', {
        enumerable: true,
        get: function () {
            return permissionInfo.value;
        }
    });

    Lib.requestPermission = function (callback) {
        if (oncePermission) {
            oncePermission();
            oncePermission = null;
        }

        setTimeout(callback, 5);
    };

    Lib.setValidationNotification = function (validateNotification) {
        Lib.validateNotification = validateNotification || function noop() {
            return undefined;
        };
    };

    Lib.setAllowed = function (validateNotification) {
        Lib.setValidationNotification(validateNotification);
        permissionInfo.value = 'granted';
    };

    Lib.setNotAllowed = function (validateNotification) {
        Lib.setValidationNotification(validateNotification);
        permissionInfo.value = 'not-granted';
    };

    Lib.onceRequestPermission = function (callback) {
        oncePermission = callback;
    };

    return Lib;
}());
