var UACode = "UA-1744925-8";

window.addEventListener(
  "load",
  function() {
    if (window.ga && ga.create) {
      console.log("Google Analytics is loaded");

      var img = document.createElement("img");
      img.setAttribute("style", "display:none;");
      img.src =
        "/collect.php?tid=" + UACode + "&ec=Allowing&ea=Google%20Analytics";
      document.body.appendChild(img);
    } else {
      console.log("Google Analytics is not loaded");

      var img = document.createElement("img");
      img.setAttribute("style", "display:none;");
      img.src =
        "/collect.php?tid=" + UACode + "&ec=Blocking&ea=Google%20Analytics";
      document.body.appendChild(img);
    }

    if (window.google_tag_manager) {
      console.log("Google Tag Manager is loaded");

      var img = document.createElement("img");
      img.setAttribute("style", "display:none;");
      img.src =
        "/collect.php?tid=" + UACode + "&ec=Allowing&ea=Google%20Tag%20Manager";
      document.body.appendChild(img);
    } else {
      console.log("Google Tag Manager is not loaded");

      var img = document.createElement("img");
      img.setAttribute("style", "display:none;");
      img.src =
        "/collect.php?tid=" + UACode + "&ec=Blocking&ea=Google%20Tag%20Manager";
      document.body.appendChild(img);
    }
  },
  false
);
