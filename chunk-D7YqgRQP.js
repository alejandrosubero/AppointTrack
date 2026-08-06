import {F,Q}from'./chunk-BW5p9ktB.js';import {J as Jt,Y as Yt,Z as Zt,s as st$1,e as et$1}from'./chunk-Cdn5kbkn.js';import {u,f}from'./chunk-xST7VQdK.js';import {Z,S as SD,u as ut,G as G_,T as T0,k as ti,A as As,I as I0,_ as _S,n as nu,s as sT,b as bf,l as bT,f as av,p as pv,W as Wh,m as jS,K as Kh,h as hS,a as gC,N as Nv,o as IT,d as gS,y as yf,q as ia,v as ia$1,w as rg,x as ui,D as Dm,Q as Qy,z as kS,R as RS,B as mT,j as iv,C as wv,E as Iv,F as mv,H as FS,P as PS,e as NS,M as Mo,J as Ks,L as ks,U,O as Bt,V as _y,X as Gs,Y as Wt,$ as ue,g as go,a0 as Xe,a1 as an,a2 as ei,a3 as on,a4 as Vc,a5 as dt,a6 as qT,a7 as yb,a8 as Js,a9 as GI,aa as to,ab as yv,ac as cu,ad as nr,ae as Ua,af as gb,ag as ob,ah as eb,ai as ib}from'./main-F37FRNF4.js';import {O,I as Ie,P as Pe}from'./chunk-dRtgwL4Y.js';import {l as li,b as so,F as Fi,I as Ii}from'./chunk-DL7ub71C.js';var N=["*"],Ye=["content"],Ge=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],Ze=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function et(r,S){if(r&1){let e=_S();nu(0,"div",1),pv("click",function(){Wh(e);let t=NS();return Kh(t._onBackdropClicked())}),bf();}if(r&2){let e=NS();Iv("mat-drawer-shown",e._isShowingBackdrop());}}function tt(r,S){r&1&&(nu(0,"mat-drawer-content"),RS(1,2),bf());}function nt(r,S){if(r&1){let e=_S();nu(0,"div",1),pv("click",function(){Wh(e);let t=NS();return Kh(t._onBackdropClicked())}),bf();}if(r&2){let e=NS();Iv("mat-drawer-shown",e._isShowingBackdrop());}}function rt(r,S){r&1&&(nu(0,"mat-sidenav-content"),RS(1,2),bf());}var it=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var at=new ue("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),ae=new ue("MAT_DRAWER_CONTAINER"),V=(()=>{class r extends Ie{_platform=Z(U);_changeDetectorRef=Z(qT);_element=Z(Mo);_ngZone=Z(Bt);_isInert=false;_container=Z(ie);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(ib(50),to(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_drawerModeChanged(){this._updateInert();}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let n=this._element.nativeElement;this._isInert=e,e?n.setAttribute("inert","true"):n.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=(()=>{let e;return function(t){return (e||(e=Dm(r)))(t||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,t){n&2&&(wv("margin-left",t._container._contentMargins.left,"px")("margin-right",t._container._contentMargins.right,"px"),Iv("mat-drawer-content-hidden",t._shouldBeHidden()));},features:[mT([{provide:Ie,useExisting:r}]),Qy],ngContentSelectors:N,decls:1,vars:0,template:function(n,t){n&1&&(kS(),RS(0));},encapsulation:2})}return r})(),re=(()=>{class r{_elementRef=Z(Mo);_focusTrapFactory=Z(Ks);_focusMonitor=Z(ks);_platform=Z(U);_ngZone=Z(Bt);_renderer=Z(_y);_interactivityChecker=Z(Gs);_doc=Z(Wt);_container=Z(ae,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged();}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=rg(e);}_disableClose=false;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=rg(e)),this._autoFocus=e;}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(rg(e));}_opened=go(false);_openedVia=null;_animationStarted=new Xe;_animationEnd=new Xe;openedChange=new an(true);_openedStream=this.openedChange.pipe(ei(e=>e),on(()=>{}));openedStart=this._animationStarted.pipe(ei(()=>this.opened),Vc(void 0));_closedStream=this.openedChange.pipe(ei(e=>!e),on(()=>{}));closedStart=this._animationStarted.pipe(ei(()=>!this.opened),Vc(void 0));_destroyed=new Xe;onPositionChanged=new an;_content;_modeChanged=new Xe;_injector=Z(dt);_changeDetectorRef=Z(qT);constructor(){this.openedChange.pipe(yb(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return [e.listen(n,"keydown",t=>{t.keyCode===27&&!this.disableClose&&!Js(t)&&this._ngZone.run(()=>{this.close(),t.stopPropagation(),t.preventDefault();});}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(e,n){let t=this._elementRef.nativeElement.querySelector(e);t&&(this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let d=()=>{s(),$e(),t.removeAttribute("tabindex");},s=this._renderer.listen(t,"blur",d),$e=this._renderer.listen(t,"mousedown",d);})),t.focus(n));}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":GI(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let e=this._doc.activeElement;return !!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(e){return this.toggle(true,e)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let t=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),t}_setOpen(e,n,t){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(t),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(to(1)).subscribe(s=>d(s?"open":"close"));}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,t=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),t.insertBefore(this._anchor,n)),t.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor);}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(e);});};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=G_({type:r,selectors:[["mat-drawer"]],viewQuery:function(n,t){if(n&1&&yv(Ye,5),n&2){let d;FS(d=PS())&&(t._content=d.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,t){n&2&&(iv("align",null)("tabIndex",t.mode!=="side"?"-1":null),wv("visibility",!t._container&&!t.opened?"hidden":null),Iv("mat-drawer-end",t.position==="end")("mat-drawer-over",t.mode==="over")("mat-drawer-push",t.mode==="push")("mat-drawer-side",t.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:N,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,t){n&1&&(kS(),nu(0,"div",1,0),RS(2),bf());},dependencies:[Ie],encapsulation:2})}return r})(),ie=(()=>{class r{_dir=Z(cu,{optional:true});_element=Z(Mo);_ngZone=Z(Bt);_changeDetectorRef=Z(qT);_animationDisabled=nr();_transitionsEnabled=false;_allDrawers;_drawers=new Ua;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=rg(e);}_autosize=Z(at);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:rg(e);}_backdropOverride=null;backdropClick=new an;_start=null;_end=null;_left=null;_right=null;_destroyed=new Xe;_doCheckSubject=new Xe;_contentMargins={left:null,right:null};_contentMarginChanges=new Xe;get scrollable(){return this._userContent||this._content}_injector=Z(dt);constructor(){let e=Z(U),n=Z(Pe);this._dir?.change.pipe(yb(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),n.change().pipe(yb(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(gb(this._allDrawers),yb(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(gb(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ob(10),yb(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(e=>e.open());}close(){this._drawers.forEach(e=>e.close());}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let t=this._left._getWidth();e+=t,n-=t;}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let t=this._right._getWidth();n+=t,e-=t;}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(e){e._animationStarted.pipe(yb(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),e.mode!=="side"&&e.openedChange.pipe(yb(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened));}_watchDrawerPosition(e){e.onPositionChanged.pipe(yb(this._drawers.changes)).subscribe(()=>{GI({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(e){e._modeChanged.pipe(yb(eb(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(e){let n=this._element.nativeElement.classList,t="mat-drawer-container-has-open";e?n.add(t):n.remove(t);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=G_({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(n,t,d){if(n&1&&mv(d,V,5)(d,re,5),n&2){let s;FS(s=PS())&&(t._content=s.first),FS(s=PS())&&(t._allDrawers=s);}},viewQuery:function(n,t){if(n&1&&yv(V,5),n&2){let d;FS(d=PS())&&(t._userContent=d.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,t){n&2&&Iv("mat-drawer-container-explicit-backdrop",t._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[mT([{provide:ae,useExisting:r}])],ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,t){n&1&&(kS(Ge),hS(0,et,1,2,"div",0),RS(1),RS(2,1),hS(3,tt,2,0,"mat-drawer-content")),n&2&&(gS(t.hasBackdrop?0:-1),gC(3),gS(t._content?-1:3));},dependencies:[V],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return r})(),W=(()=>{class r extends V{static \u0275fac=(()=>{let e;return function(t){return (e||(e=Dm(r)))(t||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[mT([{provide:Ie,useExisting:r},{provide:V,useExisting:r}]),Qy],ngContentSelectors:N,decls:1,vars:0,template:function(n,t){n&1&&(kS(),RS(0));},encapsulation:2})}return r})(),oe=(()=>{class r extends re{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=rg(e);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ui(e);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ui(e);}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(t){return (e||(e=Dm(r)))(t||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,t){n&2&&(iv("tabIndex",t.mode!=="side"?"-1":null)("align",null),wv("top",t.fixedInViewport?t.fixedTopGap:null,"px")("bottom",t.fixedInViewport?t.fixedBottomGap:null,"px"),Iv("mat-drawer-end",t.position==="end")("mat-drawer-over",t.mode==="over")("mat-drawer-push",t.mode==="push")("mat-drawer-side",t.mode==="side")("mat-sidenav-fixed",t.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[mT([{provide:re,useExisting:r}]),Qy],ngContentSelectors:N,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,t){n&1&&(kS(),nu(0,"div",1,0),RS(2),bf());},dependencies:[Ie],encapsulation:2})}return r})(),He=(()=>{class r extends ie{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(t){return (e||(e=Dm(r)))(t||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(n,t,d){if(n&1&&mv(d,W,5)(d,oe,5),n&2){let s;FS(s=PS())&&(t._content=s.first),FS(s=PS())&&(t._allDrawers=s);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,t){n&2&&Iv("mat-drawer-container-explicit-backdrop",t._backdropOverride);},exportAs:["matSidenavContainer"],features:[mT([{provide:ae,useExisting:r},{provide:ie,useExisting:r}]),Qy],ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,t){n&1&&(kS(Ge),hS(0,nt,1,2,"div",0),RS(1),RS(2,1),hS(3,rt,2,0,"mat-sidenav-content")),n&2&&(gS(t.hasBackdrop?0:-1),gC(3),gS(t._content?-1:3));},dependencies:[W],styles:[it],encapsulation:2})}return r})(),qe=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=yf({type:r});static \u0275inj=ia({imports:[O,ia$1,O]})}return r})();function st(r,S){if(r&1){let e=_S();nu(0,"button",23),pv("click",function(){Wh(e),NS();let t=jS(2);return Kh(t.close())}),nu(1,"mat-icon",9),sT(2,"manage_accounts"),bf(),nu(3,"span",10),sT(4,"Editar Usuarios"),bf()(),nu(5,"button",24),pv("click",function(){Wh(e),NS();let t=jS(2);return Kh(t.close())}),nu(6,"mat-icon",9),sT(7,"upload_file"),bf(),nu(8,"span",10),sT(9,"Import Customers"),bf()();}}var Ke=class r{authService=Z(SD);router=Z(ut);currentUser=this.authService.currentUser;onBotondUnoClick(){console.log("Bot\xF3n Uno clickeado");}onBotonDosClick(){console.log("Bot\xF3n Dos clickeado");}logout(){this.authService.logout(),this.router.navigate(["/auth"]);}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=G_({type:r,selectors:[["app-main-layout"]],decls:50,vars:5,consts:[["drawer",""],[1,"sidenav-container"],["mode","over","fixedInViewport","true",1,"sidenav"],[1,"drawer-header"],[1,"user-avatar"],[1,"user-info"],[1,"user-name"],[1,"user-role"],["mat-list-item","","routerLink","/main/dashboard",1,"btn1-spacer",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/main/add-customer",1,"btn1-spacer",3,"click"],["mat-list-item","","routerLink","/main/customers",1,"btn1-spacer",3,"click"],["mat-list-item","",1,"logout-item","btn-spacer",3,"click"],["matListItemIcon","","color","warn"],["matListItemTitle","",1,"logout-text"],[1,"sidenav-content"],[1,"main-toolbar","icon-btn"],["mat-icon-button","","aria-label","Abrir men\xFA",3,"click"],[1,"toolbar-title"],[1,"toolbar-spacer"],["mat-icon-button","","routerLink","/main/dashboard","aria-label","Ir al Dashboard / Home",1,"icon-btn"],[1,"page-container"],["mat-list-item","","routerLink","/main/users-edit",1,"btn-spacer",3,"click"],["mat-list-item","","routerLink","/main/import-customers",1,"btn1-spacer",3,"click"]],template:function(e,n){if(e&1){let t=_S();nu(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"div",4)(5,"mat-icon"),sT(6,"person"),bf()(),nu(7,"div",5)(8,"span",6),sT(9),bf(),nu(10,"span",7),sT(11),bT(12,"uppercase"),bf()()(),av(13,"mat-divider"),nu(14,"mat-nav-list")(15,"button",8),pv("click",function(){Wh(t);let s=jS(2);return Kh(s.close())}),nu(16,"mat-icon",9),sT(17,"dashboard"),bf(),nu(18,"span",10),sT(19,"Dashboard"),bf()(),nu(20,"button",11),pv("click",function(){Wh(t);let s=jS(2);return Kh(s.close())}),nu(21,"mat-icon",9),sT(22,"person_add"),bf(),nu(23,"span",10),sT(24,"Add Customer"),bf()(),nu(25,"button",12),pv("click",function(){Wh(t);let s=jS(2);return Kh(s.close())}),nu(26,"mat-icon",9),sT(27,"people"),bf(),nu(28,"span",10),sT(29,"Customers List"),bf()(),hS(30,st,10,0),av(31,"mat-divider"),nu(32,"button",13),pv("click",function(){Wh(t);let s=jS(2);return n.logout(),Kh(s.close())}),nu(33,"mat-icon",14),sT(34,"logout"),bf(),nu(35,"span",15),sT(36,"Cerrar Sesi\xF3n"),bf()()()(),nu(37,"mat-sidenav-content",16)(38,"mat-toolbar",17)(39,"button",18),pv("click",function(){Wh(t);let s=jS(2);return Kh(s.toggle())}),nu(40,"mat-icon"),sT(41,"menu"),bf()(),nu(42,"span",19),sT(43,"AppointTrack"),bf(),av(44,"span",20),nu(45,"button",21)(46,"mat-icon"),sT(47,"home"),bf()()(),nu(48,"main",22),av(49,"router-outlet"),bf()()();}e&2&&(gC(9),Nv(n.currentUser()?.name||"Usuario"),gC(2),Nv(IT(12,3,n.currentUser()?.role)),gC(19),gS(n.currentUser()?.role=="admin"?30:-1));},dependencies:[T0,ti,As,qe,oe,He,W,F,Q,li,so,Fi,Ii,Jt,Yt,Zt,st$1,u,et$1,f,I0],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100dvh;width:100vw;overflow:hidden}.sidenav-container[_ngcontent-%COMP%]{height:100%;width:100%;background-color:#fafafa;padding-bottom:env(safe-area-inset-bottom)}.sidenav[_ngcontent-%COMP%]{width:280px;background-color:#fff;display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]{padding:calc(1.5rem + env(safe-area-inset-top)) 1.25rem 1.25rem 1.25rem;background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;display:flex;align-items:center;gap:1rem}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#fff3;display:flex;align-items:center;justify-content:center}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%]{font-size:.75rem;opacity:.8}.sidenav[_ngcontent-%COMP%]   .logout-item[_ngcontent-%COMP%]{margin-top:1rem}.sidenav[_ngcontent-%COMP%]   .logout-item[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%]{color:#dc2626;font-weight:600}.main-toolbar[_ngcontent-%COMP%]{background-color:#1e3a8a!important;color:#fff;padding-top:env(safe-area-inset-top);height:calc(56px + env(safe-area-inset-top));display:flex;align-items:center;box-shadow:0 2px 8px #0000001a}.main-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;margin-left:.5rem}.main-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.page-container[_ngcontent-%COMP%]{flex:1;padding:5px;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-bottom:calc(1rem + env(safe-area-inset-bottom))}.icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff!important}.btn-spacer[_ngcontent-%COMP%]{margin-top:3px;margin-bottom:3px}.btn1-spacer[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:3px}']})};export{Ke as MainLayoutComponent};