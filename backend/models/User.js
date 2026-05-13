const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    role: { type: String, default: 'Student' },
    progress: {
        completedCourses: { type: Number, default: 0 },
        totalHours: { type: Number, default: 0 },
        assignmentsDone: { type: Number, default: 0 },
        certificatesEarned: { type: Number, default: 0 },
        overallProgress: { type: Number, default: 0 }
    },
    skills: [
        {
            name: { type: String },
            value: { type: Number },
            color: { type: String }
        }
    ],
    deadlines: [
        {
            title: { type: String },
            date: { type: String },
            color: { type: String },
            tag: { type: String }
        }
    ],
    resumeStats: {
        score: { type: Number, default: 0 },
        skillsMatch: { type: Number, default: 0 },
        interviewReady: { type: Number, default: 0 }
    },
    aiInsights: [{ type: String }],
    portfolioStatus: {
        projects: { type: Number, default: 0 },
        completed: { type: Number, default: 0 },
        pending: { type: Number, default: 0 }
    },
    continueLearning: [
        {
            title: { type: String },
            subtitle: { type: String },
            progress: { type: Number },
            iconType: { type: String }, // 'atom', 'terminal', etc.
            progressColor: { type: String }
        }
    ],
    liveClasses: [
        {
            title: { type: String },
            instructor: { type: String },
            time: { type: String },
            initials: { type: String },
            avatarColor: { type: String },
            active: { type: Boolean }
        }
    ],
    learningProgress: [
        {
            name: { type: String },
            react: { type: Number },
            python: { type: Number },
            aws: { type: Number }
        }
    ],
    avgScores: [
        {
            month: { type: String },
            value: { type: Number },
            highlight: { type: Boolean }
        }
    ],
    activityData: {
        type: Map,
        of: Number,
        default: {}
    },
    streak: { type: Number, default: 0 },
    points: { type: Number, default: 0 }
});


module.exports = mongoose.model('User', UserSchema);


