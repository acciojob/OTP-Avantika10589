const codes = document.querySelectorAll(".code");

// Ensure first input is always focused when page loads
window.addEventListener("load", () => {
  codes[0].focus();
});

codes.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next field if input is valid
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        // Move back if current field is empty
        codes[index - 1].focus();
        codes[index - 1].value = "";
      } else {
        // Delete current field content
        input.value = "";
      }
    }
  });
});
