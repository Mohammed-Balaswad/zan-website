import React from 'react';
import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { ContactClosing } from './components/ContactClosing';

export function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="bg-white py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <div className="grid overflow-hidden border border-border lg:grid-cols-[0.85fr_1.15fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactClosing />
    </main>
  );
}