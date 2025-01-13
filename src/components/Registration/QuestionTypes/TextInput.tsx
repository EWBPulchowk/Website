import { motion } from "framer-motion";

interface TextInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  maxLength: number;
  error?: string;
}

export function TextInput({
  id,
  value,
  onChange,
  required,
  maxLength,
  error,
}: TextInputProps) {
  return (
    <div className="relative">
      <motion.input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        className={`w-full px-4 py-3 bg-white/40 border rounded-lg outline-none transition-all duration-200
          ${
            error
              ? "border-red-500/50 focus:border-red-500"
              : "border-white/10 hover:border-white/20 focus:border-primary/50"
          }
          focus:shadow-[0_0_0_1px_rgba(var(--primary-rgb),0.1)] backdrop-blur-sm`}
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 -z-10" />
    </div>
  );
}