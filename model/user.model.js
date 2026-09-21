import {Schema , model} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {

    fullname: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },

    mobile: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);




// userSchema.pre("save", async function () {
  
//   const count = await this.constructor.countDocuments({
//     email: this.email,
//   });

//   if (count > 0) {
//     throw new Error("email already exists");
//   }
// });


userSchema.pre("save", async function () {

  const encryptedPassword = await bcrypt.hash(this.password.toString(), 12);
  this.password = encryptedPassword;
  
})

const UserModel = model("User", userSchema)

export default UserModel
