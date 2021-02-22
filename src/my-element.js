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

class MyView2 extends LitElement {
  render() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        @charset "utf-8";

        body {
          background-color: #f6f5f5;
          margin: 0px;
          padding: 0px; 
        }

        ul{
          list-style: none;

        }

        a {
          text-decoration: none;
        }

        section {
          width: 100%;
          height: 95vh;
          background-image: url("UI/img/010.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .logo {
          font-family: RoadTest;
          color: #000000;
          font-size: 22px;
        }

        .active {
          font-weight: bold;
          color: #2d2a2a;
        }

        .text-container p:nth-child(1){
          font-family: calibri;
          font-weight: bold;
          color: #6d6d6d;
          font-size: 22x;
        }

        .text-container p:nth-child(2){
          font-family: calibri;
          font-weight: bold;
          letter-spacing: 1px;
          color: #1a1a1a;
          font-size: 60px;
        }

        .text-container p:nth-child(3){
          font-family: myriad pro regular;
          color: #403e3e;
          font-size: 30px;
          line-height: 30px;
        }

        .text-container p{
          line-height: 0px;
          margin: 45px, 0px, 25px;
        }

        .text-container{
          position: absolute;
          left: 13%;
          top: 42%;
          transform: translate(-13%, -42%);
        }

        .text-container button{
          width: 130px;
          height: 42px;
          border-radius: 10px;
          font-family: calibri;
          font-weight: bold;
          font-size: 14px;
          outline: none;
          margin: 0px 10px;
        }

        .hire-btn{
          border: 2px solid #373636;
          color: #373636;
        }

        .down-cv {
          background-color: #0b0b0b;
          color: #FFFFFF;
          border: none;
        }

        button:active{
          transform:scale(1.1);
        }

        .model {
          height: 560px;
          position: absolute;
          bottom: 40px;
          left: 70%;
          transform: translateX(-70%);
        }

        .about-container {
          width: 80%;
          height: 330px;
          background-color: #FFFFFF;
          border-radius: 20px;
          box-shadow: 2px, 2px, 22px, rgba(0,0,0,0.5);
          display: flex;
          margin: 7% auto 20px auto;
          position: relative;
          justify-content: space-evenly;
          align-items: center;
        }

        .about-container img{
          height: 250px;
          border-radius: 40px;
        }

        .about-text {
          width: 550px;
          padding: 20px, 10px; 
          margin: 15px 15px;
        }

        .about-text p:nth-child(1){
          color: #403e3e;
          font-family: myriad pro;
          font-weight: bold;
          font-size: 23px;
          line-height: 0px;
        }

        .about-text p:nth-child(2){
          color: #3e3d3d;
          font-family: myriad pro;
          font-weight: bold;
          font-size: 13px;
          line-height: 5px;
        }

        .about-text p:nth-child(3),
        .about-text p:nth-child(4) {
          color: #7e7d7d;
          font-family: calibri;
          font-size:16px;
        }

        .about-text button{
          width: 120px; 
          height: 40px;
          color: #FFFFFF;
          outline: none;
          border: none;
          font-family: calibri;
          background-color: #262525;
        }

        .services{
          height: 600px;
          background-color: #FFFFFF;
          padding: 2% 20% 0px 20%;
        }

        .services-text p:nth-child(1){
          font-family: calibri;
          font-weight: bold;
          color: #3e3d3d;
          font-size: 30px;
          line-height: 0px;
        }
        
        .services-text p:nth-child(2){
          font-family: calibri;
          font-weight: bold;
          color: #3e3d3d;
          font-size: 15px;
          line-height: 5px;
        }

        .services-text p:nth-child(3){
          font-family: calibri;
          color: #7e7d7d;
        }

        .services-text {
          width: 500px;
          margin: 50px 0px;
        }

        .box-1, .box-2, .box-3{
          width: 300px;
          height: 320px;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow: 2px 2px 12px rgba(0,0,0,0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .box-container{
          display: flex;
        }

        .box-1 {
          background-image: url("UI/img/003.jpg");
          margin-right: 30px;
        }
        
        .box-2 {
          background-image: url("UI/img/004.jpg");
          margin-right: 30px;
        }
        
        .box-3 {
          background-image: url("UI/img/005.jpg");
        }

        .box-1 span,
        .box-2 span,
        .box-3 span{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: calibri;
          font-weight: bold;
        }

        .box-1 p:nth-child(2),
        .box-2 p:nth-child(2),
        .box-3 p:nth-child(2){
          color: #8f8f8f;
          font-family: calibri;
          font-size: 23px;
          line-height: 0px;
        }

        .box-1 p:nth-child(3),
        .box-2 p:nth-child(3),
        .box-3 p:nth-child(3){
          font-family: calibri;
          text-align: center;
          width: 230px;
          margin: 0px 0px 20 0px;
          color: #FFFFFF;
        }

        .box-1 button,
        .box-2 button,
        .box-3 button{
          width: 100px;
          height: 30px;
          background-color: #FFFFFF;
          border: none;
          outline: none;
          border-radius: 10px;
        }

        .contact-me {
          width: 100%;
          height: 280px;
          background-image: url("images/ic_adventure2.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .contact-me p{
          color: #FFFFFF;
          font-size: 30px;
          font-family: calibri;
          font-weight: bold;
          border-bottom: 2px solid #FFFFFF;
        }

        .contact-me button{
          width: 200px;
          height: 40px;
          background-color: #FFFFFF;
          outline: none;
          border: none;
          font-size: 14px;
          font-weight: bold;
        }

        footer{
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        footer p{
          font-family: calibri;
        }

        footer p:nth-child(1){
          font-size: 30px;
          font-weight: bold;
          color: #191919;
          line-height: 10px;
        }
        footer p:nth-child(1){
          font-size: 16px;
          color: #7e7d7d;
          width: 600px;
          text-align: center;
        }

        .social-icons a{
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e6e3e3;
          margin: 20px 10px;
          border-radius: 50%;
        }
        .social-icons{
          display: flex;
        }

        .copyright {
          color: #565555;
          font-size: 15px;
          position: absolute;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%)
        }
        .social-icons{
          color: #000000;
        }
        .social-icons a:hover,
        .a-social-icons a:hover{
          background-color: #000000;
          box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
          transition: all ease 0.5s;
        }
        .social-icons a:hover i,
        .a-social-icons a:hover i{
          color: #FFFFFF;
          transition: all ease 0.5s;
        }
        .a-social-icons {
          position: fixed;
          top: 50%;
          right: 0px;
          transform: translateY(-50%);
        }
        .a-social-icons a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          padding: 0px;
          margin: 0px;
          line-height: 0px;
          background-color: #FFFFFF;
          border: 1px solid #cbcbcd;
          box-shadow: 2px 2px 12px rgba(0,0,0,0.2);
        }
        .a-social-icons i{
          color: #2b2b2b;
          font-size: 20px;
        }
        
      /* media for less than 800 screen size*/
      @media only screen and (max-width: 800px){
        .box-container{
          display: block;
        }
        .about-container{
          margin: 10px;
          position: relative;
          display: block;
          overflow: hidden;
        }
      }
      </style>

      <section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- text -->
        <div class="text-container">
          <div>
            <p>Hello,</p>
            <p>I'M LEON</p>
            <p>Am a software developer <br>& designer</p>
            <button class="hire-btn"> Hire Me </button>
            <button class="down-cv"> Download CV </button>
          </div>
        </div>
        <!-- endtext -->
        <!-- model  -->
        <!-- <img src="UI/img/008.jpg" alt="model" class="model"> -->
      </section>
      <div class="about-container">
        <img src="images/010.jpg" alt="about_image">

        <div class="about-text">
          <p>About Me</p>
          <p>Developer & Designer</p>
          <p>Hello, My name is Leon Hagai. I am a developer and also a designer. If you have any project or if you want to make a software for your business contact me. I shall make it with you, as soon as possible. You will really like my work, and if there is any problem we embark on it until satisfactory</p>
          <p>We should be creating  great things that do not yet exist.</p>
          <button>Hire Me</button>
          <button>Download CV</button>
        </div>
      </div>
      <!-- services -->
      <div class="services">
        <div class="services-text">
          <p>Services</p>
          <p>Services required</p>
          <p>If you want to create a software for your business contact me. We offer data anatysis and visualization for business ERPs </p>
        </div>

        <div class="box-container">
          <div class="box-1">
            <span>1</span>
            <p class="heading">Web Developer</p>
            <p class="details">
              If you want a software for your company contact me. We shall make it as soon as possible. Keen on customer satisfaction, provision of software updates.
            </p>
            <button>Read More</button>
          </div>
          <div class="box-2">
            <span>2</span>
            <p class="heading">Web Designer</p>
            <p class="details">
              If you want a software for your company contact me. We shall make it as soon as possible. Keen on customer satisfaction, provision of software updates.
            </p>
            <button>Read More</button>
          </div>
          <div class="box-3">
            <span>3</span>
            <p class="heading">Android Developer</p>
            <p class="details">
              If you want a software for your company contact me. We shall make it as soon as possible. Keen on customer satisfaction, provision of software updates.
            </p>
            <button>Read More</button>        
          </div>
        </div>
      </div>  
      <!-- contact me -->
      <div class="contact-me">
        <p>If you have any project in mind</p>
        <button>Contact Me</button>
      </div>
      <!-- footer -->
      <footer>
        <p>Delivery of project is as soon as possible</p>
        <div class="social-icons">
          <a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a>
          <a href="https://twitter.com"><i class="fa fa-twitter"></i></a>
          <a href="https://instagram.com"><i class="fa fa-instagram"></i></a>
          <a href="https://youtube.com"><i class="fa fa-youtube"></i></a>
        </div>
        <p class="copyright">Copyright by hagai-otieno</p>
      </footer>
      <div class="a-social-icons">
        <a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a>
        <a href="https://twitter.com"><i class="fa fa-twitter"></i></a>
        <a href="https://instagram.com/leonhagai"><i class="fa fa-instagram"></i></a>
        <a href="https://youtube.com"><i class="fa fa-youtube"></i></a>
      </div>
    `;
  }

  // constructor() {
  //   super();

  //   document.onload = function () {
  //     var TxtRotate = function (el, toRotate, period) {
  //       this.toRotate = toRotate;
  //       this.el = el;
  //       this.loopNum = 0;
  //       this.period = parseInt(period, 10) || 2000;
  //       this.txt = '';
  //       this.tick();
  //       this.isDeleting = false;
  //     };

  //     TxtRotate.prototype.tick = function () {
  //       var i = this.loopNum % this.toRotate.length;
  //       var fullTxt = this.toRotate[i];

  //       if (this.isDeleting) {
  //         this.txt = fullTxt.substring(0, this.txt.length - 1);
  //       } else {
  //         this.txt = fullTxt.substring(0, this.txt.length + 1);
  //       }

  //       this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  //       var that = this;
  //       var delta = 300 - Math.random() * 100;

  //       if (this.isDeleting) { delta /= 2; }

  //       if (!this.isDeleting && this.txt === fullTxt) {
  //         delta = this.period;
  //         this.isDeleting = true;
  //       } else if (this.isDeleting && this.txt === '') {
  //         this.isDeleting = false;
  //         this.loopNum++;
  //         delta = 500;
  //       }

  //       setTimeout(function () {
  //         that.tick();
  //       }, delta);
  //     };

  //     window.onload = function () {
  //       var elements = document.getElementsByClassName('txt-rotate');
  //       for (var i = 0; i < elements.length; i++) {
  //         var toRotate = elements[i].getAttribute('data-rotate');
  //         var period = elements[i].getAttribute('data-period');
  //         if (toRotate) {
  //           new TxtRotate(elements[i], JSON.parse(toRotate), period);
  //         }
  //       }
  //       // INJECT CSS
  //       var css = document.createElement("style");
  //       css.type = "text/css";
  //       css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  //       document.body.appendChild(css);
  //     };
  //   }
  // }
}

window.customElements.define('my-view2', MyView2);
