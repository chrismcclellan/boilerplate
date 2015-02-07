define([
    'underscore',
    'backbone',
    'vent',
    'util'
], function(_, Backbone, vent, util) {

    'use strict';

    var App = {};

    var Controller = {

        index: function(params) {
            this.loadHomePage();
        },

        // PAGES
        // ===============================================
        loadHomePage: function() {

            var obj = {
                layout: 'default',
                page: 'home'
            };

            this._loadPage(obj);
        },

        loadAccountPage: function(action) {

            var obj = {
                layout: 'default',
                page: 'account',
                action: action || 'password'
            };

            this._loadPage(obj);
        },

        loadMeetingsPage: function() {

            var obj = {
                layout: 'default',
                page: 'meetings'
            };

            this._loadPage(obj);
        },

        loadMeetingPage: function(id, action) {

            var obj = {
                layout: 'default',
                page: 'meeting',
                id: id,
                action: action
            };

            this._loadPage(obj);
        },

        loadNewMeetingPage: function() {

            var obj = {
                layout: 'default',
                page: 'new-meeting'
            };

            this._loadPage(obj);
        },

        load404Page: function() {

            var obj = {
                layout: 'default',
                page: 'error-404'
            };

            this._loadPage(obj);
        },


        // DEFAULT PAGES
        // ===============================================
        loadPage: function() {

            var obj = {
                layout: 'default',
                page: 'page'
            };

            this._loadPage(obj);
        },

        loadPageBySlug: function(slug) {

            var obj = {
                layout: 'default',
                page: 'page',
                slug: slug
            };

            this._loadPage(obj);
        },


        // AUTH
        // ===============================================
        loadAuthLogin: function() { this.loadAuth('login'); },
        loadAuthRegister: function() { this.loadAuth('register'); },
        loadAuthLogout: function() { this.loadAuth('logout'); },

        loadAuth: function(action) {

            // Logout check
            if (action === 'logout' || action === 'signout') {
                return util.get('user').logout();
            }

            var obj = {
                layout: 'auth',
                page: action || 'login',
                action: action || 'login'
            };

            this._loadLayout(obj);
        },


        // UTILITY METHODS
        // ===============================================
        _loadPage: function(options) {
            App.base.loadPage(options.page, options);
        },

        _loadLayout: function(options) {
            App.base.loadLayout(options.layout, options);
        }
    };

    vent.on('app:initialized', function(app) {
        App = app;
    });

    vent.on('do:navigate', function(path, options) {

        var params = {
            trigger: true,
            silent: false,
        };

        // Pass any options permitted by backbone
        // http://backbonejs.org/#Router-navigate
        options = _.extend({}, params, options || {});

        App.router.navigate(path, options);
        
    });

    return Controller;

});
