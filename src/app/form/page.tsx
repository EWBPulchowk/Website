"use client"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

// Define types for our form questions
type QuestionType = 'text' | 'select' | 'radio' | 'checkbox' | 'textarea';

interface Option {
  label: string;
  value: string;
}

interface Question {
  id: string;
  type: QuestionType;
  question: string;
  required: boolean;
  options?: Option[];
}

interface FormResponse {
  [key: string]: string | string[] | boolean;
}

// Sample questions data
const questions: Question[] = [
  {
    id: 'name',
    type: 'text',
    question: 'What is your full name?',
    required: true
  },
  {
    id: 'experience',
    type: 'select',
    question: 'How many years of experience do you have?',
    required: true,
    options: [
      { label: 'Less than 1 year', value: '<1' },
      { label: '1-3 years', value: '1-3' },
      { label: '3-5 years', value: '3-5' },
      { label: 'More than 5 years', value: '5+' }
    ]
  },
  {
    id: 'preferred_role',
    type: 'radio',
    question: 'What role are you most interested in?',
    required: true,
    options: [
      { label: 'Frontend Developer', value: 'frontend' },
      { label: 'Backend Developer', value: 'backend' },
      { label: 'Full Stack Developer', value: 'fullstack' }
    ]
  },
  {
    id: 'skills',
    type: 'checkbox',
    question: 'Which technologies are you familiar with?',
    required: false,
    options: [
      { label: 'React', value: 'react' },
      { label: 'Node.js', value: 'nodejs' },
      { label: 'Python', value: 'python' },
      { label: 'TypeScript', value: 'typescript' }
    ]
  },
  {
    id: 'additional_info',
    type: 'textarea',
    question: 'Tell us more about yourself',
    required: false
  }
];

const DynamicForm = () => {
  const [formData, setFormData] = useState<FormResponse>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    questions.forEach(question => {
      if (question.required) {
        const value = formData[question.id];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          newErrors[question.id] = 'This field is required';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you would send this data to an API
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleChange = (questionId: string, value: string | string[] | boolean) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
    
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            value={(formData[question.id] as string) || ''}
            onChange={(e) => handleChange(question.id, e.target.value)}
            className="w-full"
            placeholder="Type your answer here"
          />
        );

      case 'select':
        return (
          <Select
            value={(formData[question.id] as string)}
            onValueChange={(value) => handleChange(question.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'radio':
        return (
          <RadioGroup
            value={(formData[question.id] as string)}
            onValueChange={(value) => handleChange(question.id, value)}
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                <Label htmlFor={`${question.id}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${option.value}`}
                  checked={Array.isArray(formData[question.id]) && 
                    (formData[question.id] as string[]).includes(option.value)}
                  onCheckedChange={(checked) => {
                    const currentValues = (formData[question.id] as string[]) || [];
                    const newValues = checked
                      ? [...currentValues, option.value]
                      : currentValues.filter(v => v !== option.value);
                    handleChange(question.id, newValues);
                  }}
                />
                <Label htmlFor={`${question.id}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <Textarea
            value={(formData[question.id] as string) || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(question.id, e.target.value)}
            placeholder="Type your answer here"
            className="min-h-32"
          />
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your form has been submitted successfully. Thank you for your response!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Dynamic Form</CardTitle>
        <CardDescription>Please fill out all required fields marked with *</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label>
                {question.question}
                {question.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              {renderQuestion(question)}
              {errors[question.id] && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errors[question.id]}</AlertDescription>
                </Alert>
              )}
            </div>
          ))}
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DynamicForm;