const first = document.querySelector('[name="first"]');
const last = document.querySelector('[name="last"]');
const state = document.querySelector('[name="state"]');
const food = document.getElementById('food');

if (window.sessionStorage.fist) first.value = window.sessionStorage.first;
if (window.sessionStorage.last) last.value = window.sessionStorage.last;
if (window.sessionStorage.state) state.value = window.sessionStorage.state;
if (window.sessionStorage.food) document.querySelector(`[value=${window.sessionStorage.food}]`).selected = true;

first.onblur = _ => window.sessionStorage.setItem('first', first.value);
last.onblur = _ => window.sessionStorage.setItem('last', last.value);
state.onblur = _ => window.sessionStorage.setItem('state', state.value);
food.onchange = _ => window.sessionStorage.setItem('food', food.value);