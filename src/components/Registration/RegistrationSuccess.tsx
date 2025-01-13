import { motion } from "framer-motion";
import Link from "next/link";

export function RegistrationSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="container mx-auto px-4 py-12 max-w-xl"
    >
      <div className="relative overflow-hidden bg-neutralone/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border-2 border-softwhite/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-softwhite"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-softwhite">
              Registration Successful! 🎉
            </h2>
            <p className="text-softwhite/80 text-lg">
              Thank you for signing up!
              <br />
              We&apos;re excited to have you join us.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-softwhite transition-all rounded-lg 
                        bg-gradient-to-br from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}