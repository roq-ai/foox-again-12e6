interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelance profile', 'Apply for jobs', 'View job details', 'View company details'],
  ownerAbilities: [
    'Manage country data',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
    'Manage hiring processes',
    'Manage user data',
    'Manage company data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f523c27b-66c6-46d8-b87e-bef892cac215',
};
