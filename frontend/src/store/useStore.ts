import { create } from 'zustand';
import { fetchUser } from '../services/api';

interface UserProgress {
    completedCourses: number;
    totalHours: number;
    assignmentsDone: number;
    certificatesEarned: number;
    overallProgress: number;
}

interface Skill {
    name: string;
    value: number;
    color: string;
}

interface Deadline {
    title: string;
    date: string;
    color: string;
    tag?: string;
}

interface ResumeStats {
    score: number;
    skillsMatch: number;
    interviewReady: number;
}

interface PortfolioStatus {
    projects: number;
    completed: number;
    pending: number;
}

interface CourseProgress {
    title: string;
    subtitle: string;
    progress: number;
    iconType: string;
    progressColor: string;
}

interface LiveClass {
    title: string;
    instructor: string;
    time: string;
    initials: string;
    avatarColor: string;
    active: boolean;
}

interface ProgressPoint {
    name: string;
    react: number;
    python: number;
    aws: number;
}

interface ScorePoint {
    month: string;
    value: number;
    highlight: boolean;
}

interface User {
    name: string;
    email: string;
    avatar?: string;
    role: string;
    progress: UserProgress;
    skills: Skill[];
    deadlines: Deadline[];
    resumeStats: ResumeStats;
    aiInsights: string[];
    portfolioStatus: PortfolioStatus;
    continueLearning: CourseProgress[];
    liveClasses: LiveClass[];
    learningProgress: ProgressPoint[];
    avgScores: ScorePoint[];
    activityData: Record<string, number>;
    streak: number;
    points: number;
}

interface UserStore {
    user: User | null;
    loading: boolean;
    error: string | null;
    getUser: () => Promise<void>;
}

const useStore = create<UserStore>((set) => ({
    user: null,
    loading: false,
    error: null,
    getUser: async () => {
        set({ loading: true, error: null });
        try {
            const data = await fetchUser();
            set({ user: data, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useStore;