define([
    'backbone',
    'util',
    'vent'
], function(Backbone, util, vent) {

    'use strict';

    var Model = Backbone.Model.extend({

        initialize: function(options) {
            _.bindAll(this);
        }

    });

    return Model;

});
