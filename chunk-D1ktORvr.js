import {p as pe,l as le}from'./chunk-BMJDm5WZ.js';import {$ as $t,H as Ht,f as fe}from'./chunk-Ch-YHvXI.js';import {Q,a8 as ht,ag as de,a3 as ce,aM as r,aY as s,b7 as To,a4 as tt,t as ti,ad as no,ak as WE,ab as Ot,a5 as ln,bt as Ie,bu as Os,j as j_,x as Qy,aL as Xy,b as pv,i as iv,F as Iv}from'./main-OXOBTJGA.js';function j(i,m){}var F="_mat-bottom-sheet-enter",L="_mat-bottom-sheet-exit",z=(()=>{class i extends le{_breakpointSubscription;_animationsDisabled=de();_animationState="void";_animationStateChanged=new ln;_destroyed=false;constructor(){super();let e=Q(Ie);this._breakpointSubscription=e.observe([Os.Medium,Os.Large,Os.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle("mat-bottom-sheet-container-medium",e.isMatched(Os.Medium)),n.toggle("mat-bottom-sheet-container-large",e.isMatched(Os.Large)),n.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(Os.XLarge));});}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(F));}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(L));}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=true;}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(true,e,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(false,e,this._elementRef.nativeElement));});}_trapFocus(){super._trapFocus({preventScroll:true});}_handleAnimationEvent(e,n,t){if(t===this._elementRef.nativeElement){let o=n===F;(o||n===L)&&this._animationStateChanged.emit({toState:o?"visible":"hidden",phase:e?"start":"done"});}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=j_({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(n,t){n&1&&pv("animationstart",function(a){return t._handleAnimationEvent(true,a.animationName,a.target)})("animationend",function(a){return t._handleAnimationEvent(false,a.animationName,a.target)})("animationcancel",function(a){return t._handleAnimationEvent(false,a.animationName,a.target)}),n&2&&(iv("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-label",t._config.ariaLabel),Iv("mat-bottom-sheet-container-animations-enabled",!t._animationsDisabled)("mat-bottom-sheet-container-enter",t._animationState==="visible")("mat-bottom-sheet-container-exit",t._animationState==="hidden"));},features:[Qy],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,t){n&1&&Xy(0,j,0,0,"ng-template",0);},dependencies:[fe],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return i})(),P=new ce("MatBottomSheetData"),b=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=true;backdropClass;disableClose=false;ariaLabel=null;ariaModal=false;closeOnNavigation=true;autoFocus="first-tabbable";restoreFocus=true;scrollStrategy;height="";minHeight;maxHeight;bindings},d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new tt;_result;_closeFallbackTimeout;constructor(m,e,n){this._ref=m,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(ti(t=>t.phase==="done"&&t.toState==="visible"),no(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),n._animationStateChanged.pipe(ti(t=>t.phase==="done"&&t.toState==="hidden"),no(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result);}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result);}),WE(this.backdropClick(),this.keydownEvents().pipe(ti(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!=="keydown"||!Ot(t))&&(t.preventDefault(),this.dismiss());});}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(ti(e=>e.phase==="start"),no(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop();}),this._result=m,this.containerInstance.exit(),this.containerInstance=null);}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},V=new ce("mat-bottom-sheet-default-options"),lt=(()=>{class i{_injector=Q(ht);_parentBottomSheet=Q(i,{optional:true,skipSelf:true});_animationsDisabled=de();_defaultOptions=Q(V,{optional:true});_bottomSheetRefAtThisLevel=null;_dialog=Q(pe);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e;}open(e,n){let t=r(r({},this._defaultOptions||new b),n),o;return this._dialog.open(e,s(r({},t),{disableClose:true,closeOnOverlayDetachments:false,maxWidth:"100%",container:z,scrollStrategy:t.scrollStrategy||Ht(this._injector),positionStrategy:$t(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:o}),providers:(a,X,H)=>(o=new d(a,t,H),[{provide:d,useValue:o},{provide:P,useValue:t.data}])})),o.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===o&&(this._openedBottomSheetRef=null);}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>o.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):o.containerInstance.enter(),this._openedBottomSheetRef=o,o}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e);}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss();}static \u0275fac=function(n){return new(n||i)};static \u0275prov=To({token:i,factory:i.\u0275fac})}return i})();export{P,d,lt as l};