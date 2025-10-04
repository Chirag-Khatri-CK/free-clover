export default {
  url: "http://localhost:4000",
  demo: import.meta.env.VITE_DEMO === 'true',
  appName: import.meta.env.VITE_SITE_TITLE || 'Abhinav',
  brand: import.meta.env.VITE_SITE_BRAND || 'Honeyside',
  showCredits: import.meta.env.VITE_SHOW_CREDITS === 'true',
};
