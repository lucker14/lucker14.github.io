"use strict";!function(t){function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var o={};n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,o){t.exports=o(1)},function(t,n){$("body").on("click","ul.nav a",function(t){t.preventDefault(),$(".navbar-collapse.collapse.in").removeClass("in"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+1},500)}),$(document).scroll(function(){var t=$("#our-references").offset().top-80,n=$("#our-work").offset().top-80,o=$("#our-team").offset().top-80,e=$("#contact").offset().top-80,a=$("#hero").height()+65;console.log(a);var l=$("ul.nav"),i=$(this).scrollTop();i<a&&($("#menu-background").attr("style",""),l.find("li").attr("class","")),i>a&&$("#menu-background").css({position:"fixed",top:"0px",left:"0px",right:"0px"}),i>a&&i<t&&(l.find("li").attr("class",""),l.find("li:nth-of-type(1)").addClass("active")),i>t&&i<n&&(l.find("li").attr("class",""),l.find("li:nth-of-type(2)").addClass("active")),i>n&&i<o&&(l.find("li").attr("class",""),l.find("li:nth-of-type(3)").addClass("active")),i>o&&i<e&&(l.find("li").attr("class",""),l.find("li:nth-of-type(4)").addClass("active")),i>e&&(l.find("li").attr("class",""),l.find("li:nth-of-type(4)").addClass("active")),$("#link-blog").removeClass("active")}),$(function(){$("#link-blog").on("click",function(t){window.open($(this).attr("href"),"_blank")})}),$(".navbar-toggle").on("click",function(){$(".navbar-collapse").toggleClass("collapse")})}]);