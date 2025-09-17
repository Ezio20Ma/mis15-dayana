document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTOS DEL DOM ---
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownContainer = document.getElementById("countdown");

  // --- FUNCIÓN PRINCIPAL DEL CONTADOR ---
  const updateCountdown = () => {
    // Fecha objetivo con la zona horaria de Perú (UTC-5)
    // Apunta a las 9:00 PM del 27 de Septiembre de 2025.
    const targetDate = new Date("2025-09-27T21:00:00-05:00").getTime();

    // Hora actual
    const now = new Date().getTime();

    // Distancia de tiempo entre ahora y la fecha objetivo
    const distance = targetDate - now;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
      countdownContainer.innerHTML =
        "<div style='font-size: 1.5em; font-weight: bold; color: #023b02ff; text-align: center; width: 100%;'>¡El gran día ha llegado!</div>";
      clearInterval(countdownInterval);
      return;
    }

    // --- CÁLCULOS DE TIEMPO ---
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // --- ACTUALIZAMOS LA PÁGINA ---
    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
  };

  // --- INICIAMOS EL CONTADOR ---
  updateCountdown();

  const countdownInterval = setInterval(updateCountdown, 1000);
});
