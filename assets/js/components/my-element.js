import {LitElement} from 'lit-element';
import {html} from "lit-html";

class MyElement extends LitElement {
    render() {
        return html`
      <div>Hello from MyElement !!</div>
    `;
    }
}

customElements.define('my-element', MyElement);