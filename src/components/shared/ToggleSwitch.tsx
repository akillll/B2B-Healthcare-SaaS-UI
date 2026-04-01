interface Props {
    value: "grid" | "list";
    onChange: (value: "grid" | "list") => void;
}

const ToggleSwitch = ({ value, onChange }: Props) => {
    return (
    <div>
      <button 
      onClick={() => onChange("grid")}
      style={{
          fontWeight: value === "grid" ? "bold" : "normal",
        }}
      >
        Grid
      </button>

      <button 
      onClick={() => onChange("list")}
      style={{
          fontWeight: value === "list" ? "bold" : "normal",
        }}
      >
        List
      </button>
    </div>
  );
}

export default ToggleSwitch;