// Скрипт, который работает на всех загружаемых страницах,
// либо на страницах указанных в файле manifest.json


console.log("IMEI INFO PARSER");
// var firstHref = $("a[href^='http']").eq(0).attr("href");
// console.log(firstHref);

chrome.runtime.onMessage.addListener(
    function(request) {
      if( request.message === "clicked_browser_action" ) {
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);
      }
    }
);