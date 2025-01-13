import { motion } from "framer-motion";

interface TextAreaProps {
  id: string;
  value: string;
  required?: boolean;
  maxLength: number;
  onChange: (value: string) => void;
}

export function TextArea({
  id,
  value,
  required,
  maxLength,
  onChange,
}: TextAreaProps) {
  return (
    <motion.textarea
      whileFocus={{ scale: 1.01 }}
      className="textarea w-full bg-neutraltwo/20 border-2 border-softwhite/10 
                 focus:border-primary/50 focus:bg-neutraltwo/30 rounded-xl py-3 px-4
                 text-softwhite placeholder-softwhite/30 min-h-[120px] transition-all duration-300
                 focus:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
      required={required}
      value={value}
      maxLength={maxLength}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}