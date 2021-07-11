const SEL = "#player-theater-container";

/**
 *
 * @param {HTMLElement} selector
 * @param {HTMLElement} [node]
 */
function doAction(selector, node) {
    const el = /** @type {HTMLDivElement} */ (
        (node || document.body).querySelector(selector)
    );
    if (el) {
        el.style.maxHeight = "600px";
    }
}

function watch() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!mutation.addedNodes) return;

            for (let i = 0; i < mutation.addedNodes.length; i++) {
                doAction(SEL);
                obs.disconnect();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

    return observer;
}

doAction(SEL);

window.addEventListener("DOMContentLoaded", () => {
    const obs = watch();

    // setTimeout(() => {
    //     obs.disconnect();
    // }, 1000);
});
