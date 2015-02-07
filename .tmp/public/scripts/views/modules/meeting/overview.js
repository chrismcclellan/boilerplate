define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'templates',
    'vent',
    'util'
], function(_, $, Backbone, Marionette, templates, vent, util) {

    'use strict';

    var View = Marionette.LayoutView.extend({

        template: templates['modules/meeting/overview'],

        attributes: {
            'class': 'row'
        },

        events: {},

        templateHelpers: function() {

            var obj = {};
            obj.locals = {};

            return obj;
        },

        initialize: function(options) {

            _.bindAll(this);

            this.options = options || {};
        }

    });

    return View;

});
