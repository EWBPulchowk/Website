import { motion } from "framer-motion";

interface RadioInputProps {
  id: string;
  required?: boolean;
  options: string[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiSelect?: boolean;
}

export function RadioInput({
  id,
  required,
  options,
  value,
  onChange,
  multiSelect,
}: RadioInputProps) {
  const handleChange = (option: string) => {
    if (multiSelect) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(option)
        ? currentValue.filter((v) => v !== option)
        : [...currentValue, option];
      onChange(newValue);
    } else {
      onChange(option);
    }
  };

  const isSelected = (option: string) => {
    if (multiSelect) {
      return Array.isArray(value) && value.includes(option);
    }
    return value === option;
  };

  return (
    <div className="space-y-3">
      {multiSelect && (
        <p className="text-sm italic text-white/60">Select all that apply</p>
      )}
      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <motion.button
            key={option}
            type="button"
            onClick={() => handleChange(option)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              isSelected(option)
                ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50 shadow-lg"
                : "bg-neutraltwo/20 border-2 border-softwhite/10 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}