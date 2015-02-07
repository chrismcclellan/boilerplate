define([
    'underscore',
    'jquery',
    'backbone',
    'backbone.syphon',
    'marionette',
    'models/meeting',
    'models/collections',
    'templates',
    'vent',
    'util'
], function(_, $, Backbone, Syphon, Marionette, MeetingModel, collections, templates, vent, util) {

    'use strict';

    var View = Marionette.ItemView.extend({

        template: templates['modules/new-meeting/new-meeting'],

        attributes: {
            'class': 'row'
        },

        events: {
            'submit form': '_submit'
        },

        templateHelpers: function() {

            var obj = {};
            obj.locals = {};

            return obj;
        },

        initialize: function(options) {

            _.bindAll(this);

            this.options = options || {};

            this.model = new MeetingModel();

            this.model.once('change', this._onChange, this);
        },

        _submit: function(event) {

            event.preventDefault();

            var self = this;

            var data = Backbone.Syphon.serialize(this);

            this.model.save(data, {
                method: 'post',
                wait: true,
                success: function(model, xhr) {

                    // Add this meeting model to the collection.
                    util.get('collections').get('meetings').add(self.model);
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

        _onChange: function() {

            var apikey = this.model.get('apikey');
            var id = this.model.get('id');

            if (apikey && id) {

                // Add meeting model to collection
                util.get('collections').get('meetings').add(this.model);

                // Redirect to meeting connect
                return vent.trigger('do:navigate', '/meetings/' + id);
            }

            // @TODO - handle errors?
        },

        onRender: function() {
            this.messages = [];
            this.$el.foundation();
        },

        onShow: function() {

        }

    });

    return View;

});
