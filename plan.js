document
  .getElementById("billingToggle")
  .addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".change1").textContent = "$90/yr";
      document.querySelector('label[for="advanced"] p').textContent = "$120/yr";
      document.querySelector('label[for="pro"] p').textContent = "$150/yr";
    

      document.querySelector(".hid1").textContent = "2 months free";
      document.querySelector(".hid2").textContent = "2 months free";
      document.querySelector(".hid3").textContent = "2 months free";
    
    
    } else {
      document.querySelector(".change1").textContent = "$9/mo";
      document.querySelector('label[for="advanced"] p').textContent = "$12/mo";
      document.querySelector('label[for="pro"] p').textContent = "$15/mo";

      document.querySelector(".hid1").textContent = "";
      document.querySelector(".hid2").textContent = "";
      document.querySelector(".hid3").textContent = "";
    }
  });

//   document.querySelectorAll('.plan_option').forEach(option => {
//   option.addEventListener('click', function() {
//     document.querySelectorAll('.plan_option').forEach(o => o.classList.remove('selected'));
//     this.classList.add('selected');
//   });
// });





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
       
        window.location.href = "./addon.html";
      }
    });
  }
});

