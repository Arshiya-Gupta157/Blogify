const mongoose = require('mongoose');
const {createHmac, randomBytes} = require('crypto');
const {createToken} = require('../services/authentication')

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageUrl: {
        type: String,
        default: "/images/UserProfile.png",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
},
    { timestamps: true }
)

userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString("hex");
    const hashedPassword = createHmac('sha256', salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

})

userSchema.static("matchPasswordAndGenerateToken", async function(email, password){
    const user = await this.findOne({ email });
    if (!user) throw new Error('User not found');

    const salt = user.salt;
    const hashedPassword = createHmac('sha256', salt).update(password).digest("hex");
    // console.log("User pass: ", user.password, " Hashed pass: ", hashedPassword);
    
    if (hashedPassword !== user.password) throw new Error('Password Doesnot Match');
    const token = createToken(user);
    return token;
})

const User = mongoose.model("user", userSchema);
module.exports = User;