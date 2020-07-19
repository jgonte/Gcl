import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcl-overlay',
  styleUrl: 'overlay.css',
  shadow: true,
})
export class Overlay {

  @Prop() visible: boolean = false;

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
}
