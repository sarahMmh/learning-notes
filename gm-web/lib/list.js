function id(x) {
    if (typeof x == "string") return document.getElementById(x);
    return x;
  }
  
  function validSearch() {
    tbKeyWord = id("search-keyword");
    if (tbKeyWord.value == '') {
      alert("鏌ヨ鍏抽敭璇嶄笉鑳戒负绌猴紒")
      tbKeyWord.focus();
      return false;
    } else if (tbKeyWord.value.length <= 2) {
      alert("璇疯緭鍏ヨ嚦灏戜袱涓瓧鐨勫叧閿瘝锛�")
      tbKeyWord.focus();
      return false;
    }
    return true;
  }