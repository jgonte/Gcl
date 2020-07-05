import { newSpecPage } from '@stencil/core/testing';
import { Alert } from './alert';

describe('gcl-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<gcl-alert></gcl-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-alert>
    `);
  });
});
