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

        messages: [],

        template: templates['modules/account/api'],

        attributes: {
            'class': 'row'
        },

        events: {
            'submit': '_submit'
        },

        templateHelpers: function() {

            var obj = {};
                obj.locals = {};
                obj.locals.messages = this.messages;

            return obj;

        },

        initialize: function(options) {
            this.options = options || {};
        },

        onRender: function() {
            this.$el.foundation();
            this.messages = [];
        },

        _submit: function(event) {

            var self = this;

            event.preventDefault();

            this.model.newApiKey({
                success: function() {

                    self.messages.push({
                        kind: 'success',
                        message: "Please copy your API Key now. It won't be shown again after you log out."
                    });

                    self.render();
                },
                error: function(model, xhr) {

                    var response = xhr.responseJSON || {};

                    if (response.error && response.error.message) {
                        self.messages.push({
                            kind: 'alert',
                            message: response.error.message
                        });
                    }

                    self.render();
                }
            });
        }

    });

    return View;

});
