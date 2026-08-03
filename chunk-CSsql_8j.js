import {H as H$1}from'./chunk-CQ9OY4mC.js';import {d as dt,o as ot,r as rt$1}from'./chunk-Cnq5xu35.js';import {C as Ct$1}from'./chunk-CAofGSQy.js';import {F}from'./chunk-CfHQrfRw.js';import {P as Pt,L as Lt,r}from'./chunk-vps2YatM.js';import {I,O as Oe,aj as Gu,ak as Bl,m as mr,A as A_,al as J,D as Dl,F as Fl,b as Ll,U as Ug,T as TR,V as V0,d as Dw,q as qg,H as Hw,Z as ZI,am as he,n as Lt$1,o as At,p as TC,an as Yr,Y as G,_ as be$1,ao as Jo,ap as SZ,aq as fr,ar as vr,u as eR,as as mw,K as Kw,f as Ia$1,aa as Sw,M as Mw,y as Aw,z as zg,at as Ui,C as lt,a5 as zl,N as Ce,au as Ye,ac as zd,ad as Vo,a0 as Qe,J as Ct,av as ay,ae as Us,ag as JT,aw as yP,ax as yZ,ay as S3,az as BN,L as LN,aA as vw,aB as HN,a as FN,x as jl,aC as gR,w as kw,c as cs,aD as _3,j as qI,aE as Gx,W as WN,k as UR,aF as VR,aG as wt,aH as UN,B as BE,aI as M6,t as hw,v as tR,ab as VP,a4 as Ve,P as xl,a8 as va$1,aJ as gw,aK as U,aL as NZ,a7 as EC,G as oC,aM as Vl,aN as p,ai as oR,aO as LP,X as XN,g as gD,h as mD,aP as me$1,af as Io,a6 as nr,aQ as sy,aR as ot$1,aS as Vt,aT as de,aU as js,a1 as ht,aV as Ps,aW as _u,aX as Vw,aY as $w,aZ as db}from'./main-RQQ34KRX.js';import {D,f as fe,r as re$1,p as pe$1}from'./chunk-B16IWo5A.js';import {I as Ie,O,P as Pe}from'./chunk-BuP7jIJx.js';import {g}from'./chunk-Cl58bwmN.js';import {N,k,H,z,B,E,S,G as G$1}from'./chunk-DMOpX8_p.js';import {r as rt,a as ae,c as ce,S as Sn$1,q as qe}from'./chunk-DagVOvSr.js';import {F as Fi,I as Ii,l as li,s as si,b as so,c as lt$1}from'./chunk-Cn-rd4WG.js';var me=["*"];function Sn(o,a){o&1&&tR(0);}var Dn=["tabListContainer"],In=["tabList"],An=["tabListInner"],En=["nextPaginator"],Rn=["previousPaginator"],Bn=["content"];function Fn(o,a){}var Ln=["tabBodyWrapper"],Nn=["tabHeader"];function zn(o,a){}function Gn(o,a){if(o&1&&gw(0,zn,0,0,"ng-template",12),o&2){let t=XN().$implicit;Dw("cdkPortalOutlet",t.templateLabel);}}function Vn(o,a){if(o&1&&TR(0),o&2){let t=XN().$implicit;Hw(t.textLabel);}}function $n(o,a){if(o&1){let t=WN();Dl(0,"div",7,2),Fl("click",function(){let n=gD(t),i=n.$implicit,l=n.$index,u=XN(),b=oR(1);return mD(u._handleClick(i,b,l))})("cdkFocusChange",function(n){let i=gD(t).$index,l=XN();return mD(l._tabFocusChanged(n,i))}),Ll(2,"span",8)(3,"div",9),Dl(4,"span",10)(5,"span",11),LN(6,Gn,1,1,null,12)(7,Vn,1,1),Ug()()();}if(o&2){let t=a.$implicit,e=a.$index,n=oR(1),i=XN();gR(t.labelClass),jl("mdc-tab--active",i.selectedIndex===e),Dw("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),Ia$1("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),V0(3),Dw("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),V0(3),FN(t.templateLabel?6:7);}}function Hn(o,a){o&1&&tR(0);}function jn(o,a){if(o&1){let t=WN();Dl(0,"mat-tab-body",13),Fl("_onCentered",function(){gD(t);let n=XN();return mD(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){gD(t);let i=XN();return mD(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){gD(t);let i=XN();return mD(i._bodyCentered(n))}),Ug();}if(o&2){let t=a.$implicit,e=a.$index,n=XN();gR(t.bodyClass),Dw("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n._bodyAnimationDuration)("preserveContent",n.preserveContent),Ia$1("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e);}}var Yn=new G("MatTabContent"),Wn=(()=>{class o{template=I(Ui);static \u0275fac=function(e){return new(e||o)};static \u0275dir=wt({type:o,selectors:[["","matTabContent",""]],features:[Kw([{provide:Yn,useExisting:o}])]})}return o})(),Qn=new G("MatTabLabel"),_n=new G("MAT_TAB"),Kn=(()=>{class o extends pe$1{_closestTab=I(_n,{optional:true});static \u0275fac=(()=>{let t;return function(n){return (t||(t=BE(o)))(n||o)}})();static \u0275dir=wt({type:o,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Kw([{provide:Qn,useExisting:o}]),hw]})}return o})(),fn=new G("MAT_TAB_GROUP"),pe=(()=>{class o{_viewContainerRef=I(Yr);_closestTabGroup=I(fn,{optional:true});disabled=false;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t);}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new be$1;position=null;origin=null;isActive=false;constructor(){I(Jo).load(SZ);}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete();}ngOnInit(){this._contentPortal=new D(this._explicitContent||this._implicitContent,this._viewContainerRef);}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t);}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=mr({type:o,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&zg(i,Kn,5)(i,Wn,7,Ui),e&2){let l;Mw(l=Aw())&&(n.templateLabel=l.first),Mw(l=Aw())&&(n._explicitContent=l.first);}},viewQuery:function(e,n){if(e&1&&Sw(Ui,7),e&2){let i;Mw(i=Aw())&&(n._implicitContent=i.first);}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&Ia$1("id",null);},inputs:{disabled:[2,"disabled","disabled",vr],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Kw([{provide:_n,useExisting:o}]),fr],ngContentSelectors:me,decls:1,vars:0,template:function(e,n){e&1&&(eR(),mw(0,Sn,1,0,"ng-template"));},encapsulation:2,changeDetection:1})}return o})(),ie="mdc-tab-indicator--active",bn="mdc-tab-indicator--no-transition",re=class{_items;_currentItem;constructor(a){this._items=a;}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0;}alignToElement(a){let t=this._items.find(n=>n.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t;}}},qn=(()=>{class o{_elementRef=I(lt);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=false;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement());}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ie);return}let n=e.getBoundingClientRect(),i=t.width/n.width,l=t.left-n.left;e.classList.add(bn),this._inkBarContentElement.style.setProperty("transform",`translateX(${l}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(bn),e.classList.add(ie),this._inkBarContentElement.style.setProperty("transform","");}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ie);}ngOnInit(){this._createInkBarElement();}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null;}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement();}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement);}static \u0275fac=function(e){return new(e||o)};static \u0275dir=wt({type:o,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",vr]}})}return o})();var yn=(()=>{class o extends qn{elementRef=I(lt);disabled=false;focus(){this.elementRef.nativeElement.focus();}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return (t||(t=BE(o)))(n||o)}})();static \u0275dir=wt({type:o,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(Ia$1("aria-disabled",!!n.disabled),jl("mat-mdc-tab-disabled",n.disabled));},inputs:{disabled:[2,"disabled","disabled",vr]},features:[hw]})}return o})(),gn={passive:true},Un=650,Zn=100;function oe(o){let a=o+"";return /^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${o}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:""}var Xn=(()=>{class o{_elementRef=I(lt);_changeDetectorRef=I(zl);_viewportRuler=I(Pe);_dir=I(VP,{optional:true});_ngZone=I(Ce);_platform=I(Ct);_sharedResizeObserver=I(qe);_injector=I(Ve);_renderer=I(xl);_animationsDisabled=zd();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=false;_destroyed=new be$1;_showPaginationControls=false;_disableScrollAfter=true;_disableScrollBefore=true;_tabLabelCount;_scrollDistanceChanged=false;_keyManager;_currentTextContent;_stopScrolling=new be$1;disablePagination=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=true,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e));}_selectedIndex=0;selectFocusedIndex=new Qe;indexFocused=new Qe;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())]);}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),gn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),gn));}ngAfterContentInit(){let t=this._dir?this._dir.change:me$1("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Io(32),nr(this._destroyed)),n=this._viewportRuler.change(150).pipe(nr(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab();};this._keyManager=new sy(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>false),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),va$1(i,{injector:this._injector}),JT(t,n,e,this._items.changes,this._itemsResized()).pipe(nr(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i();});}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l);});}_itemsResized(){return typeof ResizeObserver!="function"?ot$1:this._items.changes.pipe(Us(this._items),Vt(t=>new de(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect();}}))),js(1),ht(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=false,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=false,this._changeDetectorRef.markForCheck());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete();}_handleKeydown(t){if(!EC(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));}break;default:this._keyManager?.onKeydown(t);}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck();}));}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition();}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t);}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:true}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth;}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0);}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t);}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t);}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:l}=e.elementRef.nativeElement,u,b;this._getLayoutDirection()=="ltr"?(u=i,b=u+l):(b=this._tabListInner.nativeElement.offsetWidth-i,u=b-l);let p=this.scrollDistance,y=this.scrollDistance+n;u<p?this.scrollDistance-=p-u:b>y&&(this.scrollDistance+=Math.min(b-y,u-p));}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=false;else {let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck());}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=true:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck());}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide();}_stopInterval(){this._stopScrolling.next();}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ps(Un,Zn).pipe(nr(JT(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval();}));}_scrollTo(t){if(this.disablePagination)return {maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=true,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||o)};static \u0275dir=wt({type:o,inputs:{disablePagination:[2,"disablePagination","disablePagination",vr],selectedIndex:[2,"selectedIndex","selectedIndex",S3]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return o})(),Jn=(()=>{class o extends Xn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=false;ngAfterContentInit(){this._inkBar=new re(this._items),super.ngAfterContentInit();}_itemSelected(t){t.preventDefault();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=BE(o)))(n||o)}})();static \u0275cmp=mr({type:o,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&zg(i,yn,4),e&2){let l;Mw(l=Aw())&&(n._items=l);}},viewQuery:function(e,n){if(e&1&&Sw(Dn,7)(In,7)(An,7)(En,5)(Rn,5),e&2){let i;Mw(i=Aw())&&(n._tabListContainer=i.first),Mw(i=Aw())&&(n._tabList=i.first),Mw(i=Aw())&&(n._tabListInner=i.first),Mw(i=Aw())&&(n._nextPaginator=i.first),Mw(i=Aw())&&(n._previousPaginator=i.first);}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&jl("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl");},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",vr]},features:[hw],ngContentSelectors:me,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(eR(),Dl(0,"div",5,0),Fl("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(l){return n._handlePaginatorPress("before",l)})("touchend",function(){return n._stopInterval()}),Ll(2,"div",6),Ug(),Dl(3,"div",7,1),Fl("keydown",function(l){return n._handleKeydown(l)}),Dl(5,"div",8,2),Fl("cdkObserveContent",function(){return n._onContentChanges()}),Dl(7,"div",9,3),tR(9),Ug()()(),Dl(10,"div",10,4),Fl("mousedown",function(l){return n._handlePaginatorPress("after",l)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),Ll(12,"div",6),Ug()),e&2&&(jl("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),Dw("matRippleDisabled",n._disableScrollBefore||n.disableRipple),V0(3),jl("_mat-animation-noopable",n._animationsDisabled),V0(2),Ia$1("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),V0(5),jl("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),Dw("matRippleDisabled",n._disableScrollAfter||n.disableRipple));},dependencies:[yZ,M6],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return o})(),ta=new G("MAT_TABS_CONFIG"),hn=(()=>{class o extends fe{_host=I(se);_ngZone=I(Ce);_centeringSub=Ye.EMPTY;_leavingSub=Ye.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Us(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content);});}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach());});}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=BE(o)))(n||o)}})();static \u0275dir=wt({type:o,selectors:[["","matTabBodyHost",""]],features:[hw]})}return o})(),se=(()=>{class o{_elementRef=I(lt);_dir=I(VP,{optional:true});_ngZone=I(Ce);_injector=I(Ve);_renderer=I(xl);_diAnimationsDisabled=zd();_eventCleanups;_initialized=false;_fallbackTimer;_positionIndex;_dirChangeSubscription=Ye.EMPTY;_position;_previousPosition;_onCentering=new Qe;_beforeCentering=new Qe;_afterLeavingCenter=new Qe;_onCentered=new Qe(true);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=false;set position(t){this._positionIndex=t,this._computePositionAnimationState();}constructor(){if(this._dir){let t=I(zl);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck();});}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(true),va$1(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=true;}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe();}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone());};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted());}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)];});}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight);}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit();}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t);}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)));}_simulateTransitionEvents(){this._transitionStarted(),va$1(()=>this._transitionDone(),{injector:this._injector});}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=mr({type:o,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&Sw(hn,5)(Bn,5),e&2){let i;Mw(i=Aw())&&(n._portalHost=i.first),Mw(i=Aw())&&(n._contentElement=i.first);}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&Ia$1("inert",n._position==="center"?null:"");},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(Dl(0,"div",1,0),gw(2,Fn,0,0,"ng-template",2),Ug()),e&2&&jl("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center");},dependencies:[hn,Ie],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return o})(),Cn=(()=>{class o{_elementRef=I(lt);_changeDetectorRef=I(zl);_ngZone=I(Ce);_tabsSubscription=Ye.EMPTY;_tabLabelSubscription=Ye.EMPTY;_tabBodySubscription=Ye.EMPTY;_diAnimationsDisabled=zd();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Vo;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck();}_fitInkBarToContent=false;stretchTabs=true;alignTabs=null;dynamicHeight=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t;}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=oe(t.body),this._headerAnimationDuration=oe(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=oe(t);}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t;}_contentTabIndex=null;disablePagination=false;disableRipple=false;preserveContent=false;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Qe;focusChange=new Qe;animationDone=new Qe;selectedTabChange=new Qe(true);_groupId;_isServer=!I(Ct).isBrowser;constructor(){let t=I(ta,{optional:true});this._groupId=I(ay).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:false,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null;}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px";}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="");});}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex);}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck());}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=true,this.selectedTabChange.emit(this._createChangeEvent(t));});}this._changeDetectorRef.markForCheck();});}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(true));}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Us(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges();});}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe();}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab();}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination();}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t);}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t));}_createChangeEvent(t){let e=new le;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=JT(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck());}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return `${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px");}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit());}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n);}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e);}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex));}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=mr({type:o,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&zg(i,pe,5),e&2){let l;Mw(l=Aw())&&(n._allTabs=l);}},viewQuery:function(e,n){if(e&1&&Sw(Ln,5)(Nn,5)(se,5),e&2){let i;Mw(i=Aw())&&(n._tabBodyWrapper=i.first),Mw(i=Aw())&&(n._tabHeader=i.first),Mw(i=Aw())&&(n._tabBodies=i);}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,n){e&2&&(Ia$1("mat-align-tabs",n.alignTabs),gR("mat-"+(n.color||"primary")),kw("--mat-tab-body-animation-duration",n._bodyAnimationDuration)("--mat-tab-header-animation-duration",n._headerAnimationDuration),jl("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs));},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",vr],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",vr],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",vr],selectedIndex:[2,"selectedIndex","selectedIndex",S3],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",S3],disablePagination:[2,"disablePagination","disablePagination",vr],disableRipple:[2,"disableRipple","disableRipple",vr],preserveContent:[2,"preserveContent","preserveContent",vr],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Kw([{provide:fn,useExisting:o}])],ngContentSelectors:me,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(eR(),Dl(0,"mat-tab-header",3,0),Fl("indexFocused",function(l){return n._focusChanged(l)})("selectFocusedIndex",function(l){return n.selectedIndex=l}),BN(2,$n,8,17,"div",4,UN),Ug(),LN(4,Hn,1,0),Dl(5,"div",5,1),BN(7,jn,1,10,"mat-tab-body",6,UN),Ug()),e&2&&(Dw("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),vw("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),V0(2),HN(n._tabs),V0(2),FN(n._isServer?4:-1),V0(),jl("_mat-animation-noopable",n._bodyAnimationsDisabled()),V0(2),HN(n._tabs));},dependencies:[Jn,yn,yP,yZ,fe,se],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return o})(),le=class{index;tab};var vn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At({imports:[TC]})}return o})();var ra=["button"],sa=["*"];function la(o,a){if(o&1&&(Dl(0,"div",2),Ll(1,"mat-pseudo-checkbox",6),Ug()),o&2){let t=XN();V0(),Dw("disabled",t.disabled);}}var Mn=new G("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:false,hideMultipleSelectionIndicator:false,disabledInteractive:false})}),xn=new G("MatButtonToggleGroup"),ca={provide:lt$1,useExisting:_u(()=>ue),multi:true},jt=class{source;value;constructor(a,t){this.source=a,this.value=t;}},ue=(()=>{class o{_changeDetector=I(zl);_dir=I(VP,{optional:true});_multiple=false;_disabled=false;_disabledInteractive=false;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck();}_name=I(ay).getId("mat-button-toggle-group-");vertical=false;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value);}valueChange=new Qe;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck();}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck();}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new Qe;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck();}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck();}_hideMultipleSelectionIndicator;constructor(){let t=I(Mn,{optional:true});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??false,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??false;}ngOnInit(){this._selectionModel=new r(this.multiple,void 0,false);}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex();}writeValue(t){this.value=t,this._changeDetector.markForCheck();}registerOnChange(t){this._controlValueAccessorChangeFn=t;}registerOnTouched(t){this._onTouched=t;}setDisabledState(t){this.disabled=t;}_keydown(t){if(this.multiple||this.disabled||EC(t))return;let n=t.target.id,i=this._buttonToggles.toArray().findIndex(u=>u.buttonId===n),l=null;switch(t.keyCode){case 32:case 13:l=this._buttonToggles.get(i)||null;break;case 38:l=this._getNextButton(i,-1);break;case 37:l=this._getNextButton(i,this.dir==="ltr"?-1:1);break;case 40:l=this._getNextButton(i,1);break;case 39:l=this._getNextButton(i,this.dir==="ltr"?1:-1);break;default:return}l&&(t.preventDefault(),l._onButtonClick(),l.focus());}_emitChangeEvent(t){let e=new jt(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e);}_syncButtonToggle(t,e,n=false,i=false){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=false),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):i=true,i?Promise.resolve().then(()=>this._updateModelValue(t,n)):this._updateModelValue(t,n);}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?false:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1;}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let n=this._buttonToggles;for(let i=1;i<=n.length;i++){let l=(t+e*i+n.length)%n.length,u=n.get(l);if(u&&!u.disabled)return u}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(n=>this._selectValue(n,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(n=>n.tabIndex===-1)){for(let n of e)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=false,this.multiple||(t.tabIndex=-1);});}_selectValue(t,e){for(let n of e)if(n.value===t){n.checked=true,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value);}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck());}static \u0275fac=function(e){return new(e||o)};static \u0275dir=wt({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,n,i){if(e&1&&zg(i,Yt,5),e&2){let l;Mw(l=Aw())&&(n._buttonToggles=l);}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,n){e&1&&Fl("keydown",function(l){return n._keydown(l)}),e&2&&(Ia$1("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),jl("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"));},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",vr],value:"value",multiple:[2,"multiple","multiple",vr],disabled:[2,"disabled","disabled",vr],disabledInteractive:[2,"disabledInteractive","disabledInteractive",vr],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",vr],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",vr]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Kw([ca,{provide:xn,useExisting:o}])]})}return o})(),Yt=(()=>{class o{_changeDetectorRef=I(zl);_elementRef=I(lt);_focusMonitor=I(oC);_idGenerator=I(ay);_animationDisabled=zd();_checked=false;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return `${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t);}_tabIndex;disableRipple=false;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t;}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck());}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t;}_disabled=false;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t;}_disabledInteractive;change=new Qe;constructor(){I(Jo).load(SZ);let t=I(xn,{optional:true}),e=I(new Vl("tabindex"),{optional:true})||"",n=I(Mn,{optional:true});this._tabIndex=Oe(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??false;}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=true:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked));}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,false,false,true);}focus(t){this._buttonElement.nativeElement.focus(t);}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?true:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,true),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0;}this.change.emit(new jt(this,this.value));}_markForCheck(){this._changeDetectorRef.markForCheck();}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=mr({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&Sw(ra,5),e&2){let i;Mw(i=Aw())&&(n._buttonElement=i.first);}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&Fl("focus",function(){return n.focus()}),e&2&&(Ia$1("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),jl("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",vr],appearance:"appearance",checked:[2,"checked","checked",vr],disabled:[2,"disabled","disabled",vr],disabledInteractive:[2,"disabledInteractive","disabledInteractive",vr]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:sa,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(eR(),Dl(0,"button",1,0),Fl("click",function(){return n._onButtonClick()}),LN(2,la,2,1,"div",2),Dl(3,"span",3),tR(4),Ug()(),Ll(5,"span",4)(6,"span",5)),e&2){let i=oR(1);Dw("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),Ia$1("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),V0(2),FN(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),V0(4),Dw("matRippleTrigger",i)("matRippleDisabled",n.disableRipple||n.disabled);}},dependencies:[yZ,p],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return o})(),kn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At({imports:[NZ,Yt,TC]})}return o})();var wn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At({imports:[LP,re$1,TC,O]})}return o})();var Q=class o{dbService=I(g);authService=I(ZI);searchIndex=Oe([]);isIndexing=Oe(false);lastSearchCount=Oe(0);constructor(){this.rebuildIndex();}async refreshData(){await this.rebuildIndex();}async rebuildIndex(){this.isIndexing.set(true);try{let a=await this.dbService.getAllCustomerReferences(),t=[];for(let n of a){let i=await this.dbService.getCustomerById(n.id);i&&t.push(i);}let e=t.map(n=>({customerId:n.id,ownerId:n.ownerId,searchBuffer:this.buildSearchBuffer(n),customerRef:n}));this.searchIndex.set(e);}finally{this.isIndexing.set(false);}}buildSearchBuffer(a){let t=(a.phones||[]).map(i=>i.phoneNumber).join(" "),e=(a.places||[]).map(i=>{let l=i.address?`${i.address.street} ${i.address.city} ${i.address.zipcode}`:"",u=i.phoneNumber?i.phoneNumber.phoneNumber:"";return `${l} ${u}`}).join(" "),n=[...a.notes||[],...(a.noteCustomer||[]).map(i=>`${i.title} ${i.content}`)].join(" ");return this.normalizeText(`${a.name} ${a.accountNumber} ${a.email} ${t} ${e} ${n}`)}normalizeText(a){return a?a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim():""}search(a){let t=a.query?a.query.trim():"",e=this.normalizeText(t),n=a.filters||{},i=a.limit||20,l=this.searchIndex();if(n.isCommercial!==void 0&&n.isCommercial!==null&&(l=l.filter(p=>p.customerRef.isCommercial===n.isCommercial)),n.city){let p=this.normalizeText(n.city);l=l.filter(y=>y.customerRef.places?.some(v=>this.normalizeText(v.address?.city||"").includes(p)));}if(n.zipcode&&(l=l.filter(p=>p.customerRef.places?.some(y=>y.address?.zipcode?.toString()===n.zipcode?.toString()))),n.hasAlerts&&(l=l.filter(p=>p.customerRef.alertCustomer&&p.customerRef.alertCustomer.length>0)),!e)return this.lastSearchCount.set(l.length),l.slice(0,i).map(p=>this.mapToSearchResult(p.customerRef,"name",100));let u=e.split(" "),b=[];for(let p of l)if(u.every(v=>p.searchBuffer.includes(v))){let{matchType:v,score:A}=this.calculateScore(p.customerRef,e,u);b.push(this.mapToSearchResult(p.customerRef,v,A));}return b.sort((p,y)=>y.score-p.score),this.lastSearchCount.set(b.length),b.slice(0,i)}async findByExactField(a,t){let e=t.trim();if(!e)return null;let i=this.searchIndex().find(l=>a==="accountNumber"?l.customerRef.accountNumber.toLowerCase()===e.toLowerCase():a==="id"?l.customerId===e:a==="email"?l.customerRef.email.toLowerCase()===e.toLowerCase():false);return i?i.customerRef:null}calculateScore(a,t,e){let n=this.normalizeText(a.name),i=this.normalizeText(a.accountNumber),l=this.normalizeText(a.email);return i===t?{matchType:"accountNumber",score:100}:n.startsWith(t)?{matchType:"name",score:90}:n.includes(t)||l.includes(t)?{matchType:"name",score:80}:a.phones?.some(p=>p.phoneNumber.includes(t))||a.places?.some(p=>p.phoneNumber?.phoneNumber.includes(t))?{matchType:"phone",score:70}:a.places?.some(p=>p.address?this.normalizeText(`${p.address.street} ${p.address.city} ${p.address.zipcode}`).includes(t):false)?{matchType:"address",score:50}:{matchType:"deep",score:30}}mapToSearchResult(a,t,e){let n=a.phones&&a.phones.length>0?a.phones[0].phoneNumber:void 0,i=(a.places||[]).map(l=>({address:l.address?l.address.street:"No address",city:l.address?`${l.address.city}, ${l.address.state}`:""}));return {id:a.id,name:a.name,accountNumber:a.accountNumber,email:a.email,isCommercial:a.isCommercial,primaryPhone:n,matchedField:t,score:e,placesSummary:i}}getAppointmentsByDate(a){let t=this.formatDateToYYYYMMDD(a),e=this.searchIndex(),n=[];for(let i of e){let l=i.customerRef;if(l.places){for(let u of l.places)if(u.services){for(let b of u.services)if(b.appointments)for(let p of b.appointments){if(p.active===false)continue;this.formatDateToYYYYMMDD(p.dateAppointment||p.date)===t&&n.push(this.mapToDailyCard(l,u,b,p));}}}}return n.sort((i,l)=>i.timeRange.localeCompare(l.timeRange))}getAppointmentsInRange(a,t){let e=this.formatDateToYYYYMMDD(a),n=this.formatDateToYYYYMMDD(t),i=this.searchIndex(),l=[];for(let u of i){let b=u.customerRef;if(b.places){for(let p of b.places)if(p.services){for(let y of p.services)if(y.appointments)for(let v of y.appointments){if(v.active===false)continue;let A=this.formatDateToYYYYMMDD(v.dateAppointment||v.date);A>=e&&A<=n&&l.push(this.mapToDailyCard(b,p,y,v));}}}}return l.sort((u,b)=>{let p=this.getCardDateKey(u).localeCompare(this.getCardDateKey(b));return p!==0?p:u.timeRange.localeCompare(b.timeRange)})}getCardDateKey(a){let t=a.appointment.dateAppointment||a.appointment.date;return this.formatDateToYYYYMMDD(t)}formatDateToYYYYMMDD(a){if(!a)return "";if(typeof a=="string")return a.split("T")[0];let t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return `${t}-${e}-${n}`}mapToDailyCard(a,t,e,n){let i="scheduled";n.status.done?i="completed":n.status.canceled?i="canceled":n.status.fail&&(i="failed");let l=a.phones&&a.phones.length>0?a.phones[0].phoneNumber:t.phoneNumber?.phoneNumber;return {appointmentId:n.id,appointment:n,serviceId:e.id,serviceName:e.name,timeInMinutes:e.timeInMinutes,placeId:t.id,addressSummary:t.address?`${t.address.street}`:"",city:t.address?t.address.city:"",zipcode:t.address?t.address.zipcode:0,customerId:a.id,customerName:a.name,accountNumber:a.accountNumber,primaryPhone:l,isCommercial:a.isCommercial,timeRange:`${n.rangeHoursStart} - ${n.rangeHoursEnd}`,statusSummary:i}}static \u0275fac=function(t){return new(t||o)};static \u0275prov=he({token:o,factory:o.\u0275fac,providedIn:"root"})};var Pn={scheduled:0,completed:0,canceled:0,failed:0,other:0};var Wt=class o{searchService=I(Q);getMonthGrid(a,t,e,n){return this.getMonthWeeks(a,t,e,n).flat()}getMonthWeeks(a,t,e,n){let i=new Date(a,t,1),l=new Date(i);l.setDate(l.getDate()-l.getDay());let u=new Date(l);u.setDate(u.getDate()+41);let b=this.searchService.getAppointmentsInRange(l,u),p=this.bucketByDate(b),y=[],v=new Date(l);for(let A=0;A<6;A++){let K=[];for(let V=0;V<7;V++){let $=this.toDateKey(v),B=p.get($)||[];K.push({dateKey:$,dayNumber:v.getDate(),isCurrentMonth:v.getMonth()===t,isToday:$===n,isSelected:$===e,totalCount:B.length,statusCounts:this.countByStatus(B)}),v.setDate(v.getDate()+1);}y.push(K);}return y}getWeekGroups(a){let t=this.parseDateKey(a),e=new Date(t);e.setDate(e.getDate()-e.getDay());let n=new Date(e);n.setDate(n.getDate()+6);let i=this.searchService.getAppointmentsInRange(e,n),l=this.bucketByDate(i),u=this.toDateKey(new Date),b=new Intl.DateTimeFormat("en-US",{weekday:"short"}),p=[],y=new Date(e);for(let v=0;v<7;v++){let A=this.toDateKey(y),K=(l.get(A)||[]).slice().sort((V,$)=>V.timeRange.localeCompare($.timeRange));p.push({dateKey:A,dayLabel:b.format(y),dayNumber:y.getDate(),isToday:A===u,cards:K}),y.setDate(y.getDate()+1);}return p}getYearGrid(a){let t=new Date(a,0,1),e=new Date(a,11,31),n=this.searchService.getAppointmentsInRange(t,e),i=new Intl.DateTimeFormat("en-US",{month:"short"}),l=[];for(let u=0;u<12;u++){let b=n.filter(p=>this.parseDateKey(this.getCardDateKey(p)).getMonth()===u);l.push({monthIndex:u,monthLabel:i.format(new Date(a,u,1)),year:a,totalCount:b.length,statusCounts:this.countByStatus(b)});}return l}groupByCity(a){let t=new Map;for(let e of a){let n=e.city?.trim()||"Unknown City",i=t.get(n)||[];i.push(e),t.set(n,i);}return Array.from(t.entries()).map(([e,n])=>({city:e,count:n.length,cards:n.slice().sort((i,l)=>i.timeRange.localeCompare(l.timeRange))})).sort((e,n)=>e.city.localeCompare(n.city))}getUniqueCities(a){let t=new Set(a.map(e=>e.city?.trim()).filter(e=>!!e));return Array.from(t).sort((e,n)=>e.localeCompare(n))}bucketByDate(a){let t=new Map;for(let e of a){let n=this.getCardDateKey(e),i=t.get(n)||[];i.push(e),t.set(n,i);}return t}getCardDateKey(a){let t=a.appointment.dateAppointment||a.appointment.date;return typeof t=="string"?t.split("T")[0]:t.toISOString().split("T")[0]}countByStatus(a){let t=U({},Pn);for(let e of a)t[e.statusSummary]++;return t}toDateKey(a){let t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return `${t}-${e}-${n}`}parseDateKey(a){let[t,e,n]=a.split("-").map(Number);return new Date(t,e-1,n)}static \u0275fac=function(t){return new(t||o)};static \u0275prov=he({token:o,factory:o.\u0275fac,providedIn:"root"})};var be=(o,a)=>a.appointmentId,_a=(o,a)=>a[0].dateKey,Tn=(o,a)=>a.dateKey,fa=(o,a)=>a.monthIndex,ya=(o,a)=>a.city;function Ca(o,a){if(o&1&&(Dl(0,"mat-option",30),TR(1),Ug()),o&2){let t=a.$implicit;Dw("value",t),V0(),Hw(t);}}function va(o,a){if(o&1){let t=WN();Dl(0,"section",18)(1,"mat-form-field",27)(2,"mat-label"),TR(3,"City Filter"),Ug(),Dl(4,"mat-select",28),Fl("selectionChange",function(n){gD(t);let i=XN();return mD(i.onCityFilterChange(n))}),Dl(5,"mat-option",29),TR(6,"All Cities"),Ug(),BN(7,Ca,2,2,"mat-option",30,UN),Ug()(),Dl(9,"button",31)(10,"mat-icon",32),TR(11,"people"),Ug(),Dl(12,"span",33),TR(13,"Customers List"),Ug()()();}if(o&2){let t=XN();V0(4),Dw("value",t.selectedCityFilter()),V0(3),HN(t.availableCities());}}function Ma(o,a){o&1&&(Dl(0,"div",36)(1,"mat-icon"),TR(2,"event_busy"),Ug(),Dl(3,"p"),TR(4,"No appointments scheduled for this selection."),Ug()());}function xa(o,a){if(o&1&&(Dl(0,"div",46)(1,"mat-icon"),TR(2,"phone"),Ug(),Dl(3,"a",50),Fl("click",function(e){return e.stopPropagation()}),TR(4),Ug()()),o&2){let t=XN().$implicit;V0(3),Dw("href","tel:"+t.primaryPhone,db),V0(),qg(" ",t.primaryPhone," ");}}function ka(o,a){if(o&1){let t=WN();Dl(0,"mat-card",39),Fl("click",function(){let n=gD(t).$implicit,i=XN(3);return mD(i.navigateToAppointmentDetail(n))}),Ll(1,"div",40),Dl(2,"mat-card-header")(3,"mat-card-title",41)(4,"span",42),TR(5),Ug(),Dl(6,"span",43),TR(7),Ug()(),Dl(8,"mat-card-subtitle",44),Fl("click",function(n){let i=gD(t).$implicit,l=XN(3);return mD(l.navigateToCustomerDetail(i.customerId,n))}),Dl(9,"mat-icon"),TR(10,"person"),Ug(),TR(11),Ug()(),Dl(12,"mat-card-content",45)(13,"div",46)(14,"mat-icon"),TR(15,"build"),Ug(),Dl(16,"span")(17,"strong"),TR(18,"Service:"),Ug(),TR(19),Ug()(),Dl(20,"div",46)(21,"mat-icon"),TR(22,"place"),Ug(),Dl(23,"span"),TR(24),Ug()(),LN(25,xa,5,2,"div",46),Ug(),Dl(26,"mat-card-footer",47)(27,"span",48),TR(28),Ug(),Dl(29,"mat-icon",49),TR(30,"chevron_right"),Ug()()();}if(o&2){let t=a.$implicit,e=XN(3);V0(),gR(e.getStatusClass(t.statusSummary)),V0(4),Hw(t.timeRange),V0(),gR(e.getStatusClass(t.statusSummary)),V0(),qg(" ",e.getStatusLabel(t.statusSummary)," "),V0(4),Vw(" ",t.customerName," (Account #",t.accountNumber,") "),V0(8),Vw(" ",t.serviceName," (",t.timeInMinutes," mins)"),V0(5),$w("",t.addressSummary,", ",t.city," ",t.zipcode),V0(),FN(t.primaryPhone?25:-1),V0(2),jl("commercial",t.isCommercial),V0(),qg(" ",t.isCommercial?"Commercial":"Residential"," ");}}function wa(o,a){if(o&1&&(Dl(0,"div",37),BN(1,ka,31,17,"mat-card",38,be),Ug()),o&2){let t=XN(2);V0(),HN(t.filteredDailyAppointments());}}function Pa(o,a){if(o&1&&(Dl(0,"section",26)(1,"div",34)(2,"h3"),TR(3),Ug(),Dl(4,"span",35),TR(5),Ug()(),LN(6,Ma,5,0,"div",36)(7,wa,3,0,"div",37),Ug()),o&2){let t=XN();V0(3),qg("Appointments for ",t.selectedDate()),V0(2),qg("",t.filteredDailyAppointments().length," Jobs"),V0(),FN(t.filteredDailyAppointments().length===0?6:7);}}function Ta(o,a){if(o&1&&Ll(0,"span",62),o&2){let t=XN(2).$implicit;Dw("matTooltip",t.statusCounts.scheduled+" Scheduled");}}function Oa(o,a){if(o&1&&Ll(0,"span",63),o&2){let t=XN(2).$implicit;Dw("matTooltip",t.statusCounts.completed+" Completed");}}function Sa(o,a){if(o&1&&Ll(0,"span",64),o&2){let t=XN(2).$implicit;Dw("matTooltip",t.statusCounts.canceled+" Cancelled");}}function Da(o,a){if(o&1&&(Dl(0,"div",61),LN(1,Ta,1,1,"span",62),LN(2,Oa,1,1,"span",63),LN(3,Sa,1,1,"span",64),Ug(),Dl(4,"span",65),TR(5),Ug()),o&2){let t=XN().$implicit;V0(),FN(t.statusCounts.scheduled>0?1:-1),V0(),FN(t.statusCounts.completed>0?2:-1),V0(),FN(t.statusCounts.canceled>0?3:-1),V0(2),Hw(t.totalCount);}}function Ia(o,a){if(o&1){let t=WN();Dl(0,"div",59),Fl("click",function(){let n=gD(t).$implicit,i=XN(4);return mD(i.selectDayAndShowList(n.dateKey))}),Dl(1,"span",60),TR(2),Ug(),LN(3,Da,6,4),Ug();}if(o&2){let t=a.$implicit;jl("other-month",!t.isCurrentMonth)("is-today",t.isToday)("is-selected",t.isSelected),V0(2),Hw(t.dayNumber),V0(),FN(t.totalCount>0?3:-1);}}function Aa(o,a){if(o&1&&(Dl(0,"div",57),BN(1,Ia,4,8,"div",58,Tn),Ug()),o&2){let t=a.$implicit;V0(),HN(t);}}function Ea(o,a){if(o&1&&(Dl(0,"section",51)(1,"div",55)(2,"div"),TR(3,"Sun"),Ug(),Dl(4,"div"),TR(5,"Mon"),Ug(),Dl(6,"div"),TR(7,"Tue"),Ug(),Dl(8,"div"),TR(9,"Wed"),Ug(),Dl(10,"div"),TR(11,"Thu"),Ug(),Dl(12,"div"),TR(13,"Fri"),Ug(),Dl(14,"div"),TR(15,"Sat"),Ug()(),Dl(16,"div",56),BN(17,Aa,3,0,"div",57,_a),Ug()()),o&2){let t=XN(2);V0(17),HN(t.monthWeeks());}}function Ra(o,a){if(o&1){let t=WN();Dl(0,"div",74),Fl("click",function(n){let i=gD(t).$implicit;return XN(4).navigateToAppointmentDetail(i),mD(n.stopPropagation())}),Dl(1,"span",75),TR(2),Ug(),Dl(3,"span",76),TR(4),Ug()();}if(o&2){let t=a.$implicit,e=XN(4);gR(e.getStatusClass(t.statusSummary)),V0(2),Hw(t.timeRange),V0(2),Hw(t.customerName);}}function Ba(o,a){if(o&1){let t=WN();Dl(0,"div",68),Fl("click",function(){let n=gD(t).$implicit,i=XN(3);return mD(i.selectDayAndShowList(n.dateKey))}),Dl(1,"div",69)(2,"span",70),TR(3),Ug(),Dl(4,"span",71),TR(5),Ug()(),Dl(6,"div",72),BN(7,Ra,5,4,"div",73,be),Ug()();}if(o&2){let t=a.$implicit;jl("is-today",t.isToday),V0(3),Hw(t.dayLabel),V0(2),Hw(t.dayNumber),V0(2),HN(t.cards);}}function Fa(o,a){if(o&1&&(Dl(0,"section",52)(1,"div",66),BN(2,Ba,9,4,"div",67,Tn),Ug()()),o&2){let t=XN(2);V0(2),HN(t.weekGroups());}}function La(o,a){if(o&1){let t=WN();Dl(0,"div",79),Fl("click",function(){let n=gD(t).$implicit,i=XN(3);return mD(i.selectMonthFromYearView(n.monthIndex))}),Dl(1,"span",80),TR(2),Ug(),Dl(3,"span",81),TR(4),Ug(),Dl(5,"div",82)(6,"span",83),TR(7),Ug(),Dl(8,"span",84),TR(9),Ug(),Dl(10,"span",85),TR(11),Ug()()();}if(o&2){let t=a.$implicit;V0(2),Hw(t.monthLabel),V0(2),qg("",t.totalCount," Appointments"),V0(3),Hw(t.statusCounts.scheduled),V0(2),Hw(t.statusCounts.completed),V0(2),Hw(t.statusCounts.canceled);}}function Na(o,a){if(o&1&&(Dl(0,"section",53)(1,"div",77),BN(2,La,12,5,"div",78,fa),Ug()()),o&2){let t=XN(2);V0(2),HN(t.yearMonths());}}function za(o,a){if(o&1&&(Dl(0,"div",36)(1,"mat-icon"),TR(2,"location_off"),Ug(),Dl(3,"p"),TR(4),UR(5,"date"),Ug()()),o&2){let t=XN(3);V0(4),qg("No appointments found for ",VR(5,1,t.activeDate(),"MMMM y")," with the selected filters.");}}function Ga(o,a){if(o&1){let t=WN();Dl(0,"div",92),Fl("click",function(){let n=gD(t).$implicit,i=XN(4);return mD(i.navigateToAppointmentDetail(n))}),Dl(1,"span",93),TR(2),Ug(),Dl(3,"span",94),TR(4),Ug(),Dl(5,"span",95),TR(6),Ug(),Dl(7,"span",96),TR(8),Ug()();}if(o&2){let t=a.$implicit,e=XN(4);V0(2),Hw(t.timeRange),V0(2),Hw(t.customerName),V0(2),Hw(t.serviceName),V0(),gR(e.getStatusClass(t.statusSummary)),V0(),qg(" ",e.getStatusLabel(t.statusSummary)," ");}}function Va(o,a){if(o&1&&(Dl(0,"div",87)(1,"div",88)(2,"mat-icon"),TR(3,"location_city"),Ug(),Dl(4,"h3"),TR(5),Ug(),Dl(6,"span",89),TR(7),Ug()(),Dl(8,"div",90),BN(9,Ga,9,6,"div",91,be),Ug()()),o&2){let t=a.$implicit;V0(5),Hw(t.city),V0(2),qg("",t.count," Jobs"),V0(2),HN(t.cards);}}function $a(o,a){if(o&1&&(Dl(0,"section",54)(1,"div",86),TR(2),UR(3,"date"),Ug(),LN(4,za,6,4,"div",36),BN(5,Va,11,2,"div",87,ya),Ug()),o&2){let t=XN(2);V0(2),qg(" Showing all cities for ",VR(3,2,t.activeDate(),"MMMM y")," "),V0(2),FN(t.cityGroups().length===0?4:-1),V0(),HN(t.cityGroups());}}function Ha(o,a){if(o&1&&(LN(0,Ea,19,0,"section",51),LN(1,Fa,4,0,"section",52),LN(2,Na,4,0,"section",53),LN(3,$a,7,5,"section",54)),o&2){let t=XN();FN(t.viewMode()==="month"?0:-1),V0(),FN(t.viewMode()==="week"?1:-1),V0(),FN(t.viewMode()==="year"?2:-1),V0(),FN(t.viewMode()==="city"?3:-1);}}var Qt=class o{searchService=I(Q);aggregationService=I(Wt);router=I(cs);appointmentSelected=_3();getTodayString(){let a=new Date,t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return `${t}-${e}-${n}`}selectedDate=Oe(this.getTodayString());viewMode=Oe("month");statusFilter=Oe("all");selectedCityFilter=Oe("all");showDailyList=Oe(false);activeDate=Bl(()=>{let a=this.selectedDate(),[t,e,n]=a.split("-").map(Number);return new Date(t,e-1,n)});rawDailyAppointments=Bl(()=>this.searchService.getAppointmentsByDate(this.selectedDate())??[]);filteredDailyAppointments=Bl(()=>{let a=this.rawDailyAppointments(),t=this.statusFilter(),e=this.selectedCityFilter().toLowerCase();return a.filter(n=>{let i=t==="all"||n.statusSummary===t,l=e==="all"||n.city&&n.city.toLowerCase()===e;return i&&l})});monthRangeAppointments=Bl(()=>{let a=this.activeDate(),t=new Date(a.getFullYear(),a.getMonth(),1),e=new Date(a.getFullYear(),a.getMonth()+1,0);return this.searchService.getAppointmentsInRange(t,e)});filteredMonthRangeAppointments=Bl(()=>{let a=this.monthRangeAppointments(),t=this.statusFilter(),e=this.selectedCityFilter().toLowerCase();return a.filter(n=>{let i=t==="all"||n.statusSummary===t,l=e==="all"||n.city&&n.city.toLowerCase()===e;return i&&l})});monthGrid=Bl(()=>{let a=this.activeDate();return this.aggregationService.getMonthGrid(a.getFullYear(),a.getMonth(),this.selectedDate(),this.getTodayString())});monthWeeks=Bl(()=>{let a=this.activeDate();return this.aggregationService.getMonthWeeks(a.getFullYear(),a.getMonth(),this.selectedDate(),this.getTodayString())});weekGroups=Bl(()=>this.aggregationService.getWeekGroups(this.selectedDate()));currentYear=Bl(()=>this.activeDate().getFullYear());yearMonths=Bl(()=>this.aggregationService.getYearGrid(this.currentYear()));cityGroups=Bl(()=>this.aggregationService.groupByCity(this.filteredMonthRangeAppointments()));availableCities=Bl(()=>this.aggregationService.getUniqueCities(this.monthRangeAppointments()));onStatusFilterChange(a){this.statusFilter.set(a);}onCityFilterChange(a){this.selectedCityFilter.set(a.value);}onViewModeChange(a){this.viewMode.set(a);}navigateDate(a){if(a==="today"){this.selectedDate.set(this.getTodayString());return}let t=new Date(this.activeDate()),e=this.viewMode();e==="month"?t.setMonth(t.getMonth()+(a==="next"?1:-1)):e==="week"?t.setDate(t.getDate()+(a==="next"?7:-7)):e==="year"?t.setFullYear(t.getFullYear()+(a==="next"?1:-1)):t.setDate(t.getDate()+(a==="next"?1:-1));let n=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");this.selectedDate.set(`${n}-${i}-${l}`);}onDateInputChange(a){let t=a.target;t.value&&this.selectedDate.set(t.value);}selectDayAndShowList(a){this.selectedDate.set(a),this.showDailyList.set(true);}selectMonthFromYearView(a){let t=this.currentYear(),e=String(a+1).padStart(2,"0");this.selectedDate.set(`${t}-${e}-01`),this.viewMode.set("month");}toggleDailyList(){this.showDailyList.update(a=>!a);}navigateToAppointmentDetail(a){this.appointmentSelected.emit(a),this.router.navigate(["/main/customers",a.customerId,"places",a.placeId,"services",a.serviceId,"appointments",a.appointmentId]);}navigateToCustomerDetail(a,t){t.stopPropagation(),this.router.navigate(["/main/customers",a]);}getStatusClass(a){switch(a){case "completed":return "status-completed";case "canceled":return "status-canceled";case "failed":return "status-failed";default:return "status-scheduled"}}getStatusLabel(a){switch(a){case "completed":return "Completed";case "canceled":return "Cancelled";case "failed":return "Failed";default:return "Scheduled"}}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=mr({type:o,selectors:[["app-appointment-calendar"]],outputs:{appointmentSelected:"appointmentSelected"},decls:50,vars:16,consts:[["datePickerInput",""],[1,"calendar-container"],[1,"calendar-header"],[1,"date-navigation"],["mat-icon-button","","aria-label","Previous",3,"click"],[1,"current-date-display"],[1,"date-text"],["type","date",1,"hidden-native-datepicker",3,"change","value"],["mat-icon-button","","color","primary","aria-label","Select Date",3,"click"],["mat-icon-button","","aria-label","Next",3,"click"],["mat-stroked-button","",1,"today-btn",3,"click"],[1,"view-mode-selector"],["aria-label","Calendar View Mode",3,"change","value"],["value","month"],["value","week"],["value","year"],["value","city"],["mat-flat-button","",1,"toggle-list-btn",3,"click","color"],[1,"filters-bar"],["aria-label","Status filter"],[3,"click","selected"],[1,"chip-scheduled",3,"click","selected"],[1,"chip-completed",3,"click","selected"],[1,"chip-canceled",3,"click","selected"],[1,"chip-failed",3,"click","selected"],[1,"calendar-body"],[1,"daily-list-container"],["appearance","outline",1,"city-filter-field"],[3,"selectionChange","value"],["value","all"],[3,"value"],["mat-stroked-button","","routerLink","/main/customers",1,"today-btn"],["matListItemIcon",""],["matListItemTitle",""],[1,"list-header"],[1,"count-badge"],[1,"empty-state"],[1,"cards-grid"],[1,"appointment-card","ripple"],[1,"appointment-card","ripple",3,"click"],[1,"card-status-indicator"],[1,"card-title-row"],[1,"time-range"],[1,"status-badge"],[1,"customer-name","clickable",3,"click"],[1,"card-details"],[1,"detail-item"],[1,"card-footer"],[1,"property-tag"],[1,"chevron-icon"],[3,"click","href"],[1,"month-view"],[1,"week-view"],[1,"year-view"],[1,"city-view"],[1,"weekdays-header"],[1,"month-grid"],[1,"month-week-row"],[1,"month-cell",3,"other-month","is-today","is-selected"],[1,"month-cell",3,"click"],[1,"day-number"],[1,"dots-container"],[1,"dot","dot-scheduled",3,"matTooltip"],[1,"dot","dot-completed",3,"matTooltip"],[1,"dot","dot-canceled",3,"matTooltip"],[1,"count-pill"],[1,"week-columns"],[1,"week-column",3,"is-today"],[1,"week-column",3,"click"],[1,"week-column-header"],[1,"day-label"],[1,"day-num"],[1,"week-cards-list"],[1,"mini-card",3,"class"],[1,"mini-card",3,"click"],[1,"mini-time"],[1,"mini-title"],[1,"year-grid"],[1,"month-tile"],[1,"month-tile",3,"click"],[1,"month-title"],[1,"month-total"],[1,"status-breakdown"],[1,"badge-sch"],[1,"badge-com"],[1,"badge-can"],[1,"city-view-range-label"],[1,"city-group-card"],[1,"city-header"],[1,"city-count"],[1,"city-cards-list"],[1,"city-card-item"],[1,"city-card-item",3,"click"],[1,"time"],[1,"name"],[1,"service"],[1,"badge"]],template:function(t,e){if(t&1){let n=WN();Dl(0,"div",1)(1,"header",2)(2,"div",3)(3,"button",4),Fl("click",function(){return e.navigateDate("prev")}),Dl(4,"mat-icon"),TR(5,"chevron_left"),Ug()(),Dl(6,"div",5)(7,"span",6),TR(8),UR(9,"date"),Ug(),Dl(10,"input",7,0),Fl("change",function(l){return e.onDateInputChange(l)}),Ug(),Dl(12,"button",8),Fl("click",function(){gD(n);let l=oR(11);return mD(l.showPicker())}),Dl(13,"mat-icon"),TR(14,"calendar_today"),Ug()()(),Dl(15,"button",9),Fl("click",function(){return e.navigateDate("next")}),Dl(16,"mat-icon"),TR(17,"chevron_right"),Ug()(),Dl(18,"button",10),Fl("click",function(){return e.navigateDate("today")}),TR(19," Today "),Ug()(),Dl(20,"div",11)(21,"mat-button-toggle-group",12),Fl("change",function(l){return e.onViewModeChange(l.value)}),Dl(22,"mat-button-toggle",13),TR(23,"Month"),Ug(),Dl(24,"mat-button-toggle",14),TR(25,"Week"),Ug(),Dl(26,"mat-button-toggle",15),TR(27,"Year"),Ug(),Dl(28,"mat-button-toggle",16),TR(29,"City"),Ug()(),Dl(30,"button",17),Fl("click",function(){return e.toggleDailyList()}),Dl(31,"mat-icon"),TR(32),Ug(),TR(33),Ug()()(),Dl(34,"section",18)(35,"mat-chip-set",19)(36,"mat-chip-option",20),Fl("click",function(){return e.onStatusFilterChange("all")}),TR(37," All "),Ug(),Dl(38,"mat-chip-option",21),Fl("click",function(){return e.onStatusFilterChange("scheduled")}),TR(39," Scheduled "),Ug(),Dl(40,"mat-chip-option",22),Fl("click",function(){return e.onStatusFilterChange("completed")}),TR(41," Completed "),Ug(),Dl(42,"mat-chip-option",23),Fl("click",function(){return e.onStatusFilterChange("canceled")}),TR(43," Cancelled "),Ug(),Dl(44,"mat-chip-option",24),Fl("click",function(){return e.onStatusFilterChange("failed")}),TR(45," Failed "),Ug()()(),LN(46,va,14,1,"section",18),Dl(47,"main",25),LN(48,Pa,8,3,"section",26)(49,Ha,4,4),Ug()();}t&2&&(V0(8),Hw(VR(9,13,e.activeDate(),"EEEE, MMM d, y")),V0(2),Dw("value",e.selectedDate()),V0(11),Dw("value",e.viewMode()),V0(9),Dw("color",e.showDailyList()?"accent":"primary"),V0(2),Hw(e.showDailyList()?"calendar_view_month":"format_list_bulleted"),V0(),qg(" ",e.showDailyList()?"Grid View":"Day List ("+e.rawDailyAppointments().length+")"," "),V0(3),Dw("selected",e.statusFilter()==="all"),V0(2),Dw("selected",e.statusFilter()==="scheduled"),V0(2),Dw("selected",e.statusFilter()==="completed"),V0(2),Dw("selected",e.statusFilter()==="canceled"),V0(2),Dw("selected",e.statusFilter()==="failed"),V0(2),FN(e.availableCities().length>0?46:-1),V0(2),FN(e.showDailyList()?48:49));},dependencies:[A_,li,si,so,kn,ue,Yt,Fi,Ii,N,k,z,G$1,B,E,S,H$1,dt,ot,rt$1,Pt,rt,ae,Lt,J,ce,Sn$1,wn,Ct$1,qI,Gx],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;width:100%;height:100%}.calendar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;background-color:#fafafa}.calendar-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:12px;border-radius:12px;box-shadow:0 1px 4px #0000000d}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .current-date-display[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .current-date-display[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:700;color:#1e3a8a}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .current-date-display[_ngcontent-%COMP%]   .hidden-native-datepicker[_ngcontent-%COMP%]{display:none}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .today-btn[_ngcontent-%COMP%]{border-color:#2563eb;color:#2563eb}.calendar-header[_ngcontent-%COMP%]   .view-mode-selector[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.calendar-header[_ngcontent-%COMP%]   .view-mode-selector[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{border-radius:8px;height:36px}.calendar-header[_ngcontent-%COMP%]   .view-mode-selector[_ngcontent-%COMP%]   .toggle-list-btn[_ngcontent-%COMP%]{height:36px;font-size:.85rem}.filters-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;overflow-x:auto}.filters-bar[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.filters-bar[_ngcontent-%COMP%]   .chip-scheduled[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #DBEAFE}.filters-bar[_ngcontent-%COMP%]   .chip-completed[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #DCFCE7}.filters-bar[_ngcontent-%COMP%]   .chip-canceled[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #FEE2E2}.filters-bar[_ngcontent-%COMP%]   .chip-failed[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #FEF3C7}.filters-bar[_ngcontent-%COMP%]   .city-filter-field[_ngcontent-%COMP%]{width:140px;font-size:.8rem}.filters-bar[_ngcontent-%COMP%]   .city-filter-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.daily-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.1rem;color:#1e3a8a}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%]{background-color:#2563eb;color:#fff;padding:4px 10px;border-radius:12px;font-size:.8rem;font-weight:600}.daily-list-container[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:12px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]{position:relative;border-radius:12px;background-color:#fff;cursor:pointer;overflow:hidden}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;width:6px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-scheduled[_ngcontent-%COMP%]{background-color:#2563eb}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-completed[_ngcontent-%COMP%]{background-color:#16a34a}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-canceled[_ngcontent-%COMP%]{background-color:#dc2626}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-failed[_ngcontent-%COMP%]{background-color:#d97706}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding-left:16px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]{font-weight:700;color:#1e3a8a;font-size:1rem}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]{font-size:.75rem;padding:2px 8px;border-radius:6px;font-weight:600}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-scheduled[_ngcontent-%COMP%]{background-color:#dbeafe;color:#1e40af}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-canceled[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-failed[_ngcontent-%COMP%]{background-color:#fef3c7;color:#92400e}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;color:#2563eb;font-weight:600;margin-top:4px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .customer-name.clickable[_ngcontent-%COMP%]:hover{text-decoration:underline}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{padding:8px 16px;display:flex;flex-direction:column;gap:6px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.85rem;color:#475569}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#64748b}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:8px 16px 12px;display:flex;justify-content:space-between;align-items:center}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .property-tag[_ngcontent-%COMP%]{font-size:.75rem;padding:2px 6px;border-radius:4px;background-color:#f1f5f9;color:#475569}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .property-tag.commercial[_ngcontent-%COMP%]{background-color:#fef3c7;color:#92400e}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%]{color:#94a3b8}.month-view[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;padding:8px}.month-view[_ngcontent-%COMP%]   .weekdays-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;text-align:center;font-weight:700;font-size:.8rem;color:#64748b;padding-bottom:8px;box-sizing:border-box}.month-view[_ngcontent-%COMP%]   .weekdays-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1 1 0;min-width:0;box-sizing:border-box}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%;overflow:hidden}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-week-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;width:100%}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 0;min-width:0;aspect-ratio:1;border:1px solid #E2E8F0;border-radius:8px;padding:4px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell.other-month[_ngcontent-%COMP%]{opacity:.4}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell.is-today[_ngcontent-%COMP%]{border-color:#2563eb;background-color:#eff6ff}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell.is-selected[_ngcontent-%COMP%]{background-color:#dbeafe}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]{display:flex;gap:2px}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.dot-scheduled[_ngcontent-%COMP%]{background-color:#2563eb}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.dot-completed[_ngcontent-%COMP%]{background-color:#16a34a}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.dot-canceled[_ngcontent-%COMP%]{background-color:#dc2626}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .count-pill[_ngcontent-%COMP%]{align-self:flex-end;font-size:.7rem;font-weight:700;color:#1e3a8a}.week-view[_ngcontent-%COMP%]{overflow-x:auto}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,minmax(110px,1fr));gap:8px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:8px;min-height:250px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column.is-today[_ngcontent-%COMP%]{border:2px solid #2563EB}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-column-header[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid #E2E8F0;padding-bottom:4px;margin-bottom:8px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-column-header[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%]{display:block;font-size:.75rem;color:#64748b}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-column-header[_ngcontent-%COMP%]   .day-num[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;color:#1e3a8a}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card[_ngcontent-%COMP%]{padding:4px 6px;border-radius:4px;font-size:.7rem;cursor:pointer}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card.status-scheduled[_ngcontent-%COMP%]{background-color:#dbeafe;border-left:3px solid #2563EB}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card.status-completed[_ngcontent-%COMP%]{background-color:#dcfce7;border-left:3px solid #16A34A}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card.status-canceled[_ngcontent-%COMP%]{background-color:#fee2e2;border-left:3px solid #DC2626}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card[_ngcontent-%COMP%]   .mini-time[_ngcontent-%COMP%]{display:block;font-weight:700}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card[_ngcontent-%COMP%]   .mini-title[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]{background-color:#fff;padding:12px;border-radius:8px;text-align:center;cursor:pointer}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .month-title[_ngcontent-%COMP%]{display:block;font-weight:700;color:#1e3a8a}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .month-total[_ngcontent-%COMP%]{display:block;font-size:.75rem;color:#64748b;margin-bottom:6px}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:4px;font-size:.7rem}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:2px 6px;border-radius:4px;font-weight:700}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .badge-sch[_ngcontent-%COMP%]{background-color:#dbeafe;color:#1e40af}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .badge-com[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .badge-can[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}.city-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.city-view[_ngcontent-%COMP%]   .city-view-range-label[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:#64748b;padding:0 4px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:12px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;border-bottom:1px solid #E2E8F0;padding-bottom:8px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;color:#1e3a8a;flex:1}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-header[_ngcontent-%COMP%]   .city-count[_ngcontent-%COMP%]{font-size:.8rem;background-color:#e2e8f0;padding:2px 8px;border-radius:10px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-top:8px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]   .city-card-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:8px;background-color:#f8fafc;border-radius:6px;font-size:.85rem;cursor:pointer}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]   .city-card-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-weight:700}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]   .city-card-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:.7rem;padding:2px 6px;border-radius:4px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:32px;color:#94a3b8}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}']})};var On=class o{searchService=I(Q);selectedTabIndex=Oe(0);selectedPeriod=Oe("month");constructor(){Gu(()=>{this.selectedTabIndex();this.searchService.rebuildIndex();});}parseDate(a){let[t,e,n]=a.split("-").map(Number);return new Date(t,e-1,n)}periodDateRange=Bl(()=>{let a=new Date,t=this.selectedPeriod(),e=new Date(a),n=new Date(a);if(t==="week"){let l=a.getDay();e.setDate(a.getDate()-l),n.setDate(e.getDate()+6);}else t==="month"?(e=new Date(a.getFullYear(),a.getMonth(),1),n=new Date(a.getFullYear(),a.getMonth()+1,0)):t==="year"&&(e=new Date(a.getFullYear(),0,1),n=new Date(a.getFullYear(),11,31));let i=l=>{let u=l.getFullYear(),b=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0");return `${u}-${b}-${p}`};return {startStr:i(e),endStr:i(n)}});periodAppointments=Bl(()=>{let a=this.periodDateRange();return this.searchService.getAppointmentsInRange(a.startStr,a.endStr)});currentMetrics=Bl(()=>{let a=this.periodAppointments(),t=0,e=0,n=0,i=0;for(let b of a)switch(b.statusSummary){case "completed":t++;break;case "canceled":e++;break;case "failed":n++;break;default:i++;break}let l=a.length,u=l>0?Math.round(t/l*100):0;return {total:l,completed:t,canceled:e,failed:n,scheduled:i,completionRate:u}});overallSummary=Bl(()=>{let a=this.searchService.getAppointmentsInRange("2020-01-01","2030-12-31"),t=new Date,e=t.getFullYear(),n=t.getMonth(),i=0,l=0,u=0,b=0,p=0,y=0,v=0,A=0,K=0,V=new Date(t);V.setDate(t.getDate()-t.getDay()),V.setHours(0,0,0,0);let $=new Date(V);$.setDate(V.getDate()+6),$.setHours(23,59,59,999);for(let B of a){let Kt=B,ge=Kt.dateAppointment||Kt.date||Kt.appointmentDate||"";if(!ge)continue;let ht=this.parseDate(ge);ht.getFullYear()===e&&(B.statusSummary==="completed"&&v++,B.statusSummary==="canceled"&&A++,B.statusSummary==="failed"&&K++,ht.getMonth()===n&&(B.statusSummary==="completed"&&b++,B.statusSummary==="canceled"&&p++,B.statusSummary==="failed"&&y++)),ht>=V&&ht<=$&&(B.statusSummary==="completed"&&i++,B.statusSummary==="canceled"&&l++,B.statusSummary==="failed"&&u++);}return {week:{completed:i,canceled:l,failed:u},month:{completed:b,canceled:p,failed:y},year:{completed:v,canceled:A,failed:K}}});static \u0275fac=function(t){return new(t||o)};static \u0275cmp=mr({type:o,selectors:[["app-appointment-dashboard"]],decls:113,vars:15,consts:[[1,"dashboard-container"],["mat-stretch-tabs","false","mat-align-tabs","start",1,"dashboard-tabs",3,"selectedIndexChange","selectedIndex"],["label","Calendar & Agenda"],[1,"tab-content"],["label","Analytics & Performance"],[1,"tab-content","analytics-container"],[1,"analytics-header"],["appearance","outline",1,"period-select"],[3,"selectionChange","value"],["value","week"],["value","month"],["value","year"],[1,"kpi-grid"],[1,"kpi-card","completion-rate"],["mat-card-avatar",""],[1,"kpi-card","completed"],["mat-card-avatar","",1,"icon-green"],[1,"kpi-card","canceled"],["mat-card-avatar","",1,"icon-red"],[1,"kpi-card","failed"],["mat-card-avatar","",1,"icon-amber"],[1,"summary-table-card"],["mat-card-avatar","","color","primary"],[1,"summary-table-container"],[1,"metrics-table"],[1,"text-green"],[1,"text-red"],[1,"text-amber"],[1,"badge","badge-green"],[1,"badge","badge-red"],[1,"badge","badge-amber"]],template:function(t,e){t&1&&(Dl(0,"div",0)(1,"mat-tab-group",1),Fl("selectedIndexChange",function(i){return e.selectedTabIndex.set(i)}),Dl(2,"mat-tab",2)(3,"div",3),Ll(4,"app-appointment-calendar"),Ug()(),Dl(5,"mat-tab",4)(6,"div",5)(7,"div",6)(8,"h2"),TR(9,"Appointment Metrics"),Ug(),Dl(10,"mat-form-field",7)(11,"mat-label"),TR(12,"Period"),Ug(),Dl(13,"mat-select",8),Fl("selectionChange",function(i){return e.selectedPeriod.set(i.value)}),Dl(14,"mat-option",9),TR(15,"This Week"),Ug(),Dl(16,"mat-option",10),TR(17,"This Month"),Ug(),Dl(18,"mat-option",11),TR(19,"This Year"),Ug()()()(),Dl(20,"div",12)(21,"mat-card",13)(22,"mat-card-header")(23,"mat-icon",14),TR(24,"task_alt"),Ug(),Dl(25,"mat-card-title"),TR(26),Ug(),Dl(27,"mat-card-subtitle"),TR(28,"Completion Rate"),Ug()()(),Dl(29,"mat-card",15)(30,"mat-card-header")(31,"mat-icon",16),TR(32,"check_circle"),Ug(),Dl(33,"mat-card-title"),TR(34),Ug(),Dl(35,"mat-card-subtitle"),TR(36,"Completed"),Ug()()(),Dl(37,"mat-card",17)(38,"mat-card-header")(39,"mat-icon",18),TR(40,"cancel"),Ug(),Dl(41,"mat-card-title"),TR(42),Ug(),Dl(43,"mat-card-subtitle"),TR(44,"Cancelled"),Ug()()(),Dl(45,"mat-card",19)(46,"mat-card-header")(47,"mat-icon",20),TR(48,"error"),Ug(),Dl(49,"mat-card-title"),TR(50),Ug(),Dl(51,"mat-card-subtitle"),TR(52,"Failed / Missed"),Ug()()()(),Dl(53,"mat-card",21)(54,"mat-card-header")(55,"mat-icon",22),TR(56,"bar_chart"),Ug(),Dl(57,"mat-card-title"),TR(58,"Breakdown Overview"),Ug(),Dl(59,"mat-card-subtitle"),TR(60,"Weekly, Monthly & Yearly status comparison"),Ug()(),Dl(61,"mat-card-content",23)(62,"table",24)(63,"thead")(64,"tr")(65,"th"),TR(66,"Timeframe"),Ug(),Dl(67,"th",25),TR(68,"Completed"),Ug(),Dl(69,"th",26),TR(70,"Cancelled"),Ug(),Dl(71,"th",27),TR(72,"Failed"),Ug()()(),Dl(73,"tbody")(74,"tr")(75,"td")(76,"strong"),TR(77,"This Week"),Ug()(),Dl(78,"td")(79,"span",28),TR(80),Ug()(),Dl(81,"td")(82,"span",29),TR(83),Ug()(),Dl(84,"td")(85,"span",30),TR(86),Ug()()(),Dl(87,"tr")(88,"td")(89,"strong"),TR(90,"This Month"),Ug()(),Dl(91,"td")(92,"span",28),TR(93),Ug()(),Dl(94,"td")(95,"span",29),TR(96),Ug()(),Dl(97,"td")(98,"span",30),TR(99),Ug()()(),Dl(100,"tr")(101,"td")(102,"strong"),TR(103,"This Year"),Ug()(),Dl(104,"td")(105,"span",28),TR(106),Ug()(),Dl(107,"td")(108,"span",29),TR(109),Ug()(),Dl(110,"td")(111,"span",30),TR(112),Ug()()()()()()()()()()()),t&2&&(V0(),Dw("selectedIndex",e.selectedTabIndex()),V0(12),Dw("value",e.selectedPeriod()),V0(13),qg("",e.currentMetrics().completionRate,"%"),V0(8),Hw(e.currentMetrics().completed),V0(8),Hw(e.currentMetrics().canceled),V0(8),Hw(e.currentMetrics().failed),V0(30),Hw(e.overallSummary().week.completed),V0(3),Hw(e.overallSummary().week.canceled),V0(3),Hw(e.overallSummary().week.failed),V0(7),Hw(e.overallSummary().month.completed),V0(3),Hw(e.overallSummary().month.canceled),V0(3),Hw(e.overallSummary().month.failed),V0(7),Hw(e.overallSummary().year.completed),V0(3),Hw(e.overallSummary().year.canceled),V0(3),Hw(e.overallSummary().year.failed));},dependencies:[A_,vn,pe,Cn,F,Fi,Ii,N,k,H,z,B,E,S,Pt,rt,ae,Lt,J,ce,Qt],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%}.dashboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background-color:#fafafa}.dashboard-toolbar[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;padding-top:env(safe-area-inset-top);height:calc(56px + env(safe-area-inset-top));box-shadow:0 2px 6px #0000001a}.dashboard-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700}.dashboard-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.dashboard-toolbar[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{font-size:20px;opacity:.8}.dashboard-tabs[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.dashboard-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1}.tab-content[_ngcontent-%COMP%]{padding:12px;padding-bottom:calc(16px + env(safe-area-inset-bottom))}.analytics-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;color:#1e3a8a}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]{width:140px;font-size:.85rem}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}@media(min-width:600px){.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]{border-radius:12px}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:800;color:#1e3a8a}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:.75rem}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .icon-green[_ngcontent-%COMP%]{color:#16a34a}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .icon-red[_ngcontent-%COMP%]{color:#dc2626}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .icon-amber[_ngcontent-%COMP%]{color:#d97706}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]{border-radius:12px}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .summary-table-container[_ngcontent-%COMP%]{padding:8px 16px 16px;overflow-x:auto}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;text-align:left}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 8px;border-bottom:1px solid #E2E8F0;font-size:.85rem}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#64748b;font-weight:700}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:#16a34a}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:#dc2626}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .text-amber[_ngcontent-%COMP%]{color:#d97706}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:4px 8px;border-radius:6px;font-weight:700;font-size:.8rem}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge.badge-green[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge.badge-red[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge.badge-amber[_ngcontent-%COMP%]{background-color:#fef3c7;color:#92400e}"]})};export{On as AppointmentDashboardComponent};