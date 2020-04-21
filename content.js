// Скрипт, который работает на всех загружаемых страницах,
// либо на страницах указанных в файле manifest.json
// let kod = $('#general_imei_info').text();
let url = window.location.href;

// console.log("IMEI INFO PARSER: ");
// console.log(kod);

// function randomInteger(min, max) {
    // случайное число от min до (max+1)
    // let rand = min + Math.random() * (max + 1 - min);
    // return Math.floor(rand);
// }

// let key = randomInteger(1, 999);
// localStorage.setItem(key, kod);

// chrome.storage.local.set({url: key}, function() {});




// $.post('http://ppif.ru/imei/parser.php', kod);

// var firstHref = $("a[href^='http']").eq(0).attr("href");
// console.log(firstHref);

// chrome.runtime.onMessage.addListener(
//     function(request) {
//       if( request.message === "clicked_browser_action" ) {
//         var firstHref = $("a[href^='http']").eq(0).attr("href");
  
//         console.log(firstHref);
//       }
//     }
// );