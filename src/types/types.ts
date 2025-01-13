import { ReactNode } from "react";

export interface UpcomingEvent {
  title: string;
  startDateUTC: Date;
  durationInDays: number;
}

export type HighlightEvents = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export interface CommitteeMemberInfo {
  name: string;
  post: string;
  image: string;
}

export type Partner = {
  name: string;
  logo: string;
  link: string;
};

export type PartnerCategory = {
  type: string;
  partners: Partner[];
};

export interface ProjectBatch {
  batch: string;
  link: string;
}

interface ProjectTabContentBase {
  title: string;
  value: string;
  desc: string;
}





export interface SocialLink {
  name: string;
  icon: ReactNode;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// form event registration
interface BaseQuestion {
  id: string;
  label: string;
  required: boolean;
}

interface TextQuestion extends BaseQuestion {
  type: "text";
  maxLength: number;
}

interface TextAreaQuestion extends BaseQuestion {
  type: "textarea";
  maxLength: number;
}

interface ScaleQuestion extends BaseQuestion {
  type: "scale";
  min: number;
  max: number;
}

interface OptionQuestion extends BaseQuestion {
  type: "option";
  options: string[];
  multiSelect?: boolean;
}

interface OptionWithInputQuestion extends BaseQuestion {
  type: "option-with-input";
  options: string[];
  placeholder: string;
  maxLength: number;
}

export type FormQuestion =
  | TextQuestion
  | TextAreaQuestion
  | ScaleQuestion
  | OptionQuestion
  | OptionWithInputQuestion;

export interface EventRegistrationConfig {
  title: string;
  shortDescription: string;
  description: string;
  date: string;

  additionalInfo?: string;
}