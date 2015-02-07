define([
    'underscore',
    'jquery',
    'backbone',
    'backbone.syphon',
    'marionette',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Syphon, Marionette, vent, util, templates) {

    'use strict';

    var View = Marionette.LayoutView.extend({

        template: templates['footer'],

        tagName: 'footer',

        attributes: {
            id: 'footer-inner-wrapper',
            'class': 'row'
        },

        events: {},

        initialize: function(options) {
            
            _.bindAll(this);

            this.options = options || {};
        }

    });

    return View;

});
