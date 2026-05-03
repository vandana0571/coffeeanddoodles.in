const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const contactForm = document.querySelector("#contact-form");
const year = document.querySelector("#year");

function syncThemeButton() {
  const isDark = root.dataset.theme === "dark";
  themeButton?.setAttribute("aria-pressed", String(isDark));
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", isDark ? "#111611" : "#eef7f0");
}

themeButton?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  syncThemeButton();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const subject = `Portfolio enquiry from ${email}`;
  const body = `From: ${email}\n\n${message}`;
  const mailtoUrl = `mailto:hello@coffeeanddoodles.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
});

if (year) {
  year.textContent = new Date().getFullYear();
}

syncThemeButton();
