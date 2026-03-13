const leadForm = document.getElementById("lead-form");

function scrollToLeadForm(event) {
  if (!leadForm) {
    return;
  }

  event.preventDefault();
  leadForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindScrollTargets() {
  const clickableItems = document.querySelectorAll("a[href], button, .glb-share-bar_button");

  clickableItems.forEach((item) => {
    if (item.closest("#lead-form")) {
      return;
    }

    if (item.matches('button[type="submit"]')) {
      return;
    }

    if (
      item.closest(".menu-area") ||
      item.closest("#menu-container") ||
      item.closest("#menu-curtain")
    ) {
      return;
    }

    item.addEventListener("click", scrollToLeadForm);
  });
}

function initFloatingHeader() {
  const headerRoot = document.getElementById("glb-topo");
  const sourceBar = document.querySelector("#header-produto .header-principal");

  if (!headerRoot || !sourceBar) {
    return;
  }

  const floatingShell = document.createElement("div");
  const floatingBar = sourceBar.cloneNode(true);
  let lastScrollY = window.scrollY;
  let ticking = false;

  floatingShell.className = "header-floating-shell";
  floatingBar.classList.add("header-principal--floating");
  floatingBar.classList.add("header-navegacao");

  floatingBar.querySelectorAll("[id]").forEach((element) => {
    element.removeAttribute("id");
  });

  floatingShell.appendChild(floatingBar);
  headerRoot.appendChild(floatingShell);

  function updateFloatingHeader() {
    const scrollY = window.scrollY;
    const sourceHeight = sourceBar.offsetHeight;
    const showAfter = sourceHeight + 12;
    const hideBefore = sourceHeight + 56;
    const isScrollingDown = scrollY > lastScrollY;
    const isScrollingUp = scrollY < lastScrollY;

    if (isScrollingDown && scrollY > showAfter) {
      floatingShell.classList.add("is-visible");
    } else if (isScrollingUp && scrollY < hideBefore) {
      floatingShell.classList.remove("is-visible");
    } else if (scrollY <= 0) {
      floatingShell.classList.remove("is-visible");
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateFloatingHeader);
  });

  updateFloatingHeader();
}

function initHeaderMenu() {
  const menuButtons = Array.from(document.querySelectorAll(".menu-button"));
  const menuContainer = document.getElementById("menu-container");
  const menuCurtain = document.getElementById("menu-curtain");

  if (!menuButtons.length || !menuContainer || !menuCurtain) {
    return;
  }

  const submenuParents = Array.from(
    menuContainer.querySelectorAll(".menu-item.is-father")
  );

  function closeAllSubmenus() {
    submenuParents.forEach((item) => {
      const submenu = item.querySelector(":scope > .menu-submenu");

      if (submenu) {
        submenu.classList.remove("is-open");
      }
    });
  }

  function openMenu() {
    menuContainer.classList.add("is-open");
    menuCurtain.classList.add("is-open");
    menuButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "true");
    });
    document.documentElement.classList.add("menu-open");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menuContainer.classList.remove("is-open");
    menuCurtain.classList.remove("is-open");
    menuButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
    document.documentElement.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    closeAllSubmenus();
  }

  menuContainer.style.display = "block";
  closeAllSubmenus();
  menuButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (menuContainer.classList.contains("is-open")) {
        closeMenu();
        return;
      }

      openMenu();
    });
  });

  menuCurtain.addEventListener("click", closeMenu);

  submenuParents.forEach((item) => {
    const trigger = item.querySelector(":scope > .menu-item-link");
    const submenu = item.querySelector(":scope > .menu-submenu");

    if (!trigger || !submenu) {
      return;
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      submenu.classList.add("is-open");
    });
  });

  menuContainer.querySelectorAll(".menu-btn-back").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.closest(".menu-submenu");

      if (submenu) {
        submenu.classList.remove("is-open");
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuContainer.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

function setFieldError(field, message) {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.classList.add("is-invalid");

  if (error) {
    error.textContent = message;
  }
}

function clearFieldError(field) {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.classList.remove("is-invalid");

  if (error) {
    error.textContent = "";
  }
}

function validateTextField(field, message) {
  if (!field.value.trim()) {
    setFieldError(field, message);
    return false;
  }

  clearFieldError(field);
  return true;
}

function validateEmailField(field) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(field.value.trim())) {
    setFieldError(field, "Informe um e-mail válido.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function validatePhoneField(field) {
  const digits = field.value.replace(/\D/g, "");

  if (digits.length < 5) {
    setFieldError(field, "Informe um número de telefone.");
    return false;
  }

  clearFieldError(field);
  return true;
}

function initLeadForm() {
  const form = document.getElementById("landing-form");

  if (!form) {
    return;
  }

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  let iti = null;

  if (phone && window.intlTelInput) {
    iti = window.intlTelInput(phone, {
      initialCountry: "br",
      nationalMode: false,
      autoPlaceholder: "aggressive",
      strictMode: false,
      separateDialCode: true,
      loadUtils: () =>
        Promise.resolve(window.intlTelInputUtils ? window.intlTelInputUtils : null),
    });
  }

  [firstName, lastName].forEach((field) => {
    field.addEventListener("input", () => validateTextField(field, "Este campo é obrigatório."));
  });

  email.addEventListener("input", () => validateEmailField(email));

  phone.addEventListener("input", () => validatePhoneField(phone));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFirstNameValid = validateTextField(firstName, "Informe o seu nome.");
    const isLastNameValid = validateTextField(lastName, "Informe o seu sobrenome.");
    const isEmailValid = validateEmailField(email);

    const isPhoneValid = validatePhoneField(phone);

    if (!isPhoneValid) {
      setFieldError(phone, "Informe um número de telefone.");
    } else {
      clearFieldError(phone);
    }

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
      return;
    }

    window.location.href = "thank-you.html";
  });
}

bindScrollTargets();
initFloatingHeader();
initHeaderMenu();
initLeadForm();
