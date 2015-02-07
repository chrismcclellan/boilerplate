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

        template: templates['pages/page'],

        regions: {
            content: '#page-content'
        },

        attributes: {
            'class': 'row'
        },

        initialize: function(options) {

            this.options = _.extend({}, this.options || {}, options || {});

            this.children = this.children || new Backbone.ChildViewContainer();

            if (_.isFunction(this.init)) {
                this.init(options);
            }
        },

        templateHelpers: function() {

            var obj = {};

            obj.locals = {};
            obj.locals.options = this.options;

            return obj;
        },

        onRender: function() {
            this.$('li.active').removeClass('active');
            this.$('[data-action="' + this.options.action + '"]').parent('li').addClass('active');
        },

        onDestroy: function() {
            this.children.call('destroy');
        }

    });

    return View;

});
