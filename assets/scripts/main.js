// Define jQuery as AMD module
define.amd.jQuery = true;

require.config({

    // Production - (r.js build paths)
    baseUrl: '/scripts',
    optimize: "uglify2",
    inlineText: true,
    urlArgs: "bust=" + (new Date()).getTime(),

    paths: {
        'jquery': 'vendor/jquery/jquery-2.0.3',
        'underscore': 'vendor/underscore/lodash-2.4.1_underscore-1.5.2',
        'backbone': 'vendor/backbone/backbone-1.1.2',
        'backbone.babysitter': 'vendor/backbone/backbone.babysitter.min-0.1.0',
        'backbone.wreqr': 'vendor/backbone/backbone.wreqr.1.3.1',
        'backbone.syphon': 'vendor/backbone/backbone.syphon.min-0.4.1',
        'marionette': 'vendor/backbone/backbone.marionette-2.2.0',

        'foundation': 'vendor/foundation-5.3.0/foundation.min',
        // 'hbs': 'vendor/handlebars/handlebars-v2.0.0',
        'handlebars': 'vendor/handlebars/handlebars-v2.0.0',
        'text': 'vendor/text/text',
        'hoverintent': 'vendor/hoverintent/jquery.hoverintent.min',
        'imagesloaded': 'vendor/imagesloaded/jquery.imagesloaded.min',
        'moment': 'vendor/moment/moment',
        'hashes': 'vendor/jshashes/hashes.min',

        // templates
        'templates': 'templates',
        'template-registry': 'templates/registry',
        'helpers.conditions': 'templates/helpers/conditions',
        'helpers.date': 'templates/helpers/date',
        'helpers.eachlist': 'templates/helpers/eachlist',
        'helpers.string': 'templates/helpers/string',

        // custom libs
        'respond': 'lib/respond',

        // app
        'vent': 'singletons/vent',
        'util': 'models/util'
    },

    shim: {
        backbone: {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        },
        underscore: {
            exports: '_'
        },
        marionette: {
            exports: 'Marionette',
            deps: ['backbone']
        },
        foundation: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        hoverintent: {
            deps: ['jquery']
        },
        imagesloaded: {
            deps: ['jquery']
        },
        handlebars: {
            exports: 'Handlebars',
            init: function() {
                this.Handlebars = Handlebars;
                return this.Handlebars;
            }
        }
    },
    deps: ['jquery']
});

require([
    'app',
    'vent',
    'templates',
    'helpers.conditions',
    'helpers.date',
    'helpers.eachlist',
    'helpers.string'
], function(App, vent) {

    'use strict';

    // Avoid console errors.
    var console = {};
    if (typeof window.console === 'undefined' || typeof window.console.log === 'undefined') {
        console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.table = function() {};
        window.console = console;
    } else {
        console = window.console;
    }

    App.start();

});
