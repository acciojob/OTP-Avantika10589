const codes = document.querySelectorAll(".code");

window.addEventListener("load", () => {
  codes[0].focus();
});

codes.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = "";
      } else {
        input.value = "";
      }
    }
  });
});
