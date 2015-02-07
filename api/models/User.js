var User = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {

        username: {
            type: 'string',
            unique: true
        },
        
        email: {
            type: 'email',
            unique: true
        },

        passports: {
            collection: 'Passport',
            via: 'user'
        },

        // Override toJSON instance method
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    }
};

module.exports = User;
