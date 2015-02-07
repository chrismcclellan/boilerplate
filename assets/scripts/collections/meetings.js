define([
    'underscore',
    'jquery',
    'backbone',
    'vent',
    'util'
], function(_, $, Backbone, vent, util) {

    'use strict';

    var Collection = Backbone.Collection.extend({

        urlRoot: '/v1/meetings',

        url: function() {
            return this.urlRoot;
        },

        initialize: function(options) {
            _.bindAll(this);
        },

        parse: function(res) {
            return res.data || res;
        }

    });

    return Collection;

});
