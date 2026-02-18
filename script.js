// ====== CONFIG (EDIT THIS) ======
const WHATSAPP_NUMBER = "+919330628567"; // e.g. "919876543210"
const EMAIL_PRIMARY = "contact@techlawandtrust.com";
const EMAIL_SECONDARY = "tamalisg@gmail.com";

// ====== HELPERS ======
function encode(str) {
  return encodeURIComponent(str);
}

function buildOrderMessage({ name, mobile, address, qty }) {
  return [
    "Order Request – Tech, Law & Trust",
    `Name: ${name || ""}`,
    `Mobile: ${mobile || ""}`,
    `Address: ${address || ""}`,
    `Qty: ${qty || 1}`,
  ].join("\n");
}

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(message)}`;
}

function mailtoLink(message) {
  const subject = "Book Order – Tech, Law & Trust";
  const body = message + "\n\nPreferred email(s):\n- " + EMAIL_PRIMARY + "\n- " + EMAIL_SECONDARY;
  return `mailto:${EMAIL_PRIMARY}?subject=${encode(subject)}&body=${encode(body)}`;
}

// ====== HEADER MOBILE NAV ======
const burger = document.querySelector(".burger");
const mobileNav = document.getElementById("mobileNav");

if (burger) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobileNav.style.display = expanded ? "none" : "block";
  });
}
if (mobileNav) {
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.style.display = "none";
      burger?.setAttribute("aria-expanded", "false");
    });
  });
}

// ====== TOP CTAs POINT TO ORDER SECTION ======
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ====== ORDER BUTTONS (DEFAULT MESSAGE) ======
const defaultMsg = buildOrderMessage({ name: "", mobile: "", address: "", qty: 1 });

["whatsAppTop","whatsAppHero","whatsAppOrder"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink(defaultMsg);
});

["emailTop","emailHero","emailOrder"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = mailtoLink(defaultMsg);
});

// ====== FORM -> WhatsApp / Email ======
const form = document.getElementById("orderForm");
const emailFromForm = document.getElementById("emailFromForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const msg = buildOrderMessage({
      name: data.get("name"),
      mobile: data.get("mobile"),
      address: data.get("address"),
      qty: data.get("qty"),
    });
    window.open(waLink(msg), "_blank");
  });
}

if (emailFromForm && form) {
  emailFromForm.addEventListener("click", () => {
    const data = new FormData(form);
    const msg = buildOrderMessage({
      name: data.get("name"),
      mobile: data.get("mobile"),
      address: data.get("address"),
      qty: data.get("qty"),
    });
    window.location.href = mailtoLink(msg);
  });
}