/*global describe: false, assert: false, inject: false, it: false, beforeEach: false */

describe('angular-web-notification', function () {
    'use strict';

    var emptyValuesValidation = function (title, options) {
        assert.equal(title, '');
        assert.deepEqual(options, {
            icon: '/favicon.ico'
        });
    };
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

    beforeEach(inject(function (webNotification) {
        webNotification.allowRequest = true;
    }));

    it('init test', inject(function (webNotification) {
        assert.isObject(webNotification);
    }));

    describe('showNotification tests', function () {
        describe('showNotification allowed tests', function () {
            it('showNotification all info test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
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
                        assert.deepEqual(window.notify.getConfig(), {
                            autoClose: 0
                        });

                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification with auto close test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
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
                        assert.deepEqual(window.notify.getConfig(), {
                            autoClose: 600
                        });

                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification no params test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(emptyValuesValidation);

                    webNotification.showNotification(function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification no input test', function () {
                inject(function (webNotification) {
                    window.notify.setAllowed(emptyValuesValidation);

                    webNotification.showNotification();
                });
            });

            it('showNotification too many args test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(emptyValuesValidation);

                    webNotification.showNotification(1, 2, 3, 4, function () {
                        assert.fail();
                    });

                    setTimeout(function () {
                        done();
                    }, 50);
                });
            });

            it('showNotification null info test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(emptyValuesValidation);

                    webNotification.showNotification(null, null, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification no callback test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
                        assert.equal(title, 'Example Notification');
                        assert.deepEqual(options, {
                            body: 'Notification Text...',
                            icon: 'my-icon.ico'
                        });
                    });

                    webNotification.showNotification('Example Notification', {
                        body: 'Notification Text...',
                        icon: 'my-icon.ico'
                    });

                    setTimeout(done, 50);
                });
            });

            it('showNotification no title test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
                        assert.equal(title, '');
                        assert.deepEqual(options, {
                            body: 'no title',
                            icon: '/favicon.ico'
                        });
                    });

                    webNotification.showNotification({
                        body: 'no title'
                    }, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification with no icon test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
                        assert.equal(title, 'Example Notification');
                        assert.deepEqual(options, {
                            body: 'Notification Text...',
                            icon: '/favicon.ico'
                        });
                    });

                    webNotification.showNotification('Example Notification', {
                        body: 'Notification Text...'
                    }, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification no options test', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
                        assert.equal(title, 'no options');
                        assert.deepEqual(options, {
                            icon: '/favicon.ico'
                        });
                    });

                    webNotification.showNotification('no options', function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification first time permissions test', function (done) {
                inject(function (webNotification) {
                    window.notify.setFirstTimePermissions(function (title, options) {
                        assert.equal(title, 'first time');
                        assert.deepEqual(options, {});
                    });

                    webNotification.showNotification('first time', {}, function onShow(error, hide) {
                        validShowValidation(error, hide, done);
                    });
                });
            });

            it('showNotification with onClick', function (done) {
                inject(function (webNotification) {
                    window.notify.setAllowed(function (title, options) {
                        assert.equal(title, 'Example Notification');
                        assert.isFunction(options.onClick);
                    });

                    webNotification.showNotification('Example Notification', {
                        body: 'Notification Text...',
                        icon: 'my-icon.ico',
                        onClick: function () {
                            done();
                        }
                    }, function onShow(error, hide) {
                        assert.deepEqual(window.notify.getConfig(), {
                            autoClose: 0
                        });

                        validShowValidation(error, hide);
                    });
                });
            });
        });

        describe('showNotification not allowed tests', function () {
            it('showNotification not allowed test', function (done) {
                inject(function (webNotification) {
                    window.notify.setSupportedOnly();

                    webNotification.showNotification('not allowed', {}, function onShow(error, hide) {
                        errorValidation(error, hide, done);
                    });
                });
            });

            it('showNotification not allowed and not allowed to ask permissions test', function (done) {
                inject(function (webNotification) {
                    window.notify.setSupportedOnly();
                    webNotification.allowRequest = false;

                    webNotification.showNotification('no allowRequest', {}, function onShow(error, hide) {
                        errorValidation(error, hide, done);
                    });
                });
            });
        });

        it('showNotification not supported test', function (done) {
            inject(function (webNotification) {
                window.notify.setNotSupported();

                webNotification.showNotification('not supported', {
                    icon: 'bad-icon.ico'
                }, function onShow(error, hide) {
                    errorValidation(error, hide, done);
                });
            });
        });
    });
});
