import { Component, ComponentInterface, Host, h, Prop, Listen } from '@stencil/core';
import IntlProvider from '../../intl/IntlProvider';

@Component({
  tag: 'gcl-text',
  styleUrl: 'text.css',
  shadow: true,
})
export class Text implements ComponentInterface {
   /**
   * The provider to retrieve the value for the key
   */
  intlProvider: IntlProvider;

  /**
   * The value of the text to render
   */
  @Prop() value: string;

  /**
   * The key to retrieve a localized value from an i18n provider
   */
  @Prop() intlKey: string;

  @Listen('languagechange', { capture: true })
  onLanguageChange(event: Event) {

    const ev = event.toString();

    console.log('languagechange event detected!' + ev);

    this.value = this.getText(ev);
  }

  render() {

    const text = this.getText('en');

    if (text) {

      return text;
    }
    else {
      return (
        <Host>
          <slot></slot>
        </Host>
      );
    }
  }

  getText(lang: string) {

    if (this.value) {

      return this.value;
    }
    else if (this.intlKey){

      const text = this.intlProvider.getData(lang, this.intlKey);

      return text?
        text :
        `[${this.intlKey}]`
    }
  }

}
