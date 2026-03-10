import { Component, inject, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EmailService } from '../email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm, SubmitStatus } from '../models/contact.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato-form',
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
],
  templateUrl: './contato-form.html',
  styleUrl: './contato-form.scss',
})
export class ContatoForm implements OnInit {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  contactForm!: FormGroup;
  isSubmitting = false;
  submitStatus = signal<SubmitStatus>(null)
  statusMessage = '';
  getDateTime!: string;

  ngOnInit(): void {
    this.initForm();

    const time = new Date();
    this.getDateTime = time.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      time: [''],
    });
  }

  // Getters para validação no template
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get time() {
    return this.contactForm.get('time');
  }

  async onSubmit(): Promise<void> {
    
    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm);
      return;
    }

    this.isSubmitting = true;
    this.submitStatus.set(null);

    const formData: ContactForm = this.contactForm.value;
    console.log(formData);
    try {
      const result = await this.emailService.sendFullContact(formData);

      this.submitStatus.set(result.success ? 'success' : 'error');
      this.statusMessage = result.message;

      if (result.success) {
        this.contactForm.reset();
      }
    } catch (error) {
      this.submitStatus.set('error');
      this.statusMessage = 'Erro inesperado. Tente novamente.';
    } finally {
      this.isSubmitting = false;

      // Limpar status após 5 segundos
      setTimeout(() => {
        this.submitStatus.set(null);
      }, 5000);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  phoneMask(event: Event): void {
    const input = event.target as HTMLInputElement;
    let valor = input.value;

    valor = valor.replace(/\D/g, '');
    valor = valor.slice(0, 11);

    if (valor.length > 0) {
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    }

    if (valor.length <= 13) {
      valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    input.value = valor;
  }
}
