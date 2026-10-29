// script.test.js (failing version)
test('sets data-page-ready attribute on body when DOMContentLoaded fires', () => {
  require('./script.js');
  document.dispatchEvent(new Event('DOMContentLoaded'));
  // ❌ This will fail because the attribute is "true", not "yes"
  expect(document.body.dataset.pageReady).toBe('yes');
});