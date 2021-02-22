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

// https://jsonplaceholder.typicode.com/todos?_limit=5

class MyView3 extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array },
      myDict: {}
    };
  }
  constructor() {
    super();
    this.message = 'Fetching Data From JSON object';
    this.myBool = true;
    this.myArray = [{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }, { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false }, {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }];
    this.myDictionary = [{
      '34': 'thirty-four', '90': 'ninety',
      '91': 'ninety-one', '21': 'twenty-one',
      '61': 'sixty-one', '9': 'nine',
      '2': 'two', '6': 'six', '3': 'three',
      '8': 'eight', '80': 'eighty', '81': 'eighty-one',
      'Ninety-Nine': '99', 'nine-hundred': '900'
    }];

    this.myDict = sortDictionary(this.myDictionary);

    function sortDictionary(dict) {
      var sorted = [];
      for (var key in dict) {
        sorted[sorted.length] = key;
      }
      sorted.sort();

      var tempDict = {};
      for (var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
      }
      return tempDict;
    }
  }
  render() {
    return html`
      <p class="title">${this.message}</p>
      ${this.myBool ?
        html`
        <style include="shared-styles">
         :host {
            padding: 10px;
            font-family: 'Fantasy', Papyrus;
          }

          :host .title {
            font-size: 20px;
            border-bottom: 4px dotted grey;
            margin: 30px 80px;
          }

          :host .container {
            padding: 10px 20px;
            margin: 20px 20px;
            background-color: #FAEBD7;
            color: #A52A2A;
            display: flex;
            flex-wrap: wrap;
          }
          :host .card {
            background-color: #F0FFFF;  
            justify-content: center; 
            margin: 5px 5px;  
            padding: 20px;  
            border-radius: 15px;   
            flex-grow: 1;
            width: 33%;  
            cursor: pointer;
          }
          :host .card:hover{
            background-color: #7FFFD4;  
          }
        </style>
           
        <div class="container">
          ${this.myArray.map(item => html`
          <div class="card">
            <h1>Title : ${item.title}</h1>
            <h2>User Id : ${item.userId}</h2>
            <p>Identification : ${item.id}.</p>
            <p>Completed : ${item.completed}.</p>
          </div>`)}
        </div> 
        
        <p class="title"> Arranging in order</p> 
        <div class="container">
          ${this.myDictionary.map(item => html`
          <div class="card">
            <h3>Value from key ${item} : ${item[2]}</h3>
          </div>`)}
        </div> 
      ` :
        html`<p>Render some other HTML if myBool is false</p>`}

      
    `;
  }

  // render() {
  //   return html`
  //     <style include="shared-styles">
  //       :host {
  //         display: block;

  //         padding: 10px;
  //       }
  //     </style>

  //     <div class="card">
  //       <div class="circle">3</div>
  //       <h1>View Three</h1>
  //       <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
  //       <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
  //     </div>
  //   `;
  // }

  // return html`
  //     <p>${this.message}</p>
  //     <ul id="todo">${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
  //     ${this.myBool ?
  //   html`<p>Render some HTML if myBool is true</p>` :
  //   html`<p>Render some other HTML if myBool is false</p>`}
  //   `;

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    function get_json(url, callback) {
      http.get(url, function (res) {
        var body = '';
        res.on('data', function (chunk) {
          body += chunk;
        });

        res.on('end', function () {
          var response = JSON.parse(body);
          // call function ----v
          callback(response);
        });
      });
    }

    // -----------the url---v         ------------the callback---v
    var mydata = get_json("https://jsonplaceholder.typicode.com/todos?_limit=5", function (resp) {
      console.log(resp);
    });
  }
}

window.customElements.define('my-view3', MyView3);
