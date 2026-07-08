(function () {
  function setHref(selector, value) {
    if (!value) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute('href', value);
    });
  }

  function applyConfig() {
    var cfg = window.BENDIT_CONFIG || {};

    setHref('[data-config="downloadUrl"]', cfg.downloadUrl);
    setHref('[data-config="githubRepo"]', cfg.githubRepo);
    setHref('[data-config="githubReleasesUrl"]', cfg.githubReleasesUrl);
    setHref('[data-config="githubLatestReleaseUrl"]', cfg.githubLatestReleaseUrl);
    setHref('[data-config="githubIssuesUrl"]', cfg.githubIssuesUrl);
    setHref('[data-config="githubNewIssueUrl"]', cfg.githubNewIssueUrl);
    setHref('[data-config="paypalUrl"]', cfg.paypalUrl);

    document.querySelectorAll('[data-config="supportEmail"]').forEach(function (el) {
      if (cfg.supportEmail) {
        el.textContent = cfg.supportEmail;
        el.setAttribute('href', 'mailto:' + cfg.supportEmail);
      }
    });

    document.querySelectorAll('[data-config-text="windowsVersion"]').forEach(function (el) {
      if (cfg.windowsVersion) el.textContent = cfg.windowsVersion;
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyConfig);
  else applyConfig();
})();
