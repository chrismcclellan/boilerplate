define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'models/collections',
    'templates',
    'vent',
    'util'
], function(_, $, Backbone, Marionette, collections, templates, vent, util) {

    'use strict';

    var View = Marionette.ItemView.extend({

        template: templates['modules/home/home'],

        attributes: {
            'class': 'row'
        },

        initialize: function(options) {

            this.options = options || {};

        }

    });

    return View;

});
