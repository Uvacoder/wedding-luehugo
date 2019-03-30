(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(e,t,r){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),o=c(r(0)),a=c(r(610)),s=c(r(613)),l=c(r(615)),u=c(r(4));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"render",value:function(){var e=this.props.protocol+"www.gravatar.com/avatar/",t=s.default.stringify({s:this.props.size,r:this.props.rating,d:this.props.default}),r=s.default.stringify({s:2*this.props.size,r:this.props.rating,d:this.props.default}),n=(""+this.props.email).trim().toLowerCase(),u=void 0;if(this.props.md5)u=this.props.md5;else{if("string"!=typeof this.props.email)return console.warn('Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'),o.default.createElement("script",null);u=(0,a.default)(n,{encoding:"binary"})}var c=""+e+u+"?"+t,d=""+e+u+"?"+r,f=!0;"undefined"!=typeof window&&(f="srcset"in document.createElement("img"));var p="react-gravatar";this.props.className&&(p=p+" "+this.props.className);var h=function(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}(this.props,[]);return delete h.md5,delete h.email,delete h.protocol,delete h.rating,delete h.size,delete h.style,delete h.className,delete h.default,!f&&(0,l.default)()?o.default.createElement("img",i({alt:"Gravatar for "+n,style:this.props.style,src:d,height:this.props.size,width:this.props.size},h,{className:p})):o.default.createElement("img",i({alt:"Gravatar for "+n,style:this.props.style,src:c,srcSet:d+" 2x",height:this.props.size,width:this.props.size},h,{className:p}))}}]),t}();d.displayName="Gravatar",d.propTypes={email:u.default.string,md5:u.default.string,size:u.default.number,rating:u.default.string,default:u.default.string,className:u.default.string,protocol:u.default.string,style:u.default.object},d.defaultProps={size:50,rating:"g",default:"retro",protocol:"//"},e.exports=d},197:function(e,t,r){"use strict";var i=r(8);t.__esModule=!0,t.default=void 0;var n,o=i(r(7)),a=i(r(39)),s=i(r(78)),l=i(r(79)),u=i(r(0)),c=i(r(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=d(e),r=t.fluid?t.fluid.src:t.fixed.src;return f[r]||!1},h=new WeakMap;var g=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return r&&(r.observe(e),h.set(e,t)),function(){r.unobserve(e),h.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+s+l+r+n+t+a+o+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=u.default.forwardRef(function(e,t){var r=e.sizes,i=e.srcSet,n=e.src,o=e.style,a=e.onLoad,c=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({sizes:r,srcSet:i,src:n},d,{onLoad:a,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var r;r=e.call(this,t)||this;var i=!0,n=!1,o=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(t.critical&&!t.fadeIn);return r.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:o,hasNoScript:l,seenBefore:s},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=t.fluid?t.fluid.src:t.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,i=e.className,n=e.style,o=void 0===n?{}:n,a=e.imgStyle,s=void 0===a?{}:a,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,S="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),O=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),j={title:t,alt:this.state.isVisible?"":r,style:E,className:p};if(h){var x=h;return u.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},u.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),S&&u.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),x.base64&&u.default.createElement(m,(0,l.default)({src:x.base64},j)),x.tracedSVG&&u.default.createElement(m,(0,l.default)({src:x.tracedSVG},j)),this.state.isVisible&&u.default.createElement("picture",null,x.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),u.default.createElement(m,{alt:r,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:t},x))}}))}if(g){var L=g,z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},o);return"inherit"===o.display&&delete z.display,u.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},S&&u.default.createElement(v,{title:t,style:{backgroundColor:S,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),L.base64&&u.default.createElement(m,(0,l.default)({src:L.base64},j)),L.tracedSVG&&u.default.createElement(m,(0,l.default)({src:L.tracedSVG},j)),this.state.isVisible&&u.default.createElement("picture",null,L.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),u.default.createElement(m,{alt:r,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:t,width:L.width,height:L.height},L))}}))}return null},t}(u.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=b;t.default=S},201:function(e,t,r){var i=r(11);i(i.P,"Array",{fill:r(636)}),r(37)("fill")},364:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},610:function(e,t,r){var i,n,o,a,s;i=r(611),n=r(364).utf8,o=r(612),a=r(364).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):n.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=i.bytesToWords(e),l=8*e.length,u=1732584193,c=-271733879,d=-1732584194,f=271733878,p=0;p<r.length;p++)r[p]=16711935&(r[p]<<8|r[p]>>>24)|4278255360&(r[p]<<24|r[p]>>>8);r[l>>>5]|=128<<l%32,r[14+(l+64>>>9<<4)]=l;var h=s._ff,g=s._gg,y=s._hh,m=s._ii;for(p=0;p<r.length;p+=16){var b=u,v=c,w=d,S=f;u=h(u,c,d,f,r[p+0],7,-680876936),f=h(f,u,c,d,r[p+1],12,-389564586),d=h(d,f,u,c,r[p+2],17,606105819),c=h(c,d,f,u,r[p+3],22,-1044525330),u=h(u,c,d,f,r[p+4],7,-176418897),f=h(f,u,c,d,r[p+5],12,1200080426),d=h(d,f,u,c,r[p+6],17,-1473231341),c=h(c,d,f,u,r[p+7],22,-45705983),u=h(u,c,d,f,r[p+8],7,1770035416),f=h(f,u,c,d,r[p+9],12,-1958414417),d=h(d,f,u,c,r[p+10],17,-42063),c=h(c,d,f,u,r[p+11],22,-1990404162),u=h(u,c,d,f,r[p+12],7,1804603682),f=h(f,u,c,d,r[p+13],12,-40341101),d=h(d,f,u,c,r[p+14],17,-1502002290),u=g(u,c=h(c,d,f,u,r[p+15],22,1236535329),d,f,r[p+1],5,-165796510),f=g(f,u,c,d,r[p+6],9,-1069501632),d=g(d,f,u,c,r[p+11],14,643717713),c=g(c,d,f,u,r[p+0],20,-373897302),u=g(u,c,d,f,r[p+5],5,-701558691),f=g(f,u,c,d,r[p+10],9,38016083),d=g(d,f,u,c,r[p+15],14,-660478335),c=g(c,d,f,u,r[p+4],20,-405537848),u=g(u,c,d,f,r[p+9],5,568446438),f=g(f,u,c,d,r[p+14],9,-1019803690),d=g(d,f,u,c,r[p+3],14,-187363961),c=g(c,d,f,u,r[p+8],20,1163531501),u=g(u,c,d,f,r[p+13],5,-1444681467),f=g(f,u,c,d,r[p+2],9,-51403784),d=g(d,f,u,c,r[p+7],14,1735328473),u=y(u,c=g(c,d,f,u,r[p+12],20,-1926607734),d,f,r[p+5],4,-378558),f=y(f,u,c,d,r[p+8],11,-2022574463),d=y(d,f,u,c,r[p+11],16,1839030562),c=y(c,d,f,u,r[p+14],23,-35309556),u=y(u,c,d,f,r[p+1],4,-1530992060),f=y(f,u,c,d,r[p+4],11,1272893353),d=y(d,f,u,c,r[p+7],16,-155497632),c=y(c,d,f,u,r[p+10],23,-1094730640),u=y(u,c,d,f,r[p+13],4,681279174),f=y(f,u,c,d,r[p+0],11,-358537222),d=y(d,f,u,c,r[p+3],16,-722521979),c=y(c,d,f,u,r[p+6],23,76029189),u=y(u,c,d,f,r[p+9],4,-640364487),f=y(f,u,c,d,r[p+12],11,-421815835),d=y(d,f,u,c,r[p+15],16,530742520),u=m(u,c=y(c,d,f,u,r[p+2],23,-995338651),d,f,r[p+0],6,-198630844),f=m(f,u,c,d,r[p+7],10,1126891415),d=m(d,f,u,c,r[p+14],15,-1416354905),c=m(c,d,f,u,r[p+5],21,-57434055),u=m(u,c,d,f,r[p+12],6,1700485571),f=m(f,u,c,d,r[p+3],10,-1894986606),d=m(d,f,u,c,r[p+10],15,-1051523),c=m(c,d,f,u,r[p+1],21,-2054922799),u=m(u,c,d,f,r[p+8],6,1873313359),f=m(f,u,c,d,r[p+15],10,-30611744),d=m(d,f,u,c,r[p+6],15,-1560198380),c=m(c,d,f,u,r[p+13],21,1309151649),u=m(u,c,d,f,r[p+4],6,-145523070),f=m(f,u,c,d,r[p+11],10,-1120210379),d=m(d,f,u,c,r[p+2],15,718787259),c=m(c,d,f,u,r[p+9],21,-343485551),u=u+b>>>0,c=c+v>>>0,d=d+w>>>0,f=f+S>>>0}return i.endian([u,c,d,f])})._ff=function(e,t,r,i,n,o,a){var s=e+(t&r|~t&i)+(n>>>0)+a;return(s<<o|s>>>32-o)+t},s._gg=function(e,t,r,i,n,o,a){var s=e+(t&i|r&~i)+(n>>>0)+a;return(s<<o|s>>>32-o)+t},s._hh=function(e,t,r,i,n,o,a){var s=e+(t^r^i)+(n>>>0)+a;return(s<<o|s>>>32-o)+t},s._ii=function(e,t,r,i,n,o,a){var s=e+(r^(t|~i))+(n>>>0)+a;return(s<<o|s>>>32-o)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=i.wordsToBytes(s(e,t));return t&&t.asBytes?r:t&&t.asString?a.bytesToString(r):i.bytesToHex(r)}},611:function(e,t){var r,i;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&i.rotl(e,8)|4278255360&i.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=i.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,i=0;r<e.length;r++,i+=8)t[i>>>5]|=e[r]<<24-i%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],i=0;i<e.length;i+=3)for(var n=e[i]<<16|e[i+1]<<8|e[i+2],o=0;o<4;o++)8*i+6*o<=8*e.length?t.push(r.charAt(n>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],i=0,n=0;i<e.length;n=++i%4)0!=n&&t.push((r.indexOf(e.charAt(i-1))&Math.pow(2,-2*n+8)-1)<<2*n|r.indexOf(e.charAt(i))>>>6-2*n);return t}},e.exports=i},612:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},613:function(e,t,r){"use strict";var i=r(614),n=r(55);function o(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,i){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=r):i[e]=r};case"bracket":return function(e,r,i){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],r):i[e]=[r]:i[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=n({arrayFormat:"none"},t)),i=Object.create(null);return"string"!=typeof e?i:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),n=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),r(decodeURIComponent(n),o,i)}),Object.keys(i).sort().reduce(function(e,t){var r=i[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(r):e[t]=r,e},Object.create(null))):i},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,i){return null===r?[o(t,e),"[",i,"]"].join(""):[o(t,e),"[",o(i,e),"]=",o(r,e)].join("")};case"bracket":return function(t,r){return null===r?o(t,e):[o(t,e),"[]=",o(r,e)].join("")};default:return function(t,r){return null===r?o(t,e):[o(t,e),"=",o(r,e)].join("")}}}(t=n({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(i){var n=e[i];if(void 0===n)return"";if(null===n)return o(i,t);if(Array.isArray(n)){var a=[];return n.slice().forEach(function(e){void 0!==e&&a.push(r(i,e,a.length))}),a.join("&")}return o(i,t)+"="+o(n,t)}).filter(function(e){return e.length>0}).join("&"):""}},614:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},615:function(e,t){e.exports=function(){if("undefined"!=typeof window&&null!==window){if("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)",window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}},636:function(e,t,r){"use strict";var i=r(25),n=r(75),o=r(14);e.exports=function(e){for(var t=i(this),r=o(t.length),a=arguments.length,s=n(a>1?arguments[1]:void 0,r),l=a>2?arguments[2]:void 0,u=void 0===l?r:n(l,r);u>s;)t[s++]=e;return t}}}]);
//# sourceMappingURL=2-686e91065a026f0313a7.js.map