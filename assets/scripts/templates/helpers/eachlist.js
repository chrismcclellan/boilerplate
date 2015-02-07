if (typeof define !== 'function') {
    var server = true;
    var define = require('amdefine')(module);
}

define(['require', 'handlebars'], function(require) {
    
    var Handlebars = require( server ? 'sails/node_modules/express-handlebars/node_modules/handlebars' : 'handlebars');
    var helpers = {};

    helpers.eachlist = function(context, name, options) {

        var items = context[name + '_list'];

        if (!items) {
            return '';
        }

        var ret = '';
        for (var i = 0, j = items.length; i < j; i++) {
            ret = ret + options.fn(items[i]);
        }
        return ret;
    };

    for (var cond in helpers) {
        Handlebars.registerHelper(cond, helpers[cond]);
    }

    // Handlebars.registerHelper('eachlist', eachlist);
    return helpers;
});
