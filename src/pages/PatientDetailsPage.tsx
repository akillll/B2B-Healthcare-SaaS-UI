import { useEffect } from "react";
import { usePatientStore } from "../app/store/patientStore";
import ToggleSwitch from "../components/shared/ToggleSwitch";
import PatientGrid from "../components/features/patients/PatientGrid";
import PatientList from "../components/features/patients/PatientList";

const PatientDetailsPage = () => {
  const {
    patients,
    loading,
    viewMode,
    fetchPatients,
    setViewMode,
  } = usePatientStore();

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Patients</h2>

      <ToggleSwitch value={viewMode} onChange={setViewMode} />

      {viewMode === "grid" ? (
        <PatientGrid patients={patients} />
      ) : (
        <PatientList patients={patients} />
      )}
    </div>
  );
};

export default PatientDetailsPage;