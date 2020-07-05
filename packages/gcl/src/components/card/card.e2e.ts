import { newE2EPage } from '@stencil/core/testing';

describe('gcl-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-card></gcl-card>');

    const element = await page.find('gcl-card');
    expect(element).toHaveClass('hydrated');
  });
});
