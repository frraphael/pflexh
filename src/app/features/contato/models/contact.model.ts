export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  time: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  status?: number;
  text?: string;
}

export type SubmitStatus = 'success' | 'error' | null;