import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export function ContactForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    requestType: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: '',
    }));

    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = t('contactForm.validation.nameRequired');
    }

    if (!formData.email.trim()) {
      nextErrors.email = t('contactForm.validation.emailRequired');
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = t('contactForm.validation.emailInvalid');
    }

    if (!formData.requestType) {
      nextErrors.requestType = t('contactForm.validation.typeRequired');
    }

    if (!formData.message.trim()) {
      nextErrors.message = t('contactForm.validation.messageRequired');
    }

    if (!formData.consent) {
      nextErrors.consent = t('contactForm.validation.consentRequired');
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error('Missing Web3Forms access key.');
      }

      const payload = {
        access_key: accessKey,

        subject: `ZAN Website — ${formData.requestType}`,

        from_name: formData.name,
        replyto: formData.email,

        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        request_type: formData.requestType,
        message: formData.message,

        botcheck: '',
      };

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to submit the form.'
        );
      }

      setStatus('success');

      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        requestType: '',
        message: '',
        consent: false,
      });

      setErrors({});
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');

    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      requestType: '',
      message: '',
      consent: false,
    });

    setErrors({});
  };

  if (status === 'success') {
    return (
      <div 
        id="contact-form-section" 
        className="flex min-h-full flex-col justify-center bg-surface-offwhite p-6 md:p-10 lg:p-12"
      >
        <div className="mx-auto w-full max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={32} strokeWidth={1.8} />
          </div>

          <p className="mb-3 text-sm font-medium text-[#C6A15B]">
            {t('contactForm.successTitle')}
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#0B1F33] md:text-3xl">
            {t('contactForm.successMessage')}
          </h2>

          <button
            type="button"
            onClick={handleReset}
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-[#0B1F33] px-6 text-sm font-medium text-[#0B1F33] transition hover:bg-[#0B1F33] hover:text-white"
          >
            {t('contactForm.resetBtn')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-form-section" className="bg-surface-offwhite p-6 md:p-10 lg:p-12">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0B1F33] md:text-3xl">
          {t('contactForm.title')}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#66717C]">
          {t('contactForm.subtitle')}
        </p>
      </div>

      {status === 'error' && (
        <div
          className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
          role="alert"
        >
          <AlertCircle
            size={20}
            className="mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-semibold">
              {t('contactForm.errorTitle')}
            </p>

            <p className="mt-1 text-sm leading-6">
              {t('contactForm.errorMessage')}
            </p>

            <a
              href="mailto:info@zanglobal.sa"
              className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
            >
              {t('contactForm.errorEmailAction')}
            </a>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6"
      >
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-[#17212B]"
            >
              {t('contactForm.nameLabel')}
            </label>

            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                updateField('name', e.target.value)
              }
              placeholder={t('contactForm.namePlaceholder')}
              aria-invalid={Boolean(errors.name)}
              className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:ring-2 ${
                errors.name
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                  : 'border-[#E5E7EB] focus:border-[#C6A15B] focus:ring-[#C6A15B]/10'
              }`}
            />

            {errors.name && (
              <p className="mt-2 text-xs text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Organization */}
          <div>
            <label
              htmlFor="contact-organization"
              className="mb-2 block text-sm font-medium text-[#17212B]"
            >
              <span>{t('contactForm.orgLabel')}</span>
              <span className="ms-2 text-xs font-normal text-[#9AA3AB]">
                {t('contactForm.optionalBadge')}
              </span>
            </label>

            <input
              id="contact-organization"
              type="text"
              value={formData.organization}
              onChange={(e) =>
                updateField(
                  'organization',
                  e.target.value
                )
              }
              placeholder={t('contactForm.orgPlaceholder')}
              className="h-12 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-[#17212B]"
            >
              {t('contactForm.emailLabel')}
            </label>

            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                updateField('email', e.target.value)
              }
              placeholder={t('contactForm.emailPlaceholder')}
              aria-invalid={Boolean(errors.email)}
              className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:ring-2 ${
                errors.email
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                  : 'border-[#E5E7EB] focus:border-[#C6A15B] focus:ring-[#C6A15B]/10'
              }`}
            />

            {errors.email && (
              <p className="mt-2 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-medium text-[#17212B]"
            >
              <span>{t('contactForm.phoneLabel')}</span>
              <span className="ms-2 text-xs font-normal text-[#9AA3AB]">
                {t('contactForm.optionalBadge')}
              </span>
            </label>

            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                updateField('phone', e.target.value)
              }
              placeholder={t('contactForm.phonePlaceholder')}
              className="h-12 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/10"
            />
          </div>
        </div>

        {/* Request Type */}
        <div>
          <label
            htmlFor="contact-request-type"
            className="mb-2 block text-sm font-medium text-[#17212B]"
          >
            {t('contactForm.typeLabel')}
          </label>

          <select
            id="contact-request-type"
            value={formData.requestType}
            onChange={(e) =>
              updateField('requestType', e.target.value)
            }
            aria-invalid={Boolean(errors.requestType)}
            className={`h-12 w-full appearance-none rounded-lg border bg-white px-4 text-sm text-[#17212B] outline-none transition focus:ring-2 ${
              errors.requestType
                ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                : 'border-[#E5E7EB] focus:border-[#C6A15B] focus:ring-[#C6A15B]/10'
            }`}
          >
            <option value="">
              {t('contactForm.typePlaceholder')}
            </option>

            <option value="investment">
              {t('contactForm.typeOptions.investment')}
            </option>

            <option value="partnership">
              {t('contactForm.typeOptions.partnership')}
            </option>

            <option value="projects">
              {t('contactForm.typeOptions.projects')}
            </option>

            <option value="services">
              {t('contactForm.typeOptions.services')}
            </option>

            <option value="general">
              {t('contactForm.typeOptions.general')}
            </option>

            <option value="meeting">
              {t('contactForm.typeOptions.meeting')}
            </option>
          </select>

          {errors.requestType && (
            <p className="mt-2 text-xs text-red-600">
              {errors.requestType}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-medium text-[#17212B]"
          >
            {t('contactForm.messageLabel')}
          </label>

          <textarea
            id="contact-message"
            rows={6}
            value={formData.message}
            onChange={(e) =>
              updateField('message', e.target.value)
            }
            placeholder={t('contactForm.messagePlaceholder')}
            aria-invalid={Boolean(errors.message)}
            className={`w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm leading-7 text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:ring-2 ${
              errors.message
                ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                : 'border-[#E5E7EB] focus:border-[#C6A15B] focus:ring-[#C6A15B]/10'
            }`}
          />

          {errors.message && (
            <p className="mt-2 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent */}
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) =>
                updateField('consent', e.target.checked)
              }
              className="mt-1 h-4 w-4 shrink-0 rounded border-[#CBD5E1] text-[#0B1F33] focus:ring-[#C6A15B]"
            />

            <span className="text-sm leading-6 text-[#66717C]">
              {t('contactForm.consentLabel')}
            </span>
          </label>

          {errors.consent && (
            <p className="mt-2 text-xs text-red-600">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0B1F33] px-6 text-sm font-medium text-white transition hover:bg-[#061421] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />
              {t('contactForm.submitting')}
            </>
          ) : (
            <>
              <Send size={17} />
              {t('contactForm.submitBtn')}
            </>
          )}
        </button>
      </form>
    </div>
  );
}