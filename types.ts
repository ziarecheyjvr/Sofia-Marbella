import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServicePackage {
  title: string;
  duration?: string;
  audience?: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  correctAnswer: string;
  options: string[];
  image?: string;
}

export interface QuizResult {
  title: string;
  subtitle: string;
  description: string;
  scoreRange: string;
}


export interface Dimension {
  title: string;
  description: string;
  icon: ReactNode;
}
