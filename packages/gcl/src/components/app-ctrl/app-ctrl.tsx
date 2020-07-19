import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'gcl-app-ctrl',
  styleUrl: 'app-ctrl.css',
  shadow: true,
})
export class AppCtrl implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
