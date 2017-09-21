export function setAndSendPageview(window, page) {
    window.ga('set', 'page', page);
    window.ga('send', 'pageview');
}
