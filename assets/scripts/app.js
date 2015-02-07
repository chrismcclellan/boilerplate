define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/modules/loading',
    'controllers/router',
    'models/user',
    'views/layouts/base',
    'vent',
    'util',
    'models/collections'
], function(_, $, Backbone, Marionette, LoadingView, Router, UserModel, BaseLayout, vent, util, Collections) {

    'use strict';

    var App = new Marionette.Application();

    App.addInitializer(function(options) {

        window.console.log('App init');

        // extend our options
        this.options = _.extend({}, this.options || {}, options || {});

        // store child views / layouts
        this.children = this.children || new Backbone.ChildViewContainer();

        // Our Loading view
        // var loading = new LoadingView();

        // init our user model
        util.set('environment', window.bootstrap.environment);
        util.set('user', new UserModel(window.bootstrap.user));

        // create our collections repo
        util.set('collections', new Collections());

        // create our BASE layout
        this.base = new BaseLayout(this.options);

        // create our Router
        this.router = new Router();

    });

    App.on('start', function() {
        vent.trigger('app:initialized', this);
    });

    // HISTORY INIT
    App.on('start', function() {
    // vent.on('core:collections:loaded', function() {

        // console.log('vent on core:collections:loaded');

        // Tells Backbone to start watching for hashchange events
        Backbone.history.start({
            pushState: util.get('history')
        });
    });

    // SYNC MODS
    // ==============================

    var originalSync = Backbone.sync;

    Backbone.sync = function(method, model, options) {

        if (window.Modernizr.cors) {

            // If the browser supports CORS, append the appropriate fields.
            options.xhrFields = _.extend(options.xhrFields || {}, {
                withCredentials: true
            });

            // @TODO - Test if this is needed or not
            // options.crossDomain = true;
        }

        // options.beforeSend = function(xhr) {

        //     if (!util) {
        //         return console.error('No utility model present.');
        //     }

        //     var user = util.get('user');

        //     if (!user) {
        //         return console.error('No user / permissions beforeSend');
        //     }

        //     var email = user.get('email');
        //     var secret = user.get('sessionid');

        //     var creds = btoa(email + ':' + secret);

        //     return xhr.setRequestHeader('Authorization', 'Basic ' + creds);
        // };

        return originalSync(method, model, options);
    };

    return App;

});
