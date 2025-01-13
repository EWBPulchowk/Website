"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TextInput } from "./QuestionTypes/TextInput";
import { TextArea } from "./QuestionTypes/TextArea";
import { ScaleInput } from "./QuestionTypes/ScaleInput";
import { RadioInput } from "./QuestionTypes/RadioInput";
import { RegistrationSuccess } from "./RegistrationSuccess";
import { OptionWithInput } from "./QuestionTypes/OptionWithInput";
import { FormQuestion } from "@/types/types";
import { baseQuestions, outreachQuestions, projectResearchQuestions, sponsorshipQuestions, technicalQuestions } from "@/app/data/userRegistration";


export default function RegistrationForm() {
  const [selectedUnit, setSelectedUnit] = useState<string>("");
  const [currentQuestions, setCurrentQuestions] = useState<FormQuestion[]>(baseQuestions);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Update questions when unit changes
  useEffect(() => {
    let unitSpecificQuestions: FormQuestion[] = [];
    
    switch (selectedUnit) {
      case "Project and Research":
        unitSpecificQuestions = projectResearchQuestions;
        break;
      case "Technical":
        unitSpecificQuestions = technicalQuestions;
        break;
      case "Outreach":
        unitSpecificQuestions = outreachQuestions;
        break;
      case "Sponsorship":
        unitSpecificQuestions = sponsorshipQuestions;
        break;
      default:
        unitSpecificQuestions = [];
    }

    setCurrentQuestions([
      ...baseQuestions,
      {
        id: "unit",
        label: "Select Your Unit",
        type: "option",
        required: true,
        options: ["Project and Research", "Technical", "Outreach","Sponsorship"],
      },
      ...unitSpecificQuestions
    ]);
  }, [selectedUnit]);

  const handleUnitChange = (value: string) => {
    const unitMapping: Record<string, string> = {
      "Technical Unit": "Technical",
      "Outreach Unit": "Outreach",
      "Project and Research Unit": "Project and Research",
      "Sponsorship Unit": "Sponsorship",
  
    };
    
    setSelectedUnit(unitMapping[value] || "");
    // Clear previous unit-specific data when changing units
    const baseFormData = Object.keys(formData).reduce((acc, key) => {
      if (baseQuestions.some(q => q.id === key) || key === "unit") {
        acc[key] = formData[key];
      }
      return acc;
    }, {} as Record<string, any>);
    
    setFormData(baseFormData);
    setFieldErrors({});
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    currentQuestions.forEach((question) => {
      const value = formData[question.id];

      if (question.required && !value) {
        errors[question.id] = "This field is required";
        return;
      }

      if (question.id === "email" && value) {
        if (!isValidEmail(value)) {
          errors[question.id] = "Please enter a valid email address";
          return;
        }
      }

      if (
        (question.type === "text" || question.type === "textarea") &&
        question.maxLength &&
        value?.length > question.maxLength
      ) {
        errors[question.id] = `Maximum ${question.maxLength} characters allowed`;
      }

      if (question.type === "option" && question.required) {
        if (question.multiSelect) {
          if (!value || !Array.isArray(value) || value.length === 0) {
            errors[question.id] = "Please select at least one option";
          }
        } else if (!value) {
          errors[question.id] = "Please select an option";
        }
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      setError("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          unit: selectedUnit
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      setSuccess(true);
      setFormData({});
      setTimeout(() => {
        const successElement = document.getElementById("registration-success");
        successElement?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (question: FormQuestion) => {
    const commonProps = {
      id: question.id,
      required: question.required,
      value: question.type === "option" && question.multiSelect
        ? formData[question.id] || []
        : formData[question.id] || "",
      onChange: (value: string | string[]) => {
        setFormData({ ...formData, [question.id]: value });
        if (fieldErrors[question.id]) {
          setFieldErrors({ ...fieldErrors, [question.id]: "" });
        }
      },
      error: fieldErrors[question.id],
    };

    switch (question.type) {
      case "text":
        return <TextInput {...commonProps} maxLength={question.maxLength} />;
      case "textarea":
        return <TextArea {...commonProps} maxLength={question.maxLength} />;
      case "scale":
        return (
          <ScaleInput {...commonProps} min={question.min} max={question.max} />
        );
      case "option":
        return (
          <RadioInput
            {...commonProps}
            options={question.options}
            multiSelect={question.multiSelect}
          />
        );
      case "option-with-input":
        return (
          <OptionWithInput
            {...commonProps}
            options={question.options}
            maxLength={question.maxLength}
            placeholder={question.placeholder}
          />
        );
      default:
        return null;
    }
  };

  if (success) {
    return (
      <div id="registration-success">
        <RegistrationSuccess />
      </div>
    );
  }

  return (
    <>
      <div className="container max-w-3xl px-4 pb-12 mx-auto">
        <div className="relative px-2 py-6 border rounded-lg md:p-8 bg-neutralone/95 backdrop-blur-sm border-white/10 text-softwhite">
          <h2 className="mb-3 text-2xl font-medium text-center md:mb-4 text-softwhite/80">
            Register Now
          </h2>
          <div className="h-1 mx-auto mb-8 w-44 md:w-64 bg-primary"></div>
          <div className="relative px-6 py-8 border-2 shadow-2xl bg-neutralone/80 backdrop-blur-xl rounded-2xl border-softwhite/5">
            <form onSubmit={handleSubmit} className="relative space-y-8">
              {currentQuestions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <label className="flex items-center gap-2 text-lg font-medium text-softwhite/90">
                    {question.label}
                    {question.required && (
                      <span className="text-sm text-primary">*</span>
                    )}
                  </label>
                  {question.id === "unit" ? (
                    <RadioInput
                      id="unit"
                      required={true}
                      value={formData.unit || ""}
                      onChange={(value) => {
                        handleUnitChange(value as string);
                        setFormData({ ...formData, unit: value });
                      }}
                      options={["Technical Unit", "Outreach Unit", "Project and Research Unit", "Sponsorship Unit"]}
                    />
                  ) : (
                    renderQuestion(question)
                  )}
                  {fieldErrors[question.id] && (
                    <p className="mt-1 text-sm text-red-400">
                      {fieldErrors[question.id]}
                    </p>
                  )}
                </motion.div>
              ))}

              {error && (
                <div className="px-4 py-2 text-sm text-red-400 border rounded-lg bg-red-500/10 border-red-500/20">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-4 overflow-hidden text-base font-medium transition-all rounded-lg md:text-lg bg-gradient-to-r from-primary to-secondary text-softwhite hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <div className="absolute inset-0 transition-transform translate-y-full bg-white/20 group-hover:translate-y-0" />
                <span className="relative">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Registering...
                    </span>
                  ) : (
                    "Register Now"
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}