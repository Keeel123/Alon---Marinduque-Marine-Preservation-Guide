"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  primaryNav.classList.toggle("is-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const reportForm = document.querySelector("#pollution-form");
const reportStatus = document.querySelector("#form-status");
const dateField = document.querySelector("#incident-date");
const fields = [
  {
    input: document.querySelector("#incident-type"),
    error: document.querySelector("#incident-type-error"),
    message: "Choose the incident type that best matches what you observed."
  },
  {
    input: dateField,
    error: document.querySelector("#incident-date-error"),
    message: "Enter the date you saw the incident."
  },
  {
    input: document.querySelector("#incident-location"),
    error: document.querySelector("#incident-location-error"),
    message: "Enter a location with at least 3 characters."
  },
  {
    input: document.querySelector("#incident-details"),
    error: document.querySelector("#incident-details-error"),
    message: "Add a description with at least 10 characters."
  }
];

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

dateField.max = localDateString(new Date());

function validateField(field) {
  const value = field.input.value.trim();
  let message = "";

  if (!value) {
    message = field.message;
  } else if (field.input === dateField && value > dateField.max) {
    message = "The incident date can't be in the future.";
  } else if (field.input === document.querySelector("#incident-location") && value.length < 3) {
    message = "Enter a location with at least 3 characters.";
  } else if (field.input === document.querySelector("#incident-details") && value.length < 10) {
    message = "Add a description with at least 10 characters.";
  }

  field.input.setAttribute("aria-invalid", String(Boolean(message)));
  field.error.textContent = message;
  return !message;
}

fields.forEach((field) => {
  field.input.addEventListener("input", () => {
    if (field.input.hasAttribute("aria-invalid")) {
      validateField(field);
    }
    reportStatus.hidden = true;
  });
  field.input.addEventListener("change", () => {
    if (field.input.hasAttribute("aria-invalid")) {
      validateField(field);
    }
    reportStatus.hidden = true;
  });
});

reportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reportStatus.hidden = true;

  const results = fields.map((field) => ({ field, valid: validateField(field) }));
  const firstInvalid = results.find((result) => !result.valid);

  if (firstInvalid) {
    firstInvalid.field.input.focus();
    return;
  }

  const confirmationHeading = document.createElement("strong");
  confirmationHeading.textContent = "Demo report ready — nothing was sent.";
  const confirmationText = document.createElement("span");
  confirmationText.textContent = `Your ${document.querySelector("#incident-type").value.toLowerCase()} report for ${document.querySelector("#incident-location").value.trim()} has been checked on this page only. To report a real incident, contact your local government unit (LGU), barangay, or appropriate environmental office.`;
  reportStatus.replaceChildren(confirmationHeading, confirmationText);
  reportStatus.hidden = false;
  reportStatus.focus();
});
