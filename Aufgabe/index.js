"use strict";
(function () {
  let indexTab = document.getElementsByClassName("tab");

  for (let i = 0; i < indexTab.length; i++) {
    indexTab[i].addEventListener("click", clickfunction);
    indexTab[0].classList.add("highlight-anker");
  }
  function clickfunction(pointerEvent) {
    const panelActiveClass = "active-panel";
    
    removeHighlight();
    const attribValue =
      pointerEvent.currentTarget.dataset.panel;
    if (attribValue) {
      const correspondingPanel = document.querySelector('article[data-panel=' + attribValue + ']');
      if (correspondingPanel) {
        document
          .querySelectorAll(`.${panelActiveClass}`)
          .forEach((panel) => panel.classList.remove(panelActiveClass));
        correspondingPanel.classList.add(panelActiveClass);
      }
    }
    pointerEvent.currentTarget.classList.add("highlight-anker");
  }

  function removeHighlight() {
    for (let i = 0; i < indexTab.length; i++) {
      indexTab[i].classList.remove("highlight-anker");
    }
  }
})();
