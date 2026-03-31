import { create } from "zustand";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import type { AuthState } from "../../types/auth.types";

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email: string, password: string) => {
        set({ loading: true, error: null });

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            set({ user: res.user, loading: false});
        } catch (err: unknown) {
            let message = "Something went wrong";

            if (err instanceof Error) {
                message = err.message;
            }
            set({ error: message, loading: false})
        }
    },

    logout: async () => {
        try {
         await signOut(auth);
        set({ user: null })   
        } catch (err: unknown) {
            let message = "Logout failed"; 

            if (err instanceof Error) {
                message = err.message;
            }

            set({
                error: message,
            })
        }        
    },

    initAuthListener: () => {
        onAuthStateChanged(auth, (user) => {
            set({user,loading: false})
        })
    }
}))