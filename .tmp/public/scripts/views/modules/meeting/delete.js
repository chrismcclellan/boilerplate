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

    var View = Marionette.ItemView.extend({

        template: templates['modules/meeting/delete'],

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
