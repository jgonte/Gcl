import { newSpecPage } from '@stencil/core/testing';
import { AppCtrl } from './app-ctrl';

describe('gcl-app-ctrl', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCtrl],
      html: `<gcl-app-ctrl></gcl-app-ctrl>`,
    });
    expect(page.root).toEqualHtml(`
      <gcl-app-ctrl>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcl-app-ctrl>
    `);
  });
});
