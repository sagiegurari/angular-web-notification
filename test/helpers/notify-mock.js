window.notify = (function () {
    'use strict';

    var notifyOptions;
    var permission;
    var lib = {
        PERMISSION_GRANTED: 'granted',
        config: function (options) {
            notifyOptions = options;
        },
        requestPermission: function (callback) {
            setTimeout(function mockDelay() {
                callback();
            }, 5);
        },
        permissionLevel: function () {
            return permission;
        },
        getConfig: function () {
            return notifyOptions;
        }
    };

    lib.createNotification = function (title, options) {
        lib.validateNotification(title, options);

        return function mockClose() {
            return undefined;
        };
    };

    lib.setAllowed = function (validateNotification) {
        lib.validateNotification = validateNotification || function () {
            return undefined;
        };

        lib.isSupported = true;
        permission = 'granted';
    };

    lib.setSupportedOnly = function () {
        lib.isSupported = true;
        permission = 'not-granted';
    };

    lib.setNotSupported = function () {
        lib.isSupported = false;
        permission = 'not-granted';
    };

    return lib;
}());
