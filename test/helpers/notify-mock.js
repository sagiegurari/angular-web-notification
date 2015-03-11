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

        return {
            close: function mockClose() {
                return undefined;
            }
        };
    };

    lib.setValidationNotification = function (validateNotification) {
        lib.validateNotification = validateNotification || function () {
            return undefined;
        };
    };

    lib.setAllowed = function (validateNotification) {
        lib.setValidationNotification(validateNotification);

        lib.isSupported = true;
        permission = 'granted';
    };

    lib.setSupportedOnly = function () {
        lib.setValidationNotification(null);
        lib.isSupported = true;
        permission = 'not-granted';
    };

    lib.setNotSupported = function () {
        lib.setValidationNotification(null);
        lib.isSupported = false;
        permission = 'not-granted';
    };

    lib.setFirstTimePermissions = function (validateNotification) {
        lib.orgRequestPermission = lib.requestPermission;
        lib.setValidationNotification(validateNotification);

        lib.requestPermission = function (callback) {
            permission = 'granted';

            lib.orgRequestPermission(callback);
            lib.requestPermission = lib.orgRequestPermission;
        };

        lib.setSupportedOnly();
    };

    return lib;
}());
