window.BENDIT_CONFIG = {
  siteUrl: 'https://YOUR_DOMAIN_OR_AZURE_STATIC_WEB_APP_URL',
  product: {
    name: 'Bendit',
    version: 'v1.1',
    title: 'Bendit — bend messy data into shape',
    heroLabel: 'DuckDB desktop client',
    tagline: 'From Excel chaos to flexible SQL — import, transform and explore data at desktop speed.',
    heroSubtext: 'Bendit is a modern, local-first SQL workbench for people who live in spreadsheets, CSV exports and ad-hoc data work. Pull in messy files, clean them up fast, profile them, query them and ship the result.'
  },
  links: {
    windowsInstaller: 'https://YOUR_DOWNLOAD_HOST/BenditSetup-x64.exe',
    windowsPortable: 'https://YOUR_DOWNLOAD_HOST/Bendit-win-x64.zip',
    macAppleSilicon: 'https://YOUR_DOWNLOAD_HOST/Bendit-macos-arm64.dmg',
    macIntel: 'https://YOUR_DOWNLOAD_HOST/Bendit-macos-x64.dmg',
    changelog: '#',
    supportEmail: 'support@yourdomain.com',
    privacyEmail: 'info@yourdomain.com'
  },
  downloads: [
    { name: 'Windows Installer', platform: 'Windows x64', version: 'v1.1', size: 'Add size', note: 'Recommended installer for most Windows users.', url: 'https://YOUR_DOWNLOAD_HOST/BenditSetup-x64.exe' },
    { name: 'Windows Portable', platform: 'Windows x64', version: 'v1.1', size: 'Add size', note: 'Portable zip for users who prefer no installer.', url: 'https://YOUR_DOWNLOAD_HOST/Bendit-win-x64.zip' },
    { name: 'macOS Apple Silicon', platform: 'macOS ARM64', version: 'v1.1', size: 'Add size', note: 'Native build for Apple Silicon Macs.', url: 'https://YOUR_DOWNLOAD_HOST/Bendit-macos-arm64.dmg' },
    { name: 'macOS Intel', platform: 'macOS x64', version: 'v1.1', size: 'Add size', note: 'Intel build for older Mac systems.', url: 'https://YOUR_DOWNLOAD_HOST/Bendit-macos-x64.dmg' }
  ],
  features: [
    { number: '01', title: 'Import the real-world files people actually use', text: 'Bring in CSV, Excel and Parquet from single files, folders or globs. Bendit gives you a straight path from spreadsheet chaos to queryable tables.' },
    { number: '02', title: 'Profile, clean and transform without losing momentum', text: 'See nulls, type issues and distinct values quickly, then use one-click actions for trimming, casting, filling nulls and fixing decimal formats.' },
    { number: '03', title: 'Work in a proper SQL environment', text: 'Use a clean editor, schema-aware autocomplete, multiple sessions and fast results so ad-hoc data work feels controlled instead of improvised.' },
    { number: '04', title: 'Export clean output and move on', text: 'Export filtered or full results to CSV, Excel, Parquet or JSON when the job is done.' }
  ],
  donate: {
    heading: 'Help keep Bendit sharp',
    body: 'Bendit is built to save people time when Excel gets painful and ad-hoc data work turns messy. Donations help fund new features, bug fixes and the polish that makes the tool fast, practical and worth opening every day.'
  },
  paypal: {
    hostedButtonId: 'REPLACE_WITH_YOUR_PAYPAL_HOSTED_BUTTON_ID',
    fallbackUrl: 'https://www.paypal.com/donate/'
  },
  license: {
    shortHeading: 'Simple license summary',
    shortText: 'Bendit may be used free of charge for personal, educational, evaluation and internal business use. Redistribution, resale, hosting as a service, sublicensing or bundling with another commercial offering is not allowed without prior written permission. The software is provided “as is”, without warranties of any kind, to the maximum extent permitted by law.',
    commercialText: 'Commercial use inside your own company is allowed. If you want OEM rights, redistribution rights, white-label use or bundled distribution, contact us for a separate commercial agreement.'
  },
  footer: {
    note: 'Local-first DuckDB desktop client. Static marketing site ready for Azure Static Web Apps.'
  }
};
