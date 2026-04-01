import type { Patient } from "../../../types/patient.types";
import { memo } from "react";

interface Props {
  patient: Patient;
}

const PatientCard = ({ patient }: Props) => {
  return (
    <div>
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>{patient.condition}</p>
    </div>
  );
};

export default memo(PatientCard);