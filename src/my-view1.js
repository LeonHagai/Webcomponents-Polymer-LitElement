/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from 'lit-element';
import './shared-styles.js';

class MyView1 extends LitElement {
  render() {
    return html`
      <style include="shared-styles">
        :host {
          justify-content: center;
          display: block;
          padding: 10px;
        }
        
        
        form {              
          font-family: 'Arial', sans-serif;
          background: #f4f4f4;
          width: 500px;
          display: block;
          padding: 20px;
          margin: 10% 10%;
          border-bottom: black 5px solid;
          justify-content: center;
        }

        h3 {
          font-family: 'Copperplate', Fantasy;
        }

        input {
          margin: 5px;
          padding: 10px 15px;
          width: 250px;
          background-color: #000000;
          color: #ffffff;
          border: none;
          border-radius: 10px;
        }
        
        button {
          margin: 5px;
          cursor: pointer;
          background-color: white;
          color: black;
          border: 2px solid #4CAF50;
          border-radius: 5px;
          padding: 5px 10px;
        }

        button:hover {
          color: white;
          background-color: #4CAF50;
        }
      </style>

      <div class="profile-form">
        <form>
          <h3>Simple Form</h3>
          <input type="text" placeholder="Name" id="name">
          <input type="email" placeholder="Email" id="email">
          <input type="phone" placeholder="Phone" id="phone"><br>
          <button @click="${this._handleClick}">Submit</button>
        </form>
      </div>
      
    `;
  }

  _handleClick() {
    //initailizing dom components
    const name = this.shadowRoot.querySelector('#name').value;
    const email = this.shadowRoot.querySelector('#email').value;
    const phone = this.shadowRoot.querySelector('#phone').value;

    if (name != '' || email != '' || phone != '') {


      var newLine = "\r\n"
      var msg = "Showing Simple Form Post Details"
      msg += newLine;
      msg += "Name : " + name;
      msg += newLine;
      msg += "Email : " + email;
      msg += newLine;
      msg += "Phone : " + phone;

      alert(msg);
      console.log('Name:' + name + ' Email:' + email + '  Phone:' + phone);
    } else {
      alert('Please fill all the required fields');
      console.log("Fill the form");
    }
  }
}

// import { LitElement, html } from 'lit-element';

// class MyView1 extends LitElement {
//   render() {
//     return html`<p>template content</p>`;
//   }
// }


window.customElements.define('my-view1', MyView1);
