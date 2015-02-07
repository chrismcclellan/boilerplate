define([
    'underscore',
    'jquery',
    'backbone',
    'vent',
    'util'
], function(_, $, Backbone, vent, util) {

    'use strict';

    var User = Backbone.Model.extend({

        defaults: {
            isLoggedIn: null,
            email: null,
            prefs: {}
        },

        urlRoot: '/v1/account',

        url: function() {

            if (this.method) {
                return this.urlRoot + this.method;
            }

            return this.urlRoot;
        },

        initialize: function() {
            _.bindAll(this);
        },

        parse: function(res) {

            var data = res.data || res;

            if (data.sessionid) {
                data.isLoggedIn = true;
            }

            if (_.isString(data.prefs)) {
                data.prefs = JSON.parse(data.prefs);
            }

            this.method = false;

            return data;
        },

        register: function(data, options) {

            data = data || {};

            this.method = false;

            options = _.extend({
                method: 'post',
                patch: true,
                // wait: true
            }, options || {});

            return this.save(data, options);
        },

        login: function(data, options) {

            this.method = 'login';

            options = _.extend({}, options || {}, {
                method: 'post',
                wait: true
            });

            return this.save(data, options);
        },

        logout: function() {

            var self = this;

            this.method = 'logout';

            this.clear({
                silent: true
            });

            return this.save({}, {
                wait: true,
                complete: function() {
                    window.location = '/';
                }
            });
        },


        /**
         * Set Password
         */

        setPassword: function(pwd, options) {

            var self = this;

            this.method = 'set-password';

            if (!pwd.current_password || !pwd.new_password || !pwd['new_password-repeat']) {
                return console.error('missing a password field');
            }

            if (pwd.new_password !== pwd['new_password-repeat']) {
                return console.error('new passwords dont match');
            }

            var data = {
                current_password: pwd.current_password,
                new_password: pwd.new_password
            };

            options = _.extend({
                silent: true,
                wait: true,
                patch: true,
                method: 'post'
            }, options || {});

            return this.save(data, options);
        },

        /**
         * Set Preference
         */

        setPref: function(key, val) {

            var prefs = this.get('prefs');

            if (!key || _.isUndefined(val)) {
                return console.error('User Model : Missing pref arguments.');
            }

            prefs[key] = val;

            var data = {
                action: 'prefs',
                prefs: prefs
            };

            return this.save(data, {
                wait: true,
                patch: true,
                method: 'post',
                success: function() {
                    // self.set('prefs', JSON.parse(self.get('prefs')));
                }
            });
        },


        /**
         *  Get Preferences
         */

        getPref: function(key) {

            var prefs = JSON.parse(this.get('prefs'));
            return prefs[key];
        }

    });

    return User;

});
