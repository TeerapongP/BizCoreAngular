module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  corePlugins: {
    preflight: false, // Disables Tailwind's base styles
  },
  prefix: "tw-", // Add the 'tw-' prefix to all classes
};
