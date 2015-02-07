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

        template: templates['modules/account/password'],

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

            _.bindAll(this);

            this.options = options || {};
        },

        _submit: function(event) {

            event.preventDefault();

            var self = this;

            var data = Backbone.Syphon.serialize(this);

            this.model.setPassword(data, {
                success: function() {

                    self.messages.push({
                        kind: 'success',
                        message: 'Password updated!'
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
        },

        onRender: function() {
            this.$el.foundation();
            this.messages = [];
        }

    });

    return View;

});
