


//   document.getElementById("billingToggle")
//   .addEventListener("change",  function() {
//     if (this.checked) {
//     //   document.getElementById("price1").textContent = '$10/yr';
//     //   document.getElementById("price2").textContent = "$20/yr";
//     //   document.getElementById("price3").textContent = "$20/yr";
    
//     console.log("Billing toggle is checked, prices updated to yearly rates.");
//     } else {
//     //   document.getElementById("price1").textContent = "$1/mo";
//     //   document.getElementById("price2").textContent = "$2/mo";
//     //   document.getElementById("price3").textContent = "$2/mo";

//       console.log("Billing toggle is unchecked, prices updated to monthly rates.");
//     }
//   });

// //   document.getElementById("billingToggle")
// //   .addEventListener("change", function(event) {
// //     const billingType = event.target.checked ? "yearly" : "monthly";
// //     localStorage.setItem("billingType", billingType);
// //       console.log(`Billing type set to: ${billingType}`);
// //   });


document.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("price1").textContent = '$10/yr';
        document.getElementById("price2").textContent = "$20/yr";
        document.getElementById("price3").textContent = "$20/yr";
    
        console.log("Billing toggle is checked, prices updated to yearly rates.");
    
    } else {
        document.getElementById("price1").textContent = "$1/mo";
        document.getElementById("price2").textContent = "$2/mo";
        document.getElementById("price3").textContent = "$2/mo";

        console.log("Billing toggle is unchecked, prices updated to monthly rates.");
    }
  });
  

  
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
       
        window.location.href = "./finishup.html";
      }
    });
  }
});



