import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('gcl-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<gcl-button></gcl-button>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-button>
    `);
  });
});
