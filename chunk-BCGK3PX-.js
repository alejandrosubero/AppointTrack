import'./chunk-HgKFPVJH.js';import {w as we,t as te$1}from'./chunk-416S12pZ.js';import {M as Mt,X as Xt$1}from'./chunk-COUqBGw9.js';import {Q,p,H as He,N as Na,U as U_,P as P0,h as Po,ao as J,s as su,o as oT,I as If,aM as nv,l as lv,X as XC,m as mv,aB as mS,a as pC,g as cv,t as t_,aD as yS,ba as hS,n as Df,q as ua,bb as nr,C as Cd,bc as d,ap as Un,aw as je,aW as hb,a6 as cn$1,ai as pb,v as wm,y as ev,z as NS,F as hT,G as Dv,K as RS,L as OS,aJ as Hi,$ as Ht,a0 as My,ag as de,ah as Wa,a5 as dn$2,bd as FH,Z as l,T as ko,aa as gb,be as M0,f as fS,bf as IT,b as pS,_ as _v,S as Sv,ae as Ev,bg as hv,d as MS,M as Mf,c as IS,Y as Yh,e as Qh,W as mt$1,aq as cc,ar as er,bh as md,a9 as $T,az as Ws,aE as WS,bi as lT,an as TT,a3 as ce$1,as as Bd,at as VH,au as rv,av as Hn$1,af as fc,a4 as tt,ax as we$1,aY as De,aX as PE,ab as Ot,bj as be,aA as HH,B as AS,aK as gS,u as uv,b0 as No,bk as pv,bl as mT,R as Rv,i as PS,bm as gT}from'./main-2WXXQNXO.js';import {P as Pt,L as Lt}from'./chunk-k0srVScJ.js';import {N,k,z,B as B$1,S}from'./chunk-CVL4myXf.js';import {c as ce,r as rt,a as ae,z as zt,S as Sn$2,E as En$1}from'./chunk-DQ8YrLkr.js';import {V as Vt,D,f as fe$1}from'./chunk-CK4_bnbA.js';import {f,u}from'./chunk-Cic9UlAC.js';import {R as Rn$1,g as ge,k as kn$1,x as xn$1,Z as Ze,t as tn$1,S as Sn$1,I as In$1,d as dn$1,l as ln$1,p as pt,m as mt,a as d$1}from'./chunk-B1vsbW73.js';import'./chunk-qvkjB1R1.js';import {_ as _t,y as yt,q}from'./chunk-BMn2eeQU.js';import {y as yt$1,w as wt}from'./chunk-DSufIHrh.js';import {g}from'./chunk-Cjp_wpIZ.js';import'./chunk-DT_3qJqS.js';var tn=["*"];function nn(n,s){n&1&&AS(0);}var ye=(()=>{class n{_elementRef=Q(ko);focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Ce=(()=>{class n{template=Q(Hn$1);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var B={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},rn=new ce$1("STEPPER_GLOBAL_OPTIONS"),fe=(()=>{class n{_stepperOptions;_stepper=Q(j);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e);}_interacted=Na(false);interactedStream=new dn$2;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e);}_state=Na(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e);}_editable=Na(true);optional=false;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e);}_completedOverride=Na(null);index=Na(-1);isSelected=TT(()=>this._stepper.selectedIndex===this.index());indicatorType=TT(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??B.NUMBER,c=this._editable();return this._showError()&&this.hasError&&!e?B.ERROR:this._displayDefaultIndicatorType?!t||e?B.NUMBER:c?B.EDIT:B.DONE:t&&!e?B.DONE:t&&e?i:c&&e?B.EDIT:i});isNavigable=TT(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e);}_customError=Na(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=Q(rn,{optional:true});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==false;}select(){this._stepper.selected=this;}reset(){this._interacted.set(false),this._completedOverride()!=null&&this._completedOverride.set(false),this._customError()!=null&&this._customError.set(false),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset());}ngOnChanges(){this._stepper._stateChanged();}_markAsInteracted(){this._interacted()||(this._interacted.set(true),this.interactedStream.emit(this));}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=U_({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,c){if(t&1&&Dv(c,Ce,5)(c,d$1,5),t&2){let d;RS(d=OS())&&(i.stepLabel=d.first),RS(d=OS())&&(i._childForms=d);}},viewQuery:function(t,i){if(t&1&&Ev(Hn$1,7),t&2){let c;RS(c=OS())&&(i.content=c.first);}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",VH],optional:[2,"optional","optional",VH],completed:[2,"completed","completed",VH],hasError:[2,"hasError","hasError",VH]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Bd],ngContentSelectors:tn,decls:1,vars:0,template:function(t,i){t&1&&(NS(),rv(0,nn,1,0,"ng-template"));},encapsulation:2})}return n})(),j=(()=>{class n{_dir=Q(fc,{optional:true});_changeDetectorRef=Q($T);_elementRef=Q(ko);_destroyed=new tt;_keyManager;_steps;steps=new Wa;_stepHeader;_sortedHeaders=new Wa;get linear(){return this._linear()}set linear(e){this._linear.set(e);}_linear=Na(false);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e);}_selectedIndex=Na(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1;}selectionChange=new dn$2;selectedIndexChange=new dn$2;_groupId=Q(we$1).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical");}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(pb(this._steps),gb(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges();});}ngAfterViewInit(){if(this._stepHeader.changes.pipe(pb(this._stepHeader),gb(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges();}),this._keyManager=new De(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:PE()).pipe(pb(this._layoutDirection()),gb(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0));}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted();}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete();}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1);}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0);}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged();}_getStepLabelId(e){return `${this._groupId}-label-${e}`}_getStepContentId(e){return `${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck();}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged();}_onKeydown(e){let t=Ot(e),i=e.keyCode,c=this._keyManager;c?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=c.activeItemIndex,e.preventDefault()):c?.setFocusOrigin("keyboard").onKeydown(e);}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return (i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):false}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=be();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,c){if(t&1&&Dv(c,fe,5)(c,ye,5),t&2){let d;RS(d=OS())&&(i._steps=d),RS(d=OS())&&(i._stepHeader=d);}},inputs:{linear:[2,"linear","linear",VH],selectedIndex:[2,"selectedIndex","selectedIndex",HH],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),Qt=(()=>{class n{_stepper=Q(j);type="submit";static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,i){t&1&&mv("click",function(){return i._stepper.next()}),t&2&&hv("type",i.type);},inputs:{type:"type"}})}return n})(),qt=(()=>{class n{_stepper=Q(j);type="button";static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){t&1&&mv("click",function(){return i._stepper.previous()}),t&2&&hv("type",i.type);},inputs:{type:"type"}})}return n})(),jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Df({type:n});static \u0275inj=ua({imports:[Cd]})}return n})();var an=(n,s,e)=>({index:n,active:s,optional:e});function on(n,s){if(n&1&&pv(0,2),n&2){let e=MS();cv("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",mT(2,an,e.index,e.active,e.optional));}}function sn(n,s){if(n&1&&(su(0,"span",7),oT(1),If()),n&2){let e=MS(2);pC(),Rv(e._getDefaultTextForState(e.state));}}function ln(n,s){if(n&1&&(su(0,"span",8),oT(1),If()),n&2){let e=MS(3);pC(),Rv(e._intl.completedLabel);}}function cn(n,s){if(n&1&&(su(0,"span",8),oT(1),If()),n&2){let e=MS(3);pC(),Rv(e._intl.editableLabel);}}function pn(n,s){if(n&1&&(fS(0,ln,2,1,"span",8)(1,cn,2,1,"span",8),su(2,"mat-icon",7),oT(3),If()),n&2){let e=MS(2);pS(e.state==="done"?0:e.state==="edit"?1:-1),pC(3),Rv(e._getDefaultTextForState(e.state));}}function dn(n,s){if(n&1&&fS(0,sn,2,1,"span",7)(1,pn,4,2),n&2){let t=MS();pS((t.state)==="number"?0:1);}}function mn(n,s){n&1&&(su(0,"div",4),pv(1,9),If()),n&2&&(pC(),cv("ngTemplateOutlet",s.template));}function un(n,s){if(n&1&&(su(0,"div",4),oT(1),If()),n&2){let e=MS();pC(),Rv(e.label);}}function hn(n,s){if(n&1&&(su(0,"div",5),oT(1),If()),n&2){let e=MS();pC(),Rv(e._intl.optionalLabel);}}function fn(n,s){if(n&1&&(su(0,"div",6),oT(1),If()),n&2){let e=MS();pC(),Rv(e.errorMessage);}}var Ut=["*"];function _n(n,s){}function gn(n,s){if(n&1&&(AS(0),nv(1,_n,0,0,"ng-template",0)),n&2){let e=MS();pC(),cv("cdkPortalOutlet",e._portal);}}var vn=["animatedContainer"],Wt=n=>({steps:n}),Kt=n=>({step:n});function bn(n,s){n&1&&AS(0);}function yn(n,s){if(n&1&&(su(0,"div",5),pv(1,9)(2,6),If()),n&2){let e=MS(2),t=PS(6);pC(),cv("ngTemplateOutlet",e.headerPrefix()),pC(),cv("ngTemplateOutlet",t)("ngTemplateOutletContext",gT(3,Wt,e.steps));}}function Cn(n,s){if(n&1&&pv(0,6),n&2){let e=MS(2),t=PS(6);cv("ngTemplateOutlet",t)("ngTemplateOutletContext",gT(2,Wt,e.steps));}}function xn(n,s){if(n&1&&(su(0,"div",10,2),pv(2,9),If()),n&2){let e=s.$implicit,t=s.$index,i=MS(2);WS("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),cv("id",i._getStepContentId(t)),uv("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),pC(2),cv("ngTemplateOutlet",e.content);}}function Mn(n,s){if(n&1&&(su(0,"div",3),fS(1,yn,3,5,"div",5)(2,Cn,1,4,"ng-container",6),su(3,"div",7),mS(4,xn,3,6,"div",8,gS),If()()),n&2){let e=MS();pC(),pS(e.headerPrefix()?1:2),pC(3),yS(e.steps);}}function Sn(n,s){if(n&1&&pv(0,9),n&2){let e=MS(2);cv("ngTemplateOutlet",e.headerPrefix());}}function Pn(n,s){if(n&1&&(su(0,"div",11),pv(1,6),su(2,"div",12,2)(4,"div",13)(5,"div",14),pv(6,9),If()()()()),n&2){let e=s.$implicit,t=s.$index,i=s.$index,c=s.$count,d=MS(2),y=PS(4);pC(),cv("ngTemplateOutlet",y)("ngTemplateOutletContext",gT(11,Kt,e)),pC(),Sv("mat-stepper-vertical-line",i!==c-1)("mat-vertical-content-container-active",d.selectedIndex===t),uv("inert",d.selectedIndex===t?null:"")("aria-label",d.ariaLabel),pC(2),cv("id",d._getStepContentId(t)),uv("aria-labelledby",d._getStepLabelId(t)),pC(2),cv("ngTemplateOutlet",e.content);}}function On(n,s){if(n&1&&(su(0,"div",4),fS(1,Sn,1,1,"ng-container",9),mS(2,Pn,7,13,"div",11,gS),If()),n&2){let e=MS();pC(),pS(e.headerPrefix()?1:-1),pC(),yS(e.steps);}}function En(n,s){if(n&1){let e=IS();su(0,"mat-step-header",15),mv("click",function(){let i=Yh(e).step;return Qh(i.select())})("keydown",function(i){Yh(e);let c=MS();return Qh(c._onKeydown(i))}),If();}if(n&2){let e=s.step,t=MS();Sv("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),cv("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),uv("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:true);}}function wn(n,s){n&1&&lv(0,"div",17);}function In(n,s){if(n&1&&(pv(0,6),fS(1,wn,1,0,"div",17)),n&2){let e=s.$implicit,t=s.$index,i=s.$count;MS(2);let c=PS(4);cv("ngTemplateOutlet",c)("ngTemplateOutletContext",gT(3,Kt,e)),pC(),pS(t!==i-1?1:-1);}}function Dn(n,s){if(n&1&&(su(0,"div",16),mS(1,In,2,5,null,null,gS),If()),n&2){let e=s.steps,t=MS();uv("aria-label",t.ariaLabel),pC(),yS(e);}}var te=(()=>{class n extends Ce{static \u0275fac=(()=>{let e;return function(i){return (e||(e=wm(n)))(i||n)}})();static \u0275dir=Hi({type:n,selectors:[["","matStepLabel",""]],features:[ev]})}return n})(),kn=(()=>{class n{changes=new tt;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=No({token:n,factory:n.\u0275fac})}return n})(),xe=(()=>{class n extends ye{_intl=Q(kn);_focusMonitor=Q(mt$1);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=false;active=false;optional=false;disableRipple=false;color;constructor(){super();let e=Q(cc);e.load(er),e.load(md);let t=Q($T);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck());}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef);}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t);}_stringLabel(){return this.label instanceof te?null:this.label}_templateLabel(){return this.label instanceof te?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return !this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=U_({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(WS("mat-"+(i.color||"primary")),Sv("mat-step-header-empty-label",i._hasEmptyLabel()));},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[ev],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(lv(0,"div",0),su(1,"div")(2,"div",1),fS(3,on,1,6,"ng-container",2)(4,dn,2,1),If()(),su(5,"div",3),fS(6,mn,2,1,"div",4)(7,un,2,1,"div",4),fS(8,hn,2,1,"div",5),fS(9,fn,2,1,"div",6),If()),t&2){let c;cv("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),pC(),WS(lT("mat-step-icon-state-",i.state," mat-step-icon")),Sv("mat-step-icon-selected",i.selected),pC(2),pS(i.iconOverrides&&i.iconOverrides[i.state]?3:4),pC(2),Sv("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),pC(),pS((c=i._templateLabel())?6:i._stringLabel()?7:-1,c),pC(2),pS(i._hasOptionalLabel()?8:-1),pC(),pS(i._hasErrorLabel()?9:-1);}},dependencies:[Ws,M0,wt],styles:[`.mat-step-header {
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
`],encapsulation:2})}return n})(),Fn=(()=>{class n{templateRef=Q(Hn$1);name;static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),An=(()=>{class n{_template=Q(Hn$1);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Hi({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Me=(()=>{class n extends fe{_errorStateMatcher=Q(d,{skipSelf:true});_viewContainerRef=Q(Un);_isSelected=je.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(hb(()=>this._stepper.selectionChange.pipe(cn$1(e=>e.selectedStep===this),pb(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new D(this._lazyContent._template,this._viewContainerRef));});}ngOnDestroy(){this._isSelected.unsubscribe();}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),c=!!(e&&e.invalid&&this.interacted);return i||c}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??false,i=!!(e&&e().invalid()&&this.interacted);return t||i}static \u0275fac=(()=>{let e;return function(i){return (e||(e=wm(n)))(i||n)}})();static \u0275cmp=U_({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,c){if(t&1&&Dv(c,te,5)(c,An,5),t&2){let d;RS(d=OS())&&(i.stepLabel=d.first),RS(d=OS())&&(i._lazyContent=d.first);}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[hT([{provide:d,useExisting:n},{provide:fe,useExisting:n}]),ev],ngContentSelectors:Ut,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(NS(),nv(0,gn,2,1,"ng-template"));},dependencies:[fe$1],encapsulation:2})}return n})(),Se=(()=>{class n extends j{_ngZone=Q(Ht);_renderer=Q(My);_animationsDisabled=de();_cleanupTransition;_isAnimating=Na(false);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Wa;_icons;animationDone=new dn$2;disableRipple=false;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=FH(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration="";}_animationDuration="";_isServer=!Q(l).isBrowser;constructor(){super();let t=Q(ko).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal";}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(gb(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(gb(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(true);}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend);},200);});}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=false;this._animatedContainers.changes.pipe(pb(null),gb(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=true,this.animationDone.emit()),this._stateChanged();}));}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.();}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),c=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||c)&&this._animatedContainers.find(y=>y.nativeElement===t)&&this._onAnimationDone();};_onAnimationDone(){this._isAnimating.set(false),this.animationDone.emit();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=U_({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,c){if(t&1&&Dv(c,Me,5)(c,Fn,5),t&2){let d;RS(d=OS())&&(i._steps=d),RS(d=OS())&&(i._icons=d);}},viewQuery:function(t,i){if(t&1&&Ev(xe,5)(vn,5),t&2){let c;RS(c=OS())&&(i._stepHeader=c),RS(c=OS())&&(i._animatedContainers=c);}},hostVars:14,hostBindings:function(t,i){t&2&&(_v("--mat-stepper-animation-duration",i._getAnimationDuration()),Sv("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()));},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[hT([{provide:j,useExisting:n}]),ev],ngContentSelectors:Ut,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(NS(),fS(0,bn,1,0),fS(1,Mn,6,1,"div",3)(2,On,4,1,"div",4),nv(3,En,1,27,"ng-template",null,0,IT)(5,Dn,3,1,"ng-template",null,1,IT)),t&2){let c;pS(i._isServer?0:-1),pC(),pS((c=i.orientation)==="horizontal"?1:c==="vertical"?2:-1);}},dependencies:[M0,xe],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return n})(),Zt=(()=>{class n extends Qt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=wm(n)))(i||n)}})();static \u0275dir=Hi({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,i){t&2&&hv("type",i.type);},features:[ev]})}return n})(),Xt=(()=>{class n extends qt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=wm(n)))(i||n)}})();static \u0275dir=Hi({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){t&2&&hv("type",i.type);},features:[ev]})}return n})(),Jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Df({type:n});static \u0275inj=ua({providers:[d],imports:[Vt,jt,yt$1,nr,Se,xe,Cd]})}return n})();function Nn(n,s){n&1&&oT(0,"Customer");}function zn(n,s){if(n&1){let e=IS();su(0,"button",39),mv("click",function(){Yh(e);let i=MS().$index,c=MS();return Qh(c.removePhone(i))}),su(1,"mat-icon"),oT(2,"delete"),If()();}}function Rn(n,s){if(n&1&&(su(0,"div",21)(1,"mat-form-field",31)(2,"mat-label"),oT(3,"Type"),If(),su(4,"mat-select",32)(5,"mat-option",33),oT(6,"Mobile"),If(),su(7,"mat-option",34),oT(8,"Home"),If(),su(9,"mat-option",35),oT(10,"Office"),If()(),XC(),If(),su(11,"mat-form-field",36)(12,"mat-label"),oT(13,"Phone Number"),If(),lv(14,"input",37),XC(),su(15,"mat-icon",11),oT(16,"phone"),If()(),fS(17,zn,3,0,"button",38),If()),n&2){let e=s.$index,t=MS();cv("formGroupName",e),pC(4),t_(),pC(10),t_(),pC(3),pS(t.phonesArray.length>1?17:-1);}}function Ln(n,s){n&1&&oT(0,"Locations");}function Bn(n,s){if(n&1){let e=IS();su(0,"button",39),mv("click",function(){Yh(e);let i=MS().$index,c=MS();return Qh(c.removePlace(i))}),su(1,"mat-icon"),oT(2,"delete"),If()();}}function Hn(n,s){if(n&1&&(su(0,"mat-card",26)(1,"mat-card-header",40)(2,"mat-card-title"),oT(3),If(),fS(4,Bn,3,0,"button",38),If(),su(5,"mat-card-content")(6,"div",12)(7,"mat-form-field",9)(8,"mat-label"),oT(9,"Property Type"),If(),su(10,"mat-select",32)(11,"mat-option",41),oT(12,"Residential"),If(),su(13,"mat-option",42),oT(14,"Commercial"),If(),su(15,"mat-option",43),oT(16,"Warehouse"),If(),su(17,"mat-option",44),oT(18,"Restaurant"),If()(),XC(),If(),su(19,"div",45)(20,"span"),oT(21,"Commercial Place"),If(),lv(22,"mat-slide-toggle",16),XC(),If()(),su(23,"div",46)(24,"mat-form-field",9)(25,"mat-label"),oT(26,"Street Address"),If(),lv(27,"input",47),XC(),su(28,"mat-icon",11),oT(29,"home"),If()(),su(30,"mat-form-field",9)(31,"mat-label"),oT(32,"Apt / Suite / Unit (Optional)"),If(),lv(33,"input",48),XC(),If(),su(34,"div",49)(35,"mat-form-field",50)(36,"mat-label"),oT(37,"City"),If(),lv(38,"input",51),XC(),If(),su(39,"mat-form-field",50)(40,"mat-label"),oT(41,"State"),If(),lv(42,"input",52),XC(),If(),su(43,"mat-form-field",50)(44,"mat-label"),oT(45,"Zipcode"),If(),lv(46,"input",53),XC(),If()()(),su(47,"mat-form-field",9)(48,"mat-label"),oT(49,"Location Note (Optional)"),If(),lv(50,"input",54),XC(),su(51,"mat-icon",11),oT(52,"note"),If()()()()),n&2){let e=s.$index,t=MS();cv("formGroupName",e),pC(3),Mf("Location #",e+1),pC(),pS(t.placesArray.length>1?4:-1),pC(6),t_(),pC(12),t_(),pC(5),t_(),pC(6),t_(),pC(5),t_(),pC(4),t_(),pC(4),t_(),pC(4),t_();}}function Vn(n,s){n&1&&oT(0,"Services");}function Gn(n,s){if(n&1){let e=IS();su(0,"div",62)(1,"button",64),mv("click",function(){Yh(e);let i=MS().$index,c=MS().$index,d=MS();return Qh(d.removeService(c,i))}),su(2,"mat-icon"),oT(3,"delete"),If(),oT(4," Remove Service "),If()();}}function $n(n,s){if(n&1&&(su(0,"div",57)(1,"div",58)(2,"mat-form-field",9)(3,"mat-label"),oT(4,"Service Name"),If(),lv(5,"input",59),XC(),su(6,"mat-icon",11),oT(7,"build"),If()(),su(8,"mat-form-field",9)(9,"mat-label"),oT(10,"Est. Duration (Minutes)"),If(),lv(11,"input",60),XC(),su(12,"mat-icon",11),oT(13,"schedule"),If()()(),su(14,"mat-form-field",9)(15,"mat-label"),oT(16,"Description / Scope (Optional)"),If(),lv(17,"input",61),XC(),If(),fS(18,Gn,5,0,"div",62),lv(19,"mat-divider",63),If()),n&2){let e=s.$index,t=MS().$index,i=MS();cv("formGroupName",e),pC(5),t_(),pC(6),t_(),pC(6),t_(),pC(),pS(i.getServicesArray(t).length>1?18:-1);}}function Qn(n,s){if(n&1){let e=IS();su(0,"mat-card",26)(1,"mat-card-header",40)(2,"mat-card-title"),oT(3),su(4,"span",55),oT(5),If()(),su(6,"button",19),mv("click",function(){let i=Yh(e).$index,c=MS();return Qh(c.addService(i))}),su(7,"mat-icon"),oT(8,"add"),If(),oT(9," Add Service "),If()(),su(10,"mat-card-content")(11,"div",56),mS(12,$n,20,2,"div",57,hS),If()()();}if(n&2){let e=s.$index,t=MS();cv("formGroupName",e),pC(3),Mf(" Services for Location #",e+1," "),pC(2),Mf(" (",t.placesArray.at(e).get("address.street")?.value||"Address pending",") "),pC(7),yS(t.getServicesArray(e).controls);}}var Yt=class n{fb=Q(Rn$1);dbService=Q(g);authService=Q(p);snackBar=Q(Mt);router=Q(He);isSubmitting=Na(false);customerForm=this.fb.group({name:["",[ge.required,ge.minLength(2)]],email:["",[ge.required,ge.email]],accountNumber:["",[ge.required]],isCommercial:[false],phones:this.fb.array([this.createPhoneGroup()])});placesForm=this.fb.group({places:this.fb.array([this.createPlaceGroupOnly()])});servicesForm=this.fb.group({servicesByPlace:this.fb.array([this.createServicesForPlaceGroup()])});get phonesArray(){return this.customerForm.get("phones")}get placesArray(){return this.placesForm.get("places")}get servicesByPlaceArray(){return this.servicesForm.get("servicesByPlace")}createPhoneGroup(){return this.fb.group({type:["Mobile",ge.required],phoneNumber:["",[ge.required,ge.pattern(/^[0-9\-\+\s\(\)]{7,15}$/)]]})}createPlaceGroupOnly(){return this.fb.group({type:["Residential",ge.required],isCommercial:[false],notePlace:[""],address:this.fb.group({street:["",ge.required],street2:[""],city:["",ge.required],state:["TX",ge.required],zipcode:["",[ge.required,ge.pattern(/^[0-9]{5}$/)]],active:[true]}),phoneNumber:this.fb.group({type:["location"],phoneNumber:[""]})})}createServicesForPlaceGroup(){return this.fb.group({services:this.fb.array([this.createServiceGroup()])})}createServiceGroup(){return this.fb.group({name:["",ge.required],description:[""],timeInMinutes:[60,[ge.required,ge.min(15)]]})}getServicesArray(s){return this.servicesByPlaceArray.at(s).get("services")}addPhone(){this.phonesArray.push(this.createPhoneGroup());}removePhone(s){this.phonesArray.length>1&&this.phonesArray.removeAt(s);}addPlace(){this.placesArray.push(this.createPlaceGroupOnly()),this.servicesByPlaceArray.push(this.createServicesForPlaceGroup());}removePlace(s){this.placesArray.length>1&&(this.placesArray.removeAt(s),this.servicesByPlaceArray.removeAt(s));}addService(s){this.getServicesArray(s).push(this.createServiceGroup());}removeService(s,e){let t=this.getServicesArray(s);t.length>1&&t.removeAt(e);}async onSubmit(){if(this.customerForm.invalid||this.placesForm.invalid||this.servicesForm.invalid){this.snackBar.open("Please fill out all required fields correctly.","Close",{duration:3e3});return}this.isSubmitting.set(true);try{let s=this.authService.currentUser(),e=this.customerForm.value,t=this.placesForm.value.places,i=this.servicesForm.value.servicesByPlace,c=t.map((y,en)=>({id:crypto.randomUUID(),type:y.type,isCommercial:y.isCommercial,notePlace:y.notePlace||"",address:{id:crypto.randomUUID(),street:y.address.street,street2:y.address.street2||"",city:y.address.city,state:y.address.state,zipcode:Number(y.address.zipcode),active:!0},phoneNumber:y.phoneNumber?.phoneNumber?{id:crypto.randomUUID(),type:y.phoneNumber.type||"location",phoneNumber:y.phoneNumber.phoneNumber}:void 0,services:i[en].services.map(_e=>({id:crypto.randomUUID(),name:_e.name,description:_e.description||"",timeInMinutes:Number(_e.timeInMinutes),appointments:[]}))})),d={id:crypto.randomUUID(),ownerId:s?.id||"",name:e.name,email:e.email,accountNumber:e.accountNumber,isCommercial:e.isCommercial,phones:e.phones,places:c,notes:[],noteCustomer:[],alertCustomer:[],records:[]};await this.dbService.saveCustomer(d),this.snackBar.open("Customer created successfully!","Close",{duration:3e3}),this.router.navigate(["/main/dashboard"]);}catch(s){console.error("Error saving customer:",s),this.snackBar.open("Failed to create customer. Please try again.","Close",{duration:3e3});}finally{this.isSubmitting.set(false);}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=U_({type:n,selectors:[["app-add-customer"]],decls:96,vars:9,consts:[["stepper",""],[1,"add-customer-container"],[1,"page-header"],["mat-icon-button","","routerLink","/main/dashboard"],["linear","",1,"custom-stepper"],[3,"stepControl"],["matStepLabel",""],[1,"step-form",3,"formGroup"],[1,"step-title"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","placeholder","John Doe or Acme Corp"],["matPrefix",""],[1,"form-row"],["matInput","","formControlName","accountNumber","placeholder","ACC-1001"],["matInput","","formControlName","email","type","email","placeholder","client@example.com"],[1,"toggle-box"],["formControlName","isCommercial","color","primary"],[1,"my-3"],[1,"section-subtitle"],["type","button","mat-button","","color","primary",3,"click"],["formArrayName","phones",1,"phones-list"],[1,"phone-row",3,"formGroupName"],[1,"step-actions"],["mat-flat-button","","color","primary","matStepperNext","",3,"disabled"],["type","button","mat-stroked-button","","color","primary",3,"click"],["formArrayName","places",1,"places-list"],[1,"place-card",3,"formGroupName"],["mat-stroked-button","","matStepperPrevious","","type","button"],[1,"step-form",3,"ngSubmit","formGroup"],["formArrayName","servicesByPlace",1,"places-list"],["type","submit","mat-flat-button","","color","primary",3,"disabled"],["appearance","outline",1,"phone-type"],["formControlName","type"],["value","Mobile"],["value","Home"],["value","Office"],["appearance","outline",1,"phone-number"],["matInput","","formControlName","phoneNumber","placeholder","(806) 555-0199"],["type","button","mat-icon-button","","color","warn"],["type","button","mat-icon-button","","color","warn",3,"click"],[1,"card-header-actions"],["value","Residential"],["value","Commercial"],["value","Warehouse"],["value","Restaurant"],[1,"toggle-box","inline-toggle"],["formGroupName","address",1,"address-group"],["matInput","","formControlName","street","placeholder","123 Main St"],["matInput","","formControlName","street2","placeholder","Apt 4B"],[1,"form-row","three-cols"],["appearance","outline"],["matInput","","formControlName","city","placeholder","Amarillo"],["matInput","","formControlName","state","placeholder","TX"],["matInput","","formControlName","zipcode","placeholder","79101"],["matInput","","formControlName","notePlace","placeholder","Gate code #1234, watch for dog"],[1,"location-subtitle"],["formArrayName","services",1,"services-list"],[1,"service-row",3,"formGroupName"],[1,"service-inputs"],["matInput","","formControlName","name","placeholder","Pest Control Maintenance"],["matInput","","type","number","formControlName","timeInMinutes","placeholder","60"],["matInput","","formControlName","description","placeholder","Perimeter treatment + indoor check"],[1,"remove-service-btn"],[1,"my-2"],["type","button","mat-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(su(0,"div",1)(1,"div",2)(2,"button",3)(3,"mat-icon"),oT(4,"arrow_back"),If()(),su(5,"div")(6,"h2"),oT(7,"New Customer"),If(),su(8,"p"),oT(9,"Create initial profile, location & services"),If()()(),su(10,"mat-stepper",4,0)(12,"mat-step",5),nv(13,Nn,1,0,"ng-template",6),su(14,"form",7)(15,"h3",8),oT(16,"Customer Information"),If(),su(17,"mat-form-field",9)(18,"mat-label"),oT(19,"Customer / Business Name"),If(),lv(20,"input",10),XC(),su(21,"mat-icon",11),oT(22,"person"),If()(),su(23,"div",12)(24,"mat-form-field",9)(25,"mat-label"),oT(26,"Account Number"),If(),lv(27,"input",13),XC(),su(28,"mat-icon",11),oT(29,"tag"),If()(),su(30,"mat-form-field",9)(31,"mat-label"),oT(32,"Email Address"),If(),lv(33,"input",14),XC(),su(34,"mat-icon",11),oT(35,"email"),If()()(),su(36,"div",15)(37,"span"),oT(38,"Commercial Account"),If(),lv(39,"mat-slide-toggle",16),XC(),If(),lv(40,"mat-divider",17),su(41,"div",18)(42,"h4"),oT(43,"Contact Phones"),If(),su(44,"button",19),mv("click",function(){return t.addPhone()}),su(45,"mat-icon"),oT(46,"add"),If(),oT(47," Add Phone "),If()(),su(48,"div",20),mS(49,Rn,18,2,"div",21,hS),If(),su(51,"div",22),lv(52,"span"),su(53,"button",23),oT(54," Next: Locations "),su(55,"mat-icon"),oT(56,"arrow_forward"),If()()()()(),su(57,"mat-step",5),nv(58,Ln,1,0,"ng-template",6),su(59,"form",7)(60,"div",18)(61,"h3",8),oT(62,"Property Locations"),If(),su(63,"button",24),mv("click",function(){return t.addPlace()}),su(64,"mat-icon"),oT(65,"add_location"),If(),oT(66," Add Property "),If()(),su(67,"div",25),mS(68,Hn,53,3,"mat-card",26,hS),If(),su(70,"div",22)(71,"button",27)(72,"mat-icon"),oT(73,"arrow_back"),If(),oT(74," Back "),If(),su(75,"button",23),oT(76," Next: Services "),su(77,"mat-icon"),oT(78,"arrow_forward"),If()()()()(),su(79,"mat-step",5),nv(80,Vn,1,0,"ng-template",6),su(81,"form",28),mv("ngSubmit",function(){return t.onSubmit()}),su(82,"h3",8),oT(83,"Assign Services to Locations"),If(),su(84,"div",29),mS(85,Qn,14,3,"mat-card",26,hS),If(),su(87,"div",22)(88,"button",27)(89,"mat-icon"),oT(90,"arrow_back"),If(),oT(91," Back "),If(),su(92,"button",30)(93,"mat-icon"),oT(94,"check"),If(),oT(95," Save Customer "),If()()()()()()),e&2&&(pC(12),cv("stepControl",t.customerForm),pC(2),cv("formGroup",t.customerForm),pC(6),t_(),pC(7),t_(),pC(6),t_(),pC(6),t_(),pC(10),yS(t.phonesArray.controls),pC(4),cv("disabled",t.customerForm.invalid),pC(4),cv("stepControl",t.placesForm),pC(2),cv("formGroup",t.placesForm),pC(9),yS(t.placesArray.controls),pC(7),cv("disabled",t.placesForm.invalid),pC(4),cv("stepControl",t.servicesForm),pC(2),cv("formGroup",t.servicesForm),pC(4),yS(t.servicesByPlaceArray.controls),pC(7),cv("disabled",t.servicesForm.invalid||t.customerForm.invalid||t.placesForm.invalid||t.isSubmitting()));},dependencies:[P0,kn$1,xn$1,Ze,tn$1,Sn$1,In$1,dn$1,ln$1,pt,mt,Po,Jt,Me,te,Se,Zt,Xt,ce,rt,ae,zt,Sn$2,En$1,_t,yt,q,yt$1,wt,we,te$1,Pt,Lt,J,N,k,z,B$1,S,Xt$1,f,u],styles:['@charset "UTF-8";.add-customer-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:.5rem 1rem 2rem}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;color:#1e3a8a;margin:0}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;color:#64748b;margin:0}.add-customer-container[_ngcontent-%COMP%]   .custom-stepper[_ngcontent-%COMP%]{background:transparent;border-radius:16px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.85rem;padding-top:1rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:#0f172a;margin-bottom:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{flex:1 1 200px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1fr;gap:.5rem}@media(max-width:480px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-child{grid-column:1/-1}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .toggle-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;background:#f8fafc;border:1px solid #E2E8F0;border-radius:12px;font-weight:500;font-size:.9rem;color:#334155}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .toggle-box.inline-toggle[_ngcontent-%COMP%]{flex:1 1 200px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;color:#1e3a8a}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-type[_ngcontent-%COMP%]{width:130px;flex-shrink:0}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{flex:1;min-width:0}@media(max-width:380px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]{flex-wrap:wrap}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-type[_ngcontent-%COMP%]{width:100%}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{flex:1 1 100%}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 2px 8px #0000000d}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .location-subtitle[_ngcontent-%COMP%]{display:block;font-size:.8rem;color:#64748b;font-weight:400}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]{display:flex;gap:.75rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-child{flex:2}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:last-child{flex:1}@media(max-width:360px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .remove-service-btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:1.5rem;padding-top:1rem;border-top:1px solid #E2E8F0}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:44px}.my-2[_ngcontent-%COMP%]{margin:.5rem 0}.my-3[_ngcontent-%COMP%]{margin:1rem 0}']})};export{Yt as AddCustomerComponent};