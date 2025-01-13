import { motion } from "framer-motion";

interface ScaleInputProps {
  id: string;
  min: number;
  max: number;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export function ScaleInput({
  id,
  min,
  max,
  value,
  required,
  onChange,
}: ScaleInputProps) {
  return (
    <div className="flex flex-wrap gap-3 py-2">
      {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((num) => (
        <motion.label
          key={num}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer relative"
        >
          <input
            type="radio"
            name={id}
            value={num.toString()}
            checked={value === num.toString()}
            onChange={(e) => onChange(e.target.value)}
            className="hidden"
            required={required}
          />
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-xl
                          transition-all duration-300 font-medium text-lg
                          ${
                            value === num.toString()
                              ? "bg-gradient-to-br from-primary to-secondary text-softwhite shadow-lg scale-110"
                              : "bg-neutraltwo/20 hover:bg-neutraltwo/30 text-softwhite/70"
                          }`}
          >
            {num}
          </div>
        </motion.label>
      ))}
    </div>
  );
}