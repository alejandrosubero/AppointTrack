import'./chunk-8r166He1.js';import {w as we,t as te$1}from'./chunk-euFSXR2-.js';import {M as Mt,X as Xt$1}from'./chunk-B-OFtman.js';import {Z,S as SD,d as dt,g as go,G as G_,T as T0,U as Us,ao as J,n as nu,s as sT,b as bf,aL as Xy,i as av,t as t_,p as pv,aB as vS,a as gC,j as sv,r as r_,aD as DS,b0 as mS,y as yf,x as ia,aN as Tm,z as pa,b1 as d,ap as Hn$1,aw as Ue,aU as mb,a6 as on$1,ai as gb,D as Dm,Q as Qy,B as kS,E as mT,J as mv,M as FS,P as PS,aI as Li,$ as Bt,a0 as _y,ag as cr,ah as Ua,a5 as an$1,b2 as dH,Y as U,O as Mo,aa as yb,b3 as w0,h as hS,b4 as _T,e as gS,F as wv,H as Iv,ae as yv,b5 as dv,f as NS,c as Sf,_ as _S,W as Wh,K as Kh,X as Gs,aq as Ue$1,ar as Em,b6 as tr,a9 as qT,az as dm,aE as ZS,b7 as fT,an as xT,a3 as ue,as as Ld,at as mH,au as ev,av as Bn$1,af as yu,a4 as Xe,ax as wi,aS as Ei,aR as BE,ab as ca,b8 as fi,aA as yH,R as RS,aJ as yS,k as iv,b9 as So,ba as lv,bb as vT,N as Nv,o as jS,bc as yT}from'./main-4ZAKMMBN.js';import {f,u}from'./chunk-D2oV9EiP.js';import {P as Pt,L as Lt}from'./chunk-Dyptq_Ys.js';import {N,k,z,B as B$1,S}from'./chunk-mdQ55Zmq.js';import {V as Vt,D,f as fe$1}from'./chunk-CcoSRN8w.js';import {c as ce,r as rt,a as ae,z as zt,S as Sn$1,E as En$1}from'./chunk-BzDMrcgb.js';import'./chunk-DvOr91_g.js';import {L as Lo,U as Ut$1,H as Ho,a as Uo,P as Pe,Y as Yn,B as Bo,j as jo,n as no,t as to,e as en,d as nn$1,l as li,s as si,b as so,F as Fi,I as Ii,m}from'./chunk-DtjENb3l.js';import {g}from'./chunk-DY7XfcvL.js';var tn=["*"];function nn(n,s){n&1&&RS(0);}var ye=(()=>{class n{_elementRef=Z(Mo);focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Ce=(()=>{class n{template=Z(Bn$1);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var B={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},rn=new ue("STEPPER_GLOBAL_OPTIONS"),fe=(()=>{class n{_stepperOptions;_stepper=Z(j);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e);}_interacted=go(false);interactedStream=new an$1;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e);}_state=go(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e);}_editable=go(true);optional=false;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e);}_completedOverride=go(null);index=go(-1);isSelected=xT(()=>this._stepper.selectedIndex===this.index());indicatorType=xT(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??B.NUMBER,c=this._editable();return this._showError()&&this.hasError&&!e?B.ERROR:this._displayDefaultIndicatorType?!t||e?B.NUMBER:c?B.EDIT:B.DONE:t&&!e?B.DONE:t&&e?i:c&&e?B.EDIT:i});isNavigable=xT(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e);}_customError=go(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=Z(rn,{optional:true});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==false;}select(){this._stepper.selected=this;}reset(){this._interacted.set(false),this._completedOverride()!=null&&this._completedOverride.set(false),this._customError()!=null&&this._customError.set(false),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset());}ngOnChanges(){this._stepper._stateChanged();}_markAsInteracted(){this._interacted()||(this._interacted.set(true),this.interactedStream.emit(this));}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=G_({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,c){if(t&1&&mv(c,Ce,5)(c,m,5),t&2){let d;FS(d=PS())&&(i.stepLabel=d.first),FS(d=PS())&&(i._childForms=d);}},viewQuery:function(t,i){if(t&1&&yv(Bn$1,7),t&2){let c;FS(c=PS())&&(i.content=c.first);}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",mH],optional:[2,"optional","optional",mH],completed:[2,"completed","completed",mH],hasError:[2,"hasError","hasError",mH]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Ld],ngContentSelectors:tn,decls:1,vars:0,template:function(t,i){t&1&&(kS(),ev(0,nn,1,0,"ng-template"));},encapsulation:2})}return n})(),j=(()=>{class n{_dir=Z(yu,{optional:true});_changeDetectorRef=Z(qT);_elementRef=Z(Mo);_destroyed=new Xe;_keyManager;_steps;steps=new Ua;_stepHeader;_sortedHeaders=new Ua;get linear(){return this._linear()}set linear(e){this._linear.set(e);}_linear=go(false);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e);}_selectedIndex=go(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1;}selectionChange=new an$1;selectedIndexChange=new an$1;_groupId=Z(wi).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical");}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(gb(this._steps),yb(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges();});}ngAfterViewInit(){if(this._stepHeader.changes.pipe(gb(this._stepHeader),yb(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges();}),this._keyManager=new Ei(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:BE()).pipe(gb(this._layoutDirection()),yb(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0));}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted();}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete();}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1);}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0);}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged();}_getStepLabelId(e){return `${this._groupId}-label-${e}`}_getStepContentId(e){return `${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck();}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged();}_onKeydown(e){let t=ca(e),i=e.keyCode,c=this._keyManager;c?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=c.activeItemIndex,e.preventDefault()):c?.setFocusOrigin("keyboard").onKeydown(e);}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return (i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):false}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=fi();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,c){if(t&1&&mv(c,fe,5)(c,ye,5),t&2){let d;FS(d=PS())&&(i._steps=d),FS(d=PS())&&(i._stepHeader=d);}},inputs:{linear:[2,"linear","linear",mH],selectedIndex:[2,"selectedIndex","selectedIndex",yH],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),Qt=(()=>{class n{_stepper=Z(j);type="submit";static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,i){t&1&&pv("click",function(){return i._stepper.next()}),t&2&&dv("type",i.type);},inputs:{type:"type"}})}return n})(),qt=(()=>{class n{_stepper=Z(j);type="button";static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){t&1&&pv("click",function(){return i._stepper.previous()}),t&2&&dv("type",i.type);},inputs:{type:"type"}})}return n})(),jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=yf({type:n});static \u0275inj=ia({imports:[pa]})}return n})();var an=(n,s,e)=>({index:n,active:s,optional:e});function on(n,s){if(n&1&&lv(0,2),n&2){let e=NS();sv("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",vT(2,an,e.index,e.active,e.optional));}}function sn(n,s){if(n&1&&(nu(0,"span",7),sT(1),bf()),n&2){let e=NS(2);gC(),Nv(e._getDefaultTextForState(e.state));}}function ln(n,s){if(n&1&&(nu(0,"span",8),sT(1),bf()),n&2){let e=NS(3);gC(),Nv(e._intl.completedLabel);}}function cn(n,s){if(n&1&&(nu(0,"span",8),sT(1),bf()),n&2){let e=NS(3);gC(),Nv(e._intl.editableLabel);}}function pn(n,s){if(n&1&&(hS(0,ln,2,1,"span",8)(1,cn,2,1,"span",8),nu(2,"mat-icon",7),sT(3),bf()),n&2){let e=NS(2);gS(e.state==="done"?0:e.state==="edit"?1:-1),gC(3),Nv(e._getDefaultTextForState(e.state));}}function dn(n,s){if(n&1&&hS(0,sn,2,1,"span",7)(1,pn,4,2),n&2){let t=NS();gS((t.state)==="number"?0:1);}}function mn(n,s){n&1&&(nu(0,"div",4),lv(1,9),bf()),n&2&&(gC(),sv("ngTemplateOutlet",s.template));}function un(n,s){if(n&1&&(nu(0,"div",4),sT(1),bf()),n&2){let e=NS();gC(),Nv(e.label);}}function hn(n,s){if(n&1&&(nu(0,"div",5),sT(1),bf()),n&2){let e=NS();gC(),Nv(e._intl.optionalLabel);}}function fn(n,s){if(n&1&&(nu(0,"div",6),sT(1),bf()),n&2){let e=NS();gC(),Nv(e.errorMessage);}}var Ut=["*"];function _n(n,s){}function gn(n,s){if(n&1&&(RS(0),Xy(1,_n,0,0,"ng-template",0)),n&2){let e=NS();gC(),sv("cdkPortalOutlet",e._portal);}}var vn=["animatedContainer"],Wt=n=>({steps:n}),Kt=n=>({step:n});function bn(n,s){n&1&&RS(0);}function yn(n,s){if(n&1&&(nu(0,"div",5),lv(1,9)(2,6),bf()),n&2){let e=NS(2),t=jS(6);gC(),sv("ngTemplateOutlet",e.headerPrefix()),gC(),sv("ngTemplateOutlet",t)("ngTemplateOutletContext",yT(3,Wt,e.steps));}}function Cn(n,s){if(n&1&&lv(0,6),n&2){let e=NS(2),t=jS(6);sv("ngTemplateOutlet",t)("ngTemplateOutletContext",yT(2,Wt,e.steps));}}function xn(n,s){if(n&1&&(nu(0,"div",10,2),lv(2,9),bf()),n&2){let e=s.$implicit,t=s.$index,i=NS(2);ZS("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),sv("id",i._getStepContentId(t)),iv("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),gC(2),sv("ngTemplateOutlet",e.content);}}function Mn(n,s){if(n&1&&(nu(0,"div",3),hS(1,yn,3,5,"div",5)(2,Cn,1,4,"ng-container",6),nu(3,"div",7),vS(4,xn,3,6,"div",8,yS),bf()()),n&2){let e=NS();gC(),gS(e.headerPrefix()?1:2),gC(3),DS(e.steps);}}function Sn(n,s){if(n&1&&lv(0,9),n&2){let e=NS(2);sv("ngTemplateOutlet",e.headerPrefix());}}function Pn(n,s){if(n&1&&(nu(0,"div",11),lv(1,6),nu(2,"div",12,2)(4,"div",13)(5,"div",14),lv(6,9),bf()()()()),n&2){let e=s.$implicit,t=s.$index,i=s.$index,c=s.$count,d=NS(2),y=jS(4);gC(),sv("ngTemplateOutlet",y)("ngTemplateOutletContext",yT(11,Kt,e)),gC(),Iv("mat-stepper-vertical-line",i!==c-1)("mat-vertical-content-container-active",d.selectedIndex===t),iv("inert",d.selectedIndex===t?null:"")("aria-label",d.ariaLabel),gC(2),sv("id",d._getStepContentId(t)),iv("aria-labelledby",d._getStepLabelId(t)),gC(2),sv("ngTemplateOutlet",e.content);}}function On(n,s){if(n&1&&(nu(0,"div",4),hS(1,Sn,1,1,"ng-container",9),vS(2,Pn,7,13,"div",11,yS),bf()),n&2){let e=NS();gC(),gS(e.headerPrefix()?1:-1),gC(),DS(e.steps);}}function En(n,s){if(n&1){let e=_S();nu(0,"mat-step-header",15),pv("click",function(){let i=Wh(e).step;return Kh(i.select())})("keydown",function(i){Wh(e);let c=NS();return Kh(c._onKeydown(i))}),bf();}if(n&2){let e=s.step,t=NS();Iv("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),sv("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),iv("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:true);}}function wn(n,s){n&1&&av(0,"div",17);}function In(n,s){if(n&1&&(lv(0,6),hS(1,wn,1,0,"div",17)),n&2){let e=s.$implicit,t=s.$index,i=s.$count;NS(2);let c=jS(4);sv("ngTemplateOutlet",c)("ngTemplateOutletContext",yT(3,Kt,e)),gC(),gS(t!==i-1?1:-1);}}function Dn(n,s){if(n&1&&(nu(0,"div",16),vS(1,In,2,5,null,null,yS),bf()),n&2){let e=s.steps,t=NS();iv("aria-label",t.ariaLabel),gC(),DS(e);}}var te=(()=>{class n extends Ce{static \u0275fac=(()=>{let e;return function(i){return (e||(e=Dm(n)))(i||n)}})();static \u0275dir=Li({type:n,selectors:[["","matStepLabel",""]],features:[Qy]})}return n})(),kn=(()=>{class n{changes=new Xe;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=So({token:n,factory:n.\u0275fac})}return n})(),xe=(()=>{class n extends ye{_intl=Z(kn);_focusMonitor=Z(Gs);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=false;active=false;optional=false;disableRipple=false;color;constructor(){super();let e=Z(Ue$1);e.load(Em),e.load(tr);let t=Z(qT);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck());}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef);}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t);}_stringLabel(){return this.label instanceof te?null:this.label}_templateLabel(){return this.label instanceof te?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return !this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=G_({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(ZS("mat-"+(i.color||"primary")),Iv("mat-step-header-empty-label",i._hasEmptyLabel()));},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[Qy],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(av(0,"div",0),nu(1,"div")(2,"div",1),hS(3,on,1,6,"ng-container",2)(4,dn,2,1),bf()(),nu(5,"div",3),hS(6,mn,2,1,"div",4)(7,un,2,1,"div",4),hS(8,hn,2,1,"div",5),hS(9,fn,2,1,"div",6),bf()),t&2){let c;sv("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),gC(),ZS(fT("mat-step-icon-state-",i.state," mat-step-icon")),Iv("mat-step-icon-selected",i.selected),gC(2),gS(i.iconOverrides&&i.iconOverrides[i.state]?3:4),gC(2),Iv("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),gC(),gS((c=i._templateLabel())?6:i._stringLabel()?7:-1,c),gC(2),gS(i._hasOptionalLabel()?8:-1),gC(),gS(i._hasErrorLabel()?9:-1);}},dependencies:[dm,w0,Ii],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2})}return n})(),Fn=(()=>{class n{templateRef=Z(Bn$1);name;static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),An=(()=>{class n{_template=Z(Bn$1);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Li({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Me=(()=>{class n extends fe{_errorStateMatcher=Z(d,{skipSelf:true});_viewContainerRef=Z(Hn$1);_isSelected=Ue.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(mb(()=>this._stepper.selectionChange.pipe(on$1(e=>e.selectedStep===this),gb(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new D(this._lazyContent._template,this._viewContainerRef));});}ngOnDestroy(){this._isSelected.unsubscribe();}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),c=!!(e&&e.invalid&&this.interacted);return i||c}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??false,i=!!(e&&e().invalid()&&this.interacted);return t||i}static \u0275fac=(()=>{let e;return function(i){return (e||(e=Dm(n)))(i||n)}})();static \u0275cmp=G_({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,c){if(t&1&&mv(c,te,5)(c,An,5),t&2){let d;FS(d=PS())&&(i.stepLabel=d.first),FS(d=PS())&&(i._lazyContent=d.first);}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[mT([{provide:d,useExisting:n},{provide:fe,useExisting:n}]),Qy],ngContentSelectors:Ut,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(kS(),Xy(0,gn,2,1,"ng-template"));},dependencies:[fe$1],encapsulation:2})}return n})(),Se=(()=>{class n extends j{_ngZone=Z(Bt);_renderer=Z(_y);_animationsDisabled=cr();_cleanupTransition;_isAnimating=go(false);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Ua;_icons;animationDone=new an$1;disableRipple=false;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=dH(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration="";}_animationDuration="";_isServer=!Z(U).isBrowser;constructor(){super();let t=Z(Mo).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal";}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(yb(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(yb(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(true);}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend);},200);});}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=false;this._animatedContainers.changes.pipe(gb(null),yb(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=true,this.animationDone.emit()),this._stateChanged();}));}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.();}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),c=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||c)&&this._animatedContainers.find(y=>y.nativeElement===t)&&this._onAnimationDone();};_onAnimationDone(){this._isAnimating.set(false),this.animationDone.emit();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=G_({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,c){if(t&1&&mv(c,Me,5)(c,Fn,5),t&2){let d;FS(d=PS())&&(i._steps=d),FS(d=PS())&&(i._icons=d);}},viewQuery:function(t,i){if(t&1&&yv(xe,5)(vn,5),t&2){let c;FS(c=PS())&&(i._stepHeader=c),FS(c=PS())&&(i._animatedContainers=c);}},hostVars:14,hostBindings:function(t,i){t&2&&(wv("--mat-stepper-animation-duration",i._getAnimationDuration()),Iv("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()));},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[mT([{provide:j,useExisting:n}]),Qy],ngContentSelectors:Ut,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(kS(),hS(0,bn,1,0),hS(1,Mn,6,1,"div",3)(2,On,4,1,"div",4),Xy(3,En,1,27,"ng-template",null,0,_T)(5,Dn,3,1,"ng-template",null,1,_T)),t&2){let c;gS(i._isServer?0:-1),gC(),gS((c=i.orientation)==="horizontal"?1:c==="vertical"?2:-1);}},dependencies:[w0,xe],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return n})(),Zt=(()=>{class n extends Qt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=Dm(n)))(i||n)}})();static \u0275dir=Li({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,i){t&2&&dv("type",i.type);},features:[Qy]})}return n})(),Xt=(()=>{class n extends qt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=Dm(n)))(i||n)}})();static \u0275dir=Li({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){t&2&&dv("type",i.type);},features:[Qy]})}return n})(),Jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=yf({type:n});static \u0275inj=ia({providers:[d],imports:[Vt,jt,Fi,Tm,Se,xe,pa]})}return n})();function Nn(n,s){n&1&&sT(0,"Customer");}function zn(n,s){if(n&1){let e=_S();nu(0,"button",39),pv("click",function(){Wh(e);let i=NS().$index,c=NS();return Kh(c.removePhone(i))}),nu(1,"mat-icon"),sT(2,"delete"),bf()();}}function Rn(n,s){if(n&1&&(nu(0,"div",21)(1,"mat-form-field",31)(2,"mat-label"),sT(3,"Type"),bf(),nu(4,"mat-select",32)(5,"mat-option",33),sT(6,"Mobile"),bf(),nu(7,"mat-option",34),sT(8,"Home"),bf(),nu(9,"mat-option",35),sT(10,"Office"),bf()(),t_(),bf(),nu(11,"mat-form-field",36)(12,"mat-label"),sT(13,"Phone Number"),bf(),av(14,"input",37),t_(),nu(15,"mat-icon",11),sT(16,"phone"),bf()(),hS(17,zn,3,0,"button",38),bf()),n&2){let e=s.$index,t=NS();sv("formGroupName",e),gC(4),r_(),gC(10),r_(),gC(3),gS(t.phonesArray.length>1?17:-1);}}function Ln(n,s){n&1&&sT(0,"Locations");}function Bn(n,s){if(n&1){let e=_S();nu(0,"button",39),pv("click",function(){Wh(e);let i=NS().$index,c=NS();return Kh(c.removePlace(i))}),nu(1,"mat-icon"),sT(2,"delete"),bf()();}}function Hn(n,s){if(n&1&&(nu(0,"mat-card",26)(1,"mat-card-header",40)(2,"mat-card-title"),sT(3),bf(),hS(4,Bn,3,0,"button",38),bf(),nu(5,"mat-card-content")(6,"div",12)(7,"mat-form-field",9)(8,"mat-label"),sT(9,"Property Type"),bf(),nu(10,"mat-select",32)(11,"mat-option",41),sT(12,"Residential"),bf(),nu(13,"mat-option",42),sT(14,"Commercial"),bf(),nu(15,"mat-option",43),sT(16,"Warehouse"),bf(),nu(17,"mat-option",44),sT(18,"Restaurant"),bf()(),t_(),bf(),nu(19,"div",45)(20,"span"),sT(21,"Commercial Place"),bf(),av(22,"mat-slide-toggle",16),t_(),bf()(),nu(23,"div",46)(24,"mat-form-field",9)(25,"mat-label"),sT(26,"Street Address"),bf(),av(27,"input",47),t_(),nu(28,"mat-icon",11),sT(29,"home"),bf()(),nu(30,"mat-form-field",9)(31,"mat-label"),sT(32,"Apt / Suite / Unit (Optional)"),bf(),av(33,"input",48),t_(),bf(),nu(34,"div",49)(35,"mat-form-field",50)(36,"mat-label"),sT(37,"City"),bf(),av(38,"input",51),t_(),bf(),nu(39,"mat-form-field",50)(40,"mat-label"),sT(41,"State"),bf(),av(42,"input",52),t_(),bf(),nu(43,"mat-form-field",50)(44,"mat-label"),sT(45,"Zipcode"),bf(),av(46,"input",53),t_(),bf()()(),nu(47,"mat-form-field",9)(48,"mat-label"),sT(49,"Location Note (Optional)"),bf(),av(50,"input",54),t_(),nu(51,"mat-icon",11),sT(52,"note"),bf()()()()),n&2){let e=s.$index,t=NS();sv("formGroupName",e),gC(3),Sf("Location #",e+1),gC(),gS(t.placesArray.length>1?4:-1),gC(6),r_(),gC(12),r_(),gC(5),r_(),gC(6),r_(),gC(5),r_(),gC(4),r_(),gC(4),r_(),gC(4),r_();}}function Vn(n,s){n&1&&sT(0,"Services");}function Gn(n,s){if(n&1){let e=_S();nu(0,"div",62)(1,"button",64),pv("click",function(){Wh(e);let i=NS().$index,c=NS().$index,d=NS();return Kh(d.removeService(c,i))}),nu(2,"mat-icon"),sT(3,"delete"),bf(),sT(4," Remove Service "),bf()();}}function $n(n,s){if(n&1&&(nu(0,"div",57)(1,"div",58)(2,"mat-form-field",9)(3,"mat-label"),sT(4,"Service Name"),bf(),av(5,"input",59),t_(),nu(6,"mat-icon",11),sT(7,"build"),bf()(),nu(8,"mat-form-field",9)(9,"mat-label"),sT(10,"Est. Duration (Minutes)"),bf(),av(11,"input",60),t_(),nu(12,"mat-icon",11),sT(13,"schedule"),bf()()(),nu(14,"mat-form-field",9)(15,"mat-label"),sT(16,"Description / Scope (Optional)"),bf(),av(17,"input",61),t_(),bf(),hS(18,Gn,5,0,"div",62),av(19,"mat-divider",63),bf()),n&2){let e=s.$index,t=NS().$index,i=NS();sv("formGroupName",e),gC(5),r_(),gC(6),r_(),gC(6),r_(),gC(),gS(i.getServicesArray(t).length>1?18:-1);}}function Qn(n,s){if(n&1){let e=_S();nu(0,"mat-card",26)(1,"mat-card-header",40)(2,"mat-card-title"),sT(3),nu(4,"span",55),sT(5),bf()(),nu(6,"button",19),pv("click",function(){let i=Wh(e).$index,c=NS();return Kh(c.addService(i))}),nu(7,"mat-icon"),sT(8,"add"),bf(),sT(9," Add Service "),bf()(),nu(10,"mat-card-content")(11,"div",56),vS(12,$n,20,2,"div",57,mS),bf()()();}if(n&2){let e=s.$index,t=NS();sv("formGroupName",e),gC(3),Sf(" Services for Location #",e+1," "),gC(2),Sf(" (",t.placesArray.at(e).get("address.street")?.value||"Address pending",") "),gC(7),DS(t.getServicesArray(e).controls);}}var Yt=class n{fb=Z(Lo);dbService=Z(g);authService=Z(SD);snackBar=Z(Mt);router=Z(dt);isSubmitting=go(false);customerForm=this.fb.group({name:["",[Ut$1.required,Ut$1.minLength(2)]],email:["",[Ut$1.required,Ut$1.email]],accountNumber:["",[Ut$1.required]],isCommercial:[false],phones:this.fb.array([this.createPhoneGroup()])});placesForm=this.fb.group({places:this.fb.array([this.createPlaceGroupOnly()])});servicesForm=this.fb.group({servicesByPlace:this.fb.array([this.createServicesForPlaceGroup()])});get phonesArray(){return this.customerForm.get("phones")}get placesArray(){return this.placesForm.get("places")}get servicesByPlaceArray(){return this.servicesForm.get("servicesByPlace")}createPhoneGroup(){return this.fb.group({type:["mobile",Ut$1.required],phoneNumber:["",[Ut$1.required,Ut$1.pattern(/^[0-9\-\+\s\(\)]{7,15}$/)]]})}createPlaceGroupOnly(){return this.fb.group({type:["Residential",Ut$1.required],isCommercial:[false],notePlace:[""],address:this.fb.group({street:["",Ut$1.required],street2:[""],city:["",Ut$1.required],state:["TX",Ut$1.required],zipcode:["",[Ut$1.required,Ut$1.pattern(/^[0-9]{5}$/)]],active:[true]}),phoneNumber:this.fb.group({type:["location"],phoneNumber:[""]})})}createServicesForPlaceGroup(){return this.fb.group({services:this.fb.array([this.createServiceGroup()])})}createServiceGroup(){return this.fb.group({name:["",Ut$1.required],description:[""],timeInMinutes:[60,[Ut$1.required,Ut$1.min(15)]]})}getServicesArray(s){return this.servicesByPlaceArray.at(s).get("services")}addPhone(){this.phonesArray.push(this.createPhoneGroup());}removePhone(s){this.phonesArray.length>1&&this.phonesArray.removeAt(s);}addPlace(){this.placesArray.push(this.createPlaceGroupOnly()),this.servicesByPlaceArray.push(this.createServicesForPlaceGroup());}removePlace(s){this.placesArray.length>1&&(this.placesArray.removeAt(s),this.servicesByPlaceArray.removeAt(s));}addService(s){this.getServicesArray(s).push(this.createServiceGroup());}removeService(s,e){let t=this.getServicesArray(s);t.length>1&&t.removeAt(e);}async onSubmit(){if(this.customerForm.invalid||this.placesForm.invalid||this.servicesForm.invalid){this.snackBar.open("Please fill out all required fields correctly.","Close",{duration:3e3});return}this.isSubmitting.set(true);try{let s=this.authService.currentUser(),e=this.customerForm.value,t=this.placesForm.value.places,i=this.servicesForm.value.servicesByPlace,c=t.map((y,en)=>({id:crypto.randomUUID(),type:y.type,isCommercial:y.isCommercial,notePlace:y.notePlace||"",address:{id:crypto.randomUUID(),street:y.address.street,street2:y.address.street2||"",city:y.address.city,state:y.address.state,zipcode:Number(y.address.zipcode),active:!0},phoneNumber:y.phoneNumber?.phoneNumber?{id:crypto.randomUUID(),type:y.phoneNumber.type||"location",phoneNumber:y.phoneNumber.phoneNumber}:void 0,services:i[en].services.map(_e=>({id:crypto.randomUUID(),name:_e.name,description:_e.description||"",timeInMinutes:Number(_e.timeInMinutes),appointments:[]}))})),d={id:crypto.randomUUID(),ownerId:s?.id||"",name:e.name,email:e.email,accountNumber:e.accountNumber,isCommercial:e.isCommercial,phones:e.phones,places:c,notes:[],noteCustomer:[],alertCustomer:[],records:[]};await this.dbService.saveCustomer(d),this.snackBar.open("Customer created successfully!","Close",{duration:3e3}),this.router.navigate(["/main/dashboard"]);}catch(s){console.error("Error saving customer:",s),this.snackBar.open("Failed to create customer. Please try again.","Close",{duration:3e3});}finally{this.isSubmitting.set(false);}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=G_({type:n,selectors:[["app-add-customer"]],decls:96,vars:9,consts:[["stepper",""],[1,"add-customer-container"],[1,"page-header"],["mat-icon-button","","routerLink","/main/dashboard"],["linear","",1,"custom-stepper"],[3,"stepControl"],["matStepLabel",""],[1,"step-form",3,"formGroup"],[1,"step-title"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","placeholder","John Doe or Acme Corp"],["matPrefix",""],[1,"form-row"],["matInput","","formControlName","accountNumber","placeholder","ACC-1001"],["matInput","","formControlName","email","type","email","placeholder","client@example.com"],[1,"toggle-box"],["formControlName","isCommercial","color","primary"],[1,"my-3"],[1,"section-subtitle"],["type","button","mat-button","","color","primary",3,"click"],["formArrayName","phones",1,"phones-list"],[1,"phone-row",3,"formGroupName"],[1,"step-actions"],["mat-flat-button","","color","primary","matStepperNext","",3,"disabled"],["type","button","mat-stroked-button","","color","primary",3,"click"],["formArrayName","places",1,"places-list"],[1,"place-card",3,"formGroupName"],["mat-stroked-button","","matStepperPrevious","","type","button"],[1,"step-form",3,"ngSubmit","formGroup"],["formArrayName","servicesByPlace",1,"places-list"],["type","submit","mat-flat-button","","color","primary",3,"disabled"],["appearance","outline",1,"phone-type"],["formControlName","type"],["value","mobile"],["value","home"],["value","office"],["appearance","outline",1,"phone-number"],["matInput","","formControlName","phoneNumber","placeholder","(806) 555-0199"],["type","button","mat-icon-button","","color","warn"],["type","button","mat-icon-button","","color","warn",3,"click"],[1,"card-header-actions"],["value","Residential"],["value","Commercial"],["value","Warehouse"],["value","Restaurant"],[1,"toggle-box","inline-toggle"],["formGroupName","address",1,"address-group"],["matInput","","formControlName","street","placeholder","123 Main St"],["matInput","","formControlName","street2","placeholder","Apt 4B"],[1,"form-row","three-cols"],["appearance","outline"],["matInput","","formControlName","city","placeholder","Amarillo"],["matInput","","formControlName","state","placeholder","TX"],["matInput","","formControlName","zipcode","placeholder","79101"],["matInput","","formControlName","notePlace","placeholder","Gate code #1234, watch for dog"],[1,"location-subtitle"],["formArrayName","services",1,"services-list"],[1,"service-row",3,"formGroupName"],[1,"service-inputs"],["matInput","","formControlName","name","placeholder","Pest Control Maintenance"],["matInput","","type","number","formControlName","timeInMinutes","placeholder","60"],["matInput","","formControlName","description","placeholder","Perimeter treatment + indoor check"],[1,"remove-service-btn"],[1,"my-2"],["type","button","mat-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(nu(0,"div",1)(1,"div",2)(2,"button",3)(3,"mat-icon"),sT(4,"arrow_back"),bf()(),nu(5,"div")(6,"h2"),sT(7,"New Customer"),bf(),nu(8,"p"),sT(9,"Create initial profile, location & services"),bf()()(),nu(10,"mat-stepper",4,0)(12,"mat-step",5),Xy(13,Nn,1,0,"ng-template",6),nu(14,"form",7)(15,"h3",8),sT(16,"Customer Information"),bf(),nu(17,"mat-form-field",9)(18,"mat-label"),sT(19,"Customer / Business Name"),bf(),av(20,"input",10),t_(),nu(21,"mat-icon",11),sT(22,"person"),bf()(),nu(23,"div",12)(24,"mat-form-field",9)(25,"mat-label"),sT(26,"Account Number"),bf(),av(27,"input",13),t_(),nu(28,"mat-icon",11),sT(29,"tag"),bf()(),nu(30,"mat-form-field",9)(31,"mat-label"),sT(32,"Email Address"),bf(),av(33,"input",14),t_(),nu(34,"mat-icon",11),sT(35,"email"),bf()()(),nu(36,"div",15)(37,"span"),sT(38,"Commercial Account"),bf(),av(39,"mat-slide-toggle",16),t_(),bf(),av(40,"mat-divider",17),nu(41,"div",18)(42,"h4"),sT(43,"Contact Phones"),bf(),nu(44,"button",19),pv("click",function(){return t.addPhone()}),nu(45,"mat-icon"),sT(46,"add"),bf(),sT(47," Add Phone "),bf()(),nu(48,"div",20),vS(49,Rn,18,2,"div",21,mS),bf(),nu(51,"div",22),av(52,"span"),nu(53,"button",23),sT(54," Next: Locations "),nu(55,"mat-icon"),sT(56,"arrow_forward"),bf()()()()(),nu(57,"mat-step",5),Xy(58,Ln,1,0,"ng-template",6),nu(59,"form",7)(60,"div",18)(61,"h3",8),sT(62,"Property Locations"),bf(),nu(63,"button",24),pv("click",function(){return t.addPlace()}),nu(64,"mat-icon"),sT(65,"add_location"),bf(),sT(66," Add Property "),bf()(),nu(67,"div",25),vS(68,Hn,53,3,"mat-card",26,mS),bf(),nu(70,"div",22)(71,"button",27)(72,"mat-icon"),sT(73,"arrow_back"),bf(),sT(74," Back "),bf(),nu(75,"button",23),sT(76," Next: Services "),nu(77,"mat-icon"),sT(78,"arrow_forward"),bf()()()()(),nu(79,"mat-step",5),Xy(80,Vn,1,0,"ng-template",6),nu(81,"form",28),pv("ngSubmit",function(){return t.onSubmit()}),nu(82,"h3",8),sT(83,"Assign Services to Locations"),bf(),nu(84,"div",29),vS(85,Qn,14,3,"mat-card",26,mS),bf(),nu(87,"div",22)(88,"button",27)(89,"mat-icon"),sT(90,"arrow_back"),bf(),sT(91," Back "),bf(),nu(92,"button",30)(93,"mat-icon"),sT(94,"check"),bf(),sT(95," Save Customer "),bf()()()()()()),e&2&&(gC(12),sv("stepControl",t.customerForm),gC(2),sv("formGroup",t.customerForm),gC(6),r_(),gC(7),r_(),gC(6),r_(),gC(6),r_(),gC(10),DS(t.phonesArray.controls),gC(4),sv("disabled",t.customerForm.invalid),gC(4),sv("stepControl",t.placesForm),gC(2),sv("formGroup",t.placesForm),gC(9),DS(t.placesArray.controls),gC(7),sv("disabled",t.placesForm.invalid),gC(4),sv("stepControl",t.servicesForm),gC(2),sv("formGroup",t.servicesForm),gC(4),DS(t.servicesByPlaceArray.controls),gC(7),sv("disabled",t.servicesForm.invalid||t.customerForm.invalid||t.placesForm.invalid||t.isSubmitting()));},dependencies:[T0,Ho,Uo,Pe,Yn,Bo,jo,no,to,en,nn$1,Us,Jt,Me,te,Se,Zt,Xt,ce,rt,ae,zt,Sn$1,En$1,li,si,so,Fi,Ii,we,te$1,Pt,Lt,J,N,k,z,B$1,S,Xt$1,f,u],styles:['@charset "UTF-8";.add-customer-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:.5rem 1rem 2rem}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;color:#1e3a8a;margin:0}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;color:#64748b;margin:0}.add-customer-container[_ngcontent-%COMP%]   .custom-stepper[_ngcontent-%COMP%]{background:transparent;border-radius:16px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.85rem;padding-top:1rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:#0f172a;margin-bottom:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{flex:1 1 200px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1fr;gap:.5rem}@media(max-width:480px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-child{grid-column:1/-1}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .toggle-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;background:#f8fafc;border:1px solid #E2E8F0;border-radius:12px;font-weight:500;font-size:.9rem;color:#334155}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .toggle-box.inline-toggle[_ngcontent-%COMP%]{flex:1 1 200px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;color:#1e3a8a}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-type[_ngcontent-%COMP%]{width:130px;flex-shrink:0}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{flex:1;min-width:0}@media(max-width:380px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]{flex-wrap:wrap}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-type[_ngcontent-%COMP%]{width:100%}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{flex:1 1 100%}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 2px 8px #0000000d}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .location-subtitle[_ngcontent-%COMP%]{display:block;font-size:.8rem;color:#64748b;font-weight:400}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]{display:flex;gap:.75rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-child{flex:2}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:last-child{flex:1}@media(max-width:360px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .remove-service-btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:1.5rem;padding-top:1rem;border-top:1px solid #E2E8F0}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:44px}.my-2[_ngcontent-%COMP%]{margin:.5rem 0}.my-3[_ngcontent-%COMP%]{margin:1rem 0}']})};export{Yt as AddCustomerComponent};