import { newSpecPage } from '@stencil/core/testing';
import { Overlay } from './overlay';

describe('gcl-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Overlay],
      html: `<gcl-overlay></gcl-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-overlay>
    `);
  });
});
