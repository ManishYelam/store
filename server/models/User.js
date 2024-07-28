const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    minlength: 20, 
    maxlength: 60 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  address: { 
    type: String, 
    maxlength: 400 
},
  role: { 
    type: String, 
    enum: ['admin', 'user', 'store_owner'], required: true 
},
});

module.exports = mongoose.model('User', UserSchema);
