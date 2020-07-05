import { newE2EPage } from '@stencil/core/testing';

describe('gcl-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-icon></gcl-icon>');

    const element = await page.find('gcl-icon');
    expect(element).toHaveClass('hydrated');
  });
});
