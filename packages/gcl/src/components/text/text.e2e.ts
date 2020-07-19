import { newE2EPage } from '@stencil/core/testing';

describe('gcl-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-text></gcl-text>');

    const element = await page.find('gcl-text');
    expect(element).toHaveClass('hydrated');
  });
});
