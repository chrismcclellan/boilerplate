/**
 * MainController
 *
 * @description :: Server-side logic for managing main
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    index: function(req, res, next) {

        var id = req.session.passport.user;

        if (!id) {
            return res.redirect('/login');
        }

        User.findById(id).exec(function(error, user) {

            if (error || !user) {
                return res.redirect('/login');
            }

            return res.view('mainpage', {
                locals: {
                    user: user[0],
                    environment: req._sails.config.environment
                }
            });

        });
    }
};
