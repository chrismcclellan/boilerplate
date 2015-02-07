define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/modules/meetings/meetings-list-item',
    'templates',
    'vent',
    'util'
], function(_, $, Backbone, Marionette, MeetingsListItem, templates, vent, util) {

    'use strict';

    var View = Marionette.CompositeView.extend({

        template: templates['modules/meetings/meetings-list'],

        childView: MeetingsListItem,

        childViewContainer: '.meetings-list',

        attributes: {
            'class': 'row collapse'
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
