document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector("button[type='submit']");
  if (form && submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.checkValidity()) {
        window.location.href = "./plan.html";
      }
    });
  }
});
