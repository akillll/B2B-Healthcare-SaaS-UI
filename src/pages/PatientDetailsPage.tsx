import { useEffect, useState, lazy, Suspense } from "react";
import { usePatientStore } from "../app/store/patientStore";
import ToggleSwitch from "../components/shared/ToggleSwitch";
import { useDebounce } from "../hooks/useDebounce";

const PatientGrid = lazy(
  () => import("../components/features/patients/PatientGrid"),
);

const PatientList = lazy(
  () => import("../components/features/patients/PatientList"),
);

const PatientDetailsPage = () => {
  const patients = usePatientStore((s) => s.patients);
  const filteredPatients = usePatientStore((s) => s.filteredPatients);
  const loading = usePatientStore((s) => s.loading);
  const viewMode = usePatientStore((s) => s.viewMode);
  const fetchPatients = usePatientStore((s) => s.fetchPatients);
  const setViewMode = usePatientStore((s) => s.setViewMode);
  const setSearch = usePatientStore((s) => s.setSearch);

  const[searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 400)

  useEffect(() => {
    if (patients.length === 0) {
      fetchPatients();
    }
  }, [patients.length, fetchPatients]);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Patients</h2>

      <input
      placeholder="Search patients..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)} />

      <ToggleSwitch value={viewMode} onChange={setViewMode} />

        <Suspense fallback={<p>Loading...</p>}>
      {viewMode === "grid" ? (
        <PatientGrid patients={patients} />
      ) : (
        <PatientList patients={patients} />
      )}
      </Suspense>
    </div>
  );
};

export default PatientDetailsPage;
