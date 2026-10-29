// script.test.js (passing version)
test('sets data-page-ready attribute on body when DOMContentLoaded fires', () => {
  require('./script.js');
  document.dispatchEvent(new Event('DOMContentLoaded'));
  // ✅ This matches the actual behaviour
  expect(document.body.dataset.pageReady).toBe('true');
});