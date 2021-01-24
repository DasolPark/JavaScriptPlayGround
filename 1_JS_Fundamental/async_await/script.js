"use strict"

const container = document.getElementById('container');

async function myDisplay() {
  const myPromise = new Promise(function(myResolve, myReject) {
    myResolve("I Love You");
  });

  container.innerHTML = await myPromise;
}

myDisplay();