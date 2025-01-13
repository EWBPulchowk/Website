import { motion } from "framer-motion";
import { useState } from "react";

interface OptionWithInputProps {
  id: string;
  required?: boolean;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: string;
}

interface RadioOptionProps {
  selected: boolean;
  label: string;
  onClick: () => void;
}

const RadioOption = ({ selected, label, onClick }: RadioOptionProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 ${
      selected
        ? "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50"
        : "bg-neutraltwo/10 border border-softwhite/10 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
    }`}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
  >
    <div
      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
        selected ? "border-primary bg-primary/30" : "border-softwhite/30"
      }`}
    >
      {selected && <div className="w-2 h-2 rounded-full bg-secondary" />}
    </div>
    <span>{label}</span>
  </motion.button>
);

export function OptionWithInput({
  id,
  required,
  options,
  value,
  onChange,
  maxLength,
  placeholder,
}: OptionWithInputProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleOptionClick = (option: string) => {
    if (option === "other") {
      setShowCustomInput(true);
      onChange("");
    } else {
      setShowCustomInput(false);
      onChange(option);
    }
  };

  return (
    <div className="space-y-2 max-w-xl md:max-w-2xl mx-auto w-full">
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <RadioOption
            key={option}
            selected={!showCustomInput && value === option}
            label={option}
            onClick={() => handleOptionClick(option)}
          />
        ))}
        <RadioOption
          selected={showCustomInput}
          label="Other"
          onClick={() => handleOptionClick("other")}
        />
      </div>
      {/* Input box when "other" is selected */}
      {showCustomInput && (
        <motion.input
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full p-4 bg-neutraltwo/20 rounded-xl border-2 border-softwhite/60 focus:border-primary/50 outline-none"
        />
      )}
    </div>
  );
}