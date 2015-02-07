// Usage: {{#ifcond foo >= 1}}
// Usage: {{#ifcond foo < bar}}

if (typeof define !== 'function') {
    var server = true;
    var define = require('amdefine')(module);
}

define(['require', 'handlebars'], function(require) {
    
    var Handlebars = require( server ? 'sails/node_modules/express-handlebars/node_modules/handlebars' : 'handlebars');
    var helpers = {};

    /**
     * If Equals
     * if_eq this compare=that
     */
    helpers.if_eq = function(context, options) {
        if (context == options.hash.compare) {
            return options.fn(this);
        }
        return options.inverse(this);
    };

    /**
     * Unless Equals
     * unless_eq this compare=that
     */
    helpers.unless_eq = function(context, options) {
        if (context == options.hash.compare) {
            return options.inverse(this);
        }
        return options.fn(this);
    };

    /**
     * If Greater Than
     * if_gt this compare=that
     */
    helpers.if_gt = function(context, options) {
        if (context > options.hash.compare) {
            return options.fn(this);
        }
        return options.inverse(this);
    };

    /**
     * Unless Greater Than
     * unless_gt this compare=that
     */
    helpers.unless_gt = function(context, options) {
        if (context > options.hash.compare) {
            return options.inverse(this);
        }
        return options.fn(this);
    };

    /**
     * If Less Than
     * if_lt this compare=that
     */
    helpers.if_lt = function(context, options) {
        if (context < options.hash.compare) {
            return options.fn(this);
        }
        return options.inverse(this);
    };

    /**
     * Unless Less Than
     * unless_lt this compare=that
     */
    helpers.unless_lt = function(context, options) {
        if (context < options.hash.compare) {
            return options.inverse(this);
        }
        return options.fn(this);
    };

    /**
     * If Greater Than or Equal To
     * if_gteq this compare=that
     */
    helpers.if_gteq = function(context, options) {
        if (context >= options.hash.compare) {
            return options.fn(this);
        }
        return options.inverse(this);
    };

    /**
     * Unless Greater Than or Equal To
     * unless_gteq this compare=that
     */
    helpers.unless_gteq = function(context, options) {
        if (context >= options.hash.compare) {
            return options.inverse(this);
        }
        return options.fn(this);
    };

    /**
     * If Less Than or Equal To
     * if_lteq this compare=that
     */
    helpers.if_lteq = function(context, options) {
        if (context <= options.hash.compare) {
            return options.fn(this);
        }
        return options.inverse(this);
    };

    /**
     * Unless Less Than or Equal To
     * unless_lteq this compare=that
     */
    helpers.unless_lteq = function(context, options) {
        if (context <= options.hash.compare) {
            return options.inverse(this);
        }
        return options.fn(this);
    };

    /**
     * And / If comparison
     * if_and foo bar baz
     */
    helpers.if_and = function() {
        var args = Array.prototype.slice.call(arguments);
        var options = args.pop();

        for (var i = 0; i < args.length; i++) {
            if (!args[i]) {
                return options.inverse(this);
            }
        }
        return options.fn(this);
    };

    /**
     * Or / If comparison
     * if_or foo bar baz
     */
    helpers.if_or = function() {
        var args = Array.prototype.slice.call(arguments);
        var options = args.pop();

        for (var i = 0; i < args.length; i++) {
            if (args[i]) {
                return options.fn(this);
            }
        }
        return options.inverse(this);
    };

    /**
     * Negation of And / If comparison
     * unless_and foo bar baz
     */
    helpers.unless_and = function() {
        var args = Array.prototype.slice.call(arguments);
        var options = args.pop();

        for (var i = 0; i < args.length; i++) {
            if (args[i]) {
                return options.inverse(this);
            }
        }
        return options.fn(this);
    };


    for (var cond in helpers) {
        Handlebars.registerHelper(cond, helpers[cond]);
    }

    return helpers;
});
