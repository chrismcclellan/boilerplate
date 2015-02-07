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

        template: templates['modules/auth/login'],

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

            _.bindAll(this);

            this.options = options || {};

            this.model = util.get('user');
        },

        _onSubmit: function(event) {

            event.preventDefault();
            
            var self = this;
            var data = Backbone.Syphon.serialize(this);

            this.model.login(data, {
                wait: true,
                success: this._success,
                error: function(model, xhr) {

                    var response = xhr.responseJSON || {};

                    if (response.error && response.error.message) {
                        self.error_message = response.error.message;
                    }

                    self.render();
                }
            });
        },

        _success: function(res) {
            vent.trigger('do:navigate', '/');
        },

        onRender: function() {

            // unset errors
            this.error_message = false;

            this.$el.foundation();
        }

    });

    return View;

});
