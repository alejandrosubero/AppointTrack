import {X,z,U as Ue,a as zt,j as jt,V as Vt,N as Nt,K}from'./chunk-BbR9nFbc.js';import {$ as $t,H as Ht,f as fe}from'./chunk-BIl7aCaf.js';import {l as li,s as si,F as Fi,I as Ii}from'./chunk-BpDgG8Fi.js';import {Z,a8 as dt,ag as cr,a3 as ue,aM as Ne,bg as Ae,b9 as So,G as G_,T as T0,be as b0,n as nu,aL as Xy,s as sT,b as bf,p as pv,a as gC,j as sv,c as Sf,N as Nv,a4 as Xe,v as ei,ad as to,ak as eb,ab as ca,a5 as an,bw as yi,bx as Xg,Q as Qy,k as iv,H as Iv}from'./main-4SUFKCR7.js';function st(i,r){}var tt="_mat-bottom-sheet-enter",et="_mat-bottom-sheet-exit",rt=(()=>{class i extends K{_breakpointSubscription;_animationsDisabled=cr();_animationState="void";_animationStateChanged=new an;_destroyed=false;constructor(){super();let t=Z(yi);this._breakpointSubscription=t.observe([Xg.Medium,Xg.Large,Xg.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle("mat-bottom-sheet-container-medium",t.isMatched(Xg.Medium)),n.toggle("mat-bottom-sheet-container-large",t.isMatched(Xg.Large)),n.toggle("mat-bottom-sheet-container-xlarge",t.isMatched(Xg.XLarge));});}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(tt));}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(et));}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=true;}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(true,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(false,t,this._elementRef.nativeElement));});}_trapFocus(){super._trapFocus({preventScroll:true});}_handleAnimationEvent(t,n,e){if(e===this._elementRef.nativeElement){let o=n===tt;(o||n===et)&&this._animationStateChanged.emit({toState:o?"visible":"hidden",phase:t?"start":"done"});}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=G_({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(n,e){n&1&&pv("animationstart",function(a){return e._handleAnimationEvent(true,a.animationName,a.target)})("animationend",function(a){return e._handleAnimationEvent(false,a.animationName,a.target)})("animationcancel",function(a){return e._handleAnimationEvent(false,a.animationName,a.target)}),n&2&&(iv("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-label",e._config.ariaLabel),Iv("mat-bottom-sheet-container-animations-enabled",!e._animationsDisabled)("mat-bottom-sheet-container-enter",e._animationState==="visible")("mat-bottom-sheet-container-exit",e._animationState==="hidden"));},features:[Qy],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,e){n&1&&Xy(0,st,0,0,"ng-template",0);},dependencies:[fe],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2,changeDetection:1})}return i})(),mt=new ue("MatBottomSheetData"),D=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=true;backdropClass;disableClose=false;ariaLabel=null;ariaModal=false;closeOnNavigation=true;autoFocus="first-tabbable";restoreFocus=true;scrollStrategy;height="";minHeight;maxHeight;bindings},C=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new Xe;_result;_closeFallbackTimeout;constructor(r,t,n){this._ref=r,this.containerInstance=n,this.disableClose=t.disableClose,n._animationStateChanged.pipe(ei(e=>e.phase==="done"&&e.toState==="visible"),to(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),n._animationStateChanged.pipe(ei(e=>e.phase==="done"&&e.toState==="hidden"),to(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result);}),r.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result);}),eb(this.backdropClick(),this.keydownEvents().pipe(ei(e=>e.keyCode===27))).subscribe(e=>{!this.disableClose&&(e.type!=="keydown"||!ca(e))&&(e.preventDefault(),this.dismiss());});}dismiss(r){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(ei(t=>t.phase==="start"),to(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop();}),this._result=r,this.containerInstance.exit(),this.containerInstance=null);}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},lt=new ue("mat-bottom-sheet-default-options"),Et=(()=>{class i{_injector=Z(dt);_parentBottomSheet=Z(i,{optional:true,skipSelf:true});_animationsDisabled=cr();_defaultOptions=Z(lt,{optional:true});_bottomSheetRefAtThisLevel=null;_dialog=Z(X);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t;}open(t,n){let e=Ne(Ne({},this._defaultOptions||new D),n),o;return this._dialog.open(t,Ae(Ne({},e),{disableClose:true,closeOnOverlayDetachments:false,maxWidth:"100%",container:rt,scrollStrategy:e.scrollStrategy||Ht(this._injector),positionStrategy:$t(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:o}),providers:(a,dt,it)=>(o=new C(a,e,it),[{provide:C,useValue:o},{provide:mt,useValue:e.data}])})),o.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===o&&(this._openedBottomSheetRef=null);}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>o.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):o.containerInstance.enter(),this._openedBottomSheetRef=o,o}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t);}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss();}static \u0275fac=function(n){return new(n||i)};static \u0275prov=So({token:i,factory:i.\u0275fac})}return i})();function ct(i,r){i&1&&(nu(0,"mat-icon",6),sT(1,"warning"),bf());}var nt=class i{dialogRef=Z(z);data=Z(Ue);onCancel(){this.dialogRef.close(false);}onConfirm(){this.dialogRef.close(true);}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=G_({type:i,selectors:[["app-confirm-dialog"]],decls:11,vars:6,consts:[["mat-dialog-title","",1,"dialog-title"],["color","warn","class","title-icon",4,"ngIf"],[1,"dialog-message"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","",3,"click","color"],["color","warn",1,"title-icon"]],template:function(t,n){t&1&&(nu(0,"h2",0),Xy(1,ct,2,0,"mat-icon",1),sT(2),bf(),nu(3,"mat-dialog-content")(4,"p",2),sT(5),bf()(),nu(6,"mat-dialog-actions",3)(7,"button",4),pv("click",function(){return n.onCancel()}),sT(8),bf(),nu(9,"button",5),pv("click",function(){return n.onConfirm()}),sT(10),bf()()),t&2&&(gC(),sv("ngIf",n.data.isDangerous),gC(),Sf(" ",n.data.title,`
`),gC(3),Nv(n.data.message),gC(3),Sf(" ",n.data.cancelText||"Cancel"," "),gC(),sv("color",n.data.isDangerous?"warn":"primary"),gC(),Sf(" ",n.data.confirmText||"Confirm"," "));},dependencies:[T0,b0,zt,jt,Vt,Nt,li,si,Fi,Ii],styles:[".dialog-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.title-icon[_ngcontent-%COMP%]{flex-shrink:0}.dialog-message[_ngcontent-%COMP%]{margin:0;color:#374151;font-size:14px;line-height:1.5}"]})};export{C,Et as E,mt as m,nt as n};