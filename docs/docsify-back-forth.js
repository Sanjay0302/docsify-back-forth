/*
* Copyright 2024 Sanjay0302
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


(function () {
  function addNavigation() {
    if (!document.querySelector('.custom-nav')) {
      const nav = document.createElement('div');
      nav.className = 'custom-nav';
      nav.innerHTML = `
        <button class="nav-btn back-btn" title="Back">
          <span class="nav-icon">&#8592;</span>
          <span class="nav-text">Back</span>
        </button>
        <button class="nav-btn forward-btn" title="Forward">
          <span class="nav-icon">&#8594;</span>
          <span class="nav-text">Forward</span>
        </button>
      `;
      document.body.appendChild(nav);

      const backBtn = nav.querySelector('.back-btn');
      const forwardBtn = nav.querySelector('.forward-btn');

      backBtn.addEventListener('click', () => window.history.back());
      forwardBtn.addEventListener('click', () => window.history.forward());
    }
  }

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
  .custom-nav {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 1000;
  }
  .nav-btn {
    background-color: #fafafa; /* Adjusted to match the purple theme in the image */
    color: black;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.20), 0 4px 5px rgba(0,0,0,0.10);
  }
  .nav-btn:hover {
    width: 100px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 7px 10px rgba(0,0,0,0.22);
  }
  .nav-icon {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .nav-text {
    white-space: nowrap;
    display: none;
    margin-left: 5px;
  }
  .nav-btn:hover .nav-text {
    display: inline;
  }
  .nav-btn:hover .nav-icon {
    width: auto;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .custom-nav {
      bottom: 10px;
      right: 10px;
    }
    .nav-btn {
      width: 36px;
      height: 36px;
    }
    .nav-btn:hover {
      width: 90px;
    }
  }
`;
  document.head.appendChild(style);

  // Wait for Docsify to be fully loaded
  window.$docsify.plugins = [].concat(window.$docsify.plugins || [], function (hook, vm) {
    hook.ready(function () {
      addNavigation();
    });
    hook.doneEach(function () {
      addNavigation();
    });
  });
})();