(function () {
  var flexContainer = document.querySelector('#flex-container');
  var flexDirection = document.querySelector("#flex-direction");
  var flexWrap = document.querySelector("#flex-wrap");
  var justifyContent = document.querySelector("#justify-content");
  var alignItems = document.querySelector("#align-items");
  var alignContent = document.querySelector("#align-content");

  applyChanges();
  generateCode();
  attachEventListeners();

  function attachEventListeners () {
    document
      .querySelectorAll(".setting")
      .forEach(element => {
        element.addEventListener("change", function () {
          applyChanges();
          generateCode();
        });
      })

    document.querySelector('#copy-css-button').addEventListener('click', e => {
      copyCSS();
      e.target.innerHTML = 'Copied!';
    })
  }

  function applyChanges() {
    flexContainer.style.flexDirection = flexDirection.value;
    flexContainer.style.flexWrap = flexWrap.value;
    flexContainer.style.justifyContent = justifyContent.value;
    flexContainer.style.alignItems = alignItems.value;
    flexContainer.style.alignContent = alignContent.value;
  }

  function generateCode () {
    code = `
.flex-container {
  display: flex;
  flex-direction: ${flexDirection.value};
  flex-wrap: ${flexWrap.value};
  justify-content: ${justifyContent.value};
  align-items: ${alignItems.value};
  align-content: ${alignContent.value};
}`;
    document.querySelector('#code-preview').innerHTML = code;
    document.querySelector('#copy-css-button').innerHTML = 'Copy';
  }

  function copyCSS () {
    const cssCode = document.querySelector('#code-preview').innerHTML;
    const textarea = document.createElement('textarea');
    textarea.value = cssCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
})();
