import { newE2EPage } from '@stencil/core/testing';

describe('gcl-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-overlay></gcl-overlay>');

    const element = await page.find('gcl-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
