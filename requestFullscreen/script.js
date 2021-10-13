// Copyright 2021 Tamal Web tamalweb.com

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Targetting the divs and buttons
const bodyDiv = document.querySelector(".body");
const infoDiv = document.querySelector(".info");
const bsodDiv = document.querySelector(".bsod");
const goFullScreenBtn = document.querySelector(".goFullScreen");

goFullScreenBtn.addEventListener("click", handleFullScreen);
document.addEventListener("fullscreenchange", handleFullScreenExit);

function handleFullScreen() {
  document.documentElement.requestFullscreen();
  // make the screen blue by adding blue class to body
  bodyDiv.classList.add("blue");
  // Hide the info
  infoDiv.classList.add("hide");
  // Show the blue screen text by removing the hide class
  bsodDiv.classList.remove("hide");
}

function handleFullScreenExit() {
  // Check to see if the app is in fullscreen or not
  if (!document.fullscreenElement) {
    // Do the reverse of above function
    bodyDiv.classList.remove("blue");
    infoDiv.classList.remove("hide");
    bsodDiv.classList.add("hide");
  }
}
