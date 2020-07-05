import { newE2EPage } from '@stencil/core/testing';

describe('gcl-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-modal></gcl-modal>');

    const element = await page.find('gcl-modal');
    expect(element).toHaveClass('hydrated');
  });
});
