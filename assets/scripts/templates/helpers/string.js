if (typeof define !== 'function') {
    var server = true;
    var define = require('amdefine')(module);
}

define(['require', 'handlebars'], function(require) {
    
    var Handlebars = require( server ? 'sails/node_modules/express-handlebars/node_modules/handlebars' : 'handlebars');
    var helpers = {};

    helpers.slugify = function(context) {

        if (!context) {
            return;
        }
        return context.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    };

    /**
     * String truncate
     * truncate this strLen=integer clean=true
     */
    helpers.truncate = function(context, options) {

        var length = parseInt(options.hash.strLen, 10) || context.length;

        context = context.substring(0, length);

        var ellipsis = '&hellip;';

        // Clean ending at a period
        if (!!options.hash.clean && context.match(/\.\s+/) && !context.match(/\.$/)) {
            context = context.split('. ');
            context.pop();
            context = context.join('. ') + '.';

            // Possibly add elipsis if no period at end
        } else if (!context.match(/\.$/) && options.hash.ellipsis) {
            context = context + ellipsis;
        }

        return context;
    };

    /**
     * Substring()
     * substring this start=integer end=integer
     */
    helpers.substring = function(context, options) {
        return context.substring(
            parseInt(options.hash.start, 10) || 0,
            parseInt(options.hash.end, 10) || context.length
        );
    };

    /**
     * Split()
     * split this separator=(int|string)
     */
    helpers.split = function(context, options) {
        return context.split(options.hash.separator || "");
    };

    /**
     * Stringify an object
     */
    helpers.JSONStringify = function(context) {
        console.log(context);
        // return context;
        return JSON.stringify(context);
    };


    for (var cond in helpers) {
        Handlebars.registerHelper(cond, helpers[cond]);
    }

    return helpers;
});
