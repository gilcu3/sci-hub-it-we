var default_site = 'sci-hub.tw'

function saveOptions(e) {
  var cur_site = document.querySelector("#site").value
  document.querySelector("#site").value = ''
  browser.storage.sync.set({
    site: cur_site
  });
  e.preventDefault();
  document.querySelector("#cursite").value = cur_site
  
}

function resetOptions(e) {
  browser.storage.sync.set({
    site: default_site
  });
  e.preventDefault();
  document.querySelector("#site").value = ''
  document.querySelector("#cursite").value = default_site
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get('site');
  gettingItem.then((res) => {
    document.querySelector("#cursite").value = res.site || default_site;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("#custom").addEventListener("submit", saveOptions);
document.querySelector("#default").addEventListener("submit", resetOptions);
