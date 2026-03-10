import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environment/environment'; 
import { ContactForm, EmailResponse } from './models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly serviceId = environment.emailjs.serviceId;
  private readonly publicKey = environment.emailjs.publicKey;
  
  constructor() {
    emailjs.init(this.publicKey);
  }

  /**
   * Envia email de contato para a empresa
   */
  async sendContactEmail(formData: ContactForm): Promise<EmailResponse> {
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: formData.time, 
      };

      const response = await emailjs.send(
        this.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          status: response.status,
          text: response.text
        };
      }

      return {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente.'
      };

    } catch (error) {
      console.error('Erro detalhado:', error);
      return {
        success: false,
        message: 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.'
      };
    }
  }

  /**
   * Envia auto-reply para o cliente
   */
  async sendAutoReply(formData: ContactForm): Promise<EmailResponse> {
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: formData.time, 
      };

      const response = await emailjs.send(
        this.serviceId,
        environment.emailjs.autoReplyTemplateId,
        templateParams
      );

      return {
        success: response.status === 200,
        message: response.status === 200 ? 'Auto-reply enviado' : 'Erro no auto-reply',
        status: response.status
      };

    } catch (error) {
      console.error('Erro no auto-reply:', error);
      return {
        success: false,
        message: 'Erro ao enviar confirmação',
        status: 500
      };
    }
  }

  /**
   * Envia ambos os emails (contato + auto-reply)
   */
  async sendFullContact(formData: ContactForm): Promise<EmailResponse> {
    try {
      // Envia email para a empresa
      const contactResult = await this.sendContactEmail(formData);
      
      if (!contactResult.success) {
        return contactResult;
      }

      // Tenta enviar auto-reply (não crítico se falhar)
      await this.sendAutoReply(formData).catch(err => 
        console.warn('Auto-reply não enviado:', err)
      );

      return contactResult;

    } catch (error) {
      console.error('Erro no envio:', error);
      return {
        success: false,
        message: 'Erro ao processar sua solicitação'
      };
    }
  }
}
