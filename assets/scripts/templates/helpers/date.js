// helper to do date-related functions via moment.js

if (typeof define !== 'function') {
    var server = true;
    var define = require('amdefine')(module);
}

define(['require', 'handlebars', 'moment'], function(require) {
    
    var Handlebars = require( server ? 'sails/node_modules/express-handlebars/node_modules/handlebars' : 'handlebars');
    var moment = require('moment');
    var helpers = {};

    /**
     * Convert date to "minutes ago"
     * dateAgo date
     */

    helpers.dateAgo = function(date, options) {

        if (!(moment(date).isValid())) {
            // console.error('Invalid date', date);
            return "";
        }

        // 2 hours ago ... 22 hours ago
        var now = moment();
        var m = moment(date);

        var diff = now.diff(m, 'minutes');

        var ago;

        // Set this to some value that will account for caching / CDN
        if (diff > 15) {
            ago = m.fromNow();
        } else {
            ago = 'Just now';
        }


        if (!options.hash.noupper) {
            // turn off with noupper=1
            ago = ago.charAt(0).toUpperCase() + ago.slice(1);
        }
        return ago;
    };

    /**
     * DateFormatter
     * dateFormat date format=YYMMDD
     */

    helpers.dateFormat = function(date, options) {

        if (!(moment(date).isValid())) {
            // console.error('Invalid date', date);
            return "";
        }

        var format = options.hash.format || "LLLL";
        return moment(date).format(format);
    };

    for (var cond in helpers) {
        Handlebars.registerHelper(cond, helpers[cond]);
    }

    return helpers;
});
