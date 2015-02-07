define([
    'underscore',
    'jquery',
    'marionette',
    'vent',
    'util',
    'templates'
], function(_, $, Marionette, vent, util, templates) {

    'use strict';

    var View = Marionette.LayoutView.extend({

        el: '.loading-overlay',

        initialize: function() {

            _.bindAll(this);

            this.$meter = this.$('.meter');

            vent.on('core:collections:count', this._setSteps, this);
            vent.on('core:collections:load', this._step, this);

            // Happens on end of animation triggered by last step...
            // vent.on('core:collections:loaded', this.destroy, this);

            util.get('body').css({
                'overflow': 'hidden'
            });
        },

        _setSteps: function(num) {

            if (!num || !_.isNumber(num)) {
                this.destroy();
            }

            this.steps = num;
            this.$el.show(0);
        },

        _step: function(steps) {

            var percent = Math.floor(steps / this.steps * 100);

            this._markPercentage(percent);

            if (steps === this.steps) {
                this.$meter.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', this._destroy);
            }
        },

        _markPercentage: function(percent) {
            this.$meter.css({
                'width': percent + '%'
            });
        },

        _destroy: function() {
            this.destroy();
        },

        onDestroy: function() {

            util.get('body').css({
                'overflow': ''
            });
        }

    });

    return View;

});
