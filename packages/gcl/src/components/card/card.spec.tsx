import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('gcl-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<gcl-card></gcl-card>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-card>
    `);
  });
});
