(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Sfn":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("4R65"),o=function(){function e(e,t,n){void 0===n&&(n=""),this.overlays={},this.baseLayers={Terrain:i.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),Satellite:i.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})};var o=this.baseLayers.Terrain;n&&(o=this.baseLayers[n]),this.imap=i.map(e,{center:[t.location.lat,t.location.lng],zoom:t.zoom,minZoom:t.minZoom,zoomControl:!1,layers:[o]})}return e.prototype.addLayer=function(e,t){this.overlays[e]=t,this.imap.addLayer(t)},e.prototype.addLayerGroup=function(e){this.overlays[e]=i.layerGroup([]),this.imap.addLayer(this.overlays[e])},e.prototype.showLayerControl=function(){this.control=i.control.layers(this.baseLayers,this.overlays).addTo(this.imap)},e.prototype.showZoomControl=function(e){void 0===e&&(e="topleft"),i.control.zoom({position:e}).addTo(this.imap)},e.prototype.moveTo=function(e,t){this.imap.setZoom(e),this.imap.panTo(new i.LatLng(t.lat,t.lng))},e.prototype.zoomTo=function(e){this.imap.setView(new i.LatLng(e.lat,e.lng),8)},e.prototype.addMarker=function(e,t,n){var o;void 0===t&&(t=""),void 0===n&&(n="default");var r=i.marker([e.lat,e.lng]);if(t){var a=i.popup({autoClose:!1,closeOnClick:!1});a.setContent(t),r.bindPopup(a)}this.overlays[n]?o=this.overlays[n]:(o=i.layerGroup([]),this.overlays[n]=o,this.imap.addLayer(o)),r.addTo(o)},e.prototype.invalidateSize=function(){this.imap.invalidateSize(),this.imap._onResize()},e}()},0:function(e,t,n){n("GAND"),n("GmYv"),e.exports=n("b9nV")},GfLW:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("aurelia-framework"),o=n("1aCK"),r=n("aurelia-event-aggregator"),a=n("4ysu"),s=n("70NS"),c=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((i=i.apply(e,t||[])).next())})},p=function(e,t){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},d=function(){function e(e,t,n,i){this.httpClient=e,this.ea=t,this.au=n,this.router=i,this.users=new Map,this.usersById=new Map,this.pois=[],this.admissionFee=["Yes","No","Voluntary"],e.configure(function(e){e.withBaseUrl("https://glitch.com/edit/#!/strong-pike")}),this.getPois(),this.getUsers()}return e.prototype.getPois=function(){return u(this,void 0,void 0,function(){var e=this;return p(this,function(t){switch(t.label){case 0:return[4,this.httpClient.get("/api/pois")];case 1:return[4,t.sent().content];case 2:return t.sent().forEach(function(t){var n={attractionType:t.attractionType,attractionName:t.attractionName,description:t.description,admissionFee:t.admissionFee,location:t.location,poier:e.usersById.get(t.poier)};e.pois.push(n)}),console.log(this.pois),[2]}})})},e.prototype.getUsers=function(){return u(this,void 0,void 0,function(){var e=this;return p(this,function(t){switch(t.label){case 0:return[4,this.httpClient.get("/api/users")];case 1:return[4,t.sent().content];case 2:return t.sent().forEach(function(t){e.users.set(t.email,t),e.usersById.set(t._id,t)}),[2]}})})},e.prototype.poi=function(e,t,n,i,o){return u(this,void 0,void 0,function(){var r;return p(this,function(a){return r={attractionType:e,attractionName:t,description:n,admissionFee:i,location:o},this.pois.push(r),this.ea.publish(r),console.log(this.pois),[2]})})},e.prototype.signup=function(e,t,n,i){return u(this,void 0,void 0,function(){var o,r;return p(this,function(a){switch(a.label){case 0:return o={firstName:e,lastName:t,email:n,password:i},[4,this.httpClient.post("/api/users",o)];case 1:return[4,a.sent().content];case 2:return r=a.sent(),this.users.set(r.email,r),this.usersById.set(r._id,r),this.changeRouter("app"),[2,!1]}})})},e.prototype.login=function(e,t){return u(this,void 0,void 0,function(){var n;return p(this,function(i){return(n=this.users.get(e))&&n.password===t?(this.changeRouter("app"),[2,!0]):[2,!1]})})},e.prototype.logout=function(){this.changeRouter("start")},e.prototype.changeRouter=function(e){this.router.navigate("/",{replace:!0,trigger:!1}),this.router.reset(),this.au.setRoot(s.d.moduleName(e))},e=c([Object(i.c)(o.a,r.a,i.Aurelia,a.c),l("design:paramtypes",[o.a,r.a,i.Aurelia,a.c])],e)}()},app:function(e,t,n){"use strict";n.r(t),n.d(t,"App",function(){return i});n("70NS");var i=function(){function e(){}return e.prototype.configureRouter=function(e,t){e.map([{route:["","poi"],name:"Poi",moduleId:"views/poi",nav:!0,title:"POI"},{route:"map",name:"map",moduleId:"views/map",nav:!0,title:"Map"},{route:"logout",name:"logout",moduleId:"views/logout",nav:!0,title:"Logout"}]),this.router=t},e}()},"app.html":function(e,t,n){e.exports='<template>\n    <require from="resources/elements/nav-bar.html"></require>\n\n  <div class="ui container">\n    <section class="ui raised segment">\n      <h3 class="ui headder"> POI </h3>\n    </section>\n    <nav-bar router.bind="router"></nav-bar>\n    <div class="ui basic segment">\n        <router-view></router-view>\n    </div>\n  </div>\n</template>\n'},main:function(e,t,n){"use strict";n("LSZE");var i={debug:!1,testing:!1};n("70NS");function o(e){return e.use.standardConfiguration().feature("resources/index"),e.use.developmentLogging(i.debug?"debug":"warn"),i.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot("start")})}n.d(t,"configure",function(){return o})},"resources/elements/coordinates":function(e,t,n){"use strict";n.r(t),n.d(t,"Coordinates",function(){return a});var i=n("aurelia-framework"),o=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return o([i.b,r("design:type",Object)],e.prototype,"location",void 0),e}()},"resources/elements/coordinates.html":function(e,t){e.exports='<template>\n    <h4 class="ui dividing header"> Enter Coordinates </h4>\n    <div class="two fields">\n      <div class="field">\n        <label>Latitude</label> <input placeholder="00.000000" value.bind="location.lat"/>\n      </div>\n      <div class="field">\n        <label>Longitude</label> <input placeholder="00.000000" value.bind="location.lng"/>\n      </div>\n    </div>\n  </template>\n'},"resources/elements/nav-bar.html":function(e,t){e.exports='<template bindable="router">\n    \n    <nav class="ui blue inverted menu">\n        <header class="header item"> <a href="/"> Discover Waterford </a> </header>\n      <div class="right menu">\n        <div repeat.for="row of router.navigation">\n          <a class="${row.isActive ? \'active\' : \'\'} item"  href.bind="row.href">${row.title}</a>\n        </div>\n      </div>\n    </nav>\n    \n  \n  </template>\n'},"resources/elements/poi-form":function(e,t,n){"use strict";n.r(t),n.d(t,"PoiForm",function(){return s});var i=n("aurelia-framework"),o=n("GfLW"),r=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.ds=e,this.pois=[],this.attractionType="",this.attractionName="",this.description="",this.selectedAdmission="",this.location={lat:53.2734,lng:-7.7783203}}return e.prototype.addPoi=function(){this.ds.poi(this.attractionType,this.attractionName,this.description,this.selectedAdmission,this.location)},e.prototype.resultsBeach=function(){},r([i.b,a("design:type",Array)],e.prototype,"pois",void 0),r([i.b,a("design:type",Array)],e.prototype,"admissionFee",void 0),e=r([Object(i.c)(o.a),a("design:paramtypes",[o.a])],e)}()},"resources/elements/poi-form.html":function(e,t,n){e.exports='<template>\n    <require from="./coordinates"></require>\n    <form submit.trigger="addPoi()" class="ui form stacked segment">\n        <h3 class=\'ui dividing header\'> Create a Point of Interest </h3>\n        \n          <div class="field">\n            <label>\n              Select Attraction Type:<br>\n              <select value.bind="attractionType">\n                <option value="">Choose...</option>\n                <option value="Historic">Historic</option>\n                <option value="Beach">Beach</option>\n                <option value="Woodlands">Woodlands</option>\n                <option value="Mountains">Mountains</option>\n                <option value="Outdoor Activity">Outdoor Activity</option>\n              </select>\n            </label>\n          </div>\n          <div class="field">\n            <label>Name</label> <input type="text" value.bind="attractionName">\n          </div>\n          <div class="field">\n            <label>Description</label> <input type="text" value.bind="description">\n          </div>\n          <coordinates location.two-way="location"></coordinates>\n          <div class="grouped inline fields">\n              <div class="field" repeat.for="method of admissionFee">\n                <div class="ui radio checkbox">\n                  <input type="radio" model.bind="method" checked.bind="selectedAdmission">\n                  <label>${method}</label>\n                </div>\n              </div>\n            </div>\n        <button class="ui blue submit button">Create POI</button>\n      </form>\n</template>\n'},"resources/elements/poi-list":function(e,t,n){"use strict";n.r(t),n.d(t,"PoiList",function(){return a});var i=n("aurelia-framework"),o=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return o([i.b,r("design:type",Array)],e.prototype,"pois",void 0),e}()},"resources/elements/poi-list.html":function(e,t){e.exports='<template>\n  <div class="column">\n    <h3 class="ui dividing header"> Poi\'s </h3>\n      <table class="ui celled table segment">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Submitted By</th>\n            <th>Fee</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr repeat.for="poi of pois">\n            <td> ${poi.attractionType}</td>\n            <td> ${poi.attractionName}</td>\n            <td> ${poi.description}</td>\n            <td> ${poi.poier.firstName} ${poi.poier.lastName}</td>\n            <td> ${poi.admissionFee} </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</template>\n'},"resources/elements/poi-map":function(e,t,n){"use strict";n.r(t);var i=n("aurelia-framework"),o=n("aurelia-event-aggregator"),r=n("+Sfn"),a=function(){function e(){}return e.prototype.construtor=function(e){this.poi=e},e}();n.d(t,"PoiMap",function(){return l});var s=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e){var t=this;this.ea=e,this.mapId="poi-map",this.mapHeight=300,e.subscribe(a,function(e){t.renderPoi(e.poi)})}return e.prototype.renderPoi=function(e){this.map&&(this.map.addMarker(e.location),this.map.moveTo(12,e.location))},e.prototype.attached=function(){this.map=new r.a(this.mapId,{location:{lat:52.2593,lng:-7.7783203},zoom:9,minZoom:7},"Terrain"),this.map.showZoomControl()},e=s([Object(i.c)(o.a),c("design:paramtypes",[o.a])],e)}()},"resources/elements/poi-map.html":function(e,t){e.exports='<template>\n    <div class="ui stacked segment">\n      <div id="${mapId}" class="ui embed" style="height:${mapHeight}px; z-index: 0"></div>\n    </div>\n  </template>\n'},"resources/elements/poi-menu":function(e,t,n){"use strict";n.r(t),n.d(t,"PoiMenu",function(){return i});var i=function(){return function(){}}()},"resources/elements/poi-menu.html":function(e,t){e.exports='<template>\n<div class="ui four column grid">\n  <div class="column">\n      <a href="#">\n          <div class="ui fluid image">\n              <div class="ui green ribbon label">\n                  Beaches\n              </div>\n              <img src="/images/beachDunmoreEast.jpg">\n\n          </div>\n      </a>\n  </div>\n  <div class="column">\n      <a href="#">\n          <div class="ui fluid image">\n              <div class="ui green ribbon label">\n                  Historic\n              </div>\n              <img src="/images/historicRegTower.png">\n          </div>\n      </a>\n  </div>\n  <div class="column">\n      <a href="#">\n          <div class="ui fluid image">\n              <div class="ui green ribbon label">\n                  Outdoor Activities\n              </div>\n              <img src="/images/outdoorGreenWay.jpg">\n          </div>\n      </a>\n  </div>\n  <div class="column">\n      <a href="#">\n          <div class="ui fluid image">\n              <div class="ui green ribbon label">\n                  Food & Drink\n              </div>\n              <img src="/images/tanneryRestaurant.jpg">\n          </div>\n      </a>\n  </div>\n</div>\n</template>\n'},"resources/index":function(e,t,n){"use strict";function i(e){}n.r(t),n.d(t,"configure",function(){return i})},start:function(e,t,n){"use strict";n.r(t),n.d(t,"Start",function(){return i});n("70NS");var i=function(){function e(){}return e.prototype.configureRouter=function(e,t){e.map([{route:["","login"],name:"Login",moduleId:"views/login",nav:!0,title:"Login"},{route:"signup",name:"signup",moduleId:"views/signup",nav:!0,title:"Signup"}]),this.router=t},e}()},"start.html":function(e,t,n){e.exports='<template>\n    <require from="resources/elements/nav-bar.html"></require>\n    <div class="ui container">\n      <section class="ui raised segment">\n        <h3 class="ui headder"> Waterford Points of Interest </h3>\n      </section>\n      <nav-bar router.bind="router"></nav-bar>\n      <div class="ui basic segment">\n        <router-view></router-view>\n      </div>\n    </div>\n  </template>\n'},"views/login":function(e,t,n){"use strict";n.r(t),n.d(t,"Login",function(){return l});var i=n("aurelia-framework"),o=n("GfLW"),r=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((i=i.apply(e,t||[])).next())})},c=function(e,t){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},l=function(){function e(e){this.ds=e,this.email="homer@simpson.com",this.password="secret",this.prompt=""}return e.prototype.login=function(e){return s(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return console.log("Trying to log in "+this.email),[4,this.ds.login(this.email,this.password)];case 1:return e.sent()||(this.prompt="Oops! Try again..."),[2]}})})},e=r([Object(i.c)(o.a),a("design:paramtypes",[o.a])],e)}()},"views/login.html":function(e,t){e.exports='<template>\n    <section class="ui raised segment">\n    <div class="ui stackable two column grid">\n      <div class="column">\n        <form submit.delegate="login($event)" class="ui stacked segment form">\n          <h3 class="ui header">Log-in</h3>\n          <div class="field">\n            <label>Email</label> <input placeholder="Email" value.bind="email"/>\n          </div>\n          <div class="field">\n            <label>Password</label> <input type="password" value.bind="password"/>\n          </div>\n          <button class="ui blue submit button">Login</button>\n          <h3>${prompt}</h3>\n        </form>\n      </div>\n      <div class="column">\n        <h3>Welcome/Failte</h3>\n        <h5>Waterford\'s Point of Interest aims to showcase the best that Waterford has to offer</h5>\n        <img class="ui centered rounded image" src="/images/beachDunmoreEast.jpg">\n      </div>\n    </div>\n    </section>\n  </template>\n'},"views/logout":function(e,t,n){"use strict";n.r(t),n.d(t,"Logout",function(){return s});var i=n("aurelia-framework"),o=n("GfLW"),r=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.ds=e}return e.prototype.attached=function(){this.ds.logout()},e=r([Object(i.c)(o.a),a("design:paramtypes",[o.a])],e)}()},"views/logout.html":function(e,t){e.exports="<template>\n  </template>\n"},"views/map":function(e,t,n){"use strict";n.r(t),n.d(t,"Map",function(){return c});var i=n("GfLW"),o=n("aurelia-framework"),r=n("+Sfn"),a=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.ea=e,this.mapId="main-map",this.mapHeight=300}return e.prototype.attached=function(){this.map=new r.a(this.mapId,{location:{lat:52.2593,lng:-7.7783203},zoom:9,minZoom:7},"Terrain"),this.map.showZoomControl(),this.map.showLayerControl(),this.map.showZoomControl()},e=a([Object(o.c)(i.a),s("design:paramtypes",[i.a])],e)}()},"views/map.html":function(e,t){e.exports='<template>\n    <div class="ui stacked segment">\n      <div id="${mapId}" class="ui embed" style="height:${mapHeight}px; z-index: 0"></div>\n    </div>\n  </template>\n'},"views/poi":function(e,t,n){"use strict";n.r(t),n.d(t,"Poi",function(){return s});var i=n("aurelia-framework"),o=n("GfLW"),r=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.ds=e,this.pois=e.pois,this.admissionFee=e.admissionFee}return e=r([Object(i.c)(o.a),a("design:paramtypes",[o.a])],e)}()},"views/poi.html":function(e,t,n){e.exports='<template>\n    <require from="../resources/elements/poi-form"></require>\n    <require from="../resources/elements/poi-list"></require>\n    <require from="../resources/elements/poi-map"></require>\n    <require from="../resources/elements/poi-menu"></require>\n    <section class="ui raised segment">\n        <poi-menu></poi-menu>\n      </section>\n      <section class="ui raised segment">\n        <poi-map></poi-map>\n      </section>\n      <section class="ui raised segment">\n        <poi-list pois.bind="pois"></poi-list>\n      </section>\n      <section class="ui raised segment">\n        <poi-form pois.bind="pois" admission-fee.bind="admissionFee"></poi-form>\n      </section>\n</template>\n'},"views/signup":function(e,t,n){"use strict";n.r(t),n.d(t,"Signup",function(){return s});var i=n("aurelia-framework"),o=n("GfLW"),r=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.ds=e,this.firstName="Homer",this.lastName="Simpson",this.email="homer@simpson.com",this.password="secret",this.prompt=""}return e.prototype.signup=function(e){console.log("Trying to sign up "+this.email),this.ds.signup(this.firstName,this.lastName,this.email,this.password)||(this.prompt="Oops! Try again...")},e=r([Object(i.c)(o.a),a("design:paramtypes",[o.a])],e)}()},"views/signup.html":function(e,t){e.exports='<template>\n    <div class="ui stackable two column grid">\n      <div class="column">\n        <img class="ui medium image" src="#">\n      </div>\n      <div class="column">\n        <form submit.delegate="signup($event)" class="ui stacked segment form">\n          <h3 class="ui header">Register</h3>\n          <div class="two fields">\n            <div class="field">\n              <label>First Name</label> <input placeholder="First Name" type="text" value.bind="firstName">\n            </div>\n            <div class="field">\n              <label>Last Name</label> <input placeholder="Last Name" type="text" value.bind="lastName">\n            </div>\n          </div>\n          <div class="field">\n            <label>Email</label> <input placeholder="Email" type="text" value.bind="email">\n          </div>\n          <div class="field">\n            <label>Password</label> <input type="password" value.bind="password">\n          </div>\n          <button class="ui blue submit button">Submit</button>\n        </form>\n        <h3>${prompt}</h3>\n      </div>\n    </div>\n  </template>\n'}},[[0,1,2,6,5,7,10,9,4,8,3]]]);
//# sourceMappingURL=app~d0ae3f07.9b0319b873f5d09b30e7.bundle.map