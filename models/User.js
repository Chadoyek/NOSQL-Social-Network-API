const { Schema, model } = mongoose;


const userSchema = new Schema({
        username: {
            type: String,
            unique: true,
            trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
//overriding  default behavior
    {
    toJSON: {
        virtuals:true
    },
    id:false,
    }
);

//retrieves the length of the user's `friends` array field on query.
userSchema.virtual(`friendCount`)
            .get(function() {
                return this.friends.length;
            })

const User = model('User', userSchema);

module.exports = User;


