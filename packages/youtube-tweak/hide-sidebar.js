/**
 *
 * @param {HTMLElement} selector
 * @param {HTMLElement} [node]
 */
function hideElement(selector, node) {
    const el = /** @type {HTMLDivElement} */ (
        (node || document.body).querySelector(selector)
    );
    if (el) {
        el.style.display = 'none';
    }
}

function watchForSidebar() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!mutation.addedNodes) return;

            for (let i = 0; i < mutation.addedNodes.length; i++) {
                hideElement('#secondary')
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
}

hideElement('#secondary')
// watchForSidebar()
