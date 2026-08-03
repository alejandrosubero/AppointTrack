import'./chunk-3Rj-Udos.js';import {w as we,t as te$1}from'./chunk-COEB1f3Y.js';import {M as Mt,X as Xt$1}from'./chunk-Blzc3qJD.js';import {I,Z as ZI,c as cs,O as Oe,m as mr,A as A_,j as qI,al as J,D as Dl,T as TR,U as Ug,aJ as gw,b as Ll,S as SA,F as Fl,az as BN,V as V0,d as Dw,e as AA,aB as HN,a_ as jN,n as Lt$1,o as At,aL as NZ,p as TC,a$ as d,an as Yr,au as Ye,aS as Vt$1,a2 as ve,ae as Us,B as BE,t as hw,u as eR,K as Kw,z as zg,M as Mw,y as Aw,aG as wt,N as Ce$1,P as xl,ac as zd,ad as Vo,a0 as Qe,b0 as $l,J as Ct,C as lt,a6 as nr,b1 as Vx,L as LN,b2 as $R,a as FN,w as kw,x as jl,aa as Sw,b3 as _w,X as XN,q as qg,W as WN,G as oC,ao as Jo,ap as SZ,b4 as Fd,a5 as zl,ax as yZ,aC as gR,b5 as RR,ak as Bl,Y as G,aq as fr,ar as vr,as as mw,at as Ui,ab as VP,_ as be,av as ay,aQ as sy,aP as me,a7 as EC,b6 as Xm,ay as S3,aH as UN,f as Ia,b7 as te$2,b8 as ww,b9 as LR,H as Hw,v as tR,g as gD,h as mD,ai as oR,ba as PR}from'./main-R5Z3XAUA.js';import {f,u}from'./chunk-D12KgiCk.js';import {P as Pt,L as Lt}from'./chunk-BK-EIXfh.js';import {V as Vt,D,f as fe$1}from'./chunk-DYy2Mbbt.js';import'./chunk-Uh4w-evh.js';import {g}from'./chunk-gFnL7FIV.js';import {N,k,z,B as B$1,S}from'./chunk-CGaWgqH9.js';import {c as ce,r as rt,a as ae,z as zt,S as Sn$1,E as En$1}from'./chunk-CNbbzCcW.js';import {L as Lo,U as Ut$1,H as Ho,a as Uo,P as Pe,Y as Yn,B as Bo,j as jo,n as no,t as to,e as en,d as nn$1,l as li,s as si,b as so,F as Fi,I as Ii,m}from'./chunk-DPtKFahQ.js';var tn=["*"];function nn(n,s){n&1&&tR(0);}var ye=(()=>{class n{_elementRef=I(lt);focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Ce=(()=>{class n{template=I(Ui);static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var B={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},rn=new G("STEPPER_GLOBAL_OPTIONS"),fe=(()=>{class n{_stepperOptions;_stepper=I(j);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e);}_interacted=Oe(false);interactedStream=new Qe;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e);}_state=Oe(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e);}_editable=Oe(true);optional=false;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e);}_completedOverride=Oe(null);index=Oe(-1);isSelected=Bl(()=>this._stepper.selectedIndex===this.index());indicatorType=Bl(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??B.NUMBER,c=this._editable();return this._showError()&&this.hasError&&!e?B.ERROR:this._displayDefaultIndicatorType?!t||e?B.NUMBER:c?B.EDIT:B.DONE:t&&!e?B.DONE:t&&e?i:c&&e?B.EDIT:i});isNavigable=Bl(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e);}_customError=Oe(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=I(rn,{optional:true});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==false;}select(){this._stepper.selected=this;}reset(){this._interacted.set(false),this._completedOverride()!=null&&this._completedOverride.set(false),this._customError()!=null&&this._customError.set(false),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset());}ngOnChanges(){this._stepper._stateChanged();}_markAsInteracted(){this._interacted()||(this._interacted.set(true),this.interactedStream.emit(this));}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mr({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,c){if(t&1&&zg(c,Ce,5)(c,m,5),t&2){let d;Mw(d=Aw())&&(i.stepLabel=d.first),Mw(d=Aw())&&(i._childForms=d);}},viewQuery:function(t,i){if(t&1&&Sw(Ui,7),t&2){let c;Mw(c=Aw())&&(i.content=c.first);}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",vr],optional:[2,"optional","optional",vr],completed:[2,"completed","completed",vr],hasError:[2,"hasError","hasError",vr]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[fr],ngContentSelectors:tn,decls:1,vars:0,template:function(t,i){t&1&&(eR(),mw(0,nn,1,0,"ng-template"));},encapsulation:2})}return n})(),j=(()=>{class n{_dir=I(VP,{optional:true});_changeDetectorRef=I(zl);_elementRef=I(lt);_destroyed=new be;_keyManager;_steps;steps=new Vo;_stepHeader;_sortedHeaders=new Vo;get linear(){return this._linear()}set linear(e){this._linear.set(e);}_linear=Oe(false);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e);}_selectedIndex=Oe(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1;}selectionChange=new Qe;selectedIndexChange=new Qe;_groupId=I(ay).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical");}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(Us(this._steps),nr(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges();});}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Us(this._stepHeader),nr(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges();}),this._keyManager=new sy(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:me()).pipe(Us(this._layoutDirection()),nr(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0));}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted();}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete();}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1);}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0);}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged();}_getStepLabelId(e){return `${this._groupId}-label-${e}`}_getStepContentId(e){return `${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck();}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged();}_onKeydown(e){let t=EC(e),i=e.keyCode,c=this._keyManager;c?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=c.activeItemIndex,e.preventDefault()):c?.setFocusOrigin("keyboard").onKeydown(e);}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return (i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):false}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=Xm();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,c){if(t&1&&zg(c,fe,5)(c,ye,5),t&2){let d;Mw(d=Aw())&&(i._steps=d),Mw(d=Aw())&&(i._stepHeader=d);}},inputs:{linear:[2,"linear","linear",vr],selectedIndex:[2,"selectedIndex","selectedIndex",S3],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),Qt=(()=>{class n{_stepper=I(j);type="submit";static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,i){t&1&&Fl("click",function(){return i._stepper.next()}),t&2&&_w("type",i.type);},inputs:{type:"type"}})}return n})(),qt=(()=>{class n{_stepper=I(j);type="button";static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){t&1&&Fl("click",function(){return i._stepper.previous()}),t&2&&_w("type",i.type);},inputs:{type:"type"}})}return n})(),jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Lt$1({type:n});static \u0275inj=At({imports:[TC]})}return n})();var an=(n,s,e)=>({index:n,active:s,optional:e});function on(n,s){if(n&1&&ww(0,2),n&2){let e=XN();Dw("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",LR(2,an,e.index,e.active,e.optional));}}function sn(n,s){if(n&1&&(Dl(0,"span",7),TR(1),Ug()),n&2){let e=XN(2);V0(),Hw(e._getDefaultTextForState(e.state));}}function ln(n,s){if(n&1&&(Dl(0,"span",8),TR(1),Ug()),n&2){let e=XN(3);V0(),Hw(e._intl.completedLabel);}}function cn(n,s){if(n&1&&(Dl(0,"span",8),TR(1),Ug()),n&2){let e=XN(3);V0(),Hw(e._intl.editableLabel);}}function pn(n,s){if(n&1&&(LN(0,ln,2,1,"span",8)(1,cn,2,1,"span",8),Dl(2,"mat-icon",7),TR(3),Ug()),n&2){let e=XN(2);FN(e.state==="done"?0:e.state==="edit"?1:-1),V0(3),Hw(e._getDefaultTextForState(e.state));}}function dn(n,s){if(n&1&&LN(0,sn,2,1,"span",7)(1,pn,4,2),n&2){let t=XN();FN((t.state)==="number"?0:1);}}function mn(n,s){n&1&&(Dl(0,"div",4),ww(1,9),Ug()),n&2&&(V0(),Dw("ngTemplateOutlet",s.template));}function un(n,s){if(n&1&&(Dl(0,"div",4),TR(1),Ug()),n&2){let e=XN();V0(),Hw(e.label);}}function hn(n,s){if(n&1&&(Dl(0,"div",5),TR(1),Ug()),n&2){let e=XN();V0(),Hw(e._intl.optionalLabel);}}function fn(n,s){if(n&1&&(Dl(0,"div",6),TR(1),Ug()),n&2){let e=XN();V0(),Hw(e.errorMessage);}}var Ut=["*"];function _n(n,s){}function gn(n,s){if(n&1&&(tR(0),gw(1,_n,0,0,"ng-template",0)),n&2){let e=XN();V0(),Dw("cdkPortalOutlet",e._portal);}}var vn=["animatedContainer"],Wt=n=>({steps:n}),Kt=n=>({step:n});function bn(n,s){n&1&&tR(0);}function yn(n,s){if(n&1&&(Dl(0,"div",5),ww(1,9)(2,6),Ug()),n&2){let e=XN(2),t=oR(6);V0(),Dw("ngTemplateOutlet",e.headerPrefix()),V0(),Dw("ngTemplateOutlet",t)("ngTemplateOutletContext",PR(3,Wt,e.steps));}}function Cn(n,s){if(n&1&&ww(0,6),n&2){let e=XN(2),t=oR(6);Dw("ngTemplateOutlet",t)("ngTemplateOutletContext",PR(2,Wt,e.steps));}}function xn(n,s){if(n&1&&(Dl(0,"div",10,2),ww(2,9),Ug()),n&2){let e=s.$implicit,t=s.$index,i=XN(2);gR("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),Dw("id",i._getStepContentId(t)),Ia("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),V0(2),Dw("ngTemplateOutlet",e.content);}}function Mn(n,s){if(n&1&&(Dl(0,"div",3),LN(1,yn,3,5,"div",5)(2,Cn,1,4,"ng-container",6),Dl(3,"div",7),BN(4,xn,3,6,"div",8,UN),Ug()()),n&2){let e=XN();V0(),FN(e.headerPrefix()?1:2),V0(3),HN(e.steps);}}function Sn(n,s){if(n&1&&ww(0,9),n&2){let e=XN(2);Dw("ngTemplateOutlet",e.headerPrefix());}}function Pn(n,s){if(n&1&&(Dl(0,"div",11),ww(1,6),Dl(2,"div",12,2)(4,"div",13)(5,"div",14),ww(6,9),Ug()()()()),n&2){let e=s.$implicit,t=s.$index,i=s.$index,c=s.$count,d=XN(2),y=oR(4);V0(),Dw("ngTemplateOutlet",y)("ngTemplateOutletContext",PR(11,Kt,e)),V0(),jl("mat-stepper-vertical-line",i!==c-1)("mat-vertical-content-container-active",d.selectedIndex===t),Ia("inert",d.selectedIndex===t?null:"")("aria-label",d.ariaLabel),V0(2),Dw("id",d._getStepContentId(t)),Ia("aria-labelledby",d._getStepLabelId(t)),V0(2),Dw("ngTemplateOutlet",e.content);}}function On(n,s){if(n&1&&(Dl(0,"div",4),LN(1,Sn,1,1,"ng-container",9),BN(2,Pn,7,13,"div",11,UN),Ug()),n&2){let e=XN();V0(),FN(e.headerPrefix()?1:-1),V0(),HN(e.steps);}}function En(n,s){if(n&1){let e=WN();Dl(0,"mat-step-header",15),Fl("click",function(){let i=gD(e).step;return mD(i.select())})("keydown",function(i){gD(e);let c=XN();return mD(c._onKeydown(i))}),Ug();}if(n&2){let e=s.step,t=XN();jl("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),Dw("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),Ia("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:true);}}function wn(n,s){n&1&&Ll(0,"div",17);}function In(n,s){if(n&1&&(ww(0,6),LN(1,wn,1,0,"div",17)),n&2){let e=s.$implicit,t=s.$index,i=s.$count;XN(2);let c=oR(4);Dw("ngTemplateOutlet",c)("ngTemplateOutletContext",PR(3,Kt,e)),V0(),FN(t!==i-1?1:-1);}}function Dn(n,s){if(n&1&&(Dl(0,"div",16),BN(1,In,2,5,null,null,UN),Ug()),n&2){let e=s.steps,t=XN();Ia("aria-label",t.ariaLabel),V0(),HN(e);}}var te=(()=>{class n extends Ce{static \u0275fac=(()=>{let e;return function(i){return (e||(e=BE(n)))(i||n)}})();static \u0275dir=wt({type:n,selectors:[["","matStepLabel",""]],features:[hw]})}return n})(),kn=(()=>{class n{changes=new be;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=te$2({token:n,factory:n.\u0275fac})}return n})(),xe=(()=>{class n extends ye{_intl=I(kn);_focusMonitor=I(oC);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=false;active=false;optional=false;disableRipple=false;color;constructor(){super();let e=I(Jo);e.load(SZ),e.load(Fd);let t=I(zl);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck());}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef);}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t);}_stringLabel(){return this.label instanceof te?null:this.label}_templateLabel(){return this.label instanceof te?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return !this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mr({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(gR("mat-"+(i.color||"primary")),jl("mat-step-header-empty-label",i._hasEmptyLabel()));},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[hw],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(Ll(0,"div",0),Dl(1,"div")(2,"div",1),LN(3,on,1,6,"ng-container",2)(4,dn,2,1),Ug()(),Dl(5,"div",3),LN(6,mn,2,1,"div",4)(7,un,2,1,"div",4),LN(8,hn,2,1,"div",5),LN(9,fn,2,1,"div",6),Ug()),t&2){let c;Dw("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),V0(),gR(RR("mat-step-icon-state-",i.state," mat-step-icon")),jl("mat-step-icon-selected",i.selected),V0(2),FN(i.iconOverrides&&i.iconOverrides[i.state]?3:4),V0(2),jl("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),V0(),FN((c=i._templateLabel())?6:i._stringLabel()?7:-1,c),V0(2),FN(i._hasOptionalLabel()?8:-1),V0(),FN(i._hasErrorLabel()?9:-1);}},dependencies:[yZ,Vx,Ii],styles:[`.mat-step-header {
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
`],encapsulation:2})}return n})(),Fn=(()=>{class n{templateRef=I(Ui);name;static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),An=(()=>{class n{_template=I(Ui);static \u0275fac=function(t){return new(t||n)};static \u0275dir=wt({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Me=(()=>{class n extends fe{_errorStateMatcher=I(d,{skipSelf:true});_viewContainerRef=I(Yr);_isSelected=Ye.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Vt$1(()=>this._stepper.selectionChange.pipe(ve(e=>e.selectedStep===this),Us(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new D(this._lazyContent._template,this._viewContainerRef));});}ngOnDestroy(){this._isSelected.unsubscribe();}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),c=!!(e&&e.invalid&&this.interacted);return i||c}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??false,i=!!(e&&e().invalid()&&this.interacted);return t||i}static \u0275fac=(()=>{let e;return function(i){return (e||(e=BE(n)))(i||n)}})();static \u0275cmp=mr({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,c){if(t&1&&zg(c,te,5)(c,An,5),t&2){let d;Mw(d=Aw())&&(i.stepLabel=d.first),Mw(d=Aw())&&(i._lazyContent=d.first);}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[Kw([{provide:d,useExisting:n},{provide:fe,useExisting:n}]),hw],ngContentSelectors:Ut,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(eR(),gw(0,gn,2,1,"ng-template"));},dependencies:[fe$1],encapsulation:2})}return n})(),Se=(()=>{class n extends j{_ngZone=I(Ce$1);_renderer=I(xl);_animationsDisabled=zd();_cleanupTransition;_isAnimating=Oe(false);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Vo;_icons;animationDone=new Qe;disableRipple=false;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=$l(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration="";}_animationDuration="";_isServer=!I(Ct).isBrowser;constructor(){super();let t=I(lt).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal";}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(nr(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(nr(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(true);}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend);},200);});}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=false;this._animatedContainers.changes.pipe(Us(null),nr(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=true,this.animationDone.emit()),this._stateChanged();}));}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.();}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),c=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||c)&&this._animatedContainers.find(y=>y.nativeElement===t)&&this._onAnimationDone();};_onAnimationDone(){this._isAnimating.set(false),this.animationDone.emit();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=mr({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,c){if(t&1&&zg(c,Me,5)(c,Fn,5),t&2){let d;Mw(d=Aw())&&(i._steps=d),Mw(d=Aw())&&(i._icons=d);}},viewQuery:function(t,i){if(t&1&&Sw(xe,5)(vn,5),t&2){let c;Mw(c=Aw())&&(i._stepHeader=c),Mw(c=Aw())&&(i._animatedContainers=c);}},hostVars:14,hostBindings:function(t,i){t&2&&(kw("--mat-stepper-animation-duration",i._getAnimationDuration()),jl("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()));},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[Kw([{provide:j,useExisting:n}]),hw],ngContentSelectors:Ut,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(eR(),LN(0,bn,1,0),LN(1,Mn,6,1,"div",3)(2,On,4,1,"div",4),gw(3,En,1,27,"ng-template",null,0,$R)(5,Dn,3,1,"ng-template",null,1,$R)),t&2){let c;FN(i._isServer?0:-1),V0(),FN((c=i.orientation)==="horizontal"?1:c==="vertical"?2:-1);}},dependencies:[Vx,xe],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return n})(),Zt=(()=>{class n extends Qt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=BE(n)))(i||n)}})();static \u0275dir=wt({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,i){t&2&&_w("type",i.type);},features:[hw]})}return n})(),Xt=(()=>{class n extends qt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=BE(n)))(i||n)}})();static \u0275dir=wt({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){t&2&&_w("type",i.type);},features:[hw]})}return n})(),Jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Lt$1({type:n});static \u0275inj=At({providers:[d],imports:[Vt,jt,Fi,NZ,Se,xe,TC]})}return n})();function Nn(n,s){n&1&&TR(0,"Customer");}function zn(n,s){if(n&1){let e=WN();Dl(0,"button",39),Fl("click",function(){gD(e);let i=XN().$index,c=XN();return mD(c.removePhone(i))}),Dl(1,"mat-icon"),TR(2,"delete"),Ug()();}}function Rn(n,s){if(n&1&&(Dl(0,"div",21)(1,"mat-form-field",31)(2,"mat-label"),TR(3,"Type"),Ug(),Dl(4,"mat-select",32)(5,"mat-option",33),TR(6,"Mobile"),Ug(),Dl(7,"mat-option",34),TR(8,"Home"),Ug(),Dl(9,"mat-option",35),TR(10,"Office"),Ug()(),SA(),Ug(),Dl(11,"mat-form-field",36)(12,"mat-label"),TR(13,"Phone Number"),Ug(),Ll(14,"input",37),SA(),Dl(15,"mat-icon",11),TR(16,"phone"),Ug()(),LN(17,zn,3,0,"button",38),Ug()),n&2){let e=s.$index,t=XN();Dw("formGroupName",e),V0(4),AA(),V0(10),AA(),V0(3),FN(t.phonesArray.length>1?17:-1);}}function Ln(n,s){n&1&&TR(0,"Locations");}function Bn(n,s){if(n&1){let e=WN();Dl(0,"button",39),Fl("click",function(){gD(e);let i=XN().$index,c=XN();return mD(c.removePlace(i))}),Dl(1,"mat-icon"),TR(2,"delete"),Ug()();}}function Hn(n,s){if(n&1&&(Dl(0,"mat-card",26)(1,"mat-card-header",40)(2,"mat-card-title"),TR(3),Ug(),LN(4,Bn,3,0,"button",38),Ug(),Dl(5,"mat-card-content")(6,"div",12)(7,"mat-form-field",9)(8,"mat-label"),TR(9,"Property Type"),Ug(),Dl(10,"mat-select",32)(11,"mat-option",41),TR(12,"Residential"),Ug(),Dl(13,"mat-option",42),TR(14,"Commercial"),Ug(),Dl(15,"mat-option",43),TR(16,"Warehouse"),Ug(),Dl(17,"mat-option",44),TR(18,"Restaurant"),Ug()(),SA(),Ug(),Dl(19,"div",45)(20,"span"),TR(21,"Commercial Place"),Ug(),Ll(22,"mat-slide-toggle",16),SA(),Ug()(),Dl(23,"div",46)(24,"mat-form-field",9)(25,"mat-label"),TR(26,"Street Address"),Ug(),Ll(27,"input",47),SA(),Dl(28,"mat-icon",11),TR(29,"home"),Ug()(),Dl(30,"mat-form-field",9)(31,"mat-label"),TR(32,"Apt / Suite / Unit (Optional)"),Ug(),Ll(33,"input",48),SA(),Ug(),Dl(34,"div",49)(35,"mat-form-field",50)(36,"mat-label"),TR(37,"City"),Ug(),Ll(38,"input",51),SA(),Ug(),Dl(39,"mat-form-field",50)(40,"mat-label"),TR(41,"State"),Ug(),Ll(42,"input",52),SA(),Ug(),Dl(43,"mat-form-field",50)(44,"mat-label"),TR(45,"Zipcode"),Ug(),Ll(46,"input",53),SA(),Ug()()(),Dl(47,"mat-form-field",9)(48,"mat-label"),TR(49,"Location Note (Optional)"),Ug(),Ll(50,"input",54),SA(),Dl(51,"mat-icon",11),TR(52,"note"),Ug()()()()),n&2){let e=s.$index,t=XN();Dw("formGroupName",e),V0(3),qg("Location #",e+1),V0(),FN(t.placesArray.length>1?4:-1),V0(6),AA(),V0(12),AA(),V0(5),AA(),V0(6),AA(),V0(5),AA(),V0(4),AA(),V0(4),AA(),V0(4),AA();}}function Vn(n,s){n&1&&TR(0,"Services");}function Gn(n,s){if(n&1){let e=WN();Dl(0,"div",62)(1,"button",64),Fl("click",function(){gD(e);let i=XN().$index,c=XN().$index,d=XN();return mD(d.removeService(c,i))}),Dl(2,"mat-icon"),TR(3,"delete"),Ug(),TR(4," Remove Service "),Ug()();}}function $n(n,s){if(n&1&&(Dl(0,"div",57)(1,"div",58)(2,"mat-form-field",9)(3,"mat-label"),TR(4,"Service Name"),Ug(),Ll(5,"input",59),SA(),Dl(6,"mat-icon",11),TR(7,"build"),Ug()(),Dl(8,"mat-form-field",9)(9,"mat-label"),TR(10,"Est. Duration (Minutes)"),Ug(),Ll(11,"input",60),SA(),Dl(12,"mat-icon",11),TR(13,"schedule"),Ug()()(),Dl(14,"mat-form-field",9)(15,"mat-label"),TR(16,"Description / Scope (Optional)"),Ug(),Ll(17,"input",61),SA(),Ug(),LN(18,Gn,5,0,"div",62),Ll(19,"mat-divider",63),Ug()),n&2){let e=s.$index,t=XN().$index,i=XN();Dw("formGroupName",e),V0(5),AA(),V0(6),AA(),V0(6),AA(),V0(),FN(i.getServicesArray(t).length>1?18:-1);}}function Qn(n,s){if(n&1){let e=WN();Dl(0,"mat-card",26)(1,"mat-card-header",40)(2,"mat-card-title"),TR(3),Dl(4,"span",55),TR(5),Ug()(),Dl(6,"button",19),Fl("click",function(){let i=gD(e).$index,c=XN();return mD(c.addService(i))}),Dl(7,"mat-icon"),TR(8,"add"),Ug(),TR(9," Add Service "),Ug()(),Dl(10,"mat-card-content")(11,"div",56),BN(12,$n,20,2,"div",57,jN),Ug()()();}if(n&2){let e=s.$index,t=XN();Dw("formGroupName",e),V0(3),qg(" Services for Location #",e+1," "),V0(2),qg(" (",t.placesArray.at(e).get("address.street")?.value||"Address pending",") "),V0(7),HN(t.getServicesArray(e).controls);}}var Yt=class n{fb=I(Lo);dbService=I(g);authService=I(ZI);snackBar=I(Mt);router=I(cs);isSubmitting=Oe(false);customerForm=this.fb.group({name:["",[Ut$1.required,Ut$1.minLength(2)]],email:["",[Ut$1.required,Ut$1.email]],accountNumber:["",[Ut$1.required]],isCommercial:[false],phones:this.fb.array([this.createPhoneGroup()])});placesForm=this.fb.group({places:this.fb.array([this.createPlaceGroupOnly()])});servicesForm=this.fb.group({servicesByPlace:this.fb.array([this.createServicesForPlaceGroup()])});get phonesArray(){return this.customerForm.get("phones")}get placesArray(){return this.placesForm.get("places")}get servicesByPlaceArray(){return this.servicesForm.get("servicesByPlace")}createPhoneGroup(){return this.fb.group({type:["mobile",Ut$1.required],phoneNumber:["",[Ut$1.required,Ut$1.pattern(/^[0-9\-\+\s\(\)]{7,15}$/)]]})}createPlaceGroupOnly(){return this.fb.group({type:["Residential",Ut$1.required],isCommercial:[false],notePlace:[""],address:this.fb.group({street:["",Ut$1.required],street2:[""],city:["",Ut$1.required],state:["TX",Ut$1.required],zipcode:["",[Ut$1.required,Ut$1.pattern(/^[0-9]{5}$/)]],active:[true]}),phoneNumber:this.fb.group({type:["location"],phoneNumber:[""]})})}createServicesForPlaceGroup(){return this.fb.group({services:this.fb.array([this.createServiceGroup()])})}createServiceGroup(){return this.fb.group({name:["",Ut$1.required],description:[""],timeInMinutes:[60,[Ut$1.required,Ut$1.min(15)]]})}getServicesArray(s){return this.servicesByPlaceArray.at(s).get("services")}addPhone(){this.phonesArray.push(this.createPhoneGroup());}removePhone(s){this.phonesArray.length>1&&this.phonesArray.removeAt(s);}addPlace(){this.placesArray.push(this.createPlaceGroupOnly()),this.servicesByPlaceArray.push(this.createServicesForPlaceGroup());}removePlace(s){this.placesArray.length>1&&(this.placesArray.removeAt(s),this.servicesByPlaceArray.removeAt(s));}addService(s){this.getServicesArray(s).push(this.createServiceGroup());}removeService(s,e){let t=this.getServicesArray(s);t.length>1&&t.removeAt(e);}async onSubmit(){if(this.customerForm.invalid||this.placesForm.invalid||this.servicesForm.invalid){this.snackBar.open("Please fill out all required fields correctly.","Close",{duration:3e3});return}this.isSubmitting.set(true);try{let s=this.authService.currentUser(),e=this.customerForm.value,t=this.placesForm.value.places,i=this.servicesForm.value.servicesByPlace,c=t.map((y,en)=>({id:crypto.randomUUID(),type:y.type,isCommercial:y.isCommercial,notePlace:y.notePlace||"",address:{id:crypto.randomUUID(),street:y.address.street,street2:y.address.street2||"",city:y.address.city,state:y.address.state,zipcode:Number(y.address.zipcode),active:!0},phoneNumber:y.phoneNumber?.phoneNumber?{id:crypto.randomUUID(),type:y.phoneNumber.type||"location",phoneNumber:y.phoneNumber.phoneNumber}:void 0,services:i[en].services.map(_e=>({id:crypto.randomUUID(),name:_e.name,description:_e.description||"",timeInMinutes:Number(_e.timeInMinutes),appointments:[]}))})),d={id:crypto.randomUUID(),ownerId:s?.id||"",name:e.name,email:e.email,accountNumber:e.accountNumber,isCommercial:e.isCommercial,phones:e.phones,places:c,notes:[],noteCustomer:[],alertCustomer:[],records:[]};await this.dbService.saveCustomer(d),this.snackBar.open("Customer created successfully!","Close",{duration:3e3}),this.router.navigate(["/main/dashboard"]);}catch(s){console.error("Error saving customer:",s),this.snackBar.open("Failed to create customer. Please try again.","Close",{duration:3e3});}finally{this.isSubmitting.set(false);}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=mr({type:n,selectors:[["app-add-customer"]],decls:96,vars:9,consts:[["stepper",""],[1,"add-customer-container"],[1,"page-header"],["mat-icon-button","","routerLink","/main/dashboard"],["linear","",1,"custom-stepper"],[3,"stepControl"],["matStepLabel",""],[1,"step-form",3,"formGroup"],[1,"step-title"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","placeholder","John Doe or Acme Corp"],["matPrefix",""],[1,"form-row"],["matInput","","formControlName","accountNumber","placeholder","ACC-1001"],["matInput","","formControlName","email","type","email","placeholder","client@example.com"],[1,"toggle-box"],["formControlName","isCommercial","color","primary"],[1,"my-3"],[1,"section-subtitle"],["type","button","mat-button","","color","primary",3,"click"],["formArrayName","phones",1,"phones-list"],[1,"phone-row",3,"formGroupName"],[1,"step-actions"],["mat-flat-button","","color","primary","matStepperNext","",3,"disabled"],["type","button","mat-stroked-button","","color","primary",3,"click"],["formArrayName","places",1,"places-list"],[1,"place-card",3,"formGroupName"],["mat-stroked-button","","matStepperPrevious","","type","button"],[1,"step-form",3,"ngSubmit","formGroup"],["formArrayName","servicesByPlace",1,"places-list"],["type","submit","mat-flat-button","","color","primary",3,"disabled"],["appearance","outline",1,"phone-type"],["formControlName","type"],["value","mobile"],["value","home"],["value","office"],["appearance","outline",1,"phone-number"],["matInput","","formControlName","phoneNumber","placeholder","(806) 555-0199"],["type","button","mat-icon-button","","color","warn"],["type","button","mat-icon-button","","color","warn",3,"click"],[1,"card-header-actions"],["value","Residential"],["value","Commercial"],["value","Warehouse"],["value","Restaurant"],[1,"toggle-box","inline-toggle"],["formGroupName","address",1,"address-group"],["matInput","","formControlName","street","placeholder","123 Main St"],["matInput","","formControlName","street2","placeholder","Apt 4B"],[1,"form-row","three-cols"],["appearance","outline"],["matInput","","formControlName","city","placeholder","Amarillo"],["matInput","","formControlName","state","placeholder","TX"],["matInput","","formControlName","zipcode","placeholder","79101"],["matInput","","formControlName","notePlace","placeholder","Gate code #1234, watch for dog"],[1,"location-subtitle"],["formArrayName","services",1,"services-list"],[1,"service-row",3,"formGroupName"],[1,"service-inputs"],["matInput","","formControlName","name","placeholder","Pest Control Maintenance"],["matInput","","type","number","formControlName","timeInMinutes","placeholder","60"],["matInput","","formControlName","description","placeholder","Perimeter treatment + indoor check"],[1,"remove-service-btn"],[1,"my-2"],["type","button","mat-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(Dl(0,"div",1)(1,"div",2)(2,"button",3)(3,"mat-icon"),TR(4,"arrow_back"),Ug()(),Dl(5,"div")(6,"h2"),TR(7,"New Customer"),Ug(),Dl(8,"p"),TR(9,"Create initial profile, location & services"),Ug()()(),Dl(10,"mat-stepper",4,0)(12,"mat-step",5),gw(13,Nn,1,0,"ng-template",6),Dl(14,"form",7)(15,"h3",8),TR(16,"Customer Information"),Ug(),Dl(17,"mat-form-field",9)(18,"mat-label"),TR(19,"Customer / Business Name"),Ug(),Ll(20,"input",10),SA(),Dl(21,"mat-icon",11),TR(22,"person"),Ug()(),Dl(23,"div",12)(24,"mat-form-field",9)(25,"mat-label"),TR(26,"Account Number"),Ug(),Ll(27,"input",13),SA(),Dl(28,"mat-icon",11),TR(29,"tag"),Ug()(),Dl(30,"mat-form-field",9)(31,"mat-label"),TR(32,"Email Address"),Ug(),Ll(33,"input",14),SA(),Dl(34,"mat-icon",11),TR(35,"email"),Ug()()(),Dl(36,"div",15)(37,"span"),TR(38,"Commercial Account"),Ug(),Ll(39,"mat-slide-toggle",16),SA(),Ug(),Ll(40,"mat-divider",17),Dl(41,"div",18)(42,"h4"),TR(43,"Contact Phones"),Ug(),Dl(44,"button",19),Fl("click",function(){return t.addPhone()}),Dl(45,"mat-icon"),TR(46,"add"),Ug(),TR(47," Add Phone "),Ug()(),Dl(48,"div",20),BN(49,Rn,18,2,"div",21,jN),Ug(),Dl(51,"div",22),Ll(52,"span"),Dl(53,"button",23),TR(54," Next: Locations "),Dl(55,"mat-icon"),TR(56,"arrow_forward"),Ug()()()()(),Dl(57,"mat-step",5),gw(58,Ln,1,0,"ng-template",6),Dl(59,"form",7)(60,"div",18)(61,"h3",8),TR(62,"Property Locations"),Ug(),Dl(63,"button",24),Fl("click",function(){return t.addPlace()}),Dl(64,"mat-icon"),TR(65,"add_location"),Ug(),TR(66," Add Property "),Ug()(),Dl(67,"div",25),BN(68,Hn,53,3,"mat-card",26,jN),Ug(),Dl(70,"div",22)(71,"button",27)(72,"mat-icon"),TR(73,"arrow_back"),Ug(),TR(74," Back "),Ug(),Dl(75,"button",23),TR(76," Next: Services "),Dl(77,"mat-icon"),TR(78,"arrow_forward"),Ug()()()()(),Dl(79,"mat-step",5),gw(80,Vn,1,0,"ng-template",6),Dl(81,"form",28),Fl("ngSubmit",function(){return t.onSubmit()}),Dl(82,"h3",8),TR(83,"Assign Services to Locations"),Ug(),Dl(84,"div",29),BN(85,Qn,14,3,"mat-card",26,jN),Ug(),Dl(87,"div",22)(88,"button",27)(89,"mat-icon"),TR(90,"arrow_back"),Ug(),TR(91," Back "),Ug(),Dl(92,"button",30)(93,"mat-icon"),TR(94,"check"),Ug(),TR(95," Save Customer "),Ug()()()()()()),e&2&&(V0(12),Dw("stepControl",t.customerForm),V0(2),Dw("formGroup",t.customerForm),V0(6),AA(),V0(7),AA(),V0(6),AA(),V0(6),AA(),V0(10),HN(t.phonesArray.controls),V0(4),Dw("disabled",t.customerForm.invalid),V0(4),Dw("stepControl",t.placesForm),V0(2),Dw("formGroup",t.placesForm),V0(9),HN(t.placesArray.controls),V0(7),Dw("disabled",t.placesForm.invalid),V0(4),Dw("stepControl",t.servicesForm),V0(2),Dw("formGroup",t.servicesForm),V0(4),HN(t.servicesByPlaceArray.controls),V0(7),Dw("disabled",t.servicesForm.invalid||t.customerForm.invalid||t.placesForm.invalid||t.isSubmitting()));},dependencies:[A_,Ho,Uo,Pe,Yn,Bo,jo,no,to,en,nn$1,qI,Jt,Me,te,Se,Zt,Xt,ce,rt,ae,zt,Sn$1,En$1,li,si,so,Fi,Ii,we,te$1,Pt,Lt,J,N,k,z,B$1,S,Xt$1,f,u],styles:['@charset "UTF-8";.add-customer-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:.5rem 1rem 2rem}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;color:#1e3a8a;margin:0}.add-customer-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;color:#64748b;margin:0}.add-customer-container[_ngcontent-%COMP%]   .custom-stepper[_ngcontent-%COMP%]{background:transparent;border-radius:16px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.85rem;padding-top:1rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:#0f172a;margin-bottom:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{flex:1 1 200px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1fr;gap:.5rem}@media(max-width:480px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .form-row.three-cols[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-child{grid-column:1/-1}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .toggle-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;background:#f8fafc;border:1px solid #E2E8F0;border-radius:12px;font-weight:500;font-size:.9rem;color:#334155}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .toggle-box.inline-toggle[_ngcontent-%COMP%]{flex:1 1 200px}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;color:#1e3a8a}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-type[_ngcontent-%COMP%]{width:130px;flex-shrink:0}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{flex:1;min-width:0}@media(max-width:380px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]{flex-wrap:wrap}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-type[_ngcontent-%COMP%]{width:100%}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .phones-list[_ngcontent-%COMP%]   .phone-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{flex:1 1 100%}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 2px 8px #0000000d}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .places-list[_ngcontent-%COMP%]   .place-card[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .location-subtitle[_ngcontent-%COMP%]{display:block;font-size:.8rem;color:#64748b;font-weight:400}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]{display:flex;gap:.75rem}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-child{flex:2}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:last-child{flex:1}@media(max-width:360px){.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-inputs[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .remove-service-btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:1.5rem;padding-top:1rem;border-top:1px solid #E2E8F0}.add-customer-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:44px}.my-2[_ngcontent-%COMP%]{margin:.5rem 0}.my-3[_ngcontent-%COMP%]{margin:1rem 0}']})};export{Yt as AddCustomerComponent};