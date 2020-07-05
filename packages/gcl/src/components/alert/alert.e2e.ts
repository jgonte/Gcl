import { newE2EPage } from '@stencil/core/testing';

describe('gcl-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcl-alert></gcl-alert>');

    const element = await page.find('gcl-alert');
    expect(element).toHaveClass('hydrated');
  });
});
