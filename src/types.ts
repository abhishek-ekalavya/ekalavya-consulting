export type ModalView = 
  | 'closed'
  | 'chooser'
  | 'formA'
  | 'formB'
  | 'thankYouA'
  | 'thankYouB';

export interface FormAData {
  name: string;
  companyAndUrl: string;
  monthlySpend: '<2L' | '2-5L' | '5-15L' | '15L+' | '';
  teamStructure: 'No team' | '1-2 people' | 'Small agency' | 'Large agency that needs governance' | '';
  whatIsBroken: 'No strategy' | 'Spends but no ROI' | 'Team exists but no leader' | 'Scaling to next market' | '';
  sixMonthVision: string;
  phone: string;
  email: string;
}

export type ExecutionNeed = 
  | 'Corporate AV / Brand Film'
  | 'Website / SEO / Web App'
  | 'Packaging / 3D / Product Visuals'
  | 'Performance Marketing Campaign'
  | 'Integrated Campaign (Radio, Print, TVC, Outdoor + Digital)'
  | 'Event / Brand Activation / Trade Show';

export interface FormBData {
  name: string;
  company: string;
  whatNeeded: ExecutionNeed[];
  briefReady: 'Yes' | 'No' | '';
  budget: '50k-2L' | '2-5L' | '5-10L' | '10L+' | '';
  timeline: 'Urgent <15 days' | 'This Month' | 'Next 30-60 days' | '';
  phone: string;
  email: string;
  challenge?: string;
}

export interface BriefConfirmation {
  briefId: string;
  submittedAt: string;
  data: FormBData;
}
