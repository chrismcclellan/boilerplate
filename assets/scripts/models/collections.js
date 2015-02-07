define([
    'backbone',
    'util',
    'vent'
], function(Backbone, util, vent) {

    'use strict';

    var Model = Backbone.Model.extend({

        initialize: function(options) {
            _.bindAll(this);
        },

        _setCollection: function(key, collection) {
            return this.set(key, collection);
        },

        _getCollection: function(key) {
            return this.get(key);
        }

    });

    return Model;

});
