/*! For license information please see 407.45ee9022.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwindows_portfolio=self.webpackChunkwindows_portfolio||[]).push([[407],{8407:function(t,e,r){r.r(e),r.d(e,{default:function(){return D}});var n=r(2241),o=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),i=function(t){var e,r=[];for(t=[].concat(t);t.length;)"string"==typeof(e=t.pop())?r.unshift.apply(r,e.split("\n")):Array.isArray(e)?t.push.apply(t,e):(0,n.i)(t)||r.unshift(""+e);return r},a=function(t,e,r){var n,o=[].concat(e),i=o.length,a=t.font,l=0;for(t.font=r.string,n=0;n<i;++n)l=Math.max(t.measureText(o[n]).width,l);return t.font=a,{height:i*r.lineHeight,width:l}},l=function(t,e,r){return Math.max(t,Math.min(e,r))},s=function(t,e){var r,n,o,i,a=t.slice(),l=[];for(r=0,o=e.length;r<o;++r)i=e[r],-1===(n=a.indexOf(i))?l.push([i,1]):a.splice(n,1);for(r=0,o=a.length;r<o;++r)l.push([a[r],-1]);return l};function u(t,e){var r=e.x,n=e.y;if(null===r)return{x:0,y:-1};if(null===n)return{x:1,y:0};var o=t.x-r,i=t.y-n,a=Math.sqrt(o*o+i*i);return{x:a?o/a:0,y:a?i/a:-1}}var c=0,h=1,d=2,f=4,x=8;function y(t,e,r){var n=c;return t<r.left?n|=h:t>r.right&&(n|=d),e<r.top?n|=x:e>r.bottom&&(n|=f),n}function v(t,e){var r,n,o=e.anchor,i=t;return e.clamp&&(i=function(t,e){for(var r,n,o,i=t.x0,a=t.y0,l=t.x1,s=t.y1,u=y(i,a,e),c=y(l,s,e);u|c&&!(u&c);)(r=u||c)&x?(n=i+(l-i)*(e.top-a)/(s-a),o=e.top):r&f?(n=i+(l-i)*(e.bottom-a)/(s-a),o=e.bottom):r&d?(o=a+(s-a)*(e.right-i)/(l-i),n=e.right):r&h&&(o=a+(s-a)*(e.left-i)/(l-i),n=e.left),r===u?u=y(i=n,a=o,e):c=y(l=n,s=o,e);return{x0:i,x1:l,y0:a,y1:s}}(i,e.area)),"start"===o?(r=i.x0,n=i.y0):"end"===o?(r=i.x1,n=i.y1):(r=(i.x0+i.x1)/2,n=(i.y0+i.y1)/2),function(t,e,r,n,o){switch(o){case"center":r=n=0;break;case"bottom":r=0,n=1;break;case"right":r=1,n=0;break;case"left":r=-1,n=0;break;case"top":r=0,n=-1;break;case"start":r=-r,n=-n;break;case"end":break;default:o*=Math.PI/180,r=Math.cos(o),n=Math.sin(o)}return{x:t,y:e,vx:r,vy:n}}(r,n,t.vx,t.vy,e.align)}var _={arc:function(t,e){var r=(t.startAngle+t.endAngle)/2,n=Math.cos(r),o=Math.sin(r),i=t.innerRadius,a=t.outerRadius;return v({x0:t.x+n*i,y0:t.y+o*i,x1:t.x+n*a,y1:t.y+o*a,vx:n,vy:o},e)},point:function(t,e){var r=u(t,e.origin),n=r.x*t.options.radius,o=r.y*t.options.radius;return v({x0:t.x-n,y0:t.y-o,x1:t.x+n,y1:t.y+o,vx:r.x,vy:r.y},e)},bar:function(t,e){var r=u(t,e.origin),n=t.x,o=t.y,i=0,a=0;return t.horizontal?(n=Math.min(t.x,t.base),i=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),a=Math.abs(t.base-t.y)),v({x0:n,y0:o+a,x1:n+i,y1:o,vx:r.x,vy:r.y},e)},fallback:function(t,e){var r=u(t,e.origin);return v({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:r.x,vy:r.y},e)}},b=function(t){return Math.round(t*o)/o};function p(t,e){var r=e.chart.getDatasetMeta(e.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var n=r.getBasePixel();return t.horizontal?{x:n,y:null}:{x:null,y:n}}function g(t){return t instanceof n.A?_.arc:t instanceof n.P?_.point:t instanceof n.B?_.bar:_.fallback}function m(t,e,r){var n=r.backgroundColor,o=r.borderColor,i=r.borderWidth;!n&&(!o||!i)||(t.beginPath(),function(t,e,r,n,o,i){var a=Math.PI/2;if(i){var l=Math.min(i,o/2,n/2),s=e+l,u=r+l,c=e+n-l,h=r+o-l;t.moveTo(e,u),s<c&&u<h?(t.arc(s,u,l,-Math.PI,-a),t.arc(c,u,l,-a,0),t.arc(c,h,l,0,a),t.arc(s,h,l,a,Math.PI)):s<c?(t.moveTo(s,r),t.arc(c,u,l,-a,a),t.arc(s,u,l,a,Math.PI+a)):u<h?(t.arc(s,u,l,-Math.PI,0),t.arc(s,h,l,0,Math.PI)):t.arc(s,u,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(e,r)}else t.rect(e,r,n,o)}(t,b(e.x)+i/2,b(e.y)+i/2,b(e.w)-i,b(e.h)-i,r.borderRadius),t.closePath(),n&&(t.fillStyle=n,t.fill()),o&&i&&(t.strokeStyle=o,t.lineWidth=i,t.lineJoin="miter",t.stroke()))}function w(t,e,r){var n=t.shadowBlur,o=r.stroked,i=b(r.x),a=b(r.y),l=b(r.w);o&&t.strokeText(e,i,a,l),r.filled&&(n&&o&&(t.shadowBlur=0),t.fillText(e,i,a,l),n&&o&&(t.shadowBlur=n))}var k=function(t,e,r,n){var o=this;o._config=t,o._index=n,o._model=null,o._rects=null,o._ctx=e,o._el=r};(0,n.m)(k.prototype,{_modelize:function(t,e,r,o){var i=this,l=i._index,s=(0,n.t)((0,n.r)([r.font,{}],o,l)),u=(0,n.r)([r.color,n.d.color],o,l);return{align:(0,n.r)([r.align,"center"],o,l),anchor:(0,n.r)([r.anchor,"center"],o,l),area:o.chart.chartArea,backgroundColor:(0,n.r)([r.backgroundColor,null],o,l),borderColor:(0,n.r)([r.borderColor,null],o,l),borderRadius:(0,n.r)([r.borderRadius,0],o,l),borderWidth:(0,n.r)([r.borderWidth,0],o,l),clamp:(0,n.r)([r.clamp,!1],o,l),clip:(0,n.r)([r.clip,!1],o,l),color:u,display:t,font:s,lines:e,offset:(0,n.r)([r.offset,4],o,l),opacity:(0,n.r)([r.opacity,1],o,l),origin:p(i._el,o),padding:(0,n.a)((0,n.r)([r.padding,4],o,l)),positioner:g(i._el),rotation:(0,n.r)([r.rotation,0],o,l)*(Math.PI/180),size:a(i._ctx,e,s),textAlign:(0,n.r)([r.textAlign,"start"],o,l),textShadowBlur:(0,n.r)([r.textShadowBlur,0],o,l),textShadowColor:(0,n.r)([r.textShadowColor,u],o,l),textStrokeColor:(0,n.r)([r.textStrokeColor,u],o,l),textStrokeWidth:(0,n.r)([r.textStrokeWidth,0],o,l)}},update:function(t){var e,r,o,a=this,l=null,s=null,u=a._index,c=a._config,h=(0,n.r)([c.display,!0],t,u);h&&(e=t.dataset.data[u],r=(0,n.v)((0,n.c)(c.formatter,[e,t]),e),(o=(0,n.i)(r)?[]:i(r)).length&&(s=function(t){var e=t.borderWidth||0,r=t.padding,n=t.size.height,o=t.size.width,i=-o/2,a=-n/2;return{frame:{x:i-r.left-e,y:a-r.top-e,w:o+r.width+2*e,h:n+r.height+2*e},text:{x:i,y:a,w:o,h:n}}}(l=a._modelize(h,o,c,t)))),a._model=l,a._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var r,n=t.ctx,o=this._model,i=this._rects;this.visible()&&(n.save(),o.clip&&(r=o.area,n.beginPath(),n.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),n.clip()),n.globalAlpha=l(0,o.opacity,1),n.translate(b(e.x),b(e.y)),n.rotate(o.rotation),m(n,i.frame,o),function(t,e,r,n){var o,i=n.textAlign,a=n.color,l=!!a,s=n.font,u=e.length,c=n.textStrokeColor,h=n.textStrokeWidth,d=c&&h;if(u&&(l||d))for(r=function(t,e,r){var n=r.lineHeight,o=t.w,i=t.x;return"center"===e?i+=o/2:("end"===e||"right"===e)&&(i+=o),{h:n,w:o,x:i,y:t.y+n/2}}(r,i,s),t.font=s.string,t.textAlign=i,t.textBaseline="middle",t.shadowBlur=n.textShadowBlur,t.shadowColor=n.textShadowColor,l&&(t.fillStyle=a),d&&(t.lineJoin="round",t.lineWidth=h,t.strokeStyle=c),o=0,u=e.length;o<u;++o)w(t,e[o],{stroked:d,filled:l,w:r.w,x:r.x,y:r.y+r.h*o})}(n,o.lines,i.text,o),n.restore())}});var M=Number.MIN_SAFE_INTEGER||-9007199254740991,C=Number.MAX_SAFE_INTEGER||9007199254740991;function S(t,e,r){var n=Math.cos(r),o=Math.sin(r),i=e.x,a=e.y;return{x:i+n*(t.x-i)-o*(t.y-a),y:a+o*(t.x-i)+n*(t.y-a)}}function P(t,e){var r,n,o,i,a,l=C,s=M,u=e.origin;for(r=0;r<t.length;++r)o=(n=t[r]).x-u.x,i=n.y-u.y,a=e.vx*o+e.vy*i,l=Math.min(l,a),s=Math.max(s,a);return{min:l,max:s}}function I(t,e){var r=e.x-t.x,n=e.y-t.y,o=Math.sqrt(r*r+n*n);return{vx:(e.x-t.x)/o,vy:(e.y-t.y)/o,origin:t,ln:o}}var $=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function A(t,e,r){var n=e.positioner(t,e),o=n.vx,i=n.vy;if(!o&&!i)return{x:n.x,y:n.y};var a=r.w,l=r.h,s=e.rotation,u=Math.abs(a/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),c=Math.abs(a/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),h=1/Math.max(Math.abs(o),Math.abs(i));return u*=o*h,c*=i*h,u+=e.offset*o,c+=e.offset*i,{x:n.x+u,y:n.y+c}}(0,n.m)($.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,r){this._rotation=r,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this,r=e._rect;return!((t=S(t,e.center(),-e._rotation)).x<r.x-1||t.y<r.y-1||t.x>r.x+r.w+2||t.y>r.y+r.h+2)},intersects:function(t){var e,r,n,o=this._points(),i=t._points(),a=[I(o[0],o[1]),I(o[0],o[3])];for(this._rotation!==t._rotation&&a.push(I(i[0],i[1]),I(i[0],i[3])),e=0;e<a.length;++e)if(r=P(o,a[e]),n=P(i,a[e]),r.max<n.min||n.max<r.min)return!1;return!0},_points:function(){var t=this,e=t._rect,r=t._rotation,n=t.center();return[S({x:e.x,y:e.y},n,r),S({x:e.x+e.w,y:e.y},n,r),S({x:e.x+e.w,y:e.y+e.h},n,r),S({x:e.x,y:e.y+e.h},n,r)]}});var B={prepare:function(t){var e,r,n,o,i,a=[];for(e=0,n=t.length;e<n;++e)for(r=0,o=t[e].length;r<o;++r)i=t[e][r],a.push(i),i.$layout={_box:new $,_hidable:!1,_visible:!0,_set:e,_idx:i._index};return a.sort((function(t,e){var r=t.$layout,n=e.$layout;return r._idx===n._idx?n._set-r._set:n._idx-r._idx})),this.update(a),a},update:function(t){var e,r,n,o,i,a=!1;for(e=0,r=t.length;e<r;++e)o=(n=t[e]).model(),(i=n.$layout)._hidable=o&&"auto"===o.display,i._visible=n.visible(),a|=i._hidable;a&&function(t){var e,r,n,o,i,a,l;for(e=0,r=t.length;e<r;++e)(o=(n=t[e]).$layout)._visible&&(l=new Proxy(n._el,{get:function(t,e){return t.getProps([e],!0)[e]}}),i=n.geometry(),a=A(l,n.model(),i),o._box.update(a,i,n.rotation()));(function(t,e){var r,n,o,i;for(r=t.length-1;r>=0;--r)for(o=t[r].$layout,n=r-1;n>=0&&o._visible;--n)(i=t[n].$layout)._visible&&o._box.intersects(i._box)&&e(o,i)})(t,(function(t,e){var r=t._hidable,n=e._hidable;r&&n||n?e._visible=!1:r&&(t._visible=!1)}))}(t)},lookup:function(t,e){var r,n;for(r=t.length-1;r>=0;--r)if((n=t[r].$layout)&&n._visible&&n._box.contains(e))return t[r];return null},draw:function(t,e){var r,n,o,i,a,l;for(r=0,n=e.length;r<n;++r)(i=(o=e[r]).$layout)._visible&&(a=o.geometry(),l=A(o._el,o.model(),a),i._box.update(l,a,o.rotation()),o.draw(t,l))}},W="$datalabels",E="$default";function R(t,e,r,o){if(e){var i,a=r.$context,l=r.$groups;e[l._set]&&((i=e[l._set][l._key])&&!0===(0,n.c)(i,[a,o])&&(t[W]._dirty=!0,r.update(a)))}}function z(t,e){var r,n,o=t[W],i=o._listeners;if(i.enter||i.leave){if("mousemove"===e.type)n=B.lookup(o._labels,e);else if("mouseout"!==e.type)return;r=o._hovered,o._hovered=n,function(t,e,r,n,o){var i,a;!r&&!n||(r?n?r!==n&&(a=i=!0):a=!0:i=!0,a&&R(t,e.leave,r,o),i&&R(t,e.enter,n,o))}(t,i,r,n,e)}}var D={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,n.i)(t))return null;var e,r,o,i=t;if((0,n.b)(t))if((0,n.i)(t.label))if((0,n.i)(t.r))for(i="",o=0,r=(e=Object.keys(t)).length;o<r;++o)i+=(0!==o?", ":"")+e[o]+": "+t[e[o]];else i=t.r;else i=t.label;return""+i},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[W]={_actives:[]}},beforeUpdate:function(t){var e=t[W];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,r){var o,i,a,l,s,u,c,h,d=e.index,f=t[W],x=f._datasets[d]=[],y=t.isDatasetVisible(d),v=t.data.datasets[d],_=function(t,e){var r,o,i=t.datalabels,a={},l=[];return!1===i?null:(!0===i&&(i={}),e=(0,n.m)({},[e,i]),r=e.labels||{},o=Object.keys(r),delete e.labels,o.length?o.forEach((function(t){r[t]&&l.push((0,n.m)({},[e,r[t],{_key:t}]))})):l.push(e),a=l.reduce((function(t,e){return(0,n.e)(e.listeners||{},(function(r,n){t[n]=t[n]||{},t[n][e._key||E]=r})),delete e.listeners,t}),{}),{labels:l,listeners:a})}(v,r),b=e.meta.data||[],p=t.ctx;for(p.save(),o=0,a=b.length;o<a;++o)if((c=b[o])[W]=[],y&&c&&t.getDataVisibility(o)&&!c.skip)for(i=0,l=_.labels.length;i<l;++i)u=(s=_.labels[i])._key,(h=new k(s,p,c,o)).$groups={_set:d,_key:u||E},h.$context={active:!1,chart:t,dataIndex:o,dataset:v,datasetIndex:d},h.update(h.$context),c[W].push(h),x.push(h);p.restore(),(0,n.m)(f._listeners,_.listeners,{merger:function(t,r,n){r[t]=r[t]||{},r[t][e.index]=n[t],f._listened=!0}})},afterUpdate:function(t){t[W]._labels=B.prepare(t[W]._datasets)},afterDatasetsDraw:function(t){B.draw(t,t[W]._labels)},beforeEvent:function(t,e){if(t[W]._listened){var r=e.event;switch(r.type){case"mousemove":case"mouseout":z(t,r);break;case"click":!function(t,e){var r=t[W],n=r._listeners.click,o=n&&B.lookup(r._labels,e);o&&R(t,n,o,e)}(t,r)}}},afterEvent:function(t){var e,r,n,o,i,a,l,u=t[W],c=u._actives,h=u._actives=t.getActiveElements(),d=s(c,h);for(e=0,r=d.length;e<r;++e)if((i=d[e])[1])for(n=0,o=(l=i[0].element[W]||[]).length;n<o;++n)(a=l[n]).$context.active=1===i[1],a.update(a.$context);(u._dirty||d.length)&&(B.update(u._labels),t.render()),delete u._dirty}}}}]);
//# sourceMappingURL=407.45ee9022.chunk.js.map