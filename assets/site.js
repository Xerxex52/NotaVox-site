(function () {
  var KEY = "notavox-lang";
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var lang = stored || ((navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");

  function setClass(l) {
    document.documentElement.classList.toggle("lang-en", l === "en");
    document.documentElement.setAttribute("lang", l);
  }
  setClass(lang);

  function apply(l) {
    lang = l;
    document.documentElement.classList.toggle("lang-en", l === "en");
    document.documentElement.setAttribute("lang", l);
    var buttons = document.querySelectorAll(".langtoggle button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.lang === l));
    }
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".langtoggle button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () { apply(this.dataset.lang); });
    }
    apply(lang);
  });
})();
