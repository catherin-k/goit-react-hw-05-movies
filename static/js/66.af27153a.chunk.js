"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[66],{6066:function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Ix:function(){return F},Am:function(){return G}});var r=n(885);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=n(907);var u=n(181);function l(e){return function(e){if(Array.isArray(e))return(0,c.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,u.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(2791);function f(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var p=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(o&&(o+=" "),o+=t);return o},m=["theme","type"],v=["delay","staleId"];function g(e){return"number"==typeof e&&!isNaN(e)}function y(e){return"boolean"==typeof e}function h(e){return"string"==typeof e}function T(e){return"function"==typeof e}function b(e){return h(e)||T(e)?e:null}function E(e){return 0===e||e}function O(e){return(0,d.isValidElement)(e)||h(e)||T(e)||g(e)}var _={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},C={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function I(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,f=e.isIn,p=r?t+"--"+a:t,m=r?n+"--"+a:n,v=(0,d.useRef)(),g=(0,d.useRef)(0);function y(e){if(e.target===l.current){var t=l.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function h(){var e=l.current;e.removeEventListener("animationend",h),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return(0,d.useLayoutEffect)((function(){!function(){var e=l.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,d.useEffect)((function(){f||(s?h():function(){g.current=1;var e=l.current;e.className+=" "+m,e.addEventListener("animationend",h)}())}),[f]),d.createElement(d.Fragment,null,o)}}function L(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,l([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},N=function(e){var t=e.theme,n=e.type,o=s(e,m);return d.createElement("svg",i({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))},w={info:function(e){return d.createElement(N,i({},e),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return d.createElement(N,i({},e),d.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return d.createElement(N,i({},e),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return d.createElement(N,i({},e),d.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return d.createElement("div",{className:"Toastify__spinner"})}};function R(e){var t=(0,d.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,d.useState)([]),a=(0,r.Z)(o,2),i=a[0],c=a[1],u=(0,d.useRef)(null),f=(0,d.useRef)(new Map).current,p=function(e){return-1!==i.indexOf(e)},m=(0,d.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:p,getToast:function(e){return f.get(e)}}).current;function _(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function C(e){c((function(t){return E(e)?t.filter((function(t){return t!==e})):[]}))}function I(){var e=m.queue.shift();R(e.toastContent,e.toastProps,e.staleId)}function N(e,t){var o=t.delay,r=t.staleId,a=s(t,v);if(O(e)&&!function(e){return!u.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||f.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,l=a.data,p=m.props,_=function(){return C(i)},N=null==c;N&&m.count++;var k,x,D={toastId:i,updateId:c,data:l,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||m.toastKey++,type:a.type,closeToast:_,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:b(a.className||p.toastClassName),bodyClassName:b(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:y(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:y(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:y(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:y(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:b(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(k=a.autoClose,x=p.autoClose,!1===k||g(k)&&k>0?k:x),hideProgressBar:y(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var e=L(f.get(i),"removed");f.delete(i),P.emit(4,e);var t=m.queue.length;if(m.count=E(i)?m.count-1:m.count-m.displayedToast,m.count<0&&(m.count=0),t>0){var o=E(i)?1:m.props.limit;if(1===t||1===o)m.displayedToast++,I();else{var r=o>t?t:o;m.displayedToast=r;for(var a=0;a<r;a++)I()}}else n()}};D.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(T(r)?a=r(i):(0,d.isValidElement)(r)?a=(0,d.cloneElement)(r,i):h(r)||g(r)?a=r:o?a=w.spinner():function(e){return e in w}(n)&&(a=w[n](i))),a}(D),T(a.onOpen)&&(D.onOpen=a.onOpen),T(a.onClose)&&(D.onClose=a.onClose),D.closeButton=p.closeButton,!1===a.closeButton||O(a.closeButton)?D.closeButton=a.closeButton:!0===a.closeButton&&(D.closeButton=!O(p.closeButton)||p.closeButton);var A=e;(0,d.isValidElement)(e)&&!h(e.type)?A=(0,d.cloneElement)(e,{closeToast:_,toastProps:D,data:l}):T(e)&&(A=e({closeToast:_,toastProps:D,data:l})),p.limit&&p.limit>0&&m.count>p.limit&&N?m.queue.push({toastContent:A,toastProps:D,staleId:r}):g(o)?setTimeout((function(){R(A,D,r)}),o):R(A,D,r)}}function R(e,t,n){var o=t.toastId;n&&f.delete(n);var r={content:e,props:t};f.set(o,r),c((function(e){return[].concat(l(e),[o]).filter((function(e){return e!==n}))})),P.emit(4,L(r,null==r.props.updateId?"added":"updated"))}return(0,d.useEffect)((function(){return m.containerId=e.containerId,P.cancelEmit(3).on(0,N).on(1,(function(e){return u.current&&C(e)})).on(5,_).emit(2,m),function(){return P.emit(3,m)}}),[]),(0,d.useEffect)((function(){m.props=e,m.isToastActive=p,m.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:p}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function D(e){var t=(0,d.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,d.useState)(!1),s=(0,r.Z)(i,2),c=s[0],u=s[1],l=(0,d.useRef)(null),f=(0,d.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,d.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=l.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=k(t.nativeEvent),f.y=x(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?_():O()}}function O(){a(!0)}function _(){a(!1)}function C(t){var n=l.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=k(t),f.y=x(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=l.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,d.useEffect)((function(){p.current=e})),(0,d.useEffect)((function(){return l.current&&l.current.addEventListener("d",O,{once:!0}),T(e.onOpen)&&e.onOpen((0,d.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,d.isValidElement)(e.children)&&e.children.props)}}),[]),(0,d.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",O),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(L.onMouseEnter=_,L.onMouseLeave=O),h&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:O,pauseToast:_,isRunning:o,preventExitTransition:c,toastRef:l,eventHandlers:L}}function A(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return d.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},d.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},d.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,s=e.hide,c=e.className,u=e.style,l=e.controlledProgress,f=e.progress,m=e.rtl,v=e.isIn,g=e.theme,y=i(i({},u),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});l&&(y.transform="scaleX("+f+")");var h=p("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+a,{"Toastify__progress-bar--rtl":m}),b=T(c)?c({rtl:m,type:a,defaultClassName:h}):p(h,c);return d.createElement("div",o({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:b,style:y},l&&f>=1?"onTransitionEnd":"onAnimationEnd",l&&f<1?null:function(){v&&r()}))}S.defaultProps={type:C.DEFAULT,hide:!1};var B=function(e){var t=D(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,f=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,h=e.className,b=e.style,E=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,I=e.updateId,L=e.role,P=e.progress,N=e.rtl,w=e.toastId,R=e.deleteToast,k=e.isIn,x=e.isLoading,B=e.iconOut,M=e.theme,F=p("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+f,{"Toastify__toast--rtl":N}),j=T(h)?h({rtl:N,position:y,type:f,defaultClassName:F}):p(F,h),z=!!P,H={closeToast:v,type:f,theme:M},q=null;return!1===s||(q=T(s)?s(H):d.isValidElement(s)?d.cloneElement(s,H):A(H)),d.createElement(g,{isIn:k,done:R,position:y,preventExitTransition:o,nodeRef:r},d.createElement("div",i(i({id:w,onClick:l,className:j},a),{},{style:b,ref:r}),d.createElement("div",i(i({},k&&{role:L}),{},{className:T(E)?E({type:f}):p("Toastify__toast-body",E),style:O}),null!=B&&d.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!x})},B),d.createElement("div",null,c)),q,(u||z)&&d.createElement(S,i(i({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:N,theme:M,delay:u,isRunning:n,isIn:k,closeToast:v,hide:m,type:f,style:C,className:_,controlledProgress:z,progress:P}))))},M=I({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),F=(I({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),I({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),I({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,d.forwardRef)((function(e,t){var n=R(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function f(e){var t=p("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":u});return T(s)?s({position:e,rtl:u,defaultClassName:t}):p(t,b(s))}return(0,d.useEffect)((function(){t&&(t.current=r.current)}),[]),d.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?i({},c):i(i({},c),{},{pointerEvents:"none"});return d.createElement("div",{className:f(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return d.createElement(B,i(i({},r),{},{isIn:a(r.toastId),style:i(i({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+r.key}),o)})))})))})));F.displayName="ToastContainer",F.defaultProps={position:_.TOP_RIGHT,transition:M,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,z=new Map,H=[];function q(){return Math.random().toString(36).substring(2,9)}function U(e){return e&&(h(e.toastId)||g(e.toastId))?e.toastId:q()}function Q(e,t){return z.size>0?P.emit(0,e,t):H.push({content:e,options:t}),t.toastId}function V(e,t){return i(i({},t),{},{type:t&&t.type||e,toastId:U(t)})}function Z(e){return function(t,n){return Q(t,V(e,n))}}function G(e,t){return Q(e,V(C.DEFAULT,t))}G.loading=function(e,t){return Q(e,V(C.DEFAULT,i({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var o,r=t.pending,a=t.error,s=t.success;r&&(o=h(r)?G.loading(r,n):G.loading(r.render,i(i({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var a=i(i(i({type:e},c),n),{},{data:r}),s=h(t)?{render:t}:t;return o?G.update(o,i(i({},a),s)):G(s.render,i(i({},a),s)),r}G.dismiss(o)},l=T(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},G.success=Z(C.SUCCESS),G.info=Z(C.INFO),G.error=Z(C.ERROR),G.warning=Z(C.WARNING),G.warn=G.warning,G.dark=function(e,t){return Q(e,V(C.DEFAULT,i({theme:"dark"},t)))},G.dismiss=function(e){return P.emit(1,e)},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},G.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||j);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=i(i(i({},o),t),{},{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,Q(s,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},G.POSITION=_,G.TYPE=C,P.on(2,(function(e){j=e.containerId||e,z.set(j,e),H.forEach((function(e){P.emit(0,e.content,e.options)})),H=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&P.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=66.af27153a.chunk.js.map