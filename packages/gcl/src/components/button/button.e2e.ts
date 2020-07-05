import { newE2EPage } from '@stencil/core/testing';

describe('gcl-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-button></gcl-button>');

    const element = await page.find('gcl-button');
    expect(element).toHaveClass('hydrated');
  });
});
