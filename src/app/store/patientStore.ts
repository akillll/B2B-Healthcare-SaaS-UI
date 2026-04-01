import { create } from "zustand";
import type { Patient } from "../../types/patient.types";
import { fetchPatients } from "../../services/patientService";

type ViewMode = "grid" | "list";

interface PatientState {
    patients: Patient[];
    filteredPatients: Patient[];
    loading: boolean;
    viewMode: ViewMode;
    search: string;

    fetchPatients: () => Promise<void>;
    setViewMode: (mode: ViewMode) => void;
    setSearch: (value: string) => void;
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    filteredPatients: [],
    loading: false,
    viewMode: "grid",
    search: "",

    fetchPatients: async () => {
        set({ loading: true });

        try {
            const data = await fetchPatients();

            set({
                patients: data,
                filteredPatients: data,
                loading: false,
            });
        } catch {
            set({ loading: false })
        }
    },

    setViewMode: (mode) => set({ viewMode: mode }),

    setSearch: (value) => 
        set((state) => {
            const filtered = state.patients.filter((p) => 
                 p.name.toLowerCase().includes(value.toLowerCase())
            )

            return {
                search: value,
                filteredPatients: filtered,
            }
        })
}))