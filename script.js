//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// Automatically focus the first input
inputs[0].focus();

// Loop through each input to handle typing and backspace
inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (/^\d$/.test(value)) {
      // Move to next input if exists
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      // Clear non-digit input
      e.target.value = "";
    }
  });

  input.addEventListener("keydown", (e) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      } else {
        input.value = "";
      }
    }
  });
});

