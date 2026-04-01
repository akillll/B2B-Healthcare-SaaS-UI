import type { Patient } from "../../../types/patient.types";
import { memo } from "react";

interface Props {
  patients: Patient[];
}

const PatientList = ({ patients }: Props) => {
  return (
    <table>
      <tbody>
        {patients.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.condition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(PatientList);