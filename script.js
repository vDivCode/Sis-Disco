// ============================
// MENÚ MOBILE
// ============================

function toggleMenu() {
  const nav = document.querySelector(".navbar nav");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "7%";
    nav.style.background = "#111";
    nav.style.padding = "20px";
    nav.style.borderRadius = "10px";
  }
}

// ============================
// FAVORITOS
// ============================

function toggleFavorite(button) {
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.innerHTML = "♥";
  } else {
    button.innerHTML = "♡";
  }
}

// ============================
// RESERVAS
// ============================

let selectedEvent = "";

function reserveEvent(eventName) {
  selectedEvent = eventName;

  document.getElementById("selectedEvent").innerText =
    "Evento seleccionado: " + eventName;

  document.getElementById("modal").classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

function confirmReservation() {
  const name = document.getElementById("name").value;

  const tickets = document.getElementById("tickets").value;

  if (name === "" || tickets === "") {
    alert("Por favor completa todos los campos.");

    return;
  }

  alert(
    "¡Reserva realizada!\n\n" +
      "Evento: " +
      selectedEvent +
      "\nNombre: " +
      name +
      "\nEntradas: " +
      tickets,
  );

  closeModal();

  document.getElementById("name").value = "";
  document.getElementById("tickets").value = "";
}

// ============================
// BUSCADOR
// ============================

function searchEvents() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const events = document.querySelectorAll(".event-card");

  events.forEach((event) => {
    const text = event.innerText.toLowerCase();

    if (text.includes(input)) {
      event.style.display = "";
    } else {
      event.style.display = "none";
    }
  });
}

// ============================
// PROMOCIÓN
// ============================

function showPromotion() {
  alert(
    "🍹 PROMOCIÓN NIGHTZONE 🍹\n\n" +
      "2x1 en cocktails\n" +
      "Todos los jueves\n" +
      "10:00 PM - 12:00 AM",
  );
}

// ============================
// CERRAR MODAL AL HACER CLICK
// AFUERA
// ============================

window.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }
});
