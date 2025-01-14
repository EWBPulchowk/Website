"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TextInput } from "./QuestionTypes/TextInput";
import { TextArea } from "./QuestionTypes/TextArea";
import { ScaleInput } from "./QuestionTypes/ScaleInput";
import { RadioInput } from "./QuestionTypes/RadioInput";
import { RegistrationSuccess } from "./RegistrationSuccess";
import { OptionWithInput } from "./QuestionTypes/OptionWithInput";
import { FormQuestion } from "@/types/types";
import { baseQuestions, creativeQuestions, eventManagementQuestions, hrQuestions, outreachQuestions,  projectQuestions,   socialMediaQuestions,  sponsorshipQuestions, technicalQuestions } from "@/app/data/userRegistration";

export default function RegistrationForm() {
  const [selectedPriority1Unit, setSelectedPriority1Unit] = useState<string | null>(null);
  const [selectedPriority2Unit, setSelectedPriority2Unit] = useState<string | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<FormQuestion[]>(baseQuestions);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Function to get unit-specific questions based on the unit selected
  const getUnitSpecificQuestions = (unit: string): FormQuestion[] => {
    switch (unit) {
      case "Project and Research":
        return projectQuestions;
      case "Technical":
        return technicalQuestions;
      case "Outreach":
        return outreachQuestions;
      case "Sponsorship":
        return sponsorshipQuestions;
        case "HR":
      return hrQuestions;
    case "Creative":
      return creativeQuestions;
    case "Event Management":
      return eventManagementQuestions;
    case "Social Media and PR":
      return socialMediaQuestions;
      
      default:
        return [];
    }
  };
  

  // Update questions based on the selected units
  useEffect(() => {
    const unitSpecificQuestions1 = selectedPriority1Unit ? getUnitSpecificQuestions(selectedPriority1Unit) : [];
    const unitSpecificQuestions2 = selectedPriority2Unit ? getUnitSpecificQuestions(selectedPriority2Unit) : [];

    setCurrentQuestions([
      ...baseQuestions,
      {
        id: "priority1Unit",
        label: "Select Your 1st Priority Unit",
        type: "option",
        required: true, // 1st priority is required
        options: [ "Project and Research",
        
          "Technical",
          "Outreach",
          "Sponsorship",
          "HR",
          "Creative",
          "Event Management",
          "Social Media and PR"],
      },
      {
        id: "priority2Unit",
        label: "Select Your 2nd Priority Unit",
        type: "option",
        required:true, 
        options: [ "Project and Research",
          "Research",
          "Technical",
          "Outreach",
          "Sponsorship",
          "HR",
          "Creative",
          "Event Management",
          "Social Media and PR"],
      },
      ...unitSpecificQuestions1,
      ...unitSpecificQuestions2,
    ]);
  }, [selectedPriority1Unit, selectedPriority2Unit]);

  const handleUnitChange = (priority: "priority1" | "priority2", value: string) => {
    if (priority === "priority1") {
      // Prevent selecting the same unit for both priorities
      if (value === selectedPriority2Unit) {
        alert("You cannot select the same unit for both priorities.");
        return;
      }
      setSelectedPriority1Unit(value);
    } else {
   
      // Prevent selecting the same unit as priority 1
      if (value === selectedPriority1Unit) {
        alert("You cannot select the same unit for both priorities.");
        return;
      }
      setSelectedPriority2Unit(value);
    }
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [priority === "priority1" ? "priority1Unit" : "priority2Unit"]: value,
    }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Validate required fields and other logic
    currentQuestions.forEach((question) => {
      const value = formData[question.id];

      if (question.required && !value && question.id === "priority1Unit") {
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

  const filterQuestionsByUnit = (unit: string, formData: Record<string, any>) => {
    const unitSpecificQuestions = getUnitSpecificQuestions(unit);
    return unitSpecificQuestions.reduce<Record<string, any>>((filteredData, question) => {
      if (formData[question.id]) {
        filteredData[question.id] = formData[question.id];
      }
      return filteredData;
    }, {} as Record<string, any>);
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
      // Collect base form data (excluding unit-specific questions)
      const baseFormData = baseQuestions.reduce((acc: { [key: string]: any }, question) => {
        if (formData[question.id]) {
          acc[question.id] = formData[question.id];
        }
        return acc;
      }, {});
  
      // First priority submission
      if (selectedPriority1Unit) {
        const priority1UnitData = filterQuestionsByUnit(selectedPriority1Unit, formData);
        const response1 = await fetch("/api/user-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            unit: selectedPriority1Unit,
            priority: "1st",
            ...baseFormData,
            ...priority1UnitData,
          }),
        });
  
        if (!response1.ok) {
          const errorData = await response1.json();
          throw new Error(errorData.message || "Registration failed");
        }
      }
  
      // Second priority submission (only if selected)
      if (selectedPriority2Unit) {
        const priority2UnitData = filterQuestionsByUnit(selectedPriority2Unit, formData);
        const response2 = await fetch("/api/user-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            unit: selectedPriority2Unit,
            priority: "2nd",
            ...baseFormData,
            ...priority2UnitData,
          }),
        });
  
        if (!response2.ok) {
          const errorData = await response2.json();
          throw new Error(errorData.message || "Registration failed");
        }
      }
  
      setSuccess(true); // Add this line to show success state
    } catch (error:any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const renderQuestion = (question: FormQuestion) => {
    const commonProps = {
      id: question.id,
      required: question.required,
      value: formData[question.id] || "",
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
        return <ScaleInput {...commonProps} min={question.min} max={question.max} />;
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
    <div className="container max-w-3xl px-4 pb-12 mx-auto">
      <div className="relative px-2 py-6 border rounded-lg md:p-8 bg-neutralone/95 backdrop-blur-sm border-white/10 text-softwhite">
        <h2 className="mb-3 text-2xl font-medium text-center md:mb-4 text-softwhite/80">Register Now</h2>
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
                  {question.required && <span className="text-sm text-primary">*</span>}
                </label>
                {question.id === "priority1Unit" ? (
                  <RadioInput
                    id="priority1Unit"
                    required={true}
                    value={formData.priority1Unit || ""}
                    onChange={(value) => handleUnitChange("priority1", value as string)}
                    options={[ "Project and Research",
                      "Technical",
                      "Outreach",
                      "Sponsorship",
                      "HR",
                      "Creative",
                      "Event Management",
                      "Social Media and PR"]}
                  />
                ) : question.id === "priority2Unit" ? (
                  <RadioInput
                    id="priority2Unit"
                    required={true}
                    value={formData.priority2Unit || ""}
                    onChange={(value) => handleUnitChange("priority2", value as string)}
                    options={[ "Project and Research",
                      "Technical",
                      "Outreach",
                      "Sponsorship",
                      "HR",
                      "Creative",
                      "Event Management",
                      "Social Media and PR"]}
                  />
                ) : (
                  renderQuestion(question)
                )}
                {fieldErrors[question.id] && (
                  <p className="mt-1 text-sm text-red-400">{fieldErrors[question.id]}</p>
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
  );
}
