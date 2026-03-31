import type { User } from "firebase/auth";

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;

    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}