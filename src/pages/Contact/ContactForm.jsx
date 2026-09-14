import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

/**
 * Phase 1 Contact Form Architecture
 * - Pure frontend validation & UX states
 * - Decoupled submission handler (onSubmitHandler) for Phase 2 API connection
 */
export function ContactForm({ onSubmitHandler }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    requestType: 'investment',
    subject: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // Field level validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.validation.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contactForm.validation.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contactForm.validation.phoneRequired');
    }

    if (!formData.requestType) {
      newErrors.requestType = t('contactForm.validation.typeRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contactForm.validation.messageRequired');
    }

    if (!formData.consent) {
      newErrors.consent = t('contactForm.validation.consentRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    try {
      if (onSubmitHandler) {
        await onSubmitHandler(formData);
      } else {
        // Phase 1 Default Behavior: Simulate async API submission delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus('success');
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      requestType: 'investment',
      subject: '',
      message: '',
      consent: false,
    });
    setStatus('idle');
    setErrors({});
  };

  if (status === 'success') {
    return (
      <div className="bg-surface-white border border-gold/40 rounded-card p-8 text-center shadow-subtle my-4">
        <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">
          {t('contactForm.successTitle')}
        </h3>
        <p className="text-text-muted max-w-md mx-auto mb-6 text-sm">
          {t('contactForm.successMessage')}
        </p>
        <button
          onClick={resetForm}
          type="button"
          className="bg-navy text-white px-6 py-2.5 rounded-btn text-sm font-semibold hover:bg-navy-dark transition-colors inline-flex items-center gap-2"
        >
          {t('common.contactUs')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-surface-white border border-border rounded-card p-6 md:p-8 shadow-subtle space-y-6">
      <div>
        <h3 className="text-xl font-bold text-navy mb-1">
          {t('contactForm.title')}
        </h3>
        <p className="text-sm text-text-muted">
          {t('contactForm.subtitle')}
        </p>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-btn flex items-start gap-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{t('contactForm.errorTitle')}</p>
            <p className="text-xs mt-0.5">{t('contactForm.errorMessage')}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            {t('contactForm.nameLabel')} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contactForm.namePlaceholder')}
            className={`w-full px-4 py-2.5 rounded-btn border text-sm bg-surface-offwhite focus:bg-white transition-all outline-none ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold'
            }`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Organization */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            {t('contactForm.orgLabel')}
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder={t('contactForm.orgPlaceholder')}
            className="w-full px-4 py-2.5 rounded-btn border border-border bg-surface-offwhite focus:bg-white text-sm focus:border-gold transition-all outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            {t('contactForm.emailLabel')} <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contactForm.emailPlaceholder')}
            dir="ltr"
            className={`w-full px-4 py-2.5 rounded-btn border text-sm bg-surface-offwhite focus:bg-white transition-all outline-none ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            {t('contactForm.phoneLabel')} <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('contactForm.phonePlaceholder')}
            dir="ltr"
            className={`w-full px-4 py-2.5 rounded-btn border text-sm bg-surface-offwhite focus:bg-white transition-all outline-none ${
              errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Request Type */}
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          {t('contactForm.typeLabel')} <span className="text-gold">*</span>
        </label>
        <select
          name="requestType"
          value={formData.requestType}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-btn border border-border bg-surface-offwhite focus:bg-white text-sm focus:border-gold transition-all outline-none"
        >
          <option value="investment">{t('contactForm.typeOptions.investment')}</option>
          <option value="partnership">{t('contactForm.typeOptions.partnership')}</option>
          <option value="projects">{t('contactForm.typeOptions.projects')}</option>
          <option value="services">{t('contactForm.typeOptions.services')}</option>
          <option value="general">{t('contactForm.typeOptions.general')}</option>
          <option value="meeting">{t('contactForm.typeOptions.meeting')}</option>
        </select>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          {t('contactForm.subjectLabel')}
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t('contactForm.subjectPlaceholder')}
          className="w-full px-4 py-2.5 rounded-btn border border-border bg-surface-offwhite focus:bg-white text-sm focus:border-gold transition-all outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          {t('contactForm.messageLabel')} <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contactForm.messagePlaceholder')}
          className={`w-full px-4 py-2.5 rounded-btn border text-sm bg-surface-offwhite focus:bg-white transition-all outline-none resize-y ${
            errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold'
          }`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 rounded border-border text-navy focus:ring-gold"
          />
          <span className="text-xs text-text-muted leading-relaxed">
            {t('contactForm.consentLabel')} <span className="text-gold">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto px-8 py-3 bg-navy hover:bg-navy-dark text-white font-semibold text-sm rounded-btn transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{t('contactForm.submitting')}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 rtl:rotate-180" />
            <span>{t('contactForm.submitBtn')}</span>
          </>
        )}
      </button>
    </form>
  );
}
