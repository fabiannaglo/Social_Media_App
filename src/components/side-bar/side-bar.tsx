import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'side-bar',
  styleUrl: 'side-bar.css',
  shadow: true,
})

export class sideBar {
  render() {
    return (
      <Host>
        <ul>
            <li>
                <a href="#">Informationen</a>
            </li>
            <li>
                <a href="#">Über uns</a>
            </li>
            <li>
                <a href="#">Impressum</a>
            </li>
            <li>
                <a href="#">Datenschutz</a>
            </li>
        </ul>
      </Host>
    );
  }
}
