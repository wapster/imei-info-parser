// background.js 
// Вызывается, когда пользователь нажимает на действие браузера.

// chrome.browserAction.onClicked.addListener(function(tab) {
//     // Отправить сообщение на активную вкладку
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       var activeTab = tabs[0];
//       chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//     });
// });

/*
chrome.tabs.create({
    active: false
    // url: 'http://****.ru/imei/index.php'
}, function(tab) {
    chrome.tabs.executeScript(tab.id, {
        // code: "localStorage.setItem('9999999999', 'zzzzzzzzzzz')"
        // code: "$.post('http://****.ru/imei/parser.php', {text: 'many_many_xxx'});"
    }, function() {
        // chrome.tabs.remove(tab.id);
    });
});
*/
