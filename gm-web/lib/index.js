function toggleXZXW(src, obj) {
    objLi = obj.parentNode
    objUl = objLi.parentNode
    for (var i = 0; i < objUl.childNodes.length; i++) {
      if (objUl.childNodes[i].tagName === 'LI') {
        if (objUl.childNodes[i].children[0].tagName === 'A') {
          objUl.childNodes[i].children[0].className = "";
        }
      }
    }
    if (obj.className)
      obj.className = "";
    else
      obj.className = "active";
    var oIframe = document.getElementById('iframeXZXWPlayer');
    oIframe.src = src;
  }