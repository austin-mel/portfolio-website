<script setup lang="ts">
import { ref } from 'vue';
import SVGIcons from '@/assets/SVGIcons.vue';
import type { AppIconName } from '@/types/types';

interface ContactItem {
  icon: AppIconName;
  label: string;
  value: string;
  href?: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const recipientEmail = 'austin.mel@mail.com';

const contactItems: ContactItem[] = [
  {
    icon: 'communication',
    label: 'Email',
    value: recipientEmail,
    href: `mailto:${recipientEmail}`,
  },
  {
    icon: 'cloud',
    label: 'Website',
    value: 'www.austinmelendez.com',
    href: 'https://www.austinmelendez.com',
  },
  {
    icon: 'shield',
    label: 'LinkedIn',
    value: 'austin-melendez',
    href: 'https://www.linkedin.com/in/austin-melendez',
  },
  {
    icon: 'code',
    label: 'Personal GitHub',
    value: 'austin-mel',
    href: 'https://github.com/austin-mel',
  },
    {
    icon: 'code',
    label: 'Educational GitHub',
    value: 'austin-mel-edu',
    href: 'https://github.com/austin-mel-edu',
  },
  {
    icon: 'database',
    label: 'Location',
    value: 'Sacramento, CA - Open to remote',
  },
];

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitMailto = () => {
  const name = form.value.name.trim();
  const senderEmail = form.value.email.trim();
  const subject = form.value.subject.trim() || `Portfolio contact from ${name || 'website visitor'}`;
  const body = [
    `Name: ${name || 'Not provided'}`,
    `Email: ${senderEmail || 'Not provided'}`,
    '',
    form.value.message.trim() || 'No message provided.',
  ].join('\n');

  window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
</script>

<template>
  <main class="min-h-screen bg-cream pt-[75px]">
    <section class="px-4 py-12 xs:px-6 md:px-12 md:py-16">
      <div class="mx-auto max-w-[980px]">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[22px] before:bg-accent before:content-['']">
          Get in touch
        </div>

        <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <section>
            <h1 class="font-display text-[44px] font-black leading-[1.05] tracking-normal text-ink">
              Let's build<br>something <em class="italic text-accent">great.</em>
            </h1>

            <p class="mt-4 text-[14px] font-light leading-[1.8] text-ink3">
              Open to data analytics, engineering, and consulting roles where I can turn messy data into clear decisions.
              I respond within 1-2 business days.
            </p>

            <div class="mt-8 flex flex-col">
              <a
                v-for="item in contactItems.filter((contact) => contact.href)"
                :key="item.label"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
                class="group flex items-center gap-3.5 border-b border-border py-3.5 transition-[padding] duration-200 first:border-t hover:pl-1.5"
              >
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-accent2/20 bg-accent-pale text-accent">
                  <SVGIcons :name="item.icon" class="h-4 w-4" />
                </span>
                <span class="min-w-0">
                  <span class="block text-[13px] font-semibold text-ink">{{ item.label }}</span>
                  <span class="block break-words text-[11px] text-ink3">{{ item.value }}</span>
                </span>
                <SVGIcons
                  name="arrowForward"
                  class="ml-auto h-4 w-4 shrink-0 text-ink4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>

              <div class="flex items-center gap-3.5 border-b border-border py-3.5">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-accent2/20 bg-accent-pale text-accent">
                  <SVGIcons name="database" class="h-4 w-4" />
                </span>
                <span>
                  <span class="block text-[13px] font-semibold text-ink">Location</span>
                  <span class="block text-[11px] text-ink3">Sacramento, CA - Open to remote</span>
                </span>
              </div>
            </div>
          </section>

          <section class="rounded-[8px] border border-border bg-white p-6 shadow-[0_4px_24px_rgba(13,17,23,0.08)] sm:p-9">
            <h2 class="mb-6 font-display text-xl font-bold tracking-normal text-ink">
              Send a message
            </h2>

            <form @submit.prevent="submitMailto">
              <div class="grid gap-3 sm:grid-cols-2">
                <div>
                  <label for="contact-name" class="mb-1.5 block text-[10px] font-semibold uppercase tracking-[1px] text-ink4">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    placeholder="Your name"
                    class="w-full rounded-[8px] border-[1.5px] border-border bg-cream px-3.5 py-2.5 font-sans text-[13px] text-ink outline-none transition focus:border-accent2 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.10)]"
                  >
                </div>

                <div>
                  <label for="contact-email" class="mb-1.5 block text-[10px] font-semibold uppercase tracking-[1px] text-ink4">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@example.com"
                    class="w-full rounded-[8px] border-[1.5px] border-border bg-cream px-3.5 py-2.5 font-sans text-[13px] text-ink outline-none transition focus:border-accent2 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.10)]"
                  >
                </div>
              </div>

              <div class="mt-4">
                <label for="contact-subject" class="mb-1.5 block text-[10px] font-semibold uppercase tracking-[1px] text-ink4">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="What's this about?"
                  class="w-full rounded-[8px] border-[1.5px] border-border bg-cream px-3.5 py-2.5 font-sans text-[13px] text-ink outline-none transition focus:border-accent2 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.10)]"
                >
              </div>

              <div class="mt-4">
                <label for="contact-message" class="mb-1.5 block text-[10px] font-semibold uppercase tracking-[1px] text-ink4">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  placeholder="Tell me about the project or role..."
                  rows="5"
                  class="min-h-[120px] w-full resize-y rounded-[8px] border-[1.5px] border-border bg-cream px-3.5 py-2.5 font-sans text-[13px] leading-[1.6] text-ink outline-none transition focus:border-accent2 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.10)]"
                ></textarea>
              </div>

              <button
                type="submit"
                class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-ink px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent"
              >
                Send message
                <SVGIcons name="arrowForward" class="h-4 w-4" />
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
