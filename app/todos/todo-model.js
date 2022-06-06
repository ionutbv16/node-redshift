const mongoose = require("mongoose");
const {
  NUM_CHARACTERS_VALIDATION,
  TEXT_REQUIRED,
  TEXT_NUM_CHARACTERS_VALIDATION,
} = require("../constants/constants");

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, TEXT_REQUIRED],
    minlength: [NUM_CHARACTERS_VALIDATION, TEXT_NUM_CHARACTERS_VALIDATION],
    trim: true,
  },
  createDate: {
    type: String,
    default: formattedDate(new Date()),
  },
});
function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return `${month}/${day}/${year}`;
}
module.exports = mongoose.model("Todo", todoSchema);
