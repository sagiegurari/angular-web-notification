/*global describe: false, assert: false, inject: false, it: false, beforeEach: false */

describe('angular-web-notification', function () {
    'use strict';

    var validShowValidation = function (error, hide, done) {
        assert.isNull(error);
        assert.isFunction(hide);

        hide();

        if (done) {
            done();
        }
    };

    var errorValidation = function (error, hide, done) {
        assert.isDefined(error);
        assert.isNull(hide);
        done();
    };

    beforeEach(window.angular.mock.module('angular-web-notification'));

    it('library not defined test', inject(function ($injector) {
        var showNotification = window.webNotification.showNotification;
        delete window.webNotification.showNotification;

        var errorDetected = false;
        try {
            $injector.get('webNotification').$get();
        } catch (error) {
            assert.isDefined(error);
            errorDetected = true;
        }

        window.webNotification.showNotification = showNotification;

        assert.isTrue(errorDetected);
    }));

    it('init test', inject(function (webNotification) {
        assert.isObject(webNotification);
        assert.isTrue(window.Notification.MOCK_NOTIFY);
        assert.isTrue(webNotification.lib.MOCK_NOTIFY);
    }));

    describe('showNotification', function () {
        describe('allowed', function () {
            it('valid', function (done) {
                inject(function (webNotification) {
                    webNotification.allowRequest = true;
                    assert.isTrue(webNotification.lib.MOCK_NOTIFY);

                    window.Notification.setAllowed(function (title, options) {
                        assert.equal(title, 'Example Notification');
                        assert.deepEqual(options, {
                            body: 'Notification Text...',
                            icon: 'my-icon.ico'
                        });
                    });

                    webNotification.showNotification('Example Notification', {
                        body: 'Notification Text...',
                        icon: 'my-icon.ico'
                    }, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('auto close', function (done) {
                inject(function (webNotification) {
                    webNotification.allowRequest = true;
                    assert.isTrue(webNotification.lib.MOCK_NOTIFY);

                    window.Notification.setAllowed(function (title, options) {
                        assert.equal(title, 'Example Notification');
                        assert.deepEqual(options, {
                            body: 'Notification Text...',
                            icon: 'my-icon.ico',
                            autoClose: 600
                        });
                    });

                    webNotification.showNotification('Example Notification', {
                        body: 'Notification Text...',
                        icon: 'my-icon.ico',
                        autoClose: 600
                    }, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('first time permissions', function (done) {
                inject(function (webNotification) {
                    webNotification.allowRequest = true;
                    assert.isTrue(webNotification.lib.MOCK_NOTIFY);

                    window.Notification.setNotAllowed(function (title, options) {
                        assert.equal(title, 'first time');
                        assert.deepEqual(options, {
                            icon: '/favicon.ico'
                        });
                    });

                    window.Notification.onceRequestPermission(function () {
                        window.Notification.setAllowed(function (title, options) {
                            assert.equal(title, 'first time');
                            assert.deepEqual(options, {
                                icon: '/favicon.ico'
                            });
                        });
                    });

                    webNotification.showNotification('first time', {}, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });
        });

        describe('not allowed', function () {
            it('not allowed', function (done) {
                inject(function (webNotification) {
                    webNotification.allowRequest = true;
                    assert.isTrue(webNotification.lib.MOCK_NOTIFY);

                    window.Notification.setNotAllowed();

                    webNotification.showNotification('not allowed', {}, function onShow(error, hide) {
                        errorValidation(error, hide, done);
                    });
                });
            });

            it('not allowed and not allowed to ask permissions', function (done) {
                inject(function (webNotification) {
                    assert.isTrue(webNotification.lib.MOCK_NOTIFY);

                    window.Notification.setNotAllowed();
                    webNotification.allowRequest = false;

                    webNotification.showNotification('no allowRequest', {}, function onShow(error, hide) {
                        errorValidation(error, hide, done);
                    });
                });
            });
        });
    });
});
