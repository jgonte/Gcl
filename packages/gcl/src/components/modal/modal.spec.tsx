import { newSpecPage } from '@stencil/core/testing';
import { Modal } from './modal';

describe('gcl-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Modal],
      html: `<gcl-modal></gcl-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-modal>
    `);
  });
});
