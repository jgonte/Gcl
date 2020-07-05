import { Component, State, h, Method } from '@stencil/core';

@Component({
  tag: 'gcl-overlay',
  styleUrl: 'overlay.css',
  shadow: true,
})
export class Overlay {

  @State() visible: boolean = false;

  render() {
    return (
      <div
        class="overlay"
        style={{ display: this.visible ? 'block' : 'none' }}>
        <div class="modal">
          <slot></slot>
        </div>
      </div>
    );
  }

  @Method()
  show() {
    this.visible = true;
  }

  @Method()
  hide() {
    this.visible = false;
  }

}
