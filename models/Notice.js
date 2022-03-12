const mongoose = require('mongoose');

//------------ Registration Schema ------------//

const NoticeSchema = new mongoose.Schema({
    subject: {
      type: String,
      required: true
    },
    file: {
      type: File,
      required: true
    }
    
  }, { timestamps: true });

  const Notice = mongoose.model('Notice', NoticeSchema);

module.exports = Admission;
