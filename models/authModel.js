const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;
const AuthSchema = new Schema(
  {
    fullname: {
      type: String,
      maxLength: 64,
      required: true,
    },
    phoneno: {
      type: Number,
    },
    picture: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    ads: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ads",
      },
    ],
  },
  { timestamps: true }
);

AuthSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AuthSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", AuthSchema);
