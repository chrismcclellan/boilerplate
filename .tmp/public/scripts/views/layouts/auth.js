define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/modules/auth/login',
    'views/modules/auth/register',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, Login, Register, vent, util, templates) {

    'use strict';

    var View = Marionette.LayoutView.extend({

        template: templates['layouts/auth'],

        attributes: {
            id: 'body-inner-wrapper'
        },

        events: {
            'click .alt-auth[data-action]': '_altAuth'
        },

        regions: {
            form: '#auth-form'
        },

        initialize: function(options) {
            this.options = options || {};
        },

        _altAuth: function(event) {
            
            event.preventDefault();
            event.stopPropagation();

            var $targ = $(event.currentTarget);
            var action = $targ.data('action');
            var options = this.options;

            if (action === 'login') {
                return this.form.show(new Login(options));
            }

            this.form.show(new Register(options));
        },

        onShow: function() {
            var self = this;
            var options = this.options;

            if (options.action === 'register' || options.action === "signup") {
                return this.form.show(new Register(options));
            }

            this.form.show(new Login(options));
        },

        loadContent: function(View, options) {
            options.parent = this;
            this.content.show(new View(options));
        }

    });

    return View;

});
