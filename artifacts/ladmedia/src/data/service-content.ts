import { serviceContentGrowth } from './service-content-growth';
import { serviceContentPerformance } from './service-content-performance';
import { serviceContentStrategy } from './service-content-strategy';

export interface ServicePageContent {
  eyebrow: string;
  overview: string[];
  idealFor: string[];
  approach: Array<{
    title: string;
    description: string;
  }>;
  outcomes: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServiceIds: string[];
}

export const servicePageContent: Record<string, ServicePageContent> = {
  ...serviceContentGrowth,
  ...serviceContentPerformance,
  ...serviceContentStrategy,
};