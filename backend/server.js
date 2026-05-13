const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('LMS Backend API is running');
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lms_db';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.get('/api/user', async (req, res) => {
    try {
        // Helper to get random number in range
        const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const userData = {
            name: 'AlgoAscend',
            email: 'info1@algoascend.in',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
            role: 'Full Stack Developer',
            progress: {
                completedCourses: randomInRange(10, 20),
                totalHours: randomInRange(150, 200),
                assignmentsDone: randomInRange(40, 50),
                certificatesEarned: randomInRange(5, 15),
                overallProgress: randomInRange(60, 90)
            },
            skills: [
                { name: "React", value: randomInRange(70, 95), color: "bg-[#3366ff]" },
                { name: "Node.js", value: randomInRange(60, 85), color: "bg-[#4ade80]" },
                { name: "MongoDB", value: randomInRange(50, 75), color: "bg-[#eab308]" }
            ],
            deadlines: [
                {
                    title: ["React Final Project", "Node.js API", "MongoDB Schema Design"][randomInRange(0, 2)],
                    date: `May ${randomInRange(15, 20)} · ${randomInRange(1, 5)} days left`,
                    color: "bg-[#ff6b6b]",
                    tag: "HOT"
                },
                {
                    title: ["AWS Quiz #3", "Docker Workshop", "Unit Testing"][randomInRange(0, 2)],
                    date: `May ${randomInRange(20, 25)} · ${randomInRange(6, 10)} days left`,
                    color: "bg-[#ffa94d]"
                },
                {
                    title: ["Portfolio Review", "UI/UX Case Study", "System Design Docs"][randomInRange(0, 2)],
                    date: `May ${randomInRange(26, 30)} · ${randomInRange(11, 15)} days left`,
                    color: "bg-[#ffd43b]"
                }
            ],
            resumeStats: {
                score: randomInRange(75, 95),
                skillsMatch: randomInRange(60, 85),
                interviewReady: randomInRange(80, 98)
            },
            aiInsights: (() => {
                const pool = [
                    "Improve DSA (Trees & Graphs)",
                    "Add 2 more projects to portfolio",
                    "Revise System Design patterns",
                    "Focus on React Hooks optimization",
                    "Complete 3 Mock Interviews",
                    "Update Resume with latest projects",
                    "Learn Docker for Backend deployment",
                    "Practice SQL complex queries"
                ];
                return pool.sort(() => 0.5 - Math.random()).slice(0, 3);
            })(),

            portfolioStatus: {
                projects: randomInRange(70, 90),
                completed: randomInRange(50, 70),
                pending: randomInRange(10, 30)
            },
            continueLearning: [
                (() => {
                    const current = randomInRange(1, 9);
                    const total = 9;
                    const progress = Math.round((current / total) * 100);
                    return {
                        title: 'React — Advanced Patterns & Hooks',
                        subtitle: `Module ${current} of ${total} • Next: ${["Custom Hooks", "Context API", "Render Props"][randomInRange(0, 2)]} • ${randomInRange(20, 50)} min left`,
                        progress: progress,
                        iconType: 'atom',
                        progressColor: 'bg-blue-500'
                    };
                })(),
                (() => {
                    const current = randomInRange(1, 8);
                    const total = 8;
                    const progress = Math.round((current / total) * 100);
                    return {
                        title: 'Python for Data Science & Machine Learning',
                        subtitle: `Module ${current} of ${total} • Next: ${["Pandas DataFrames", "NumPy Arrays", "Matplotlib"][randomInRange(0, 2)]} • ${randomInRange(1, 2)}h ${randomInRange(10, 50)}min left`,
                        progress: progress,
                        iconType: 'terminal',
                        progressColor: 'bg-purple-500'
                    };
                })()
            ],

            liveClasses: [
                (() => {
                    const title = ["System Design Masterclass", "Microservices Architecture", "Scalability 101"][randomInRange(0, 2)];
                    const instructor = ["Raj Kapoor", "Ankit Verma", "Suresh Kumar"][randomInRange(0, 2)];
                    const initials = title.split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('');
                    return {
                        title: title,
                        instructor: instructor,
                        time: `Today ${randomInRange(7, 9)}:00 PM`,
                        initials: initials,
                        avatarColor: "bg-[#339af0]",
                        active: true
                    };
                })(),
                (() => {
                    const title = ["React Performance", "Next.js 15 Features", "TypeScript Tips"][randomInRange(0, 2)];
                    const instructor = ["Sarah Chen", "Emily Blunt", "Jessica Doe"][randomInRange(0, 2)];
                    const initials = title.split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('');
                    return {
                        title: title,
                        instructor: instructor,
                        time: `Tomorrow ${randomInRange(6, 8)}:30 PM`,
                        initials: initials,
                        avatarColor: "bg-[#845ef7]",
                        active: false
                    };
                })(),
                (() => {
                    const title = ["DSA Interview Bootcamp", "Full Stack Patterns", "Cloud Native Apps"][randomInRange(0, 2)];
                    const instructor = ["Amit Sharma", "Priya Das", "Rohan Mehta"][randomInRange(0, 2)];
                    const initials = title.split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('');
                    return {
                        title: title,
                        instructor: instructor,
                        time: `May ${randomInRange(15, 20)}, ${randomInRange(5, 7)}:00 PM`,
                        initials: initials,
                        avatarColor: "bg-[#d9480f]",
                        active: false
                    };
                })()
            ],

            learningProgress: [
                { name: 'Mar 8', react: randomInRange(20, 40), python: randomInRange(15, 30), aws: randomInRange(5, 20) },
                { name: 'Mar 15', react: randomInRange(30, 50), python: randomInRange(25, 45), aws: randomInRange(10, 25) },
                { name: 'Mar 22', react: randomInRange(40, 60), python: randomInRange(35, 55), aws: randomInRange(20, 40) },
                { name: 'Mar 29', react: randomInRange(50, 70), python: randomInRange(45, 65), aws: randomInRange(30, 50) },
                { name: 'Apr 5', react: randomInRange(60, 80), python: randomInRange(55, 75), aws: randomInRange(40, 60) },
                { name: 'Apr 7', react: randomInRange(70, 90), python: randomInRange(65, 85), aws: randomInRange(50, 70) }
            ],
            avgScores: [
                { month: 'Jan', value: randomInRange(40, 60), highlight: false },
                { month: 'Feb', value: randomInRange(60, 80), highlight: false },
                { month: 'Mar', value: randomInRange(75, 90), highlight: false },
                { month: 'Apr', value: randomInRange(85, 100), highlight: true }
            ],
            activityData: (() => {
                const data = {};
                for (let i = 0; i < 90; i++) {
                    const d = new Date();
                    d.setDate(d.getDate() - i);
                    const key = d.toISOString().split("T")[0];
                    if (Math.random() > 0.2) {
                        data[key] = randomInRange(1, 10);
                    }
                }
                return data;
            })(),
            streak: randomInRange(5, 20),
            points: randomInRange(1000, 5000)
        };

        const user = await User.findOneAndUpdate(
            { email: 'info1@algoascend.in' },
            { $set: userData },
            { new: true, upsert: true }
        );

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});