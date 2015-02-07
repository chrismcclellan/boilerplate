define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'vent',
    'util',
    'templates',
    'backbone.syphon'
], function(_, $, Backbone, Marionette, vent, util, templates) {

    'use strict';

    var View = Marionette.ItemView.extend({

        template: templates['modules/auth/register'],

        events: {
            'submit form': '_onSubmit'
        },

        templateHelpers: function() {

            var obj = {};
                obj.locals = {};
                obj.locals.error = this.error_message;

            return obj;

        },

        initialize: function(options) {

            this.options = options || {};

            this.model = util.get('user');
        },

        _onSubmit: function(event) {

            event.preventDefault();
            
            var self = this;
            var data = Backbone.Syphon.serialize(this);

            this.model.register(data, {
                success: function() {
                    self.model.login(data, {
                        success: function() {
                            vent.trigger('do:navigate', '/');
                        },
                        error: self._error
                    });
                },
                error: function(model, xhr) {
                    var response = xhr.responseJSON || {};

                    if (response.error && response.error.message) {
                        self.error_message = response.error.message;
                    }

                    self.render();
                }
            });
        },

        onRender: function() {
            this.$el.foundation();
        }

    });

    return View;

});
