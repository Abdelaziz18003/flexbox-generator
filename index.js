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
  flex-direction: ${flexDirection.value}
  flex-wrap: ${flexWrap.value};
  justify-content: ${justifyContent.value};
  align-items: ${alignItems.value};
  align-content: ${alignContent.value};
}
    `;
    document.querySelector('#code-preview').innerHTML = code;
  }
})();
