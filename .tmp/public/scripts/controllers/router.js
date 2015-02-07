define([
        'underscore',
        'jquery',
        'backbone',
        'marionette',
        'vent',
        'util',
        'controllers/controller'
    ], function(_, $, Backbone, Marionette, vent, util, Controller) {

        'use strict';

        var Router = Marionette.AppRouter.extend({

            controller: Controller,

            appRoutes: {

                // Pages
                // 'dashboard(/)': 'loadDashboardPage',

                // Meetings
                'meetings(/)':            'loadMeetingsPage',
                'meetings/new(/)':        'loadNewMeetingPage',
                'meetings/:id(/:action)': 'loadMeetingPage',

                // Account
                'account(/:action)': 'loadAccountPage',

                // Auth
                'auth/:action': 'loadAuth',
                'login(/)':     'loadAuthLogin',
                'signup(/)':    'loadAuthRegister',
                'register(/)':  'loadAuthRegister',
                'logout(/)':    'loadAuthLogout',

                // Page
                'page/:slug': 'loadPageBySlug',

                // Default
                '': 'loadHomePage',

                // 404?
                '*params': 'load404Page'
            },

            initialize: function(options) {
                this.options = _.extend({}, this.options || {}, options || {});
            }

        });

        return Router;
    }

);
