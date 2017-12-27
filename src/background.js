function logTabs(tabs) {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    var url = tab.url;
    var matches = url.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
    var gettingItem = browser.storage.sync.get('site');
    gettingItem.then((res) => {
        cur_site = res.site || "sci-hub.tw";
        browser.tabs.create({"url": "https://" + cur_site + "/https"+matches[0] });
    });
}

function onError(err){
    console.error(err);
}



function openUrl() {
   browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);
}

browser.browserAction.onClicked.addListener(openUrl);
 

