import patientData from "./mock/patients.json";
import type { Patient } from "../types/patient.types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPatients = async (): Promise<Patient[]> => {
  await delay(800);

  return patientData as Patient[];
};
