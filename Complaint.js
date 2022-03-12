const mongoose = require('mongoose');

//------------ Complaint Schema ------------//

const ComplaintSchema = new mongoose.Schema({
    subject: {
      type: String,
      required: true
    },
    complaint: {
      type: String,
      required: true
    },
    
    
  }, { timestamps: true });

  const Complaint = mongoose.model('Complaint', ComplaintSchema);

module.exports = Complaint;