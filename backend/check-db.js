const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_URI = 'mongodb://localhost:27017/lms_db';

async function viewData() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('--- Connected to MongoDB ---');
        
        const user = await User.findOne({ email: 'info1@algoascend.in' });
        
        if (user) {
            console.log(JSON.stringify(user, null, 2));
        } else {
            console.log('No user found in the database.');
        }
        
        await mongoose.disconnect();
    } catch (err) {
        console.error('Error:', err);
    }
}

viewData();
