// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.renewinghopestrategies.org',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static',
  builds: {
    inlineStylesheets: 'auto'
  },
  redirects: {
    // Old Wix URLs → new IA
    '/anxiety-counselling-in-hemet-ca': '/services/anxiety/hemet',
    '/depression-counselling-in-riverside-ca': '/services/depression/riverside',
    '/depression-counselling-in-murrieta-ca': '/services/depression/murrieta',
    '/depression-counselling-in-hemet-ca': '/services/depression/hemet',
    '/relationship-issues-counselling-in-riverside-ca': '/services/relationship/riverside',
    '/relationship-issues-counselling-in-murrieta-ca': '/services/relationship/murrieta',
    '/relationship-issues-counselling-in-hemet-ca': '/services/relationship/hemet',
    '/anger-management-counselling-in-riverside-ca': '/services/anger-management/riverside',
    '/anger-management-counselling-in-murrieta-ca': '/services/anger-management/murrieta',
    '/anger-management-counselling-in-hemet-ca': '/services/anger-management/hemet',
    '/eating-disorders-counselling-in-riverside-ca': '/services/eating-disorders/riverside',
    '/eating-disorders-counselling-in-murrieta-ca': '/services/eating-disorders/murrieta',
    '/eating-disorders-counselling-in-hemet-ca': '/services/eating-disorders/hemet',
    '/meet-the-board': '/about/board',
    '/event-list': '/events'
  }
});