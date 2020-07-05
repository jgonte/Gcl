import { Component, Prop, h } from '@stencil/core';
import { Icon } from '../icon/icon';

@Component({
  tag: 'gcl-alert',
  styleUrl: 'alert.css',
  shadow: true,
})
export class Alert {

  /**
   * The type of the alert
   */
  @Prop() type: "info" | "success" | "warning" | "error" = "info";

  /**
   * The icon of the alert
   */
  @Prop() icon: Icon;

  /**
   * Whether to show the icon
   */
  @Prop() showIcon: boolean = true;

  /** 
   * The message of the alert
   */
  @Prop() message: string;

  /**
   * The description of the message
   */
  @Prop() description: string;

  render() {

    return (
      <div class={this.createClass()}>
        {this.getIcon()}
        {this.renderMessage()}
        {this.renderDescription()}
      </div>
    );
  }

  getIcon(): Icon {
    if (!this.showIcon) {

      return null; // Do not show the icon
    }

    if (this.icon) {

      return this.icon; // Return the configured icon
    }

    switch (this.type) {

      case "info": return (
        <gcl-icon name="info-circle-fill" class="primary"></gcl-icon>
      );
      case "success": return (
        <gcl-icon name="check-circle-fill" class="success"></gcl-icon>
      );
      case "warning": return (
        <gcl-icon name="exclamation-circle-fill" class="warning"></gcl-icon>
      );
      default: return (
        <gcl-icon name="x-circle-fill" class="danger"></gcl-icon>
      );
    }
  }

  createClass(): string {
    return `alert ${this.type}`;
  }

  renderMessage() {
    return this.message ?
      (
        <span class="message">
          {this.message}
        </span>
      ) :
      null;
  }

  renderDescription() {
    return this.description ?
      (
        <span>
          {this.description}
        </span>
      ) :
      null;
  }

}