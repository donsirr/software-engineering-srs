/**
 * @jest-environment jsdom
 */

describe('Page Initialization', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="message"></div>
      <button id="actionBtn"></button>
    `;
    jest.resetModules();
  });

  test('sets data-page-ready attribute on body when DOMContentLoaded fires', () => {
    require('./script.js');
    document.dispatchEvent(new Event('DOMContentLoaded'));
    expect(document.body.dataset.pageReady).toBe('true');
  });

  test('clicking the button updates the message', () => {
    require('./script.js');
    const btn = document.getElementById('actionBtn');
    btn.click();
    const msg = document.getElementById('message');
    expect(msg.textContent).toMatch(/Action triggered at/);
  });
});