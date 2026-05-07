import { create } from 'zustand';
import { fetchUser } from '../services/api';

interface UserProgress {
    completedCourses: number;
    totalHours: number;
    assignmentsDone: number;
    certificatesEarned: number;
    overallProgress: number;
}

interface User {
    name: string;
    email: string;
    avatar?: string;
    role: string;
    progress: UserProgress;
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
