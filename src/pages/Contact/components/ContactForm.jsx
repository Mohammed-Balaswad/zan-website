import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Loader2, Send, AlertCircle, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

export function ContactForm() {
  const { language, t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    requestType: '',
    message: '',
    consent: false,
    botcheck: '', // حقل Honeypot لكشف البوتات
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [cooldown, setCooldown] = useState(0); // مؤقت لمنع التكرار
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // التحقق من الـ Cooldown عند تحميل المكون
  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('zan_last_submit_time');
    if (lastSubmitTime) {
      const elapsed = Date.now() - parseInt(lastSubmitTime, 10);
      const cooldownTime = 60000; // 60 ثانية
      if (elapsed < cooldownTime) {
        setCooldown(Math.ceil((cooldownTime - elapsed) / 1000));
      }
    }
  }, []);

  // عداد تنازلي للـ Cooldown
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // الترتيب الاستراتيجي الجديد للخيارات
  const requestTypeOptions = [
    { id: 'investment', label: t('contactForm.typeOptions.investment') },
    { id: 'partnership', label: t('contactForm.typeOptions.partnership') },
    { id: 'services', label: t('contactForm.typeOptions.services') },
    { id: 'projects', label: t('contactForm.typeOptions.projects') },
    { id: 'meeting', label: t('contactForm.typeOptions.meeting') },
    { id: 'general', label: t('contactForm.typeOptions.general') },
  ];

  const selectedRequestType = requestTypeOptions.find(
    (opt) => opt.id === formData.requestType
  );

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

    if (cooldown > 0) return;

    if (formData.botcheck) {
      setStatus('success');
      return;
    }

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

      localStorage.setItem('zan_last_submit_time', Date.now().toString());
      setCooldown(60);

      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        requestType: '',
        message: '',
        consent: false,
        botcheck: '',
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
      botcheck: '',
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
        {/* Honeypot حقل مخفي لكشف البوتات */}
        <input
          type="text"
          name="botcheck"
          value={formData.botcheck}
          onChange={(e) => updateField('botcheck', e.target.value)}
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
              className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:ring-2 ${errors.name
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
              <div className="flex items-center gap-2">
                <span>{t('contactForm.orgLabel')}</span>
                <span className="text-xs font-normal text-[#9AA3AB]">
                  ({t('contactForm.optionalBadge')})
                </span>
              </div>
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
              className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:ring-2 ${errors.email
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
              <div className="flex items-center gap-2">
                <span>{t('contactForm.phoneLabel')}</span>
                <span className="text-xs font-normal text-[#9AA3AB]">
                  ({t('contactForm.optionalBadge')})
                </span>
              </div>
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

        {/* Custom Request Type Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label
            id="contact-request-type-label"
            className="mb-2 block text-sm font-medium text-[#17212B]"
          >
            {t('contactForm.typeLabel')}
          </label>

          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            aria-labelledby="contact-request-type-label"
            className={`flex h-12 w-full items-center justify-between rounded-lg border bg-white px-4 text-sm outline-none transition-all ${errors.requestType
                ? 'border-red-300 focus:border-red-400 ring-2 ring-red-100'
                : isDropdownOpen
                  ? 'border-[#C6A15B] ring-2 ring-[#C6A15B]/10 shadow-sm'
                  : 'border-[#E5E7EB] hover:border-[#061421]/30'
              }`}
          >
            <span className={selectedRequestType ? 'text-[#17212B] font-medium' : 'text-[#9AA3AB]'}>
              {selectedRequestType ? selectedRequestType.label : t('contactForm.typePlaceholder')}
            </span>

            <ChevronDown
              className={`h-4 w-4 text-[#C6A15B] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          {isDropdownOpen && (
            <ul
              role="listbox"
              dir={isRTL ? 'rtl' : 'ltr'}
              className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-[#E5E7EB] bg-white p-1.5 shadow-xl backdrop-blur-md"
            >
              {requestTypeOptions.map((option) => {
                const isSelected = formData.requestType === option.id;
                return (
                  <li
                    key={option.id}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      updateField('requestType', option.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex cursor-pointer items-center justify-between rounded-lg px-3.5 py-2.5 text-sm transition-colors ${isSelected
                        ? 'bg-[#0B1F33] text-white font-medium'
                        : 'text-[#17212B] hover:bg-[#F9F8F6] hover:text-[#C6A15B]'
                      }`}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="h-4 w-4 text-[#C6A15B]" />}
                  </li>
                );
              })}
            </ul>
          )}

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
            className={`w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm leading-7 text-[#17212B] outline-none transition placeholder:text-[#9AA3AB] focus:ring-2 ${errors.message
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
              aria-invalid={Boolean(errors.consent)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-[#CBD5E1] text-[#0B1F33] focus:ring-[#C6A15B]"
            />

            <span className="text-sm leading-6 text-[#66717C]">
              {t('contactForm.consentBeforeLink')}{' '}

              <Link
                to={`/${language}/privacy`}
                className="font-medium text-[#0B1F33] underline decoration-[#C6A15B] underline-offset-4 transition-colors hover:text-[#C6A15B]"
              >
                {t('contactForm.consentLink')}
              </Link>

              {t('contactForm.consentAfterLink')}
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
          disabled={status === 'submitting' || cooldown > 0}
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
          ) : cooldown > 0 ? (
            t('contactForm.cooldownMessage').replace('{seconds}', cooldown)
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