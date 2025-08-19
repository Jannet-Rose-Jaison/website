// Footer year & greeting
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const greetEl = document.getElementById("greeting");
  if (greetEl) {
    const hour = new Date().getHours();
    let greeting = "Hello!";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    greetEl.textContent = greeting;
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");
  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("show");
    });
  }

  // Contact form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // error holders
      const eName = document.getElementById("err-name");
      const eEmail = document.getElementById("err-email");
      const eMsg = document.getElementById("err-message");
      const status = document.getElementById("formStatus");

      let ok = true;
      eName.textContent = "";
      eEmail.textContent = "";
      eMsg.textContent = "";
      status.textContent = "";

      if (!name.value.trim()) {
        eName.textContent = "Please enter your name.";
        ok = false;
      }
      const emailVal = email.value.trim();
      if (!emailVal) {
        eEmail.textContent = "Please enter your email.";
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        eEmail.textContent = "Please enter a valid email.";
        ok = false;
      }
      if (!message.value.trim()) {
        eMsg.textContent = "Please write a message.";
        ok = false;
      }

      if (ok) {
        status.textContent = "✅ Thanks! Your message has been validated. (Demo only — no backend)";
        form.reset();
      }
    });
  }
});
