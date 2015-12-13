/**
 * async.wrapsync - Take a sync function and make it async, passing its return value to a callback.
 * @version v1.0.1
 * @link    https://github.com/Kikobeats/async.wrapsync
 * @license MIT
 */require=function r(t,n,e){function o(a,i){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!i&&c)return c(a,!0);if(u)return u(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(r){var n=t[a][1][r];return o(n?n:r)},s,s.exports,r,t,n,e)}return n[a].exports}for(var u="function"==typeof require&&require,a=0;a<e.length;a++)o(e[a]);return o}({1:[function(r,t,n){function e(r){var t=typeof r;return!!r&&("object"==t||"function"==t)}t.exports=e},{}],2:[function(r,t,n){function e(r,t){if("function"!=typeof r)throw new TypeError(o);return t=u(void 0===t?r.length-1:+t||0,0),function(){for(var n=arguments,e=-1,o=u(n.length-t,0),a=Array(o);++e<o;)a[e]=n[t+e];switch(t){case 0:return r.call(this,a);case 1:return r.call(this,n[0],a);case 2:return r.call(this,n[0],n[1],a)}var i=Array(t+1);for(e=-1;++e<t;)i[e]=n[e];return i[t]=a,r.apply(this,i)}}var o="Expected a function",u=Math.max;t.exports=e},{}],"async.wrapsync":[function(r,t,n){"use strict";var e=r("lodash.isobject"),o=r("lodash.restparam");t.exports=function(r){return o(function(t){var n,o=t.pop();try{n=r.apply(this,t)}catch(u){return o(u)}e(n)&&"function"==typeof n.then?n.then(function(r){o(null,r)})["catch"](function(r){o(r.message?r:new Error(r))}):o(null,n)})}},{"lodash.isobject":1,"lodash.restparam":2}]},{},[]);