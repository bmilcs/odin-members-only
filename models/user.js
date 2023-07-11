const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxlength: 30 },
  password: { type: String, required: true, minlength: 8, maxlength: 30 },
  email: { type: String, required: true, maxlength: 320 },
  firstName: { type: String, required: true, maxlength: 50 },
  lastName: { type: String, required: true, maxlength: 50 },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  isMember: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

export default mongoose.model("User", UserSchema);
