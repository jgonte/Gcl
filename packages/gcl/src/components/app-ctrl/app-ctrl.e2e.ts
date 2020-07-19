import { newE2EPage } from '@stencil/core/testing';

describe('gcl-app-ctrl', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-app-ctrl></gcl-app-ctrl>');

    const element = await page.find('gcl-app-ctrl');
    expect(element).toHaveClass('hydrated');
  });
});
