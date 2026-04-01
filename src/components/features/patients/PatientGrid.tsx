import PatientCard from "./PatientCard";
import type { Patient } from "../../../types/patient.types";
import { memo } from "react";

interface Props {
  patients: Patient[];
}

const PatientGrid = ({ patients }: Props) => {
  return (
    <div>
      {patients.map((p) => (
        <PatientCard key={p.id} patient={p} />
      ))}
    </div>
  );
};

export default memo(PatientGrid);