define([
    'underscore',
    'jquery',
    'backbone',
    'vent',
    'conf/index'
], function(_, $, Backbone, vent, config) {

    'use strict';

    var Util = Backbone.Model.extend({

        initialize: function() {

            var self = this;

            // CONFIG
            this.set('config', config);

            // STATE
            // @TODO - enable this when stateful nav is supported
            this.set('history', window.Modernizr.history);
            // this.set('history', false);

            // DOC
            this.set('body', $('body'));
            this.set('window', $(window));
            this.set('document', $(document));

            window.SP = window.SP || {};
            window.SP.fomatBytes = this.formatBytes;
        },

        _coreCollectionsLoaded: false,

        setCoreCollectonsLoaded: function() {
            this._coreCollectionsLoaded = true;
        },

        coreCollectonsLoaded: function() {
            return this._coreCollectionsLoaded;
        },

        getLocation: function() {
            return window.location.protocol + '//' + window.location.host + '/' + Backbone.history.options.root + Backbone.history.getFragment();
        },

        formatBytes: function(bytes, label) {

            var e, value;
            var sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

            e = Math.floor(Math.log(bytes) / Math.log(1024));
            e = e < 0 ? 0 : e;

            value = Math.round(bytes / Math.pow(1024, e));

            if (label) {
                value = value + " " + sizes[e];
            }

            return value;
        },

        getMilliseconds: function(span) {


            if ('month' === span) {
                return 30 * 24 * 3600 * 1000;
            }

            if ('week' === span) {
                return 7 * 24 * 3600 * 1000;
            }

            if ('day' === span) {
                return 24 * 3600 * 1000;
            }

            if ('hour' === span) {
                return 3600 * 1000;
            }
        }

    });

    return new Util();

});
