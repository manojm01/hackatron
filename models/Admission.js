const mongoose = require('mongoose');

//------------ Registration Schema ------------//

const AdmissionSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    prn: {
      type: String,
      required: true
    },
    cgpa: {
      type: Number,
      required: true
    },
    department: {
        type: String,
        required: true
      },
    address: {
        type: String,
        required: true
      },
    caste: {
        type: String,
        required: true
      },
    year: {
        type: String,
        required: true
      },
    gender: {
        type: String,
        required: true
      },
    preference:{
        type: String,
        required: true
      },
    
  }, { timestamps: true });

  const Admission = mongoose.model('Admission', AdmissionSchema);

module.exports = Admission;
