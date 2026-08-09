import {f,a as fe$1}from'./chunk-BwqP32jn.js';import'./chunk-6mKzPE5n.js';import {C as Ct}from'./chunk-CIm48jHO.js';import'./chunk-CcSGHh98.js';import {F}from'./chunk-DPTKDeLi.js';import {d as dt$1,o as ot,r as rt$1}from'./chunk-B3xltSzw.js';import'./chunk-D2NnXnEW.js';import {P as Pt,L as Lt,r}from'./chunk-uoLQbKkT.js';import {N,k,H,z,B,E,S,G}from'./chunk-Dp7QpnmZ.js';import {Z,g as go,am as mg,an as xT,G as G_,T as T0,ao as J,n as nu,p as pv,i as av,b as bf,s as sT,a as gC,j as sv,c as Sf,N as Nv,S as SD,C as Ce,y as yf,x as ia$1,z as pa,ap as Hn$1,a3 as ue,a4 as Xe,aq as Ue,ar as Em,as as Ld,at as mH,B as kS,au as ev,E as mT,k as iv,ae as yv,av as Bn$1,M as FS,P as PS,J as mv,O as Mo,a9 as qT,$ as Bt,aw as Ue$1,ag as cr,ah as Ua,a5 as an,Y as U,ax as wi,ai as gb,ak as eb,ay as Wl,az as dm,aA as yH,aB as vS,h as hS,aC as ov,aD as DS,e as gS,H as Iv,aE as ZS,F as wv,d as dt,aF as lH,U as Us,aG as S0,_ as _S,m as bT,W as Wh,o as jS,K as Kh,aH as CT,aI as Li,aJ as yS,D as Dm,aK as Ep,Q as Qy,R as RS,af as yu,a8 as dt$2,a0 as _y,ac as GI,aL as Xy,aM as Ne,aN as Tm,ab as ca,X as Gs,aO as qv,aP as p,aQ as hu,f as NS,aR as BE,aj as ob,aa as yb,aS as Ei,aT as lr,aU as mb,aV as de$1,aW as hb,v as ei,aX as Xo,aY as oa$1,aZ as Av,a_ as kv,a$ as qm}from'./main-JEN4YWZW.js';import {D,f as fe,r as re,p as pe}from'./chunk-6vewtQGV.js';import {r as rt,a as ae$1,c as ce$1,S as Sn$1,q as qe}from'./chunk-DLrLE4sN.js';import'./chunk-BewxwWyk.js';import {I as Ie,O,P as Pe}from'./chunk-BQTjj0Xk.js';import {H as H$1}from'./chunk-BH8QHrUZ.js';import {y as yn$1,g as gn$1,J as Jt,Z as Zt,I as It}from'./chunk-y3aNVyw-.js';import {g}from'./chunk-y6ppWgxJ.js';var se=["*"];function Tn(i,a){i&1&&RS(0);}var Sn=["tabListContainer"],On=["tabList"],Dn=["tabListInner"],In=["nextPaginator"],An=["previousPaginator"],En=["content"];function Rn(i,a){}var Bn=["tabBodyWrapper"],Fn=["tabHeader"];function Ln(i,a){}function Nn(i,a){if(i&1&&Xy(0,Ln,0,0,"ng-template",12),i&2){let t=NS().$implicit;sv("cdkPortalOutlet",t.templateLabel);}}function zn(i,a){if(i&1&&sT(0),i&2){let t=NS().$implicit;Nv(t.textLabel);}}function Gn(i,a){if(i&1){let t=_S();nu(0,"div",7,2),pv("click",function(){let n=Wh(t),o=n.$implicit,s=n.$index,g=NS(),h=jS(1);return Kh(g._handleClick(o,h,s))})("cdkFocusChange",function(n){let o=Wh(t).$index,s=NS();return Kh(s._tabFocusChanged(n,o))}),av(2,"span",8)(3,"div",9),nu(4,"span",10)(5,"span",11),hS(6,Nn,1,1,null,12)(7,zn,1,1),bf()()();}if(i&2){let t=a.$implicit,e=a.$index,n=jS(1),o=NS();ZS(t.labelClass),Iv("mdc-tab--active",o.selectedIndex===e),sv("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),iv("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),gC(3),sv("matRippleTrigger",n)("matRippleDisabled",t.disabled||o.disableRipple),gC(3),gS(t.templateLabel?6:7);}}function Vn(i,a){i&1&&RS(0);}function $n(i,a){if(i&1){let t=_S();nu(0,"mat-tab-body",13),pv("_onCentered",function(){Wh(t);let n=NS();return Kh(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){Wh(t);let o=NS();return Kh(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){Wh(t);let o=NS();return Kh(o._bodyCentered(n))}),bf();}if(i&2){let t=a.$implicit,e=a.$index,n=NS();ZS(t.bodyClass),sv("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n._bodyAnimationDuration)("preserveContent",n.preserveContent),iv("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e);}}var Hn=new ue("MatTabContent"),jn=(()=>{class i{template=Z(Bn$1);static \u0275fac=function(e){return new(e||i)};static \u0275dir=Li({type:i,selectors:[["","matTabContent",""]],features:[mT([{provide:Hn,useExisting:i}])]})}return i})(),Yn=new ue("MatTabLabel"),bn=new ue("MAT_TAB"),Wn=(()=>{class i extends pe{_closestTab=Z(bn,{optional:true});static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275dir=Li({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[mT([{provide:Yn,useExisting:i}]),Qy]})}return i})(),hn=new ue("MAT_TAB_GROUP"),ce=(()=>{class i{_viewContainerRef=Z(Hn$1);_closestTabGroup=Z(hn,{optional:true});disabled=false;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t);}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Xe;position=null;origin=null;isActive=false;constructor(){Z(Ue).load(Em);}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete();}ngOnInit(){this._contentPortal=new D(this._explicitContent||this._implicitContent,this._viewContainerRef);}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t);}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=G_({type:i,selectors:[["mat-tab"]],contentQueries:function(e,n,o){if(e&1&&mv(o,Wn,5)(o,jn,7,Bn$1),e&2){let s;FS(s=PS())&&(n.templateLabel=s.first),FS(s=PS())&&(n._explicitContent=s.first);}},viewQuery:function(e,n){if(e&1&&yv(Bn$1,7),e&2){let o;FS(o=PS())&&(n._implicitContent=o.first);}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&iv("id",null);},inputs:{disabled:[2,"disabled","disabled",mH],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[mT([{provide:bn,useExisting:i}]),Ld],ngContentSelectors:se,decls:1,vars:0,template:function(e,n){e&1&&(kS(),ev(0,Tn,1,0,"ng-template"));},encapsulation:2,changeDetection:1})}return i})(),ee="mdc-tab-indicator--active",pn="mdc-tab-indicator--no-transition",ae=class{_items;_currentItem;constructor(a){this._items=a;}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0;}alignToElement(a){let t=this._items.find(n=>n.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t;}}},Qn=(()=>{class i{_elementRef=Z(Mo);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=false;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement());}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ee);return}let n=e.getBoundingClientRect(),o=t.width/n.width,s=t.left-n.left;e.classList.add(pn),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(pn),e.classList.add(ee),this._inkBarContentElement.style.setProperty("transform","");}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ee);}ngOnInit(){this._createInkBarElement();}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null;}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement();}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement);}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Li({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",mH]}})}return i})();var _n=(()=>{class i extends Qn{elementRef=Z(Mo);disabled=false;focus(){this.elementRef.nativeElement.focus();}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275dir=Li({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(iv("aria-disabled",!!n.disabled),Iv("mat-mdc-tab-disabled",n.disabled));},inputs:{disabled:[2,"disabled","disabled",mH]},features:[Qy]})}return i})(),gn={passive:true},Kn=650,qn=100;function ne(i){let a=i+"";return /^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:""}var Un=(()=>{class i{_elementRef=Z(Mo);_changeDetectorRef=Z(qT);_viewportRuler=Z(Pe);_dir=Z(yu,{optional:true});_ngZone=Z(Bt);_platform=Z(U);_sharedResizeObserver=Z(qe);_injector=Z(dt$2);_renderer=Z(_y);_animationsDisabled=cr();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=false;_destroyed=new Xe;_showPaginationControls=false;_disableScrollAfter=true;_disableScrollBefore=true;_tabLabelCount;_scrollDistanceChanged=false;_keyManager;_currentTextContent;_stopScrolling=new Xe;disablePagination=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=true,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e));}_selectedIndex=0;selectFocusedIndex=new an;indexFocused=new an;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())]);}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),gn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),gn));}ngAfterContentInit(){let t=this._dir?this._dir.change:BE("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ob(32),yb(this._destroyed)),n=this._viewportRuler.change(150).pipe(yb(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab();};this._keyManager=new Ei(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>false),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),GI(o,{injector:this._injector}),eb(t,n,e,this._items.changes,this._itemsResized()).pipe(yb(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o();});}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s);});}_itemsResized(){return typeof ResizeObserver!="function"?lr:this._items.changes.pipe(gb(this._items),mb(t=>new de$1(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect();}}))),hb(1),ei(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=false,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=false,this._changeDetectorRef.markForCheck());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete();}_handleKeydown(t){if(!ca(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));}break;default:this._keyManager?.onKeydown(t);}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck();}));}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition();}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t);}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:true}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth;}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0);}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t);}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t);}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=e.elementRef.nativeElement,g,h;this._getLayoutDirection()=="ltr"?(g=o,h=g+s):(h=this._tabListInner.nativeElement.offsetWidth-o,g=h-s);let p=this.scrollDistance,y=this.scrollDistance+n;g<p?this.scrollDistance-=p-g:h>y&&(this.scrollDistance+=Math.min(h-y,g-p));}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=false;else {let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck());}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=true:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck());}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide();}_stopInterval(){this._stopScrolling.next();}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Xo(Kn,qn).pipe(yb(eb(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval();}));}_scrollTo(t){if(this.disablePagination)return {maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=true,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Li({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",mH],selectedIndex:[2,"selectedIndex","selectedIndex",yH]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Zn=(()=>{class i extends Un{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=false;ngAfterContentInit(){this._inkBar=new ae(this._items),super.ngAfterContentInit();}_itemSelected(t){t.preventDefault();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275cmp=G_({type:i,selectors:[["mat-tab-header"]],contentQueries:function(e,n,o){if(e&1&&mv(o,_n,4),e&2){let s;FS(s=PS())&&(n._items=s);}},viewQuery:function(e,n){if(e&1&&yv(Sn,7)(On,7)(Dn,7)(In,5)(An,5),e&2){let o;FS(o=PS())&&(n._tabListContainer=o.first),FS(o=PS())&&(n._tabList=o.first),FS(o=PS())&&(n._tabListInner=o.first),FS(o=PS())&&(n._nextPaginator=o.first),FS(o=PS())&&(n._previousPaginator=o.first);}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&Iv("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl");},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",mH]},features:[Qy],ngContentSelectors:se,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(kS(),nu(0,"div",5,0),pv("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(s){return n._handlePaginatorPress("before",s)})("touchend",function(){return n._stopInterval()}),av(2,"div",6),bf(),nu(3,"div",7,1),pv("keydown",function(s){return n._handleKeydown(s)}),nu(5,"div",8,2),pv("cdkObserveContent",function(){return n._onContentChanges()}),nu(7,"div",9,3),RS(9),bf()()(),nu(10,"div",10,4),pv("mousedown",function(s){return n._handlePaginatorPress("after",s)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),av(12,"div",6),bf()),e&2&&(Iv("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),sv("matRippleDisabled",n._disableScrollBefore||n.disableRipple),gC(3),Iv("_mat-animation-noopable",n._animationsDisabled),gC(2),iv("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),gC(5),Iv("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),sv("matRippleDisabled",n._disableScrollAfter||n.disableRipple));},dependencies:[dm,Ep],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})}return i})(),Xn=new ue("MAT_TABS_CONFIG"),un=(()=>{class i extends fe{_host=Z(ie);_ngZone=Z(Bt);_centeringSub=Ue$1.EMPTY;_leavingSub=Ue$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(gb(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content);});}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach());});}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe();}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Dm(i)))(n||i)}})();static \u0275dir=Li({type:i,selectors:[["","matTabBodyHost",""]],features:[Qy]})}return i})(),ie=(()=>{class i{_elementRef=Z(Mo);_dir=Z(yu,{optional:true});_ngZone=Z(Bt);_injector=Z(dt$2);_renderer=Z(_y);_diAnimationsDisabled=cr();_eventCleanups;_initialized=false;_fallbackTimer;_positionIndex;_dirChangeSubscription=Ue$1.EMPTY;_position;_previousPosition;_onCentering=new an;_beforeCentering=new an;_afterLeavingCenter=new an;_onCentered=new an(true);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=false;set position(t){this._positionIndex=t,this._computePositionAnimationState();}constructor(){if(this._dir){let t=Z(qT);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck();});}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(true),GI(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=true;}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe();}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone());};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted());}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)];});}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight);}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit();}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t);}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)));}_simulateTransitionEvents(){this._transitionStarted(),GI(()=>this._transitionDone(),{injector:this._injector});}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=G_({type:i,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&yv(un,5)(En,5),e&2){let o;FS(o=PS())&&(n._portalHost=o.first),FS(o=PS())&&(n._contentElement=o.first);}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&iv("inert",n._position==="center"?null:"");},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(nu(0,"div",1,0),Xy(2,Rn,0,0,"ng-template",2),bf()),e&2&&Iv("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center");},dependencies:[un,Ie],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})}return i})(),fn=(()=>{class i{_elementRef=Z(Mo);_changeDetectorRef=Z(qT);_ngZone=Z(Bt);_tabsSubscription=Ue$1.EMPTY;_tabLabelSubscription=Ue$1.EMPTY;_tabBodySubscription=Ue$1.EMPTY;_diAnimationsDisabled=cr();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ua;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck();}_fitInkBarToContent=false;stretchTabs=true;alignTabs=null;dynamicHeight=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t;}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=ne(t.body),this._headerAnimationDuration=ne(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=ne(t);}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t;}_contentTabIndex=null;disablePagination=false;disableRipple=false;preserveContent=false;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new an;focusChange=new an;animationDone=new an;selectedTabChange=new an(true);_groupId;_isServer=!Z(U).isBrowser;constructor(){let t=Z(Xn,{optional:true});this._groupId=Z(wi).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:false,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null;}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px";}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="");});}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex);}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck());}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=true,this.selectedTabChange.emit(this._createChangeEvent(t));});}this._changeDetectorRef.markForCheck();});}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(true));}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(gb(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges();});}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe();}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab();}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination();}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t);}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t));}_createChangeEvent(t){let e=new oe;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=eb(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck());}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return `${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px");}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit());}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n);}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e);}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex));}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=G_({type:i,selectors:[["mat-tab-group"]],contentQueries:function(e,n,o){if(e&1&&mv(o,ce,5),e&2){let s;FS(s=PS())&&(n._allTabs=s);}},viewQuery:function(e,n){if(e&1&&yv(Bn,5)(Fn,5)(ie,5),e&2){let o;FS(o=PS())&&(n._tabBodyWrapper=o.first),FS(o=PS())&&(n._tabHeader=o.first),FS(o=PS())&&(n._tabBodies=o);}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,n){e&2&&(iv("mat-align-tabs",n.alignTabs),ZS("mat-"+(n.color||"primary")),wv("--mat-tab-body-animation-duration",n._bodyAnimationDuration)("--mat-tab-header-animation-duration",n._headerAnimationDuration),Iv("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs));},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",mH],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",mH],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",mH],selectedIndex:[2,"selectedIndex","selectedIndex",yH],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",yH],disablePagination:[2,"disablePagination","disablePagination",mH],disableRipple:[2,"disableRipple","disableRipple",mH],preserveContent:[2,"preserveContent","preserveContent",mH],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[mT([{provide:hn,useExisting:i}])],ngContentSelectors:se,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(kS(),nu(0,"mat-tab-header",3,0),pv("indexFocused",function(s){return n._focusChanged(s)})("selectFocusedIndex",function(s){return n.selectedIndex=s}),vS(2,Gn,8,17,"div",4,yS),bf(),hS(4,Vn,1,0),nu(5,"div",5,1),vS(7,$n,1,10,"mat-tab-body",6,yS),bf()),e&2&&(sv("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),ov("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),gC(2),DS(n._tabs),gC(2),gS(n._isServer?4:-1),gC(),Iv("_mat-animation-noopable",n._bodyAnimationsDisabled()),gC(2),DS(n._tabs));},dependencies:[Zn,_n,Wl,dm,fe,ie],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})}return i})(),oe=class{index;tab};var yn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=yf({type:i});static \u0275inj=ia$1({imports:[pa]})}return i})();var ia=["button"],oa=["*"];function ra(i,a){if(i&1&&(nu(0,"div",2),av(1,"mat-pseudo-checkbox",6),bf()),i&2){let t=NS();gC(),sv("disabled",t.disabled);}}var Cn=new ue("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:false,hideMultipleSelectionIndicator:false,disabledInteractive:false})}),vn=new ue("MatButtonToggleGroup"),la={provide:H$1,useExisting:oa$1(()=>de),multi:true},$t=class{source;value;constructor(a,t){this.source=a,this.value=t;}},de=(()=>{class i{_changeDetector=Z(qT);_dir=Z(yu,{optional:true});_multiple=false;_disabled=false;_disabledInteractive=false;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck();}_name=Z(wi).getId("mat-button-toggle-group-");vertical=false;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value);}valueChange=new an;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck();}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck();}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new an;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck();}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck();}_hideMultipleSelectionIndicator;constructor(){let t=Z(Cn,{optional:true});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??false,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??false;}ngOnInit(){this._selectionModel=new r(this.multiple,void 0,false);}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex();}writeValue(t){this.value=t,this._changeDetector.markForCheck();}registerOnChange(t){this._controlValueAccessorChangeFn=t;}registerOnTouched(t){this._onTouched=t;}setDisabledState(t){this.disabled=t;}_keydown(t){if(this.multiple||this.disabled||ca(t))return;let n=t.target.id,o=this._buttonToggles.toArray().findIndex(g=>g.buttonId===n),s=null;switch(t.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}s&&(t.preventDefault(),s._onButtonClick(),s.focus());}_emitChangeEvent(t){let e=new $t(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e);}_syncButtonToggle(t,e,n=false,o=false){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=false),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):o=true,o?Promise.resolve().then(()=>this._updateModelValue(t,n)):this._updateModelValue(t,n);}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?false:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1;}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let s=(t+e*o+n.length)%n.length,g=n.get(s);if(g&&!g.disabled)return g}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(n=>this._selectValue(n,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(n=>n.tabIndex===-1)){for(let n of e)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=false,this.multiple||(t.tabIndex=-1);});}_selectValue(t,e){for(let n of e)if(n.value===t){n.checked=true,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value);}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck());}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Li({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,n,o){if(e&1&&mv(o,Ht,5),e&2){let s;FS(s=PS())&&(n._buttonToggles=s);}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,n){e&1&&pv("keydown",function(s){return n._keydown(s)}),e&2&&(iv("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),Iv("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"));},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",mH],value:"value",multiple:[2,"multiple","multiple",mH],disabled:[2,"disabled","disabled",mH],disabledInteractive:[2,"disabledInteractive","disabledInteractive",mH],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",mH],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",mH]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[mT([la,{provide:vn,useExisting:i}])]})}return i})(),Ht=(()=>{class i{_changeDetectorRef=Z(qT);_elementRef=Z(Mo);_focusMonitor=Z(Gs);_idGenerator=Z(wi);_animationDisabled=cr();_checked=false;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return `${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t);}_tabIndex;disableRipple=false;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t;}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck());}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t;}_disabled=false;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t;}_disabledInteractive;change=new an;constructor(){Z(Ue).load(Em);let t=Z(vn,{optional:true}),e=Z(new qv("tabindex"),{optional:true})||"",n=Z(Cn,{optional:true});this._tabIndex=go(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??false;}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=true:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked));}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,false,false,true);}focus(t){this._buttonElement.nativeElement.focus(t);}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?true:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,true),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0;}this.change.emit(new $t(this,this.value));}_markForCheck(){this._changeDetectorRef.markForCheck();}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=G_({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&yv(ia,5),e&2){let o;FS(o=PS())&&(n._buttonElement=o.first);}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&pv("focus",function(){return n.focus()}),e&2&&(iv("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),Iv("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",mH],appearance:"appearance",checked:[2,"checked","checked",mH],disabled:[2,"disabled","disabled",mH],disabledInteractive:[2,"disabledInteractive","disabledInteractive",mH]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:oa,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(kS(),nu(0,"button",1,0),pv("click",function(){return n._onButtonClick()}),hS(2,ra,2,1,"div",2),nu(3,"span",3),RS(4),bf()(),av(5,"span",4)(6,"span",5)),e&2){let o=jS(1);sv("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),iv("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),gC(2),gS(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),gC(4),sv("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled);}},dependencies:[dm,p],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return i})(),Mn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=yf({type:i});static \u0275inj=ia$1({imports:[Tm,Ht,pa]})}return i})();var xn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=yf({type:i});static \u0275inj=ia$1({imports:[hu,re,pa,O]})}return i})();var j=class i{dbService=Z(g);authService=Z(SD);searchIndex=go([]);isIndexing=go(false);lastSearchCount=go(0);constructor(){this.rebuildIndex();}async refreshData(){await this.rebuildIndex();}async rebuildIndex(){this.isIndexing.set(true);try{let a=await this.dbService.getAllCustomerReferences(),t=[];for(let n of a){let o=await this.dbService.getCustomerById(n.id);o&&t.push(o);}let e=t.map(n=>({customerId:n.id,ownerId:n.ownerId,searchBuffer:this.buildSearchBuffer(n),customerRef:n}));this.searchIndex.set(e);}finally{this.isIndexing.set(false);}}buildSearchBuffer(a){let t=(a.phones||[]).map(o=>o.phoneNumber).join(" "),e=(a.places||[]).map(o=>{let s=o.address?`${o.address.street} ${o.address.city} ${o.address.zipcode}`:"",g=o.phoneNumber?o.phoneNumber.phoneNumber:"";return `${s} ${g}`}).join(" "),n=[...a.notes||[],...(a.noteCustomer||[]).map(o=>`${o.title} ${o.content}`)].join(" ");return this.normalizeText(`${a.name} ${a.accountNumber} ${a.email} ${t} ${e} ${n}`)}normalizeText(a){return a?a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim():""}search(a){let t=a.query?a.query.trim():"",e=this.normalizeText(t),n=a.filters||{},o=a.limit||20,s=this.searchIndex();if(n.isCommercial!==void 0&&n.isCommercial!==null&&(s=s.filter(p=>p.customerRef.isCommercial===n.isCommercial)),n.city){let p=this.normalizeText(n.city);s=s.filter(y=>y.customerRef.places?.some(P=>this.normalizeText(P.address?.city||"").includes(p)));}if(n.zipcode&&(s=s.filter(p=>p.customerRef.places?.some(y=>y.address?.zipcode?.toString()===n.zipcode?.toString()))),n.hasAlerts&&(s=s.filter(p=>p.customerRef.alertCustomer&&p.customerRef.alertCustomer.length>0)),!e)return this.lastSearchCount.set(s.length),s.slice(0,o).map(p=>this.mapToSearchResult(p.customerRef,"name",100));let g=e.split(" "),h=[];for(let p of s)if(g.every(P=>p.searchBuffer.includes(P))){let{matchType:P,score:N}=this.calculateScore(p.customerRef,e,g);h.push(this.mapToSearchResult(p.customerRef,P,N));}return h.sort((p,y)=>y.score-p.score),this.lastSearchCount.set(h.length),h.slice(0,o)}async findByExactField(a,t){let e=t.trim();if(!e)return null;let o=this.searchIndex().find(s=>a==="accountNumber"?s.customerRef.accountNumber.toLowerCase()===e.toLowerCase():a==="id"?s.customerId===e:a==="email"?s.customerRef.email.toLowerCase()===e.toLowerCase():false);return o?o.customerRef:null}calculateScore(a,t,e){let n=this.normalizeText(a.name),o=this.normalizeText(a.accountNumber),s=this.normalizeText(a.email);return o===t?{matchType:"accountNumber",score:100}:n.startsWith(t)?{matchType:"name",score:90}:n.includes(t)||s.includes(t)?{matchType:"name",score:80}:a.phones?.some(p=>p.phoneNumber.includes(t))||a.places?.some(p=>p.phoneNumber?.phoneNumber.includes(t))?{matchType:"phone",score:70}:a.places?.some(p=>p.address?this.normalizeText(`${p.address.street} ${p.address.city} ${p.address.zipcode}`).includes(t):false)?{matchType:"address",score:50}:{matchType:"deep",score:30}}mapToSearchResult(a,t,e){let n=a.phones&&a.phones.length>0?a.phones[0].phoneNumber:void 0,o=(a.places||[]).map(s=>({address:s.address?s.address.street:"No address",city:s.address?`${s.address.city}, ${s.address.state}`:""}));return {id:a.id,name:a.name,accountNumber:a.accountNumber,email:a.email,isCommercial:a.isCommercial,primaryPhone:n,matchedField:t,score:e,placesSummary:o}}getAppointmentsByDate(a){let t=this.formatDateToYYYYMMDD(a),e=this.searchIndex(),n=[];for(let o of e){let s=o.customerRef;if(s.places){for(let g of s.places)if(g.services){for(let h of g.services)if(h.appointments)for(let p of h.appointments){if(p.active===false)continue;this.formatDateToYYYYMMDD(p.dateAppointment||p.date)===t&&n.push(this.mapToDailyCard(s,g,h,p));}}}}return n.sort((o,s)=>o.timeRange.localeCompare(s.timeRange))}getAppointmentsInRange(a,t){let e=this.formatDateToYYYYMMDD(a),n=this.formatDateToYYYYMMDD(t),o=this.searchIndex(),s=[];for(let g of o){let h=g.customerRef;if(h.places){for(let p of h.places)if(p.services){for(let y of p.services)if(y.appointments)for(let P of y.appointments){if(P.active===false)continue;let N=this.formatDateToYYYYMMDD(P.dateAppointment||P.date);N>=e&&N<=n&&s.push(this.mapToDailyCard(h,p,y,P));}}}}return s.sort((g,h)=>{let p=this.getCardDateKey(g).localeCompare(this.getCardDateKey(h));return p!==0?p:g.timeRange.localeCompare(h.timeRange)})}getCardDateKey(a){let t=a.appointment.dateAppointment||a.appointment.date;return this.formatDateToYYYYMMDD(t)}formatDateToYYYYMMDD(a){if(!a)return "";if(typeof a=="string")return a.split("T")[0];let t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return `${t}-${e}-${n}`}mapToDailyCard(a,t,e,n){let o="scheduled";n.status.done?o="completed":n.status.canceled?o="canceled":n.status.fail&&(o="failed");let s=a.phones&&a.phones.length>0?a.phones[0].phoneNumber:t.phoneNumber?.phoneNumber;return {appointmentId:n.id,appointment:n,serviceId:e.id,serviceName:e.name,timeInMinutes:e.timeInMinutes,placeId:t.id,addressSummary:t.address?`${t.address.street}`:"",city:t.address?t.address.city:"",zipcode:t.address?t.address.zipcode:0,customerId:a.id,customerName:a.name,accountNumber:a.accountNumber,primaryPhone:s,isCommercial:a.isCommercial,timeRange:`${n.rangeHoursStart} - ${n.rangeHoursEnd}`,statusSummary:o}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ce({token:i,factory:i.\u0275fac,providedIn:"root"})};var kn={scheduled:0,completed:0,canceled:0,failed:0,other:0};var jt=class i{searchService=Z(j);getMonthGrid(a,t,e,n){return this.getMonthWeeks(a,t,e,n).flat()}getMonthWeeks(a,t,e,n){let o=new Date(a,t,1),s=new Date(o);s.setDate(s.getDate()-s.getDay());let g=new Date(s);g.setDate(g.getDate()+41);let h=this.searchService.getAppointmentsInRange(s,g),p=this.bucketByDate(h),y=[],P=new Date(s);for(let N=0;N<6;N++){let gt=[];for(let ut=0;ut<7;ut++){let U=this.toDateKey(P),pe=p.get(U)||[];gt.push({dateKey:U,dayNumber:P.getDate(),isCurrentMonth:P.getMonth()===t,isToday:U===n,isSelected:U===e,totalCount:pe.length,statusCounts:this.countByStatus(pe)}),P.setDate(P.getDate()+1);}y.push(gt);}return y}getWeekGroups(a){let t=this.parseDateKey(a),e=new Date(t);e.setDate(e.getDate()-e.getDay());let n=new Date(e);n.setDate(n.getDate()+6);let o=this.searchService.getAppointmentsInRange(e,n),s=this.bucketByDate(o),g=this.toDateKey(new Date),h=new Intl.DateTimeFormat("en-US",{weekday:"short"}),p=[],y=new Date(e);for(let P=0;P<7;P++){let N=this.toDateKey(y),gt=(s.get(N)||[]).slice().sort((ut,U)=>ut.timeRange.localeCompare(U.timeRange));p.push({dateKey:N,dayLabel:h.format(y),dayNumber:y.getDate(),isToday:N===g,cards:gt}),y.setDate(y.getDate()+1);}return p}getYearGrid(a){let t=new Date(a,0,1),e=new Date(a,11,31),n=this.searchService.getAppointmentsInRange(t,e),o=new Intl.DateTimeFormat("en-US",{month:"short"}),s=[];for(let g=0;g<12;g++){let h=n.filter(p=>this.parseDateKey(this.getCardDateKey(p)).getMonth()===g);s.push({monthIndex:g,monthLabel:o.format(new Date(a,g,1)),year:a,totalCount:h.length,statusCounts:this.countByStatus(h)});}return s}groupByCity(a){let t=new Map;for(let e of a){let n=e.city?.trim()||"Unknown City",o=t.get(n)||[];o.push(e),t.set(n,o);}return Array.from(t.entries()).map(([e,n])=>({city:e,count:n.length,cards:n.slice().sort((o,s)=>o.timeRange.localeCompare(s.timeRange))})).sort((e,n)=>e.city.localeCompare(n.city))}getUniqueCities(a){let t=new Set(a.map(e=>e.city?.trim()).filter(e=>!!e));return Array.from(t).sort((e,n)=>e.localeCompare(n))}bucketByDate(a){let t=new Map;for(let e of a){let n=this.getCardDateKey(e),o=t.get(n)||[];o.push(e),t.set(n,o);}return t}getCardDateKey(a){let t=a.appointment.dateAppointment||a.appointment.date;return typeof t=="string"?t.split("T")[0]:t.toISOString().split("T")[0]}countByStatus(a){let t=Ne({},kn);for(let e of a)t[e.statusSummary]++;return t}toDateKey(a){let t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return `${t}-${e}-${n}`}parseDateKey(a){let[t,e,n]=a.split("-").map(Number);return new Date(t,e-1,n)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Ce({token:i,factory:i.\u0275fac,providedIn:"root"})};var me=(i,a)=>a.appointmentId,ba=(i,a)=>a[0].dateKey,Pn=(i,a)=>a.dateKey,ha=(i,a)=>a.monthIndex,_a=(i,a)=>a.city;function fa(i,a){if(i&1&&(nu(0,"mat-option",33),sT(1),bf()),i&2){let t=a.$implicit;sv("value",t),gC(),Nv(t);}}function ya(i,a){if(i&1){let t=_S();nu(0,"mat-form-field",25)(1,"mat-label"),sT(2,"City Filter"),bf(),nu(3,"mat-select",31),pv("selectionChange",function(n){Wh(t);let o=NS();return Kh(o.onCityFilterChange(n))}),nu(4,"mat-option",32),sT(5,"All Cities"),bf(),vS(6,fa,2,2,"mat-option",33,yS),bf()();}if(i&2){let t=NS();gC(3),sv("value",t.selectedCityFilter()),gC(3),DS(t.availableCities());}}function Ca(i,a){if(i&1){let t=_S();nu(0,"button",41),pv("click",function(){Wh(t);let n=NS(2);return Kh(n.toggleRouteSelectionMode())}),nu(1,"mat-icon"),sT(2),bf(),sT(3),bf();}if(i&2){let t=NS(2);Iv("active",t.routeSelectionMode()),gC(2),Nv(t.routeSelectionMode()?"close":"alt_route"),gC(),Sf(" ",t.routeSelectionMode()?"Cancel":"Select Route"," ");}}function va(i,a){if(i&1){let t=_S();nu(0,"button",42),pv("click",function(){Wh(t);let n=NS(2);return Kh(n.navigateSelectedRoute())}),nu(1,"mat-icon"),sT(2,"navigation"),bf(),sT(3),bf();}if(i&2){let t=NS(2);gC(3),Sf(" Navigate (",t.selectedStopsCount(),") ");}}function Ma(i,a){i&1&&(nu(0,"div",39)(1,"mat-icon"),sT(2,"event_busy"),bf(),nu(3,"p"),sT(4,"No appointments scheduled for this selection."),bf()());}function xa(i,a){if(i&1&&(nu(0,"mat-icon",57),sT(1),bf()),i&2){let t=NS().$implicit,e=NS(3);Iv("checked",e.isStopSelected(t)),gC(),Sf(" ",e.isStopSelected(t)?"check_circle":"radio_button_unchecked"," ");}}function ka(i,a){if(i&1&&(nu(0,"div",51)(1,"mat-icon"),sT(2,"phone"),bf(),nu(3,"a",58),pv("click",function(e){return e.stopPropagation()}),sT(4),bf()()),i&2){let t=NS().$implicit;gC(3),sv("href","tel:"+t.primaryPhone,qm),gC(),Sf(" ",t.primaryPhone," ");}}function Pa(i,a){if(i&1){let t=_S();nu(0,"mat-card",44),pv("click",function(n){let o=Wh(t).$implicit,s=NS(3);return Kh(s.routeSelectionMode()?s.toggleStopSelection(o,n):s.navigateToAppointmentDetail(o))}),av(1,"div",45),nu(2,"mat-card-header")(3,"mat-card-title",46)(4,"span",47),sT(5),bf(),nu(6,"span",48),sT(7),bf()(),nu(8,"mat-card-subtitle",49),pv("click",function(n){let o=Wh(t).$implicit,s=NS(3);return Kh(s.navigateToCustomerDetail(o.customerId,n))}),nu(9,"mat-icon"),sT(10,"person"),bf(),sT(11),bf()(),nu(12,"mat-card-content",50)(13,"div",51)(14,"mat-icon"),sT(15,"build"),bf(),nu(16,"span")(17,"strong"),sT(18,"Service:"),bf(),sT(19),bf()(),nu(20,"div",52)(21,"mat-icon"),sT(22,"place"),bf(),nu(23,"span"),sT(24),bf(),hS(25,xa,2,3,"mat-icon",53),bf(),hS(26,ka,5,2,"div",51),bf(),nu(27,"mat-card-footer",54)(28,"span",55),sT(29),bf(),nu(30,"mat-icon",56),sT(31,"chevron_right"),bf()()();}if(i&2){let t=a.$implicit,e=NS(3);Iv("selectable",e.routeSelectionMode())("selected-stop",e.isStopSelected(t)),gC(),ZS(e.getStatusClass(t.statusSummary)),gC(4),Nv(t.timeRange),gC(),ZS(e.getStatusClass(t.statusSummary)),gC(),Sf(" ",e.getStatusLabel(t.statusSummary)," "),gC(4),Av(" ",t.customerName," (Account #",t.accountNumber,") "),gC(8),Av(" ",t.serviceName," (",t.timeInMinutes," mins)"),gC(5),kv("",t.addressSummary,", ",t.city," ",t.zipcode),gC(),gS(e.routeSelectionMode()?25:-1),gC(),gS(t.primaryPhone?26:-1),gC(2),Iv("commercial",t.isCommercial),gC(),Sf(" ",t.isCommercial?"Commercial":"Residential"," ");}}function wa(i,a){if(i&1&&(nu(0,"div",40),vS(1,Pa,32,22,"mat-card",43,me),bf()),i&2){let t=NS(2);gC(),DS(t.filteredDailyAppointments());}}function Ta(i,a){if(i&1&&(nu(0,"section",30)(1,"div",34)(2,"h3"),sT(3),bf(),nu(4,"div",35)(5,"span",36),sT(6),bf(),hS(7,Ca,4,4,"button",37),hS(8,va,4,1,"button",38),bf()(),hS(9,Ma,5,0,"div",39)(10,wa,3,0,"div",40),bf()),i&2){let t=NS();gC(3),Sf("Appointments for ",t.selectedDate()),gC(3),Sf("",t.filteredDailyAppointments().length," Jobs"),gC(),gS(t.filteredDailyAppointments().length>0?7:-1),gC(),gS(t.routeSelectionMode()&&t.selectedStopsCount()>0?8:-1),gC(),gS(t.filteredDailyAppointments().length===0?9:10);}}function Sa(i,a){if(i&1&&av(0,"span",70),i&2){let t=NS(2).$implicit;sv("matTooltip",t.statusCounts.scheduled+" Scheduled");}}function Oa(i,a){if(i&1&&av(0,"span",71),i&2){let t=NS(2).$implicit;sv("matTooltip",t.statusCounts.completed+" Completed");}}function Da(i,a){if(i&1&&av(0,"span",72),i&2){let t=NS(2).$implicit;sv("matTooltip",t.statusCounts.canceled+" Cancelled");}}function Ia(i,a){if(i&1&&(nu(0,"div",69),hS(1,Sa,1,1,"span",70),hS(2,Oa,1,1,"span",71),hS(3,Da,1,1,"span",72),bf(),nu(4,"span",73),sT(5),bf()),i&2){let t=NS().$implicit;gC(),gS(t.statusCounts.scheduled>0?1:-1),gC(),gS(t.statusCounts.completed>0?2:-1),gC(),gS(t.statusCounts.canceled>0?3:-1),gC(2),Nv(t.totalCount);}}function Aa(i,a){if(i&1){let t=_S();nu(0,"div",67),pv("click",function(){let n=Wh(t).$implicit,o=NS(4);return Kh(o.selectDayAndShowList(n.dateKey))}),nu(1,"span",68),sT(2),bf(),hS(3,Ia,6,4),bf();}if(i&2){let t=a.$implicit;Iv("other-month",!t.isCurrentMonth)("is-today",t.isToday)("is-selected",t.isSelected),gC(2),Nv(t.dayNumber),gC(),gS(t.totalCount>0?3:-1);}}function Ea(i,a){if(i&1&&(nu(0,"div",65),vS(1,Aa,4,8,"div",66,Pn),bf()),i&2){let t=a.$implicit;gC(),DS(t);}}function Ra(i,a){if(i&1&&(nu(0,"section",59)(1,"div",63)(2,"div"),sT(3,"Sun"),bf(),nu(4,"div"),sT(5,"Mon"),bf(),nu(6,"div"),sT(7,"Tue"),bf(),nu(8,"div"),sT(9,"Wed"),bf(),nu(10,"div"),sT(11,"Thu"),bf(),nu(12,"div"),sT(13,"Fri"),bf(),nu(14,"div"),sT(15,"Sat"),bf()(),nu(16,"div",64),vS(17,Ea,3,0,"div",65,ba),bf()()),i&2){let t=NS(2);gC(17),DS(t.monthWeeks());}}function Ba(i,a){if(i&1){let t=_S();nu(0,"div",82),pv("click",function(n){let o=Wh(t).$implicit;return NS(4).navigateToAppointmentDetail(o),Kh(n.stopPropagation())}),nu(1,"span",83),sT(2),bf(),nu(3,"span",84),sT(4),bf()();}if(i&2){let t=a.$implicit,e=NS(4);ZS(e.getStatusClass(t.statusSummary)),gC(2),Nv(t.timeRange),gC(2),Nv(t.customerName);}}function Fa(i,a){if(i&1){let t=_S();nu(0,"div",76),pv("click",function(){let n=Wh(t).$implicit,o=NS(3);return Kh(o.selectDayAndShowList(n.dateKey))}),nu(1,"div",77)(2,"span",78),sT(3),bf(),nu(4,"span",79),sT(5),bf()(),nu(6,"div",80),vS(7,Ba,5,4,"div",81,me),bf()();}if(i&2){let t=a.$implicit;Iv("is-today",t.isToday),gC(3),Nv(t.dayLabel),gC(2),Nv(t.dayNumber),gC(2),DS(t.cards);}}function La(i,a){if(i&1&&(nu(0,"section",60)(1,"div",74),vS(2,Fa,9,4,"div",75,Pn),bf()()),i&2){let t=NS(2);gC(2),DS(t.weekGroups());}}function Na(i,a){if(i&1){let t=_S();nu(0,"div",87),pv("click",function(){let n=Wh(t).$implicit,o=NS(3);return Kh(o.selectMonthFromYearView(n.monthIndex))}),nu(1,"span",88),sT(2),bf(),nu(3,"span",89),sT(4),bf(),nu(5,"div",90)(6,"span",91),sT(7),bf(),nu(8,"span",92),sT(9),bf(),nu(10,"span",93),sT(11),bf()()();}if(i&2){let t=a.$implicit;gC(2),Nv(t.monthLabel),gC(2),Sf("",t.totalCount," Appointments"),gC(3),Nv(t.statusCounts.scheduled),gC(2),Nv(t.statusCounts.completed),gC(2),Nv(t.statusCounts.canceled);}}function za(i,a){if(i&1&&(nu(0,"section",61)(1,"div",85),vS(2,Na,12,5,"div",86,ha),bf()()),i&2){let t=NS(2);gC(2),DS(t.yearMonths());}}function Ga(i,a){if(i&1&&(nu(0,"div",39)(1,"mat-icon"),sT(2,"location_off"),bf(),nu(3,"p"),sT(4),bT(5,"date"),bf()()),i&2){let t=NS(3);gC(4),Sf("No appointments found for ",CT(5,1,t.activeDate(),"MMMM y")," with the selected filters.");}}function Va(i,a){if(i&1){let t=_S();nu(0,"div",100),pv("click",function(){let n=Wh(t).$implicit,o=NS(4);return Kh(o.navigateToAppointmentDetail(n))}),nu(1,"span",101),sT(2),bf(),nu(3,"span",102),sT(4),bf(),nu(5,"span",103),sT(6),bf(),nu(7,"span",104),sT(8),bf()();}if(i&2){let t=a.$implicit,e=NS(4);gC(2),Nv(t.timeRange),gC(2),Nv(t.customerName),gC(2),Nv(t.serviceName),gC(),ZS(e.getStatusClass(t.statusSummary)),gC(),Sf(" ",e.getStatusLabel(t.statusSummary)," ");}}function $a(i,a){if(i&1&&(nu(0,"div",95)(1,"div",96)(2,"mat-icon"),sT(3,"location_city"),bf(),nu(4,"h3"),sT(5),bf(),nu(6,"span",97),sT(7),bf()(),nu(8,"div",98),vS(9,Va,9,6,"div",99,me),bf()()),i&2){let t=a.$implicit;gC(5),Nv(t.city),gC(2),Sf("",t.count," Jobs"),gC(2),DS(t.cards);}}function Ha(i,a){if(i&1&&(nu(0,"section",62)(1,"div",94),sT(2),bT(3,"date"),bf(),hS(4,Ga,6,4,"div",39),vS(5,$a,11,2,"div",95,_a),bf()),i&2){let t=NS(2);gC(2),Sf(" Showing all cities for ",CT(3,2,t.activeDate(),"MMMM y")," "),gC(2),gS(t.cityGroups().length===0?4:-1),gC(),DS(t.cityGroups());}}function ja(i,a){if(i&1&&(hS(0,Ra,19,0,"section",59),hS(1,La,4,0,"section",60),hS(2,za,4,0,"section",61),hS(3,Ha,7,5,"section",62)),i&2){let t=NS();gS(t.viewMode()==="month"?0:-1),gC(),gS(t.viewMode()==="week"?1:-1),gC(),gS(t.viewMode()==="year"?2:-1),gC(),gS(t.viewMode()==="city"?3:-1);}}var Yt=class i{searchService=Z(j);aggregationService=Z(jt);navigationService=Z(f);router=Z(dt);appointmentSelected=lH();getTodayString(){let a=new Date,t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return `${t}-${e}-${n}`}selectedDate=go(this.getTodayString());viewMode=go("month");statusFilter=go("all");selectedCityFilter=go("all");showDailyList=go(false);routeSelectionMode=go(false);selectedStopIds=go(new Set);selectedStopsCount=xT(()=>this.selectedStopIds().size);activeDate=xT(()=>{let a=this.selectedDate(),[t,e,n]=a.split("-").map(Number);return new Date(t,e-1,n)});rawDailyAppointments=xT(()=>this.searchService.getAppointmentsByDate(this.selectedDate())??[]);filteredDailyAppointments=xT(()=>{let a=this.rawDailyAppointments(),t=this.statusFilter(),e=this.selectedCityFilter().toLowerCase();return a.filter(n=>{let o=t==="all"||n.statusSummary===t,s=e==="all"||n.city&&n.city.toLowerCase()===e;return o&&s})});monthRangeAppointments=xT(()=>{let a=this.activeDate(),t=new Date(a.getFullYear(),a.getMonth(),1),e=new Date(a.getFullYear(),a.getMonth()+1,0);return this.searchService.getAppointmentsInRange(t,e)});filteredMonthRangeAppointments=xT(()=>{let a=this.monthRangeAppointments(),t=this.statusFilter(),e=this.selectedCityFilter().toLowerCase();return a.filter(n=>{let o=t==="all"||n.statusSummary===t,s=e==="all"||n.city&&n.city.toLowerCase()===e;return o&&s})});monthGrid=xT(()=>{let a=this.activeDate();return this.aggregationService.getMonthGrid(a.getFullYear(),a.getMonth(),this.selectedDate(),this.getTodayString())});monthWeeks=xT(()=>{let a=this.activeDate();return this.aggregationService.getMonthWeeks(a.getFullYear(),a.getMonth(),this.selectedDate(),this.getTodayString())});weekGroups=xT(()=>this.aggregationService.getWeekGroups(this.selectedDate()));currentYear=xT(()=>this.activeDate().getFullYear());yearMonths=xT(()=>this.aggregationService.getYearGrid(this.currentYear()));cityGroups=xT(()=>this.aggregationService.groupByCity(this.filteredMonthRangeAppointments()));availableCities=xT(()=>this.aggregationService.getUniqueCities(this.monthRangeAppointments()));onStatusFilterChange(a){this.statusFilter.set(a);}onCityFilterChange(a){this.selectedCityFilter.set(a.value);}onViewModeChange(a){this.viewMode.set(a);}navigateDate(a){if(a==="today"){this.selectedDate.set(this.getTodayString());return}let t=new Date(this.activeDate()),e=this.viewMode();e==="month"?t.setMonth(t.getMonth()+(a==="next"?1:-1)):e==="week"?t.setDate(t.getDate()+(a==="next"?7:-7)):e==="year"?t.setFullYear(t.getFullYear()+(a==="next"?1:-1)):t.setDate(t.getDate()+(a==="next"?1:-1));let n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");this.selectedDate.set(`${n}-${o}-${s}`);}onDateInputChange(a){let t=a.target;t.value&&this.selectedDate.set(t.value);}selectDayAndShowList(a){this.selectedDate.set(a),this.showDailyList.set(true);}selectMonthFromYearView(a){let t=this.currentYear(),e=String(a+1).padStart(2,"0");this.selectedDate.set(`${t}-${e}-01`),this.viewMode.set("month");}toggleDailyList(){this.showDailyList.update(a=>!a);}navigateToAppointmentDetail(a){this.appointmentSelected.emit(a),this.router.navigate(["/main/customers",a.customerId,"places",a.placeId,"services",a.serviceId,"appointments",a.appointmentId]);}navigateToCustomerDetail(a,t){t.stopPropagation(),this.router.navigate(["/main/customers",a]);}toggleRouteSelectionMode(){this.routeSelectionMode.update(a=>!a),this.routeSelectionMode()||this.selectedStopIds.set(new Set);}toggleStopSelection(a,t){t.stopPropagation(),this.selectedStopIds.update(e=>{let n=new Set(e);return n.has(a.appointmentId)?n.delete(a.appointmentId):n.add(a.appointmentId),n});}isStopSelected(a){return this.selectedStopIds().has(a.appointmentId)}buildAddressString(a){return `${a.addressSummary}, ${a.city}, ${a.zipcode}`}navigateSelectedRoute(){let a=this.selectedStopIds();if(a.size===0)return;let t=this.filteredDailyAppointments().filter(e=>a.has(e.appointmentId)).map(e=>this.buildAddressString(e));this.navigationService.openRoute(t);}getStatusClass(a){switch(a){case "completed":return "status-completed";case "canceled":return "status-canceled";case "failed":return "status-failed";default:return "status-scheduled"}}getStatusLabel(a){switch(a){case "completed":return "Completed";case "canceled":return "Cancelled";case "failed":return "Failed";default:return "Scheduled"}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=G_({type:i,selectors:[["app-appointment-calendar"]],outputs:{appointmentSelected:"appointmentSelected"},decls:56,vars:16,consts:[["datePickerInput",""],[1,"calendar-container"],[1,"calendar-header"],[1,"date-navigation"],["mat-icon-button","","aria-label","Previous",3,"click"],[1,"current-date-display"],[1,"date-text"],["type","date",1,"hidden-native-datepicker",3,"change","value"],["mat-icon-button","","color","primary","aria-label","Select Date",3,"click"],["mat-icon-button","","aria-label","Next",3,"click"],["mat-stroked-button","",1,"today-btn",3,"click"],[1,"view-mode-selector"],["aria-label","Calendar View Mode",3,"change","value"],["value","month"],["value","week"],["value","year"],["value","city"],["mat-flat-button","",1,"toggle-list-btn",3,"click","color"],[1,"filters-bar"],["aria-label","Status filter"],[3,"click","selected"],[1,"chip-scheduled",3,"click","selected"],[1,"chip-completed",3,"click","selected"],[1,"chip-canceled",3,"click","selected"],[1,"chip-failed",3,"click","selected"],["appearance","outline",1,"city-filter-field"],["mat-stroked-button","","routerLink","/main/customers",1,"today-btn"],["matListItemIcon",""],["matListItemTitle",""],[1,"calendar-body"],[1,"daily-list-container"],[3,"selectionChange","value"],["value","all"],[3,"value"],[1,"list-header"],[1,"list-header-actions"],[1,"count-badge"],["mat-stroked-button","","matTooltip","Select stops to build a route",1,"route-btn",3,"active"],["mat-flat-button","","color","primary",1,"route-btn","navigate-btn"],[1,"empty-state"],[1,"cards-grid"],["mat-stroked-button","","matTooltip","Select stops to build a route",1,"route-btn",3,"click"],["mat-flat-button","","color","primary",1,"route-btn","navigate-btn",3,"click"],[1,"appointment-card","ripple",3,"selectable","selected-stop"],[1,"appointment-card","ripple",3,"click"],[1,"card-status-indicator"],[1,"card-title-row"],[1,"time-range"],[1,"status-badge"],[1,"customer-name","clickable",3,"click"],[1,"card-details"],[1,"detail-item"],[1,"detail-item","address-item"],[1,"stop-check-icon",3,"checked"],[1,"card-footer"],[1,"property-tag"],[1,"chevron-icon"],[1,"stop-check-icon"],[3,"click","href"],[1,"month-view"],[1,"week-view"],[1,"year-view"],[1,"city-view"],[1,"weekdays-header"],[1,"month-grid"],[1,"month-week-row"],[1,"month-cell",3,"other-month","is-today","is-selected"],[1,"month-cell",3,"click"],[1,"day-number"],[1,"dots-container"],[1,"dot","dot-scheduled",3,"matTooltip"],[1,"dot","dot-completed",3,"matTooltip"],[1,"dot","dot-canceled",3,"matTooltip"],[1,"count-pill"],[1,"week-columns"],[1,"week-column",3,"is-today"],[1,"week-column",3,"click"],[1,"week-column-header"],[1,"day-label"],[1,"day-num"],[1,"week-cards-list"],[1,"mini-card",3,"class"],[1,"mini-card",3,"click"],[1,"mini-time"],[1,"mini-title"],[1,"year-grid"],[1,"month-tile"],[1,"month-tile",3,"click"],[1,"month-title"],[1,"month-total"],[1,"status-breakdown"],[1,"badge-sch"],[1,"badge-com"],[1,"badge-can"],[1,"city-view-range-label"],[1,"city-group-card"],[1,"city-header"],[1,"city-count"],[1,"city-cards-list"],[1,"city-card-item"],[1,"city-card-item",3,"click"],[1,"time"],[1,"name"],[1,"service"],[1,"badge"]],template:function(t,e){if(t&1){let n=_S();nu(0,"div",1)(1,"header",2)(2,"div",3)(3,"button",4),pv("click",function(){return e.navigateDate("prev")}),nu(4,"mat-icon"),sT(5,"chevron_left"),bf()(),nu(6,"div",5)(7,"span",6),sT(8),bT(9,"date"),bf(),nu(10,"input",7,0),pv("change",function(s){return e.onDateInputChange(s)}),bf(),nu(12,"button",8),pv("click",function(){Wh(n);let s=jS(11);return Kh(s.showPicker())}),nu(13,"mat-icon"),sT(14,"calendar_today"),bf()()(),nu(15,"button",9),pv("click",function(){return e.navigateDate("next")}),nu(16,"mat-icon"),sT(17,"chevron_right"),bf()(),nu(18,"button",10),pv("click",function(){return e.navigateDate("today")}),sT(19," Today "),bf()(),nu(20,"div",11)(21,"mat-button-toggle-group",12),pv("change",function(s){return e.onViewModeChange(s.value)}),nu(22,"mat-button-toggle",13),sT(23,"Month"),bf(),nu(24,"mat-button-toggle",14),sT(25,"Week"),bf(),nu(26,"mat-button-toggle",15),sT(27,"Year"),bf(),nu(28,"mat-button-toggle",16),sT(29,"City"),bf()(),nu(30,"button",17),pv("click",function(){return e.toggleDailyList()}),nu(31,"mat-icon"),sT(32),bf(),sT(33),bf()()(),nu(34,"section",18)(35,"mat-chip-set",19)(36,"mat-chip-option",20),pv("click",function(){return e.onStatusFilterChange("all")}),sT(37," All "),bf(),nu(38,"mat-chip-option",21),pv("click",function(){return e.onStatusFilterChange("scheduled")}),sT(39," Scheduled "),bf(),nu(40,"mat-chip-option",22),pv("click",function(){return e.onStatusFilterChange("completed")}),sT(41," Completed "),bf(),nu(42,"mat-chip-option",23),pv("click",function(){return e.onStatusFilterChange("canceled")}),sT(43," Cancelled "),bf(),nu(44,"mat-chip-option",24),pv("click",function(){return e.onStatusFilterChange("failed")}),sT(45," Failed "),bf()()(),nu(46,"section",18),hS(47,ya,8,1,"mat-form-field",25),nu(48,"button",26)(49,"mat-icon",27),sT(50,"people"),bf(),nu(51,"span",28),sT(52,"Customers List"),bf()()(),nu(53,"main",29),hS(54,Ta,11,5,"section",30)(55,ja,4,4),bf()();}t&2&&(gC(8),Nv(CT(9,13,e.activeDate(),"EEEE, MMM d, y")),gC(2),sv("value",e.selectedDate()),gC(11),sv("value",e.viewMode()),gC(9),sv("color",e.showDailyList()?"accent":"primary"),gC(2),Nv(e.showDailyList()?"calendar_view_month":"format_list_bulleted"),gC(),Sf(" ",e.showDailyList()?"Grid View":"Day List ("+e.rawDailyAppointments().length+")"," "),gC(3),sv("selected",e.statusFilter()==="all"),gC(2),sv("selected",e.statusFilter()==="scheduled"),gC(2),sv("selected",e.statusFilter()==="completed"),gC(2),sv("selected",e.statusFilter()==="canceled"),gC(2),sv("selected",e.statusFilter()==="failed"),gC(3),gS(e.availableCities().length>0?47:-1),gC(7),gS(e.showDailyList()?54:55));},dependencies:[T0,Jt,Zt,It,Mn,de,Ht,yn$1,gn$1,N,k,z,G,B,E,S,fe$1,dt$1,ot,rt$1,Pt,rt,ae$1,Lt,J,ce$1,Sn$1,xn,Ct,Us,S0],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;width:100%;height:100%}.calendar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;background-color:#fafafa}.calendar-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:12px;border-radius:12px;box-shadow:0 1px 4px #0000000d}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .current-date-display[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .current-date-display[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:700;color:#1e3a8a}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .current-date-display[_ngcontent-%COMP%]   .hidden-native-datepicker[_ngcontent-%COMP%]{display:none}.calendar-header[_ngcontent-%COMP%]   .date-navigation[_ngcontent-%COMP%]   .today-btn[_ngcontent-%COMP%]{border-color:#2563eb;color:#2563eb}.calendar-header[_ngcontent-%COMP%]   .view-mode-selector[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.calendar-header[_ngcontent-%COMP%]   .view-mode-selector[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{border-radius:8px;height:36px}.calendar-header[_ngcontent-%COMP%]   .view-mode-selector[_ngcontent-%COMP%]   .toggle-list-btn[_ngcontent-%COMP%]{height:36px;font-size:.85rem}.filters-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;overflow-x:auto}.filters-bar[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.filters-bar[_ngcontent-%COMP%]   .chip-scheduled[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #DBEAFE}.filters-bar[_ngcontent-%COMP%]   .chip-completed[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #DCFCE7}.filters-bar[_ngcontent-%COMP%]   .chip-canceled[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #FEE2E2}.filters-bar[_ngcontent-%COMP%]   .chip-failed[_ngcontent-%COMP%]{--mdc-chip-elevated-container-color: #FEF3C7}.filters-bar[_ngcontent-%COMP%]   .city-filter-field[_ngcontent-%COMP%]{width:140px;font-size:.8rem}.filters-bar[_ngcontent-%COMP%]   .city-filter-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.daily-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.1rem;color:#1e3a8a}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:auto}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%]{background-color:#2563eb;color:#fff;padding:4px 10px;border-radius:12px;font-size:.8rem;font-weight:600}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .route-btn[_ngcontent-%COMP%]{font-size:.8rem;border-radius:20px;line-height:32px}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .route-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;margin-right:2px;vertical-align:middle}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .route-btn.active[_ngcontent-%COMP%]{border-color:#2563eb;color:#2563eb;background-color:#eff6ff}.daily-list-container[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .navigate-btn[_ngcontent-%COMP%]{box-shadow:none}.daily-list-container[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:12px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]{position:relative;border-radius:12px;background-color:#fff;cursor:pointer;overflow:hidden;transition:box-shadow .15s ease,transform .1s ease}.daily-list-container[_ngcontent-%COMP%]   .appointment-card.selectable[_ngcontent-%COMP%]{cursor:pointer}.daily-list-container[_ngcontent-%COMP%]   .appointment-card.selected-stop[_ngcontent-%COMP%]{box-shadow:0 0 0 2px #2563eb}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;width:6px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-scheduled[_ngcontent-%COMP%]{background-color:#2563eb}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-completed[_ngcontent-%COMP%]{background-color:#16a34a}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-canceled[_ngcontent-%COMP%]{background-color:#dc2626}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-status-indicator.status-failed[_ngcontent-%COMP%]{background-color:#d97706}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding-left:16px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]{font-weight:700;color:#1e3a8a;font-size:1rem}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]{font-size:.75rem;padding:2px 8px;border-radius:6px;font-weight:600}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-scheduled[_ngcontent-%COMP%]{background-color:#dbeafe;color:#1e40af}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-canceled[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-title-row[_ngcontent-%COMP%]   .status-badge.status-failed[_ngcontent-%COMP%]{background-color:#fef3c7;color:#92400e}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;color:#2563eb;font-weight:600;margin-top:4px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .customer-name.clickable[_ngcontent-%COMP%]:hover{text-decoration:underline}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{padding:8px 16px;display:flex;flex-direction:column;gap:6px}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.85rem;color:#475569}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#64748b}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item.address-item[_ngcontent-%COMP%]   .stop-check-icon[_ngcontent-%COMP%]{margin-left:auto;color:#cbd5e1;transition:color .15s ease,transform .15s ease}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .detail-item.address-item[_ngcontent-%COMP%]   .stop-check-icon.checked[_ngcontent-%COMP%]{color:#2563eb;transform:scale(1.05)}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:8px 16px 12px;display:flex;justify-content:space-between;align-items:center}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .property-tag[_ngcontent-%COMP%]{font-size:.75rem;padding:2px 6px;border-radius:4px;background-color:#f1f5f9;color:#475569}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .property-tag.commercial[_ngcontent-%COMP%]{background-color:#fef3c7;color:#92400e}.daily-list-container[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%]{color:#94a3b8}.month-view[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;padding:8px}.month-view[_ngcontent-%COMP%]   .weekdays-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;text-align:center;font-weight:700;font-size:.8rem;color:#64748b;padding-bottom:8px;box-sizing:border-box}.month-view[_ngcontent-%COMP%]   .weekdays-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1 1 0;min-width:0;box-sizing:border-box}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%;overflow:hidden}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-week-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;width:100%}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 0;min-width:0;aspect-ratio:1;border:1px solid #E2E8F0;border-radius:8px;padding:4px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell.other-month[_ngcontent-%COMP%]{opacity:.4}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell.is-today[_ngcontent-%COMP%]{border-color:#2563eb;background-color:#eff6ff}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell.is-selected[_ngcontent-%COMP%]{background-color:#dbeafe}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]{display:flex;gap:2px}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.dot-scheduled[_ngcontent-%COMP%]{background-color:#2563eb}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.dot-completed[_ngcontent-%COMP%]{background-color:#16a34a}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .dots-container[_ngcontent-%COMP%]   .dot.dot-canceled[_ngcontent-%COMP%]{background-color:#dc2626}.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-cell[_ngcontent-%COMP%]   .count-pill[_ngcontent-%COMP%]{align-self:flex-end;font-size:.7rem;font-weight:700;color:#1e3a8a}.week-view[_ngcontent-%COMP%]{overflow-x:auto}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,minmax(110px,1fr));gap:8px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:8px;min-height:250px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column.is-today[_ngcontent-%COMP%]{border:2px solid #2563EB}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-column-header[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid #E2E8F0;padding-bottom:4px;margin-bottom:8px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-column-header[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%]{display:block;font-size:.75rem;color:#64748b}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-column-header[_ngcontent-%COMP%]   .day-num[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;color:#1e3a8a}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card[_ngcontent-%COMP%]{padding:4px 6px;border-radius:4px;font-size:.7rem;cursor:pointer}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card.status-scheduled[_ngcontent-%COMP%]{background-color:#dbeafe;border-left:3px solid #2563EB}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card.status-completed[_ngcontent-%COMP%]{background-color:#dcfce7;border-left:3px solid #16A34A}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card.status-canceled[_ngcontent-%COMP%]{background-color:#fee2e2;border-left:3px solid #DC2626}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card[_ngcontent-%COMP%]   .mini-time[_ngcontent-%COMP%]{display:block;font-weight:700}.week-view[_ngcontent-%COMP%]   .week-columns[_ngcontent-%COMP%]   .week-column[_ngcontent-%COMP%]   .week-cards-list[_ngcontent-%COMP%]   .mini-card[_ngcontent-%COMP%]   .mini-title[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]{background-color:#fff;padding:12px;border-radius:8px;text-align:center;cursor:pointer}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .month-title[_ngcontent-%COMP%]{display:block;font-weight:700;color:#1e3a8a}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .month-total[_ngcontent-%COMP%]{display:block;font-size:.75rem;color:#64748b;margin-bottom:6px}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:4px;font-size:.7rem}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:2px 6px;border-radius:4px;font-weight:700}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .badge-sch[_ngcontent-%COMP%]{background-color:#dbeafe;color:#1e40af}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .badge-com[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.year-view[_ngcontent-%COMP%]   .year-grid[_ngcontent-%COMP%]   .month-tile[_ngcontent-%COMP%]   .status-breakdown[_ngcontent-%COMP%]   .badge-can[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}.city-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.city-view[_ngcontent-%COMP%]   .city-view-range-label[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:#64748b;padding:0 4px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:12px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;border-bottom:1px solid #E2E8F0;padding-bottom:8px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;color:#1e3a8a;flex:1}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-header[_ngcontent-%COMP%]   .city-count[_ngcontent-%COMP%]{font-size:.8rem;background-color:#e2e8f0;padding:2px 8px;border-radius:10px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-top:8px}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]   .city-card-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:8px;background-color:#f8fafc;border-radius:6px;font-size:.85rem;cursor:pointer}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]   .city-card-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-weight:700}.city-view[_ngcontent-%COMP%]   .city-group-card[_ngcontent-%COMP%]   .city-cards-list[_ngcontent-%COMP%]   .city-card-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:.7rem;padding:2px 6px;border-radius:4px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:32px;color:#94a3b8}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}']})};var wn=class i{searchService=Z(j);selectedTabIndex=go(0);selectedPeriod=go("month");constructor(){mg(()=>{this.selectedTabIndex();this.searchService.rebuildIndex();});}getRangeStrings(a){let t=new Date,e=new Date(t),n=new Date(t);if(a==="week"){let s=t.getDay();e.setDate(t.getDate()-s),n.setDate(e.getDate()+6);}else a==="month"?(e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0)):a==="year"&&(e=new Date(t.getFullYear(),0,1),n=new Date(t.getFullYear(),11,31));let o=s=>{let g=s.getFullYear(),h=String(s.getMonth()+1).padStart(2,"0"),p=String(s.getDate()).padStart(2,"0");return `${g}-${h}-${p}`};return {startStr:o(e),endStr:o(n)}}countByStatus(a){let t=0,e=0,n=0;for(let o of a)switch(o.statusSummary){case "completed":t++;break;case "canceled":e++;break;case "failed":n++;break}return {completed:t,canceled:e,failed:n}}periodDateRange=xT(()=>this.getRangeStrings(this.selectedPeriod()));periodAppointments=xT(()=>{let a=this.periodDateRange();return this.searchService.getAppointmentsInRange(a.startStr,a.endStr)});currentMetrics=xT(()=>{let a=this.periodAppointments(),t=0,e=0,n=0,o=0;for(let h of a)switch(h.statusSummary){case "completed":t++;break;case "canceled":e++;break;case "failed":n++;break;default:o++;break}let s=a.length,g=s>0?Math.round(t/s*100):0;return {total:s,completed:t,canceled:e,failed:n,scheduled:o,completionRate:g}});overallSummary=xT(()=>{let a=this.getRangeStrings("week"),t=this.getRangeStrings("month"),e=this.getRangeStrings("year"),n=this.searchService.getAppointmentsInRange(a.startStr,a.endStr),o=this.searchService.getAppointmentsInRange(t.startStr,t.endStr),s=this.searchService.getAppointmentsInRange(e.startStr,e.endStr);return {week:this.countByStatus(n),month:this.countByStatus(o),year:this.countByStatus(s)}});static \u0275fac=function(t){return new(t||i)};static \u0275cmp=G_({type:i,selectors:[["app-appointment-dashboard"]],decls:113,vars:15,consts:[[1,"dashboard-container"],["mat-stretch-tabs","false","mat-align-tabs","start",1,"dashboard-tabs",3,"selectedIndexChange","selectedIndex"],["label","Calendar & Agenda"],[1,"tab-content"],["label","Analytics & Performance"],[1,"tab-content","analytics-container"],[1,"analytics-header"],["appearance","outline",1,"period-select"],[3,"selectionChange","value"],["value","week"],["value","month"],["value","year"],[1,"kpi-grid"],[1,"kpi-card","completion-rate"],["mat-card-avatar",""],[1,"kpi-card","completed"],["mat-card-avatar","",1,"icon-green"],[1,"kpi-card","canceled"],["mat-card-avatar","",1,"icon-red"],[1,"kpi-card","failed"],["mat-card-avatar","",1,"icon-amber"],[1,"summary-table-card"],["mat-card-avatar","","color","primary"],[1,"summary-table-container"],[1,"metrics-table"],[1,"text-green"],[1,"text-red"],[1,"text-amber"],[1,"badge","badge-green"],[1,"badge","badge-red"],[1,"badge","badge-amber"]],template:function(t,e){t&1&&(nu(0,"div",0)(1,"mat-tab-group",1),pv("selectedIndexChange",function(o){return e.selectedTabIndex.set(o)}),nu(2,"mat-tab",2)(3,"div",3),av(4,"app-appointment-calendar"),bf()(),nu(5,"mat-tab",4)(6,"div",5)(7,"div",6)(8,"h2"),sT(9,"Appointment Metrics"),bf(),nu(10,"mat-form-field",7)(11,"mat-label"),sT(12,"Period"),bf(),nu(13,"mat-select",8),pv("selectionChange",function(o){return e.selectedPeriod.set(o.value)}),nu(14,"mat-option",9),sT(15,"This Week"),bf(),nu(16,"mat-option",10),sT(17,"This Month"),bf(),nu(18,"mat-option",11),sT(19,"This Year"),bf()()()(),nu(20,"div",12)(21,"mat-card",13)(22,"mat-card-header")(23,"mat-icon",14),sT(24,"task_alt"),bf(),nu(25,"mat-card-title"),sT(26),bf(),nu(27,"mat-card-subtitle"),sT(28,"Completion Rate"),bf()()(),nu(29,"mat-card",15)(30,"mat-card-header")(31,"mat-icon",16),sT(32,"check_circle"),bf(),nu(33,"mat-card-title"),sT(34),bf(),nu(35,"mat-card-subtitle"),sT(36,"Completed"),bf()()(),nu(37,"mat-card",17)(38,"mat-card-header")(39,"mat-icon",18),sT(40,"cancel"),bf(),nu(41,"mat-card-title"),sT(42),bf(),nu(43,"mat-card-subtitle"),sT(44,"Cancelled"),bf()()(),nu(45,"mat-card",19)(46,"mat-card-header")(47,"mat-icon",20),sT(48,"error"),bf(),nu(49,"mat-card-title"),sT(50),bf(),nu(51,"mat-card-subtitle"),sT(52,"Failed / Missed"),bf()()()(),nu(53,"mat-card",21)(54,"mat-card-header")(55,"mat-icon",22),sT(56,"bar_chart"),bf(),nu(57,"mat-card-title"),sT(58,"Breakdown Overview"),bf(),nu(59,"mat-card-subtitle"),sT(60,"Weekly, Monthly & Yearly status comparison"),bf()(),nu(61,"mat-card-content",23)(62,"table",24)(63,"thead")(64,"tr")(65,"th"),sT(66,"Timeframe"),bf(),nu(67,"th",25),sT(68,"Completed"),bf(),nu(69,"th",26),sT(70,"Cancelled"),bf(),nu(71,"th",27),sT(72,"Failed"),bf()()(),nu(73,"tbody")(74,"tr")(75,"td")(76,"strong"),sT(77,"This Week"),bf()(),nu(78,"td")(79,"span",28),sT(80),bf()(),nu(81,"td")(82,"span",29),sT(83),bf()(),nu(84,"td")(85,"span",30),sT(86),bf()()(),nu(87,"tr")(88,"td")(89,"strong"),sT(90,"This Month"),bf()(),nu(91,"td")(92,"span",28),sT(93),bf()(),nu(94,"td")(95,"span",29),sT(96),bf()(),nu(97,"td")(98,"span",30),sT(99),bf()()(),nu(100,"tr")(101,"td")(102,"strong"),sT(103,"This Year"),bf()(),nu(104,"td")(105,"span",28),sT(106),bf()(),nu(107,"td")(108,"span",29),sT(109),bf()(),nu(110,"td")(111,"span",30),sT(112),bf()()()()()()()()()()()),t&2&&(gC(),sv("selectedIndex",e.selectedTabIndex()),gC(12),sv("value",e.selectedPeriod()),gC(13),Sf("",e.currentMetrics().completionRate,"%"),gC(8),Nv(e.currentMetrics().completed),gC(8),Nv(e.currentMetrics().canceled),gC(8),Nv(e.currentMetrics().failed),gC(30),Nv(e.overallSummary().week.completed),gC(3),Nv(e.overallSummary().week.canceled),gC(3),Nv(e.overallSummary().week.failed),gC(7),Nv(e.overallSummary().month.completed),gC(3),Nv(e.overallSummary().month.canceled),gC(3),Nv(e.overallSummary().month.failed),gC(7),Nv(e.overallSummary().year.completed),gC(3),Nv(e.overallSummary().year.canceled),gC(3),Nv(e.overallSummary().year.failed));},dependencies:[T0,yn,ce,fn,F,yn$1,gn$1,N,k,H,z,B,E,S,Pt,rt,ae$1,Lt,J,ce$1,Yt],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%}.dashboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background-color:#fafafa}.dashboard-toolbar[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;padding-top:env(safe-area-inset-top);height:calc(56px + env(safe-area-inset-top));box-shadow:0 2px 6px #0000001a}.dashboard-toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700}.dashboard-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.dashboard-toolbar[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{font-size:20px;opacity:.8}.dashboard-tabs[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.dashboard-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1}.tab-content[_ngcontent-%COMP%]{padding:12px;padding-bottom:calc(16px + env(safe-area-inset-bottom))}.analytics-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;color:#1e3a8a}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]{width:140px;font-size:.85rem}.analytics-container[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}@media(min-width:600px){.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]{border-radius:12px}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:800;color:#1e3a8a}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:.75rem}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .icon-green[_ngcontent-%COMP%]{color:#16a34a}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .icon-red[_ngcontent-%COMP%]{color:#dc2626}.analytics-container[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .icon-amber[_ngcontent-%COMP%]{color:#d97706}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]{border-radius:12px}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .summary-table-container[_ngcontent-%COMP%]{padding:8px 16px 16px;overflow-x:auto}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;text-align:left}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 8px;border-bottom:1px solid #E2E8F0;font-size:.85rem}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#64748b;font-weight:700}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:#16a34a}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:#dc2626}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .text-amber[_ngcontent-%COMP%]{color:#d97706}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:4px 8px;border-radius:6px;font-weight:700;font-size:.8rem}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge.badge-green[_ngcontent-%COMP%]{background-color:#dcfce7;color:#166534}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge.badge-red[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b}.analytics-container[_ngcontent-%COMP%]   .summary-table-card[_ngcontent-%COMP%]   .metrics-table[_ngcontent-%COMP%]   .badge.badge-amber[_ngcontent-%COMP%]{background-color:#fef3c7;color:#92400e}"]})};export{wn as AppointmentDashboardComponent};