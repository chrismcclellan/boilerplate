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

        template: templates['modules/servers/server-list-item'],

        events: {},

        templateHelpers: function () {

            var obj = {};
                obj.locals = {};

            return obj;
        },

        attributes: function() {

            var attrs = {
                'class': 'meeting',
                'data-resource-id': this.model.get('id'),
                'data-meeting-name': this.model.get('name')
            };

            return attrs;
        },

        initialize: function(options) {
            this.options = options || {};
        }

    });

    return View;

});
