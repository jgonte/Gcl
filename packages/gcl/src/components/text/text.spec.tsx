import { newSpecPage } from '@stencil/core/testing';
import { Text } from './text';

describe('gcl-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text],
      html: `<gcl-text></gcl-text>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-text>
    `);
  });
});
