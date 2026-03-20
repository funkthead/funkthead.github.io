function toggleAlbums() {
    const checkbox = document.getElementById('albums');
    const classes = document.querySelectorAll('.album');
  if (checkbox.checked) {
    classes.forEach((element) => { element.classList.remove('hidden');});
  } else {
    classes.forEach((element) => { element.classList.add('hidden');}); }
}

function toggleEPs() {
    const checkbox = document.getElementById('EPs');
    const classes = document.querySelectorAll('.EP');
  if (checkbox.checked) {
    classes.forEach((element) => { element.classList.remove('hidden');});
  } else {
    classes.forEach((element) => { element.classList.add('hidden');}); }
}

function toggleCompilations() {
    const checkbox = document.getElementById('compilations');
    const classes = document.querySelectorAll('.compilation');
  if (checkbox.checked) {
    classes.forEach((element) => { element.classList.remove('hidden');});
  } else {
    classes.forEach((element) => { element.classList.add('hidden');}); }
}

function toggleCollabs() {
    const checkbox = document.getElementById('collabs');
    const classes = document.querySelectorAll('.collab');
  if (checkbox.checked) {
    classes.forEach((element) => { element.classList.remove('hidden');});
  } else {
    classes.forEach((element) => { element.classList.add('hidden');}); }
}

function toggleSingles() {
    const checkbox = document.getElementById('singles');
    const classes = document.querySelectorAll('.single');
  if (checkbox.checked) {
    classes.forEach((element) => { element.classList.remove('hidden');});
  } else {
    classes.forEach((element) => { element.classList.add('hidden');}); }
}

function toggleRemixes() {
    const checkbox = document.getElementById('remixes');
    const classes = document.querySelectorAll('.remix');
  if (checkbox.checked) {
    classes.forEach((element) => { element.classList.remove('hidden');});
  } else {
    classes.forEach((element) => { element.classList.add('hidden');}); }
}

function generateSquares() {
    const empties = document.querySelectorAll('.square.empty');
    empties.forEach(el => el.remove());
    
    const squares = document.querySelectorAll('.square:not(.hidden)');

    const remainder = squares.length % 4;
    const toAdd = remainder === 0 ? 0 : 4 - remainder;

    const grid = document.querySelector('.grid');

    for (let i = 0; i < toAdd; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('square', 'empty');
        grid.appendChild(newDiv);
    }
}