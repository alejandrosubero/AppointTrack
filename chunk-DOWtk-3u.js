import {F,Q}from'./chunk-D2yvwtOs.js';import {J as Jt,Y as Yt,Z as Zt,s as st$1,e as et$1}from'./chunk-DBxoSHJ9.js';import {u,f}from'./chunk-ClG-DjZS.js';import {Z as Z$1,S as SD,d as dt$1,G as G_,T as T0,l as si,U as Us,I as I0,_ as _S,n as nu,s as sT,b as bf,m as bT,i as av,p as pv,W as Wh,o as jS,K as Kh,h as hS,a as gC,N as Nv,q as IT,e as gS,u as Uo,g as go,v as ei,w as le,C as Ce,y as yf,x as ia,z as pa,L as Lg,A as gi,D as Dm,Q as Qy,B as kS,R as RS,E as mT,k as iv,F as wv,H as Iv,J as mv,M as FS,P as PS,f as NS,O as Mo,V as ia$1,X as Gs,Y as U$1,$ as Bt,a0 as _y,a1 as na,a2 as Wt,a3 as ue,a4 as Xe$1,a5 as an,a6 as on,a7 as Vc,a8 as dt$2,a9 as qT,aa as yb,ab as ca,ac as GI,ad as to,ae as yv,af as yu,ag as cr,ah as Ua,ai as gb,aj as ob,ak as eb,al as ib}from'./main-MHYAZKAM.js';import {O,I as Ie,P as Pe}from'./chunk-BSkcp9ok.js';import {l as li,b as so,F as Fi,I as Ii}from'./chunk-D2U958ZF.js';var H=["*"],rt=["content"],$e=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],Ye=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function it(r,l){if(r&1){let e=_S();nu(0,"div",1),pv("click",function(){Wh(e);let n=NS();return Kh(n._onBackdropClicked())}),bf();}if(r&2){let e=NS();Iv("mat-drawer-shown",e._isShowingBackdrop());}}function ot(r,l){r&1&&(nu(0,"mat-drawer-content"),RS(1,2),bf());}function at(r,l){if(r&1){let e=_S();nu(0,"div",1),pv("click",function(){Wh(e);let n=NS();return Kh(n._onBackdropClicked())}),bf();}if(r&2){let e=NS();Iv("mat-drawer-shown",e._isShowingBackdrop());}}function st(r,l){r&1&&(nu(0,"mat-sidenav-content"),RS(1,2),bf());}var dt=`.mat-drawer-container {
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
`;var ct=new ue("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),de=new ue("MAT_DRAWER_CONTAINER"),V=(()=>{class r extends Ie{_platform=Z$1(U$1);_changeDetectorRef=Z$1(qT);_element=Z$1(Mo);_ngZone=Z$1(Bt);_isInert=false;_container=Z$1(se);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(ib(50),to(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_drawerModeChanged(){this._updateInert();}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(n){return (e||(e=Dm(r)))(n||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(wv("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),Iv("mat-drawer-content-hidden",n._shouldBeHidden()));},features:[mT([{provide:Ie,useExisting:r}]),Qy],ngContentSelectors:H,decls:1,vars:0,template:function(t,n){t&1&&(kS(),RS(0));},encapsulation:2})}return r})(),ae=(()=>{class r{_elementRef=Z$1(Mo);_focusTrapFactory=Z$1(ia$1);_focusMonitor=Z$1(Gs);_platform=Z$1(U$1);_ngZone=Z$1(Bt);_renderer=Z$1(_y);_interactivityChecker=Z$1(na);_doc=Z$1(Wt);_container=Z$1(de,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged();}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Lg(e);}_disableClose=false;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Lg(e)),this._autoFocus=e;}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Lg(e));}_opened=go(false);_openedVia=null;_animationStarted=new Xe$1;_animationEnd=new Xe$1;openedChange=new an(true);_openedStream=this.openedChange.pipe(ei(e=>e),on(()=>{}));openedStart=this._animationStarted.pipe(ei(()=>this.opened),Vc(void 0));_closedStream=this.openedChange.pipe(ei(e=>!e),on(()=>{}));closedStart=this._animationStarted.pipe(ei(()=>!this.opened),Vc(void 0));_destroyed=new Xe$1;onPositionChanged=new an;_content;_modeChanged=new Xe$1;_injector=Z$1(dt$2);_changeDetectorRef=Z$1(qT);constructor(){this.openedChange.pipe(yb(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return [e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!ca(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault();});}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let c=()=>{d(),tt(),n.removeAttribute("tabindex");},d=this._renderer.listen(n,"blur",c),tt=this._renderer.listen(n,"mousedown",c);})),n.focus(t));}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":GI(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let e=this._doc.activeElement;return !!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(e){return this.toggle(true,e)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(c=>{this.openedChange.pipe(to(1)).subscribe(d=>c(d?"open":"close"));}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor);}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(e);});};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=G_({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&yv(rt,5),t&2){let c;FS(c=PS())&&(n._content=c.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(iv("align",null)("tabIndex",n.mode!=="side"?"-1":null),wv("visibility",!n._container&&!n.opened?"hidden":null),Iv("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:H,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(kS(),nu(0,"div",1,0),RS(2),bf());},dependencies:[Ie],encapsulation:2})}return r})(),se=(()=>{class r{_dir=Z$1(yu,{optional:true});_element=Z$1(Mo);_ngZone=Z$1(Bt);_changeDetectorRef=Z$1(qT);_animationDisabled=cr();_transitionsEnabled=false;_allDrawers;_drawers=new Ua;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Lg(e);}_autosize=Z$1(ct);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Lg(e);}_backdropOverride=null;backdropClick=new an;_start=null;_end=null;_left=null;_right=null;_destroyed=new Xe$1;_doCheckSubject=new Xe$1;_contentMargins={left:null,right:null};_contentMarginChanges=new Xe$1;get scrollable(){return this._userContent||this._content}_injector=Z$1(dt$2);constructor(){let e=Z$1(U$1),t=Z$1(Pe);this._dir?.change.pipe(yb(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),t.change().pipe(yb(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(gb(this._allDrawers),yb(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(gb(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ob(10),yb(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(e=>e.open());}close(){this._drawers.forEach(e=>e.close());}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n;}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n;}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(e){e._animationStarted.pipe(yb(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),e.mode!=="side"&&e.openedChange.pipe(yb(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened));}_watchDrawerPosition(e){e.onPositionChanged.pipe(yb(this._drawers.changes)).subscribe(()=>{GI({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(e){e._modeChanged.pipe(yb(eb(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=G_({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,c){if(t&1&&mv(c,V,5)(c,ae,5),t&2){let d;FS(d=PS())&&(n._content=d.first),FS(d=PS())&&(n._allDrawers=d);}},viewQuery:function(t,n){if(t&1&&yv(V,5),t&2){let c;FS(c=PS())&&(n._userContent=c.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&Iv("mat-drawer-container-explicit-backdrop",n._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[mT([{provide:de,useExisting:r}])],ngContentSelectors:Ye,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(kS($e),hS(0,it,1,2,"div",0),RS(1),RS(2,1),hS(3,ot,2,0,"mat-drawer-content")),t&2&&(gS(n.hasBackdrop?0:-1),gC(3),gS(n._content?-1:3));},dependencies:[V],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return r})(),U=(()=>{class r extends V{static \u0275fac=(()=>{let e;return function(n){return (e||(e=Dm(r)))(n||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[mT([{provide:Ie,useExisting:r},{provide:V,useExisting:r}]),Qy],ngContentSelectors:H,decls:1,vars:0,template:function(t,n){t&1&&(kS(),RS(0));},encapsulation:2})}return r})(),ce=(()=>{class r extends ae{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Lg(e);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=gi(e);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=gi(e);}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=Dm(r)))(n||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(iv("tabIndex",n.mode!=="side"?"-1":null)("align",null),wv("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),Iv("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[mT([{provide:ae,useExisting:r}]),Qy],ngContentSelectors:H,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(kS(),nu(0,"div",1,0),RS(2),bf());},dependencies:[Ie],encapsulation:2})}return r})(),Je=(()=>{class r extends se{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=Dm(r)))(n||r)}})();static \u0275cmp=G_({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,c){if(t&1&&mv(c,U,5)(c,ce,5),t&2){let d;FS(d=PS())&&(n._content=d.first),FS(d=PS())&&(n._allDrawers=d);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&Iv("mat-drawer-container-explicit-backdrop",n._backdropOverride);},exportAs:["matSidenavContainer"],features:[mT([{provide:de,useExisting:r},{provide:se,useExisting:r}]),Qy],ngContentSelectors:Ye,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(kS($e),hS(0,at,1,2,"div",0),RS(1),RS(2,1),hS(3,st,2,0,"mat-sidenav-content")),t&2&&(gS(n.hasBackdrop?0:-1),gC(3),gS(n._content?-1:3));},dependencies:[U],styles:[dt],encapsulation:2})}return r})(),Xe=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=yf({type:r});static \u0275inj=ia({imports:[O,pa,O]})}return r})();var Z=class r{http=Z$1(Uo);router=Z$1(dt$1);currentVersion=go("v1.0.0");STORAGE_KEY="app_version";VERSION_URL="version.json";constructor(){this.checkVersionFromServer(),this.router.events.pipe(ei(l=>l instanceof le)).subscribe(()=>{this.checkVersionFromServer();});}checkVersionFromServer(){let l=`${this.VERSION_URL}?t=${new Date().getTime()}`;this.http.get(l).subscribe({next:e=>{if(e&&e.version){let t=e.version.startsWith("v")?e.version:`v${e.version}`;this.currentVersion.set(t),this.verifyAndReload(t);}},error:e=>console.warn("Could not check version from server",e)});}verifyAndReload(l){let e=localStorage.getItem(this.STORAGE_KEY);if(!e){localStorage.setItem(this.STORAGE_KEY,l);return}e!==l&&(console.log(`Nueva versi\xF3n en servidor (${l}). Recargando...`),localStorage.setItem(this.STORAGE_KEY,l),window.location.reload());}static \u0275fac=function(e){return new(e||r)};static \u0275prov=Ce({token:r,factory:r.\u0275fac,providedIn:"root"})};function mt(r,l){if(r&1){let e=_S();nu(0,"button",29),pv("click",function(){Wh(e),NS();let n=jS(2);return Kh(n.close())}),nu(1,"mat-icon",9),sT(2,"manage_accounts"),bf(),nu(3,"span",10),sT(4,"Editar Usuarios"),bf()(),nu(5,"button",30),pv("click",function(){Wh(e),NS();let n=jS(2);return Kh(n.close())}),nu(6,"mat-icon",9),sT(7,"upload_file"),bf(),nu(8,"span",10),sT(9,"Import Customers"),bf()(),nu(10,"button",31),pv("click",function(){Wh(e),NS();let n=jS(2);return Kh(n.close())}),nu(11,"mat-icon",9),sT(12,"backup"),bf(),nu(13,"span",10),sT(14,"Backup"),bf()();}}var et=class r{authService=Z$1(SD);router=Z$1(dt$1);versionService=Z$1(Z);currentUser=this.authService.currentUser;appVersion=this.versionService.currentVersion;onBotondUnoClick(){console.log("Bot\xF3n Uno clickeado");}onBotonDosClick(){console.log("Bot\xF3n Dos clickeado");}logout(){this.authService.logout(),this.router.navigate(["/auth"]);}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=G_({type:r,selectors:[["app-main-layout"]],decls:59,vars:6,consts:[["drawer",""],[1,"sidenav-container"],["mode","over","fixedInViewport","true",1,"sidenav"],[1,"drawer-header"],[1,"user-avatar"],[1,"user-info"],[1,"user-name"],[1,"user-role"],["mat-list-item","","routerLink","/main/dashboard",1,"btn1-spacer",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/main/add-customer",1,"btn1-spacer",3,"click"],["mat-list-item","","routerLink","/main/customers",1,"btn1-spacer",3,"click"],["mat-list-item","",1,"logout-item","btn-spacer",3,"click"],["matListItemIcon","","color","warn"],["matListItemTitle","",1,"logout-text"],[1,"drawer-footer"],[1,"version-card"],[1,"version-header"],[1,"version-icon"],[1,"app-name"],[1,"version-number"],[1,"sidenav-content"],[1,"main-toolbar","icon-btn"],["mat-icon-button","","aria-label","Abrir men\xFA",3,"click"],[1,"toolbar-title"],[1,"toolbar-spacer"],["mat-icon-button","","routerLink","/main/dashboard","aria-label","Ir al Dashboard / Home",1,"icon-btn"],[1,"page-container"],["mat-list-item","","routerLink","/main/users-edit",1,"btn-spacer",3,"click"],["mat-list-item","","routerLink","/main/import-customers",1,"btn1-spacer",3,"click"],["mat-list-item","","routerLink","/main/backup",1,"btn1-spacer",3,"click"]],template:function(e,t){if(e&1){let n=_S();nu(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"div",4)(5,"mat-icon"),sT(6,"person"),bf()(),nu(7,"div",5)(8,"span",6),sT(9),bf(),nu(10,"span",7),sT(11),bT(12,"uppercase"),bf()()(),av(13,"mat-divider"),nu(14,"mat-nav-list")(15,"button",8),pv("click",function(){Wh(n);let d=jS(2);return Kh(d.close())}),nu(16,"mat-icon",9),sT(17,"dashboard"),bf(),nu(18,"span",10),sT(19,"Dashboard"),bf()(),nu(20,"button",11),pv("click",function(){Wh(n);let d=jS(2);return Kh(d.close())}),nu(21,"mat-icon",9),sT(22,"person_add"),bf(),nu(23,"span",10),sT(24,"Add Customer"),bf()(),nu(25,"button",12),pv("click",function(){Wh(n);let d=jS(2);return Kh(d.close())}),nu(26,"mat-icon",9),sT(27,"people"),bf(),nu(28,"span",10),sT(29,"Customers List"),bf()(),hS(30,mt,15,0),av(31,"mat-divider"),nu(32,"button",13),pv("click",function(){Wh(n);let d=jS(2);return t.logout(),Kh(d.close())}),nu(33,"mat-icon",14),sT(34,"logout"),bf(),nu(35,"span",15),sT(36,"Cerrar Sesi\xF3n"),bf()()(),nu(37,"div",16)(38,"div",17)(39,"div",18)(40,"mat-icon",19),sT(41,"info"),bf(),nu(42,"span",20),sT(43,"AppointTrack"),bf()(),nu(44,"span",21),sT(45),bf()()()(),nu(46,"mat-sidenav-content",22)(47,"mat-toolbar",23)(48,"button",24),pv("click",function(){Wh(n);let d=jS(2);return Kh(d.toggle())}),nu(49,"mat-icon"),sT(50,"menu"),bf()(),nu(51,"span",25),sT(52,"AppointTrack"),bf(),av(53,"span",26),nu(54,"button",27)(55,"mat-icon"),sT(56,"home"),bf()()(),nu(57,"main",28),av(58,"router-outlet"),bf()()();}e&2&&(gC(9),Nv(t.currentUser()?.name||"Usuario"),gC(2),Nv(IT(12,4,t.currentUser()?.role)),gC(19),gS(t.currentUser()?.role=="admin"?30:-1),gC(15),Nv(t.appVersion()));},dependencies:[T0,si,Us,Xe,ce,Je,U,F,Q,li,so,Fi,Ii,Jt,Yt,Zt,st$1,u,et$1,f,I0],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100dvh;width:100vw;overflow:hidden}.sidenav-container[_ngcontent-%COMP%]{height:100%;width:100%;background-color:#fafafa;padding-bottom:env(safe-area-inset-bottom)}.sidenav[_ngcontent-%COMP%]{width:280px;background-color:#fff;display:flex!important;flex-direction:column!important;height:100%}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]{flex-shrink:0;padding:calc(1.5rem + env(safe-area-inset-top)) 1.25rem 1.25rem 1.25rem;background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;display:flex;align-items:center;gap:1rem}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#fff3;display:flex;align-items:center;justify-content:center}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%]{font-size:.75rem;opacity:.8}.sidenav[_ngcontent-%COMP%]   .drawer-body[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch}.sidenav[_ngcontent-%COMP%]   .logout-item[_ngcontent-%COMP%]{margin-top:.5rem}.sidenav[_ngcontent-%COMP%]   .logout-item[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%]{color:#dc2626;font-weight:600}.sidenav[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]{flex-shrink:0;padding:1rem;background-color:#f8fafc;border-top:1px solid #E2E8F0;padding-bottom:calc(1rem + env(safe-area-inset-bottom))}.sidenav[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .version-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:.65rem .85rem;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 3px #0000000d}.sidenav[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .version-card[_ngcontent-%COMP%]   .version-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem}.sidenav[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .version-card[_ngcontent-%COMP%]   .version-header[_ngcontent-%COMP%]   .version-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#2563eb}.sidenav[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .version-card[_ngcontent-%COMP%]   .version-header[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:#1e293b}.sidenav[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .version-card[_ngcontent-%COMP%]   .version-number[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;background-color:#eff6ff;color:#1d4ed8;padding:2px 8px;border-radius:12px}.main-toolbar[_ngcontent-%COMP%]{background-color:#1e3a8a!important;color:#fff;padding-top:env(safe-area-inset-top);height:calc(56px + env(safe-area-inset-top));display:flex;align-items:center;box-shadow:0 2px 8px #0000001a}.main-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;margin-left:.5rem}.main-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.page-container[_ngcontent-%COMP%]{flex:1;padding:5px;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-bottom:calc(1rem + env(safe-area-inset-bottom))}.icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff!important}.btn-spacer[_ngcontent-%COMP%]{margin-top:3px;margin-bottom:3px}.btn1-spacer[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:3px}']})};export{et as MainLayoutComponent};