define([
    'underscore',
    'jquery',
    'backbone',
    'backbone.syphon',
    'marionette',
    'models/collections',
    'templates',
    'vent',
    'util'
], function(_, $, Backbone, Syphon, Marionette, collections, templates, vent, util) {

    'use strict';

    var View = Marionette.ItemView.extend({

        template: templates['modules/account/preferences'],

        attributes: {
            'class': 'row'
        },

        events: {
            'change input[type="checkbox"]': '_storePref'
        },

        initialize: function(options) {
            this.options = options || {};
        },

        _storePref: function(event) {

            var data = Backbone.Syphon.serialize(this);
            var key = _.keys(data)[0];

            console.log(data[key].active);

            if (data[key].hasOwnProperty('active')) {
                data[key] = data[key].active;
                console.log(data);
            }

            // Key, val
            this.model.setPref(key, data[key]);
        }

    });

    return View;

});
