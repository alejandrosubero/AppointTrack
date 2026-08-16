import {l as lt,d,P}from'./chunk-Bc9UkuPN.js';import {J as Jt,Y as Yt,Z as Zt$1,n as nt,e as et}from'./chunk-DgwHegyK.js';import {y as yt,w as wt}from'./chunk-B0jpGo6W.js';import {Q as Q$1,g as Ae,k as mf,l as ia,aN as si,n as Cd,$ as Ht,R as Mo,bm as ss,a0 as _y,ag as de,ax as we,a1 as At,a2 as Zt,a3 as ce,aq as cc,b4 as md,aI as ji,at as DH,F as Iv,j as j_,A as A0,r as ru,X as XT,E as Ef,b as pv,a as aT,u as uC,c as uT,I as IT,_ as _f}from'./main-JI7HYPUE.js';var te=new ce("MAT_BADGE_CONFIG"),Q="mat-badge-content",ne=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j_({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,a){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return i})(),be=(()=>{class i{_ngZone=Q$1(Ht);_elementRef=Q$1(Mo);_ariaDescriber=Q$1(ss);_renderer=Q$1(_y);_animationsDisabled=de();_idGenerator=Q$1(we);get color(){return this._color}set color(e){this._setColor(e),this._color=e;}_color;overlap;disabled=false;position;get content(){return this._content}set content(e){this._updateRenderedContent(e);}_content;get description(){return this._description}set description(e){this._updateDescription(e);}_description;size;hidden=false;_badgeElement;_inlineBadgeDescription;_isInitialized=false;_interactivityChecker=Q$1(At);_document=Q$1(Zt);constructor(){let e=Q$1(te,{optional:true}),t=Q$1(cc);t.load(ne),t.load(md),this._color=e?.color||"primary",this.overlap=e?.overlap??true,this.position=e?.position||"above after",this.size=e?.size||"medium";}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=true;}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description);}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:true})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(Q),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t);});}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t;}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription();}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription);}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0;}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`);}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Q}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove();}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ji({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,a){t&2&&Iv("mat-badge-overlap",a.overlap)("mat-badge-above",a.isAbove())("mat-badge-below",!a.isAbove())("mat-badge-before",!a.isAfter())("mat-badge-after",a.isAfter())("mat-badge-small",a.size==="small")("mat-badge-medium",a.size==="medium")("mat-badge-large",a.size==="large")("mat-badge-hidden",a.hidden||!a.content)("mat-badge-disabled",a.disabled);},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",DH],disabled:[2,"matBadgeDisabled","disabled",DH],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",DH]}})}return i})(),fe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=mf({type:i});static \u0275inj=ia({imports:[si,Cd]})}return i})();function ie(i,n){i&1&&(ru(0,"span",5),XT(1," Doesn't support multiple stops \u2014 use Google Maps "),Ef());}function ae(i,n){if(i&1&&(ru(0,"span",7),XT(1),Ef()),i&2){let e=IT();uC(),_f(" Supports all ",e.stopCount," stops ");}}var c=class i{bottomSheetRef=Q$1(d);navService=Q$1(f);data=Q$1(P);get isRoute(){return !!this.data.isRoute}get stopCount(){return this.data.addresses?.length??0}get isAppleDisabled(){return this.isRoute&&this.stopCount>1}selectMap(n){n==="apple"&&this.isAppleDisabled||(this.bottomSheetRef.dismiss(),this.isRoute&&this.data.addresses?n==="apple"?this.navService.openAppleMapsRoute(this.data.addresses):this.navService.openGoogleMapsRoute(this.data.addresses):this.data.address&&(n==="apple"?this.navService.openAppleMaps(this.data.address):this.navService.openGoogleMaps(this.data.address)));}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=j_({type:i,selectors:[["app-map-choice-sheet"]],decls:16,vars:4,consts:[[1,"map-choice-container"],[1,"sheet-title"],["mat-list-item","",3,"click"],["matListIcon","","color","primary"],["matListItemTitle",""],["matListItemLine","",1,"disabled-hint"],["matListIcon","","color","accent"],["matListItemLine","",1,"route-hint"]],template:function(e,t){e&1&&(ru(0,"div",0)(1,"h3",1),XT(2,"Open in Maps"),Ef(),ru(3,"mat-nav-list")(4,"a",2),pv("click",function(){return !t.isAppleDisabled&&t.selectMap("apple")}),ru(5,"mat-icon",3),XT(6,"map"),Ef(),ru(7,"span",4),XT(8,"Apple Maps"),Ef(),aT(9,ie,2,0,"span",5),Ef(),ru(10,"a",2),pv("click",function(){return t.selectMap("google")}),ru(11,"mat-icon",6),XT(12,"place"),Ef(),ru(13,"span",4),XT(14,"Google Maps"),Ef(),aT(15,ae,2,1,"span",7),Ef()()()),e&2&&(uC(4),Iv("disabled-option",t.isAppleDisabled),uC(5),uT(t.isAppleDisabled?9:-1),uC(6),uT(t.isRoute&&t.stopCount>1?15:-1));},dependencies:[A0,Jt,Yt,Zt$1,nt,et,yt,wt],styles:[".map-choice-container[_ngcontent-%COMP%]{padding:12px 16px 24px}.sheet-title[_ngcontent-%COMP%]{font-size:.9rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px}.disabled-option[_ngcontent-%COMP%]{opacity:.45;pointer-events:none}.disabled-hint[_ngcontent-%COMP%]{font-size:.75rem;color:#b45309}.route-hint[_ngcontent-%COMP%]{font-size:.75rem;color:#64748b}"]})};var f=class i{bottomSheet=Q$1(lt);isIOS(){let n=navigator.userAgent||navigator.vendor||window.opera;return /iPad|iPhone|iPod/.test(n)&&!window.MSStream}openMap(n){if(!n||n.trim()==="")return;let e=n.trim();this.bottomSheet.open(c,{data:{address:e}});}openRoute(n){let e=(n||[]).map(t=>(t??"").trim()).filter(t=>t.length>0);if(e.length!==0){if(e.length===1){this.openMap(e[0]);return}this.bottomSheet.open(c,{data:{addresses:e,isRoute:true}});}}openGoogleMapsRoute(n){if(!n||n.length===0)return;let e=n.map(ee=>encodeURIComponent(ee)),t=e[e.length-1],a=e.slice(0,-1).join("|"),d=a?`&waypoints=${a}`:"",X=navigator.userAgent||navigator.vendor||window.opera,Y=/android/i.test(X),p="";Y?p=`https://www.google.com/maps/dir/?api=1&destination=${t}${d}&travelmode=driving`:this.isIOS()?p=`comgooglemaps://?daddr=${t}${d}&directionsmode=driving`:p=`https://www.google.com/maps/dir/?api=1&destination=${t}${d}&travelmode=driving`,window.open(p,"_system");}openAppleMapsRoute(n){if(!n||n.length===0)return;n.length>1&&console.warn("Apple Maps no soporta rutas con m\xFAltiples paradas via URL. Navegando solo a la \xFAltima parada.");let e=n[n.length-1];this.openAppleMaps(e);}openGoogleMaps(n){let e=encodeURIComponent(n),t=navigator.userAgent||navigator.vendor||window.opera,a=/android/i.test(t),d="";a?d=`geo:0,0?q=${e}`:this.isIOS()?d=`comgooglemaps://?daddr=${e}&directionsmode=driving`:d=`https://www.google.com/maps/search/?api=1&query=${e}`,window.open(d,"_system");}openAppleMaps(n){let t=`maps://maps.apple.com/?daddr=${encodeURIComponent(n)}&dirflg=d`;window.open(t,"_system");}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Ae({token:i,factory:i.\u0275fac,providedIn:"root"})};
export{fe as a,be as b,f};