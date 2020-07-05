import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'gcl-modal',
  styleUrl: 'modal.css',
  shadow: true,
})
export class Modal implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
