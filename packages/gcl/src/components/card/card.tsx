import { Component, h } from '@stencil/core';

@Component({
  tag: 'gcl-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {

  render() {
    return (
      <div class="card">
        <slot></slot>
      </div>
    );
  }

}
