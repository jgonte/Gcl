import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcl-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {

  /**
   * The type of the button
   */
  @Prop() type: "button" | "reset" | "submit" = "button";

  /** 
   * The label of the button
   */
  @Prop() label?: string;

  /**
   * The variant of the button
   */
  @Prop() variant: "default" | "primary" | "dashed" | "link" | "danger" = "default";

  /**
   * Specifies whether the icon should horizontally flip with the label when `dir` is `"rtl"`.
   */
  @Prop() rtl?: boolean;

  /**
   * The name of the icon to render on the button
   */
  @Prop() icon?: string;

  render() {
    return (
      <button type={this.type} class={this.createClassName()}>
        {this.renderIcon()}
        <span>{this.label}</span>
      </button>
    );
  }
  renderIcon() {
    return this.icon ? (
      <span class="button_icon_ltr">
        <gcl-icon name={this.icon} class={this.variant}></gcl-icon>
      </span>
    ) : null;
  }

  createClassName(): string {
    return `button ${this.variant}`;
  }

}
