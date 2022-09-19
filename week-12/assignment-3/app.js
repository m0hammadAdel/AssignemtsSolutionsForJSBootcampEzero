// select our two main nodes
const dollarInput = document.querySelector("[name = 'dollar']");
const result = document.querySelector(".result");

// changing result every time the input value changes
dollarInput.oninput =  _ => result.innerHTML = `{${dollarInput.value}} USD Dollar = {${(dollarInput.value * 19.42).toFixed(2)}} Egyptian Pound`;