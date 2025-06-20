(function () {
  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  function enhanceTimeElements() {
    // Select elements that may contain comment times
    const selectors = [
      'time[datetime]',
      '[data-utime]',
      '[data-time]',
    ];
    const nodes = document.querySelectorAll(selectors.join(','));
    nodes.forEach(node => {
      let ts;
      if (node.hasAttribute('datetime')) {
        ts = Date.parse(node.getAttribute('datetime'));
      } else if (node.dataset.utime) {
        ts = Number(node.dataset.utime) * 1000;
      } else if (node.dataset.time) {
        ts = Number(node.dataset.time) * 1000;
      }
      if (!ts || isNaN(ts)) {
        return;
      }

      const timeString = formatTime(ts);

      // Update text or title attribute
      if (!node.dataset.originalText) {
        node.dataset.originalText = node.textContent;
      }
      node.textContent = timeString;
      node.title = node.dataset.originalText;
    });
  }

  // Run once on load
  enhanceTimeElements();

  // Observe for new comment nodes
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        enhanceTimeElements();
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
