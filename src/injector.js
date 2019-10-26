const scr = document.createElement("script");
scr.id = 'whatsallapp-content-script'
scr.type = 'text/javascript';
scr.src = chrome.extension.getURL('/bundle.js');
(document.head || document.body || document.documentElement).appendChild(scr);

chrome.storage.sync.get('pluginEnabled', function(data) {
    if (data.pluginEnabled) {
        const rootEl = document.createElement('div')
        rootEl.id = 'whatsallapp-root'
        rootEl.setAttribute('data-extension-id', chrome.runtime.id)
        document.body.appendChild(rootEl)
    } else {
    }
});

