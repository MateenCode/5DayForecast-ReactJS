(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},37:function(e,t,a){e.exports=a(80)},72:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=a(33),o=a(12),m=a(13),s=a(16),u=a(14),d=a(17),h=a(9),p=a.n(h),E=a(7),f=a.n(E),g=a(84),w=a(85),v=a(11),y=a(87),N=a(81),b=a(82),_=a(88),M=a(83),x=(a(20),"74a0d65d1017ee174d9493121f8fca0b"),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={text:"",error:!1},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.onDismiss=function(){a.setState({error:!a.state.error})},a.handleSubmit=function(e){var t=a.state.text;e.preventDefault(),p.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat("US","&appid=").concat(x,"&units=imperial")).then(function(e){a.props.getWeather({city:e.data.name,country:e.data.sys.country,day:f()().format("dddd"),date:f()().format("MMMM Do YYYY"),img:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png"),temp:Math.round(e.data.main.temp),description:e.data.weather[0].description,temp_max:Math.round(e.data.main.temp_max),temp_min:Math.round(e.data.main.temp_min),humidity:e.data.main.humidity,wind:Math.round(e.data.wind.speed)},t),a.setState({text:""})}).catch(function(){a.setState({error:!a.state.error})})},a.handleLocation=function(){var e=0,t=0;navigator.geolocation.getCurrentPosition(function(n){e=n.coords.latitude,t=n.coords.longitude,p.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(x,"&units=imperial")).then(function(e){var t=e.data.name;a.props.getWeather({city:e.data.name,country:e.data.sys.country,day:f()().format("dddd"),date:f()().format("MMMM Do YYYY"),img:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png"),temp:Math.round(e.data.main.temp),description:e.data.weather[0].description,temp_max:Math.round(e.data.main.temp_max),temp_min:Math.round(e.data.main.temp_min),humidity:e.data.main.humidity,wind:Math.round(e.data.wind.speed)},t)}).then(function(){a.setState({error:!a.state.error})})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{color:"warning",isOpen:this.state.error,toggle:this.onDismiss},l.a.createElement("span",{className:"location",onClick:this.handleLocation},"use current location",l.a.createElement("i",{className:"fas fa-search-location p-1"}))),l.a.createElement("form",{className:"search-bar pt-5",onSubmit:this.handleSubmit},l.a.createElement(N.a,{className:"search-group"},l.a.createElement(b.a,{className:"search-field",name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"Enter City..."}),l.a.createElement(_.a,{addonType:"append"},l.a.createElement(M.a,{color:"dark",onSubmit:this.handleSubmit},l.a.createElement("i",{className:"fas fa-search"}))))))}}]),t}(n.Component);a(72);function S(){return l.a.createElement("div",{className:"display-container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"sun"}),l.a.createElement("div",{className:"cloud"},l.a.createElement("div",{className:"cloud1"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"cloud1 c_shadow"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)))),l.a.createElement("div",{className:"cloud_s"},l.a.createElement("div",{className:"cloud1"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"cloud1 c_shadow"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)))),l.a.createElement("div",{className:"cloud_vs"},l.a.createElement("div",{className:"cloud1"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"cloud1 c_shadow"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)))),l.a.createElement("div",{className:"haze"}),l.a.createElement("div",{className:"haze_stripe"}),l.a.createElement("div",{className:"haze_stripe"}),l.a.createElement("div",{className:"haze_stripe"}),l.a.createElement("div",{className:"thunder"}),l.a.createElement("div",{className:"rain"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"sleet"},l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"text"},l.a.createElement("ul",null,l.a.createElement("li",null,"Mostly Sunny"),l.a.createElement("li",null,"Partly Sunny"),l.a.createElement("li",null,"Partly Cloudy"),l.a.createElement("li",null,"Mostly Cloudy"),l.a.createElement("li",null,"Cloudy"),l.a.createElement("li",null,"Hazy"),l.a.createElement("li",null,"Thunderstorm"),l.a.createElement("li",null,"Rain"),l.a.createElement("li",null,"Sleet")))))}var k=a(86);function j(e){var t=e.weather,a=t.city,n=t.country,r=t.day,c=t.date,i=t.description,o=t.img,m=t.temp,s=t.temp_max,u=t.temp_min,d=t.humidity,h=t.wind;return l.a.createElement(g.a,{className:"main"},l.a.createElement("div",{className:"header_key"},l.a.createElement("span",{className:"h2"},a,", ",n),l.a.createElement("p",{className:"text-secondary"},r,", ",c,l.a.createElement("br",null),i)),l.a.createElement(w.a,null,l.a.createElement(k.a,null,l.a.createElement("img",{className:"icon",src:o,alt:""}),l.a.createElement("span",{className:"temp_key"},m,"\xb0")),l.a.createElement(k.a,null,l.a.createElement("p",{className:"text-secondary"},l.a.createElement("span",{className:"text-white h6"},"Temperature: "),s,"\xb0 ~ ",u,"\xb0",l.a.createElement("br",null),l.a.createElement("span",{className:"text-white h6"},"Humidity: "),d,"%",l.a.createElement("br",null),l.a.createElement("span",{className:"text-white h6"},"Wind: "),h," mph"))))}var C=a(36),O=a.n(C);function Y(e){var t=e.changeWeather,a=e.weatherItem,n=a.dt_txt,r=a.weather,c=a.main;return l.a.createElement("div",{className:"weather",onClick:t},l.a.createElement("div",{className:"weather_list"},l.a.createElement(O.a,{format:"dddd"},n),l.a.createElement("br",null),l.a.createElement("img",{className:"icon_list",src:"http://openweathermap.org/img/w/".concat(r[0].icon,".png"),alt:""}),l.a.createElement("br",null),Math.round(c.temp),l.a.createElement("span",null,"\xb0F")))}var L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={currentWeather:{},weatherList:[]},a.changeWeather=function(e){a.setState({currentWeather:Object(i.a)({},a.state.currentWeather,{day:f()(e.dt_txt).format("dddd"),date:f()(e.dt_txt).format("MMMM Do YYYY"),img:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),temp:Math.round(e.main.temp),description:e.weather[0].description,temp_max:Math.round(e.main.temp_max),temp_min:Math.round(e.main.temp_min),humidity:e.main.humidity,wind:Math.round(e.wind.speed)})})},a.getWeather=function(e,t){a.setState({currentWeather:e}),p.a.get("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat("US","&appid=").concat("74a0d65d1017ee174d9493121f8fca0b","&units=imperial")).then(function(e){var t=e.data.list;console.log(t),a.setState({weatherList:t.filter(function(e){return"21:00:00"===e.dt_txt.split(" ")[1]})})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.weatherList.length?l.a.createElement("div",{className:"App"},l.a.createElement(W,{getWeather:this.getWeather}),l.a.createElement(S,null)):l.a.createElement("div",{className:"App"},l.a.createElement(W,{getWeather:this.getWeather}),l.a.createElement("div",{className:"display"},l.a.createElement(g.a,{fluid:!0},l.a.createElement(w.a,null,l.a.createElement(j,{weather:this.state.currentWeather})),l.a.createElement("br",null),l.a.createElement(w.a,null,this.state.weatherList.map(function(t){return l.a.createElement(Y,{key:t.dt,weatherItem:t,changeWeather:e.changeWeather.bind(e,t)})})))))}}]),t}(l.a.Component),D=(a(75),a(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(L,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");D?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):z(e)})}}()}},[[37,2,1]]]);
//# sourceMappingURL=main.1ff9abf4.chunk.js.map