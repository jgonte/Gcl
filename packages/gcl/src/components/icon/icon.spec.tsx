import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';

describe('gcl-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<gcl-icon></gcl-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-icon>
    `);
  });
});
