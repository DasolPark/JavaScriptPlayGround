console.log("User browser's width: ", window.innerWidth);
console.log("User device's width: ", screen.width);
console.log(window.matchMedia('(prefers-color-scheme').media);

const checkbox = document.getElementById('switch');

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

console.log(document.documentElement);