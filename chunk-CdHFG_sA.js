import {F,Q}from'./chunk-fiIlMcvG.js';import {J as Jt,Y as Yt,Z as Zt,s as st$1,e as et$1}from'./chunk-DQCKzpgn.js';import {u,f}from'./chunk-Bujk-0x0.js';import {I,Z as ZI,c as cs,m as mr,A as A_,i as Vm,j as qI,$ as $x,W as WN,D as Dl,T as TR,U as Ug,k as UR,b as Ll,F as Fl,L as LN,V as V0,H as Hw,l as HR,a as FN,n as Lt,o as At,p as TC,r as H9,s as ey,B as BE,t as hw,u as eR,v as tR,K as Kw,f as Ia,w as kw,x as jl,z as zg,M as Mw,y as Aw,C as lt,E as mC,G as oC,J as Ct,N as Ce,P as xl,Q as pC,R as we,Y as G,O as Oe,_ as be,a0 as Qe,a1 as ht,a2 as ve,a3 as Xf,a4 as Ve,a5 as zl,a6 as nr,a7 as EC,a8 as va,a9 as Ot,aa as Sw,ab as VP,ac as zd,ad as Vo,ae as Us,af as Io,ag as JT,X as XN,ah as nS,g as gD,h as mD,ai as oR}from'./main-7NB2MTM5.js';import {O,I as Ie,P as Pe}from'./chunk-Cx06eo9s.js';import {i as ii,a as io,A as Ai,D as Di}from'./chunk-AfUAcuqU.js';var W=["*"],Ye=["content"],Ge=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],Ze=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function et(r,S){if(r&1){let e=WN();Dl(0,"div",1),Fl("click",function(){gD(e);let n=XN();return mD(n._onBackdropClicked())}),Ug();}if(r&2){let e=XN();jl("mat-drawer-shown",e._isShowingBackdrop());}}function tt(r,S){r&1&&(Dl(0,"mat-drawer-content"),tR(1,2),Ug());}function nt(r,S){if(r&1){let e=WN();Dl(0,"div",1),Fl("click",function(){gD(e);let n=XN();return mD(n._onBackdropClicked())}),Ug();}if(r&2){let e=XN();jl("mat-drawer-shown",e._isShowingBackdrop());}}function rt(r,S){r&1&&(Dl(0,"mat-sidenav-content"),tR(1,2),Ug());}var it=`.mat-drawer-container {
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
`;var at=new G("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),ae=new G("MAT_DRAWER_CONTAINER"),V=(()=>{class r extends Ie{_platform=I(Ct);_changeDetectorRef=I(zl);_element=I(lt);_ngZone=I(Ce);_isInert=false;_container=I(ie);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(nS(50),Ot(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_drawerModeChanged(){this._updateInert();}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(n){return (e||(e=BE(r)))(n||r)}})();static \u0275cmp=mr({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(kw("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),jl("mat-drawer-content-hidden",n._shouldBeHidden()));},features:[Kw([{provide:Ie,useExisting:r}]),hw],ngContentSelectors:W,decls:1,vars:0,template:function(t,n){t&1&&(eR(),tR(0));},encapsulation:2})}return r})(),re=(()=>{class r{_elementRef=I(lt);_focusTrapFactory=I(mC);_focusMonitor=I(oC);_platform=I(Ct);_ngZone=I(Ce);_renderer=I(xl);_interactivityChecker=I(pC);_doc=I(we);_container=I(ae,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged();}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=H9(e);}_disableClose=false;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=H9(e)),this._autoFocus=e;}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(H9(e));}_opened=Oe(false);_openedVia=null;_animationStarted=new be;_animationEnd=new be;openedChange=new Qe(true);_openedStream=this.openedChange.pipe(ht(e=>e),ve(()=>{}));openedStart=this._animationStarted.pipe(ht(()=>this.opened),Xf(void 0));_closedStream=this.openedChange.pipe(ht(e=>!e),ve(()=>{}));closedStart=this._animationStarted.pipe(ht(()=>!this.opened),Xf(void 0));_destroyed=new be;onPositionChanged=new Qe;_content;_modeChanged=new be;_injector=I(Ve);_changeDetectorRef=I(zl);constructor(){this.openedChange.pipe(nr(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return [e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!EC(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault();});}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let d=()=>{s(),$e(),n.removeAttribute("tabindex");},s=this._renderer.listen(n,"blur",d),$e=this._renderer.listen(n,"mousedown",d);})),n.focus(t));}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":va(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let e=this._doc.activeElement;return !!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(e){return this.toggle(true,e)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(Ot(1)).subscribe(s=>d(s?"open":"close"));}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor);}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(e);});};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=mr({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&Sw(Ye,5),t&2){let d;Mw(d=Aw())&&(n._content=d.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(Ia("align",null)("tabIndex",n.mode!=="side"?"-1":null),kw("visibility",!n._container&&!n.opened?"hidden":null),jl("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:W,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(eR(),Dl(0,"div",1,0),tR(2),Ug());},dependencies:[Ie],encapsulation:2})}return r})(),ie=(()=>{class r{_dir=I(VP,{optional:true});_element=I(lt);_ngZone=I(Ce);_changeDetectorRef=I(zl);_animationDisabled=zd();_transitionsEnabled=false;_allDrawers;_drawers=new Vo;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=H9(e);}_autosize=I(at);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:H9(e);}_backdropOverride=null;backdropClick=new Qe;_start=null;_end=null;_left=null;_right=null;_destroyed=new be;_doCheckSubject=new be;_contentMargins={left:null,right:null};_contentMarginChanges=new be;get scrollable(){return this._userContent||this._content}_injector=I(Ve);constructor(){let e=I(Ct),t=I(Pe);this._dir?.change.pipe(nr(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),t.change().pipe(nr(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(Us(this._allDrawers),nr(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(Us(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Io(10),nr(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(e=>e.open());}close(){this._drawers.forEach(e=>e.close());}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n;}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n;}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(e){e._animationStarted.pipe(nr(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),e.mode!=="side"&&e.openedChange.pipe(nr(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened));}_watchDrawerPosition(e){e.onPositionChanged.pipe(nr(this._drawers.changes)).subscribe(()=>{va({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(e){e._modeChanged.pipe(nr(JT(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=mr({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&zg(d,V,5)(d,re,5),t&2){let s;Mw(s=Aw())&&(n._content=s.first),Mw(s=Aw())&&(n._allDrawers=s);}},viewQuery:function(t,n){if(t&1&&Sw(V,5),t&2){let d;Mw(d=Aw())&&(n._userContent=d.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&jl("mat-drawer-container-explicit-backdrop",n._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Kw([{provide:ae,useExisting:r}])],ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(eR(Ge),LN(0,et,1,2,"div",0),tR(1),tR(2,1),LN(3,tt,2,0,"mat-drawer-content")),t&2&&(FN(n.hasBackdrop?0:-1),V0(3),FN(n._content?-1:3));},dependencies:[V],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return r})(),U=(()=>{class r extends V{static \u0275fac=(()=>{let e;return function(n){return (e||(e=BE(r)))(n||r)}})();static \u0275cmp=mr({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Kw([{provide:Ie,useExisting:r},{provide:V,useExisting:r}]),hw],ngContentSelectors:W,decls:1,vars:0,template:function(t,n){t&1&&(eR(),tR(0));},encapsulation:2})}return r})(),oe=(()=>{class r extends re{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=H9(e);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ey(e);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ey(e);}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=BE(r)))(n||r)}})();static \u0275cmp=mr({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(Ia("tabIndex",n.mode!=="side"?"-1":null)("align",null),kw("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),jl("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Kw([{provide:re,useExisting:r}]),hw],ngContentSelectors:W,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(eR(),Dl(0,"div",1,0),tR(2),Ug());},dependencies:[Ie],encapsulation:2})}return r})(),He=(()=>{class r extends ie{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=BE(r)))(n||r)}})();static \u0275cmp=mr({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&zg(d,U,5)(d,oe,5),t&2){let s;Mw(s=Aw())&&(n._content=s.first),Mw(s=Aw())&&(n._allDrawers=s);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&jl("mat-drawer-container-explicit-backdrop",n._backdropOverride);},exportAs:["matSidenavContainer"],features:[Kw([{provide:ae,useExisting:r},{provide:ie,useExisting:r}]),hw],ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(eR(Ge),LN(0,nt,1,2,"div",0),tR(1),tR(2,1),LN(3,rt,2,0,"mat-sidenav-content")),t&2&&(FN(n.hasBackdrop?0:-1),V0(3),FN(n._content?-1:3));},dependencies:[U],styles:[it],encapsulation:2})}return r})(),qe=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Lt({type:r});static \u0275inj=At({imports:[O,TC,O]})}return r})();function st(r,S){if(r&1){let e=WN();Dl(0,"button",25),Fl("click",function(){gD(e),XN();let n=oR(2);return mD(n.close())}),Dl(1,"mat-icon",9),TR(2,"manage_accounts"),Ug(),Dl(3,"span",10),TR(4,"Editar Usuarios"),Ug()();}}var Ke=class r{authService=I(ZI);router=I(cs);currentUser=this.authService.currentUser;onBotondUnoClick(){console.log("Bot\xF3n Uno clickeado");}onBotonDosClick(){console.log("Bot\xF3n Dos clickeado");}logout(){this.authService.logout(),this.router.navigate(["/auth"]);}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=mr({type:r,selectors:[["app-main-layout"]],decls:60,vars:5,consts:[["drawer",""],[1,"sidenav-container"],["mode","over","fixedInViewport","true",1,"sidenav"],[1,"drawer-header"],[1,"user-avatar"],[1,"user-info"],[1,"user-name"],[1,"user-role"],["mat-list-item","","routerLink","/main/dashboard",1,"btn1-spacer",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/main/add-customer",1,"btn1-spacer",3,"click"],["mat-list-item","","routerLink","/main/customers",1,"btn1-spacer",3,"click"],["mat-list-item","","routerLink","/main/users-edit",1,"btn-spacer"],["mat-list-item","",1,"btn-spacer",3,"click"],["mat-list-item","",1,"logout-item","btn-spacer",3,"click"],["matListItemIcon","","color","warn"],["matListItemTitle","",1,"logout-text"],[1,"sidenav-content"],[1,"main-toolbar","icon-btn"],["mat-icon-button","","aria-label","Abrir men\xFA",3,"click"],[1,"toolbar-title"],[1,"toolbar-spacer"],["mat-icon-button","","routerLink","/main/dashboard","aria-label","Ir al Dashboard / Home",1,"icon-btn"],[1,"page-container"],["mat-list-item","","routerLink","/main/users-edit",1,"btn-spacer",3,"click"]],template:function(e,t){if(e&1){let n=WN();Dl(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"div",4)(5,"mat-icon"),TR(6,"person"),Ug()(),Dl(7,"div",5)(8,"span",6),TR(9),Ug(),Dl(10,"span",7),TR(11),UR(12,"uppercase"),Ug()()(),Ll(13,"mat-divider"),Dl(14,"mat-nav-list")(15,"button",8),Fl("click",function(){gD(n);let s=oR(2);return mD(s.close())}),Dl(16,"mat-icon",9),TR(17,"dashboard"),Ug(),Dl(18,"span",10),TR(19,"Dashboard"),Ug()(),Dl(20,"button",11),Fl("click",function(){gD(n);let s=oR(2);return mD(s.close())}),Dl(21,"mat-icon",9),TR(22,"person_add"),Ug(),Dl(23,"span",10),TR(24,"Add Customer"),Ug()(),Dl(25,"button",12),Fl("click",function(){gD(n);let s=oR(2);return mD(s.close())}),Dl(26,"mat-icon",9),TR(27,"people"),Ug(),Dl(28,"span",10),TR(29,"Customers List"),Ug()(),LN(30,st,5,0,"button",13),Dl(31,"button",14),Fl("click",function(){gD(n);let s=oR(2);return t.onBotondUnoClick(),mD(s.close())}),Dl(32,"mat-icon",9),TR(33,"touch_app"),Ug(),Dl(34,"span",10),TR(35,"Bot\xF3n Uno"),Ug()(),Dl(36,"button",14),Fl("click",function(){gD(n);let s=oR(2);return t.onBotonDosClick(),mD(s.close())}),Dl(37,"mat-icon",9),TR(38,"smart_button"),Ug(),Dl(39,"span",10),TR(40,"Bot\xF3n Dos"),Ug()(),Ll(41,"mat-divider"),Dl(42,"button",15),Fl("click",function(){gD(n);let s=oR(2);return t.logout(),mD(s.close())}),Dl(43,"mat-icon",16),TR(44,"logout"),Ug(),Dl(45,"span",17),TR(46,"Cerrar Sesi\xF3n"),Ug()()()(),Dl(47,"mat-sidenav-content",18)(48,"mat-toolbar",19)(49,"button",20),Fl("click",function(){gD(n);let s=oR(2);return mD(s.toggle())}),Dl(50,"mat-icon"),TR(51,"menu"),Ug()(),Dl(52,"span",21),TR(53,"AppointTrack"),Ug(),Ll(54,"span",22),Dl(55,"button",23)(56,"mat-icon"),TR(57,"home"),Ug()()(),Dl(58,"main",24),Ll(59,"router-outlet"),Ug()()();}e&2&&(V0(9),Hw(t.currentUser()?.name||"Usuario"),V0(2),Hw(HR(12,3,t.currentUser()?.role)),V0(19),FN(t.currentUser()?.role=="admin"?30:-1));},dependencies:[A_,Vm,qI,qe,oe,He,U,F,Q,ii,io,Ai,Di,Jt,Yt,Zt,st$1,u,et$1,f,$x],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:100dvh;width:100vw;overflow:hidden}.sidenav-container[_ngcontent-%COMP%]{height:100%;width:100%;background-color:#fafafa}.sidenav[_ngcontent-%COMP%]{width:280px;background-color:#fff;display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]{padding:calc(1.5rem + env(safe-area-inset-top)) 1.25rem 1.25rem 1.25rem;background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;display:flex;align-items:center;gap:1rem}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#fff3;display:flex;align-items:center;justify-content:center}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem}.sidenav[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%]{font-size:.75rem;opacity:.8}.sidenav[_ngcontent-%COMP%]   .logout-item[_ngcontent-%COMP%]{margin-top:1rem}.sidenav[_ngcontent-%COMP%]   .logout-item[_ngcontent-%COMP%]   .logout-text[_ngcontent-%COMP%]{color:#dc2626;font-weight:600}.main-toolbar[_ngcontent-%COMP%]{background-color:#1e3a8a!important;color:#fff;padding-top:env(safe-area-inset-top);height:calc(56px + env(safe-area-inset-top));display:flex;align-items:center;box-shadow:0 2px 8px #0000001a}.main-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;margin-left:.5rem}.main-toolbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.page-container[_ngcontent-%COMP%]{flex:1;padding:1rem;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-bottom:calc(1rem + env(safe-area-inset-bottom))}.icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff!important}.btn-spacer[_ngcontent-%COMP%]{margin-top:3px;margin-bottom:3px}.btn1-spacer[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:3px}']})};export{Ke as MainLayoutComponent};