export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: "male" | "female";
    condition: string;
    lastVisit: string;
}