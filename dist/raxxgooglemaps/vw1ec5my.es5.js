/*! Built with http://stenciljs.com */
raxxgooglemaps.loadBundle("vw1ec5my",["exports"],function(e){var n=window.raxxgooglemaps.h,o=function(){function e(){this.markers=[]}return e.prototype.render=function(){return n("div",{id:"google-map-container"})},e.prototype.componentDidLoad=function(){this.init().then(function(){console.log("Google Maps ready.")},function(e){console.log(e)})},e.prototype.init=function(){var e=this;return new Promise(function(n,o){e.loadSDK().then(function(){e.initMap().then(function(){n(!0)},function(e){o(e)})},function(e){o(e)})})},e.prototype.loadSDK=function(){var e=this;return new Promise(function(n){e.injectSDK().then(function(){return n()})})},e.prototype.injectSDK=function(){var e=this;return new Promise(function(n,o){window.mapInit=function(){n(!0)};var t=document.createElement("script");t.id="googleMaps",e.apikey?(t.src="https://maps.googleapis.com/maps/api/js?key="+e.apikey+"&callback=mapInit",document.body.appendChild(t)):o("API Key not supplied")})},e.prototype.initMap=function(){var e=this;return new Promise(function(n){navigator.geolocation.getCurrentPosition(function(o){console.log(o);var t={center:new google.maps.LatLng(o.coords.latitude,o.coords.longitude),zoom:15};e.map=new google.maps.Map(document.getElementById("google-map-container"),t),n(!0)})})},e.prototype.addMarker=function(e,n){var o=new google.maps.LatLng(e,n),t=new google.maps.Marker({map:this.map,animation:google.maps.Animation.DROP,position:o});this.markers.push(t)},e.prototype.getCenter=function(){return this.map.getCenter()},Object.defineProperty(e,"is",{get:function(){return"raxx-google-maps"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addMarker:{method:!0},apikey:{type:String,attr:"apikey"},getCenter:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"raxx-google-maps{width:100%;height:100%}#google-map-container{width:100%;height:100%}"},enumerable:!0,configurable:!0}),e}();e.RaxxGoogleMaps=o,Object.defineProperty(e,"__esModule",{value:!0})});