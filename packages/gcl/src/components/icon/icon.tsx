import { Component, Prop, Host, Element, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'gcl-icon',
  styleUrl: 'icon.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class Icon {

  @Element() el!: HTMLElement;

  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  @Prop() name?: string;

  /**
   * The size of the icon.
   */
  @Prop() size?: "small" | "large" = "small";

  /**
   * The color of the icon.
   */
  @Prop() color?: string;

  /**
   * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
   */
  @Prop() rtl?: boolean;

  render() {

    const url: string = getAssetPath(`./assets/bootstrap-icons.svg`);

    return (
      <Host
        role="img"
        class={{
          //[mode]: true,
          ...createColorClasses(this.color),
          [this.size]: !!this.size,
          //'rtl': !!this.rtl && (this.el.ownerDocument as Document).dir === 'rtl'
        }}
      >
        <svg>
          <use xlinkHref={`${url}#${this.name}`}></use>
        </svg>
      </Host>
    );
  }
}

const createColorClasses = (color: string | undefined) => {
  return (color) ? {
    'gcl-color': true,
    [`gcl-color-${color}`]: true
  } : null;
};
