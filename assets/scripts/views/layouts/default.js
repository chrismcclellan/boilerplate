define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/modules/header/header',
    'views/modules/footer/footer',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, Header, Footer, vent, util, templates) {

    'use strict';

    var View = Marionette.LayoutView.extend({

        template: templates['layouts/default'],

        attributes: {
            'class': 'body-inner-wrapper container'
        },

        regions: {
            header: '#header',
            content: '#content',
            footer: '#footer'
        },

        templateHelpers: function() {

            var obj = {};
            
            obj.locals = {};
            obj.config = util.get('config');

            return obj;
        },

        initialize: function(options) {

            this.options = options || {};

            this.collections = util.get('collections');
        },

        onShow: function() {
            var self = this;
            var options = this.options;

            this.header.show(new Header(options));
            // this.footer.show(new Footer(options));

            // Allows us to ensure this layout exists before showing content
            if (options.content) {
                this.loadContent(options.content.view, options.content.options);
            }

            this.$el.foundation();
        },

        loadContent: function(View, options) {

            var self = this;

            options.parent = this;
            
            this.content.show(new View(options));
        }

    });

    return View;

});
