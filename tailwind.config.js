/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx, ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        layer1: 'var(--color-layer1)',
        layer2: 'var(--color-layer2)',
        layout: 'var(--color-layout)',
        menu_text: 'var(--color-menu-text)',
        activated_text: 'var(--color-activated-text)',
        skill_bg: 'var(--color-skill-bg)',
        skill_text: 'var(--color-skill-text)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto mono'],
      },
      backgroundImage: {
        map: "url('/contact_map.jpg')",
        profile: "url('/profile.png')",
        pitts: "linear-gradient(to bottom, rgba(24, 24, 24, 0) 0%,  rgba(24, 24, 24, 0.3) 80%, rgba(24, 24, 24, 1) 100%), url('/pitts_bg.jpg')",
        intro: "url('/ski.jpg')",
        intro_border: 'var(--color-intro)',
        google_map: "url('/google_map.jpg')",
        contact: "linear-gradient(145deg, #1C002D 0%, #8F68A7 42%, #AE92BF 74%, #BCBCBC 100%)",
        avatar: "url('/avatar.jpg')",
        email_light: "url('/email_light.svg')",
        linkedin_light: "url('/linkedin_light.svg')",
        github_light: "url('/github_light.svg')",
        email_dark: "url('/email_dark.svg')",
        linkedin_dark: "url('/linkedin_dark.svg')",
        github_dark: "url('/github_dark.svg')",
        file: "url('/file.svg')",
        menu: "url('/menu.svg')",
        link: "url(/link.svg)",
        cancel_light: "url('/cancel_light.svg')",
      },
      dropShadow: {
        sm: "0 2px 2px rgba(255,255,255,0.5)",
        md: "0 5px 5px rgba(255,255,255,0.5)",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}