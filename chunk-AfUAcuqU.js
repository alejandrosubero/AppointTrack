import {bi as Ee$1,aJ as U,bc as te,Y as G,n as Lt$1,o as At$1,aF as wt$1,ci as bt,P as xl,C as lt,t as hw,K as Kw,F as Fl,x as jl,a0 as Qe$1,B as BE,a4 as Ve$1,ap as fr,cj as EN,aK as NZ,p as TC,m as mr,u as eR,bC as Ew,v as tR,a$ as Bg,b0 as Hg,L as LN,V as V0,a as FN,I,ck as Xt$1,at as Ye$1,aL as Vl,a9 as Ot,aq as vr,f as Ia,aB as gR,cl as $e$1,O as Oe$1,aj as Bl,_ as be,cm as XT,a2 as ve,cn as Dr,co as Rt,a5 as zl,c9 as Gu,N as Ce,ac as zd,G as oC,b3 as CZ,b7 as $l,an as Jo,ao as SZ,cp as Wt$1,cq as DP,aO as me,cr as kt$1,cs as Qf,ct as Ls,cu as Fs,cv as nh,by as re,bk as RO,cw as Em,R as we,al as he,cx as $$1,cy as qi,cz as Ge$1,aV as _u,ax as S3}from'./main-7NB2MTM5.js';var Fe=(()=>{class o{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n;}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n);}registerOnTouched(t){this.onTouched=t;}registerOnChange(t){this.onChange=t;}setDisabledState(t){this.setProperty("disabled",t);}static \u0275fac=function(n){return new(n||o)(bt(xl),bt(lt))};static \u0275dir=wt$1({type:o})}return o})(),Se=(()=>{class o extends Fe{static \u0275fac=(()=>{let t;return function(i){return (t||(t=BE(o)))(i||o)}})();static \u0275dir=wt$1({type:o,features:[hw]})}return o})(),Ft=new G("");var mn={provide:Ft,useExisting:_u(()=>Ne),multi:true};function fn(){let o=Dr()?Dr().getUserAgent():"";return /android (\d+)/.test(o.toLowerCase())}var pn=new G(""),Ne=(()=>{class o extends Fe{_compositionMode;_composing=false;constructor(t,n,i){super(t,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!fn());}writeValue(t){let n=t??"";this.setProperty("value",n);}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t);}_compositionStart(){this._composing=true;}_compositionEnd(t){this._composing=false,this._compositionMode&&this.onChange(t);}static \u0275fac=function(n){return new(n||o)(bt(xl),bt(lt),bt(pn,8))};static \u0275dir=wt$1({type:o,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&Fl("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)});},standalone:false,features:[Kw([mn]),hw]})}return o})();function Lt(o){return o==null||Gt(o)===0}function Gt(o){return o==null?null:Array.isArray(o)||typeof o=="string"?o.length:o instanceof Set?o.size:null}var O=new G(""),Z=new G(""),hn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Tt=class{static min(e){return bn(e)}static max(e){return gn(e)}static required(e){return ke(e)}static requiredTrue(e){return vn(e)}static email(e){return yn(e)}static minLength(e){return _n(e)}static maxLength(e){return Cn(e)}static pattern(e){return xn(e)}static nullValidator(e){return _t()}static compose(e){return je(e)}static composeAsync(e){return ze(e)}};function bn(o){return e=>{if(e.value==null||o==null)return null;let t=parseFloat(e.value);return !isNaN(t)&&t<o?{min:{min:o,actual:e.value}}:null}}function gn(o){return e=>{if(e.value==null||o==null)return null;let t=parseFloat(e.value);return !isNaN(t)&&t>o?{max:{max:o,actual:e.value}}:null}}function ke(o){return Lt(o.value)?{required:true}:null}function vn(o){return o.value===true?null:{required:true}}function yn(o){return Lt(o.value)||hn.test(o.value)?null:{email:true}}function _n(o){return e=>{let t=e.value?.length??Gt(e.value);return t===null||t===0?null:t<o?{minlength:{requiredLength:o,actualLength:t}}:null}}function Cn(o){return e=>{let t=e.value?.length??Gt(e.value);return t!==null&&t>o?{maxlength:{requiredLength:o,actualLength:t}}:null}}function xn(o){if(!o)return _t;let e,t;return typeof o=="string"?(t="",o.charAt(0)!=="^"&&(t+="^"),t+=o,o.charAt(o.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=o.toString(),e=o),n=>{if(Lt(n.value))return null;let i=n.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function _t(o){return null}function Re(o){return o!=null}function Oe(o){return qi(o)?Ge$1(o):o}function Pe(o){let e={};return o.forEach(t=>{e=t!=null?U(U({},e),t):e;}),Object.keys(e).length===0?null:e}function Te(o,e){return e.map(t=>t(o))}function wn(o){return !o.validate}function Be(o){return o.map(e=>wn(e)?e:t=>e.validate(t))}function je(o){if(!o)return null;let e=o.filter(Re);return e.length==0?null:function(t){return Pe(Te(t,e))}}function Ht(o){return o!=null?je(Be(o)):null}function ze(o){if(!o)return null;let e=o.filter(Re);return e.length==0?null:function(t){let n=Te(t,e).map(Oe);return XT(n).pipe(ve(Pe))}}function Wt(o){return o!=null?ze(Be(o)):null}function Ve(o,e){return o===null?[e]:Array.isArray(o)?[...o,e]:[o,e]}function Ue(o){return o._rawValidators}function Le(o){return o._rawAsyncValidators}function Bt(o){return o?Array.isArray(o)?o:[o]:[]}function Ct(o,e){return Array.isArray(o)?o.includes(e):o===e}function De(o,e){let t=Bt(e);return Bt(o).forEach(i=>{Ct(t,i)||t.push(i);}),t}function Ae(o,e){return Bt(e).filter(t=>!Ct(o,t))}var xt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ht(this._rawValidators);}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Wt(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[];}reset(e=void 0){this.control?.reset(e);}hasError(e,t){return this.control?this.control.hasError(e,t):false}getError(e,t){return this.control?this.control.getError(e,t):null}},f=class extends xt{name;get formDirective(){return null}get path(){return null}};var et="VALID",vt="INVALID",W="PENDING",nt="DISABLED",D=class{},wt=class extends D{value;source;constructor(e,t){super(),this.value=e,this.source=t;}},it=class extends D{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t;}},rt=class extends D{touched;source;constructor(e,t){super(),this.touched=e,this.source=t;}},$=class extends D{status;source;constructor(e,t){super(),this.status=e,this.source=t;}},Vt=class extends D{source;constructor(e){super(),this.source=e;}},R=class extends D{source;constructor(e){super(),this.source=e;}};function $t(o){return (St(o)?o.validators:o)||null}function Vn(o){return Array.isArray(o)?Ht(o):o||null}function qt(o,e){return (St(e)?e.asyncValidators:o)||null}function Dn(o){return Array.isArray(o)?Wt(o):o||null}function St(o){return o!=null&&!Array.isArray(o)&&typeof o=="object"}function Ge(o,e,t){let n=o.controls;if(!(e?Object.keys(n):n).length)throw new $$1(1e3,"");if(!We(n,t))throw new $$1(1001,"")}function He(o,e,t){o._forEachChild((n,i)=>{if(t[i]===void 0)throw new $$1(-1002,"")});}var q=class{_pendingDirty=false;_hasOwnPendingAsyncValidator=null;_pendingTouched=false;_onCollectionChange=()=>{};_updateOn;_hasRequired=Oe$1(false);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t);}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator();}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e;}get parent(){return this._parent}get status(){return $e$1(this.statusReactive)}set status(e){$e$1(()=>this.statusReactive.set(e));}_status=Bl(()=>this.statusReactive());statusReactive=Oe$1(void 0);get valid(){return this.status===et}get invalid(){return this.status===vt}get pending(){return this.status===W}get disabled(){return this.status===nt}get enabled(){return this.status!==nt}errors;get pristine(){return $e$1(this.pristineReactive)}set pristine(e){$e$1(()=>this.pristineReactive.set(e));}_pristine=Bl(()=>this.pristineReactive());pristineReactive=Oe$1(true);get dirty(){return !this.pristine}get touched(){return $e$1(this.touchedReactive)}set touched(e){$e$1(()=>this.touchedReactive.set(e));}_touched=Bl(()=>this.touchedReactive());touchedReactive=Oe$1(false);get untouched(){return !this.touched}_events=new be;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e);}setAsyncValidators(e){this._assignAsyncValidators(e);}addValidators(e){this.setValidators(De(e,this._rawValidators));}addAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators));}removeValidators(e){this.setValidators(Ae(e,this._rawValidators));}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators));}hasValidator(e){return Ct(this._rawValidators,e)}hasAsyncValidator(e){return Ct(this._rawAsyncValidators,e)}clearValidators(){this.validator=null;}clearAsyncValidators(){this.asyncValidator=null;}markAsTouched(e={}){let t=this.touched===false;this.touched=true;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(Ee$1(U({},e),{sourceControl:n})),t&&e.emitEvent!==false&&this._events.next(new rt(true,n));}markAllAsDirty(e={}){this.markAsDirty({onlySelf:true,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e));}markAllAsTouched(e={}){this.markAsTouched({onlySelf:true,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e));}markAsUntouched(e={}){let t=this.touched===true;this.touched=false,this._pendingTouched=false;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:true,emitEvent:e.emitEvent,sourceControl:n});}),e.onlySelf||this._parent?._updateTouched(e,n),t&&e.emitEvent!==false&&this._events.next(new rt(false,n));}markAsDirty(e={}){let t=this.pristine===true;this.pristine=false;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(Ee$1(U({},e),{sourceControl:n})),t&&e.emitEvent!==false&&this._events.next(new it(false,n));}markAsPristine(e={}){let t=this.pristine===false;this.pristine=true,this._pendingDirty=false;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:true,emitEvent:e.emitEvent});}),e.onlySelf||this._parent?._updatePristine(e,n),t&&e.emitEvent!==false&&this._events.next(new it(true,n));}markAsPending(e={}){this.status=W;let t=e.sourceControl??this;e.emitEvent!==false&&(this._events.next(new $(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(Ee$1(U({},e),{sourceControl:t}));}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=nt,this.errors=null,this._forEachChild(i=>{i.disable(Ee$1(U({},e),{onlySelf:true}));}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==false&&(this._events.next(new wt(this.value,n)),this._events.next(new $(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Ee$1(U({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(true));}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=et,this._forEachChild(n=>{n.enable(Ee$1(U({},e),{onlySelf:true}));}),this.updateValueAndValidity({onlySelf:true,emitEvent:e.emitEvent}),this._updateAncestors(Ee$1(U({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(false));}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t));}setParent(e){this._parent=e;}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===et||this.status===W)&&this._runAsyncValidator(n,e.emitEvent);}let t=e.sourceControl??this;e.emitEvent!==false&&(this._events.next(new wt(this.value,t)),this._events.next(new $(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(Ee$1(U({},e),{sourceControl:t}));}_updateTreeValidity(e={emitEvent:true}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:true,emitEvent:e.emitEvent});}_setInitialStatus(){this.status=this._allControlsDisabled()?nt:et;}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=W,this._hasOwnPendingAsyncValidator={emitEvent:t!==false,shouldHaveEmitted:e!==false};let n=Oe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e});});}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??false;return this._hasOwnPendingAsyncValidator=null,e}return  false}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==false,this,t.shouldHaveEmitted);}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,i)=>n&&n._find(i),this)}getError(e,t){let n=t?this.get(t):this;return n?.errors?n.errors[e]:null}hasError(e,t){return !!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new $(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n);}_initObservables(){this.valueChanges=new Qe$1,this.statusChanges=new Qe$1;}_calculateStatus(){return this._allControlsDisabled()?nt:this.errors?vt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(W)?W:this._anyControlsHaveStatus(vt)?vt:et}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,e.onlySelf||this._parent?._updatePristine(e,t),i&&this._events.next(new it(this.pristine,t));}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new rt(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t);}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e;}_setUpdateStrategy(e){St(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn);}_parentMarkedDirty(e){return !e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Vn(this._rawValidators),this._updateHasRequiredValidator();}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Dn(this._rawAsyncValidators);}_updateHasRequiredValidator(){$e$1(()=>this._hasRequired.set(this.hasValidator(Tt.required)));}};function We(o,e){return Object.hasOwn(o,e)}function An(o){return o.tagName==="INPUT"||o.tagName==="SELECT"||o.tagName==="TEXTAREA"}function Mn(o,e,t,n){switch(t){case "name":o.setAttribute(e,t,n);break;case "disabled":case "readonly":case "required":n?o.setAttribute(e,t,""):o.removeAttribute(e,t);break;case "max":case "min":case "minLength":case "maxLength":n!==void 0?o.setAttribute(e,t,n.toString()):o.removeAttribute(e,t);break}}var jt=class{kind;context;control;message;constructor({kind:e,context:t,control:n}){this.kind=e,this.context=t,this.control=n;}};var En=(()=>{class o{_validator=_t;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):_t,this._onChange?.();}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t;}enabled(t){return t!=null}static \u0275fac=function(n){return new(n||o)};static \u0275dir=wt$1({type:o,features:[fr]})}return o})();var In={provide:O,useExisting:_u(()=>$e),multi:true};var $e=(()=>{class o extends En{required;inputName="required";normalizeInput=vr;createValidator=t=>ke;enabled(t){return t}static \u0275fac=(()=>{let t;return function(i){return (t||(t=BE(o)))(i||o)}})();static \u0275dir=wt$1({type:o,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,i){n&2&&Ia("required",i._enabled?"":null);},inputs:{required:"required"},standalone:false,features:[Kw([In]),hw]})}return o})();var Fn=new G(""),Nt=new G("",{factory:()=>Yt}),Yt="always";function Zt(o,e){return [...e.path,o]}function qe(o,e,t=Yt){Xt(o,e),e.valueAccessor.writeValue(o.value),(o.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(o.disabled),Nn(o,e),Rn(o,e),kn(o,e),Sn(o,e);}function Dt(o,e,t=true){let n=()=>{};e?.valueAccessor?.registerOnChange(n),e?.valueAccessor?.registerOnTouched(n),Mt(o,e),o&&(e._invokeOnDestroyCallbacks(),o._registerOnCollectionChange(()=>{}));}function At(o,e){o.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e);});}function Sn(o,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n);};o.registerOnDisabledChange(t),e._registerOnDestroy(()=>{o._unregisterOnDisabledChange(t);});}}function Xt(o,e){let t=Ue(o);e.validator!==null?o.setValidators(Ve(t,e.validator)):typeof t=="function"&&o.setValidators([t]);let n=Le(o);e.asyncValidator!==null?o.setAsyncValidators(Ve(n,e.asyncValidator)):typeof n=="function"&&o.setAsyncValidators([n]);let i=()=>o.updateValueAndValidity();At(e._rawValidators,i),At(e._rawAsyncValidators,i);}function Mt(o,e){let t=false;if(o!==null){if(e.validator!==null){let i=Ue(o);if(Array.isArray(i)&&i.length>0){let r=i.filter(a=>a!==e.validator);r.length!==i.length&&(t=true,o.setValidators(r));}}if(e.asyncValidator!==null){let i=Le(o);if(Array.isArray(i)&&i.length>0){let r=i.filter(a=>a!==e.asyncValidator);r.length!==i.length&&(t=true,o.setAsyncValidators(r));}}}let n=()=>{};return At(e._rawValidators,n),At(e._rawAsyncValidators,n),t}function Nn(o,e){e.valueAccessor.registerOnChange(t=>{o._pendingValue=t,o._pendingChange=true,o._pendingDirty=true,o.updateOn==="change"&&Ye(o,e);});}function kn(o,e){e.valueAccessor.registerOnTouched(()=>{o._pendingTouched=true,o.updateOn==="blur"&&o._pendingChange&&Ye(o,e),o.updateOn!=="submit"&&o.markAsTouched();});}function Ye(o,e){o._pendingDirty&&o.markAsDirty(),o.setValue(o._pendingValue,{emitModelToViewChange:false}),e.viewToModelUpdate(o._pendingValue),o._pendingChange=false;}function Rn(o,e){let t=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n);};o.registerOnChange(t),e._registerOnDestroy(()=>{o._unregisterOnChange(t);});}function Ze(o,e){Xt(o,e);}function On(o,e){return Mt(o,e)}function Xe(o,e){if(!o.hasOwnProperty("model"))return  false;let t=o.model;return t.isFirstChange()?true:!Object.is(e,t.currentValue)}function Pn(o){return Object.getPrototypeOf(o.constructor)===Se}function Ke(o,e){o._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=false);});}function Tn(o,e){if(!e)return null;let t,n,i;return e.forEach(r=>{r.constructor===Ne?t=r:Pn(r)?n=r:i=r;}),i||n||t||null}function Bn(o,e){let t=o.indexOf(e);t>-1&&o.splice(t,1);}var Je={provide:Fn,useFactory:()=>{let o=I(A,{self:true});return {setParseErrors:e=>{o.setParseErrorSource(e);},set onReset(e){o.onReset=e;}}}},A=class extends xt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=false;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof R&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription?.add(this.resetSubscription));}isNativeFormElement=false;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Tn(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,n){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=n,this.injector?.get(Rt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe();});}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(zl);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new Ye$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof R&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator);}ngControlCreate(e){!e.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=true,e.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:false}),this.control?.markAsDirty(),this.viewToModelUpdate(i);}),e.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched();}),this.customControlBindings={},this.isNativeFormElement=An(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof $e));}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let n=this.control,i=this.customControlBindings;Object.is(i.value,n.value)||(i.value=n.value,e.setCustomControlModelInput(n.value)),this.bindControlProperty(e,i,"touched",n.touched),this.bindControlProperty(e,i,"dirty",n.dirty),this.bindControlProperty(e,i,"valid",n.valid),this.bindControlProperty(e,i,"invalid",n.invalid),this.bindControlProperty(e,i,"pending",n.pending),this.bindControlProperty(e,i,"disabled",n.disabled),this.shouldBindRequired&&this.bindControlProperty(e,i,"required",this.isRequired);let r=n.errors;if(i.errors!==r){i.errors=r;let a=this._convertErrors(r);e.setInputOnDirectives("errors",a);}}get isRequired(){return (this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??false}get shouldBindRequired(){return  true}bindControlProperty(e,t,n,i){if(t[n]===i)return;t[n]=i;let r=e.setInputOnDirectives(n,i);this.isNativeFormElement&&!r&&(n==="disabled"||n==="required")&&this.renderer&&Mn(this.renderer,e.nativeElement,n,i);}_convertErrors(e){if(e===null)return [];let t=this.control;return Object.entries(e).map(([n,i])=>new jt({context:i,kind:n,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,n=Bl(()=>{let i=e();return i.length===0?null:i.reduce((r,a)=>(r[a.kind]=a,r),{})});this.parseErrorsValidator=(()=>t).bind(this),Gu(()=>{t=n(),this.control?.updateValueAndValidity({emitEvent:false});},{injector:this.injector});}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:false}));}},Et=class{_cd;constructor(e){this._cd=e;}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return !!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return !!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return !!this._cd?.control?.invalid}get isPending(){return !!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Oo=(()=>{class o extends Et{constructor(t){super(t);}static \u0275fac=function(n){return new(n||o)(bt(A,2))};static \u0275dir=wt$1({type:o,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&jl("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending);},standalone:false,features:[hw]})}return o})(),Po=(()=>{class o extends Et{constructor(t){super(t);}static \u0275fac=function(n){return new(n||o)(bt(f,10))};static \u0275dir=wt$1({type:o,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&jl("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted);},standalone:false,features:[hw]})}return o})(),Y=class extends q{constructor(e,t,n){super($t(t),qt(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator});}controls;registerControl(e,t){let n=this._find(e);return n||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange();}removeControl(e,t={}){let n=this._find(e);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}setControl(e,t,n={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange();}contains(e){return this._find(e)?.enabled===true}setValue(e,t={}){$e$1(()=>{He(this,true,e),Object.keys(e).forEach(n=>{Ge(this,true,n),this.controls[n].setValue(e[n],{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t);});}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let i=this._find(n);i&&i.patchValue(e[n],{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t));}reset(e={},t={}){this._forEachChild((n,i)=>{n.reset(e?e[i]:null,Ee$1(U({},t),{onlySelf:true}));}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==false&&this._events.next(new R(this));}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(false,(t,n)=>n._syncPendingControls()?true:t);return e&&this.updateValueAndValidity({onlySelf:true}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t);});}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange);});}_updateValue(){this.value=this._reduceValue();}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return  true;return  false}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,i)=>((n.enabled||this.disabled)&&(t[i]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((i,r)=>{n=t(n,i,r);}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return  false;return Object.keys(this.controls).length>0||this.disabled}_find(e){return We(this.controls,e)?this.controls[e]:null}};var zt=class extends Y{};var jn={provide:f,useExisting:_u(()=>zn)},ot=Promise.resolve(),zn=(()=>{class o extends f{callSetDisabledState;get submitted(){return $e$1(this.submittedReactive)}_submitted=Bl(()=>this.submittedReactive());submittedReactive=Oe$1(false);_directives=new Set;form;ngSubmit=new Qe$1;options;constructor(t,n,i){super(),this.callSetDisabledState=i,this.form=new Y({},Ht(t),Wt(n));}ngAfterViewInit(){this._setUpdateStrategy();}get formDirective(){return this}get control(){return this.form}get path(){return []}get controls(){return this.form.controls}addControl(t){ot.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:false}),this._directives.add(t);});}getControl(t){return this.form.get(t.path)}removeControl(t){ot.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t);});}addFormGroup(t){ot.then(()=>{let n=this._findContainer(t.path),i=new Y({});Ze(i,t),n.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:false});});}removeFormGroup(t){ot.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name);});}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){ot.then(()=>{this.form.get(t.path).setValue(n);});}setValue(t){this.control.setValue(t);}onSubmit(t){return this.submittedReactive.set(true),Ke(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Vt(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm();}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(false);}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn);}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(n){return new(n||o)(bt(O,10),bt(Z,10),bt(Nt,8))};static \u0275dir=wt$1({type:o,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,i){n&1&&Fl("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()});},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[Kw([jn]),hw]})}return o})();function Me(o,e){let t=o.indexOf(e);t>-1&&o.splice(t,1);}function Ee(o){return typeof o=="object"&&o!==null&&Object.keys(o).length===2&&"value"in o&&"disabled"in o}var yt=class extends q{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=false;constructor(e=null,t,n){super($t(t),qt(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator}),St(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ee(e)?this.defaultValue=e.value:this.defaultValue=e);}setValue(e,t={}){$e$1(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==false&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==false)),this.updateValueAndValidity(t);});}patchValue(e,t={}){this.setValue(e,t);}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=false,t?.emitEvent!==false&&this._events.next(new R(this));}_updateValue(){}_anyControls(e){return  false}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e);}_unregisterOnChange(e){Me(this._onChange,e);}registerOnDisabledChange(e){this._onDisabledChange.push(e);}_unregisterOnDisabledChange(e){Me(this._onDisabledChange,e);}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:true,emitModelToViewChange:false}),true):false}_applyFormState(e){Ee(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:true,emitEvent:false}):this.enable({onlySelf:true,emitEvent:false})):this.value=this._pendingValue=e;}};var Un=o=>o instanceof yt,Ln=(()=>{class o extends f{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this);}ngOnDestroy(){this.formDirective?.removeFormGroup(this);}get control(){return this.formDirective.getFormGroup(this)}get path(){return Zt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let t;return function(i){return (t||(t=BE(o)))(i||o)}})();static \u0275dir=wt$1({type:o,standalone:false,features:[hw]})}return o})();var Bo=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275dir=wt$1({type:o,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:false})}return o})(),Gn={provide:Ft,useExisting:_u(()=>Hn),multi:true},Hn=(()=>{class o extends Se{writeValue(t){let n=t??"";this.setProperty("value",n);}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n));};}static \u0275fac=(()=>{let t;return function(i){return (t||(t=BE(o)))(i||o)}})();static \u0275dir=wt$1({type:o,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(n,i){n&1&&Fl("input",function(a){return i.onChange(a.target.value)})("blur",function(){return i.onTouched()});},standalone:false,features:[Kw([Gn]),hw]})}return o})();var Ut=class extends q{constructor(e,t,n){super($t(t),qt(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator});}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(n=>{this.controls.push(n),this._registerControl(n);}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent});}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent});}setControl(e,t,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange();}get length(){return this.controls.length}setValue(e,t={}){$e$1(()=>{He(this,false,e),e.forEach((n,i)=>{Ge(this,false,i),this.at(i).setValue(n,{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t);});}patchValue(e,t={}){e!=null&&(e.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t));}reset(e=[],t={}){this._forEachChild((n,i)=>{n.reset(e[i],Ee$1(U({},t),{onlySelf:true}));}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==false&&this._events.next(new R(this));}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}));}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?true:t,false);return e&&this.updateValueAndValidity({onlySelf:true}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n);});}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value);}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e));}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return  false;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange);}_find(e){return this.at(e)??null}};var Qe=(()=>{class o extends f{callSetDisabledState;get submitted(){return $e$1(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t);}_submitted=Bl(()=>this._submittedReactive());_submittedReactive=Oe$1(false);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,n,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(n);}ngOnChanges(t){this.onChanges(t);}ngOnDestroy(){this.onDestroy();}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form);}onDestroy(){this.form&&(Mt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}));}get formDirective(){return this}get path(){return []}addControl(t){let n=this.form.get(t.path);return t._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:false}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Dt(t.control||null,t,false),Bn(this.directives,t);}addFormGroup(t){this._setUpFormContainer(t);}removeFormGroup(t){this._cleanUpFormContainer(t);}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t);}removeFormArray(t){this._cleanUpFormContainer(t);}updateModel(t,n){this.form.get(t.path).setValue(n);}onReset(){this.resetForm();}resetForm(t=void 0,n={}){this.form.reset(t,n),this._submittedReactive.set(false);}onSubmit(t){return this.submitted=true,Ke(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Vt(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,i=this.form.get(t.path);n!==i&&(Dt(n||null,t),Un(i)&&t._setupWithForm(i,this.callSetDisabledState));}),this.form._updateTreeValidity({emitEvent:false});}_setUpFormContainer(t){let n=this.form.get(t.path);Ze(n,t),n.updateValueAndValidity({emitEvent:false});}_cleanUpFormContainer(t){let n=this.form?.get(t.path);n&&On(n,t)&&n.updateValueAndValidity({emitEvent:false});}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{});}_updateValidators(){Xt(this.form,this),this._oldForm&&Mt(this._oldForm,this);}_checkFormPresent(){this.form;}static \u0275fac=function(n){return new(n||o)(bt(O,10),bt(Z,10),bt(Nt,8))};static \u0275dir=wt$1({type:o,features:[hw,fr]})}return o})();var Kt=new G(""),Wn={provide:A,useExisting:_u(()=>$n)},$n=(()=>{class o extends A{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new Qe$1;static _ngModelWarningSentOnce=false;_ngModelWarningSent=false;constructor(t,n,i,r,a,l,g){super(g,l,i),this._ngModelWarningConfig=r,this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(n);}ngOnChanges(t){if(this._isControlChanged(t)){let n=t.form.previousValue;n&&(Dt(n,this,false),this.removeParseErrorsValidator(n)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,qe(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:false});}Xe(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model);}ngOnDestroy(){this.form&&Dt(this.form,this,false);}get path(){return []}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t);}_isControlChanged(t){return t.hasOwnProperty("form")}\u0275ngControlCreate(t){super.ngControlCreate(t);}\u0275ngControlUpdate(t){super.ngControlUpdate(t,true);}static \u0275fac=function(n){return new(n||o)(bt(O,10),bt(Z,10),bt(Ft,10),bt(Kt,8),bt(Nt,8),bt(xl,8),bt(Ve$1,8))};static \u0275dir=wt$1({type:o,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:false,features:[Kw([Wn,Je]),hw,fr,EN(null)]})}return o})(),qn={provide:f,useExisting:_u(()=>tn)},tn=(()=>{class o extends Ln{name=null;constructor(t,n,i){super(),this._parent=t,this._setValidators(n),this._setAsyncValidators(i);}_checkParentType(){nn(this._parent);}static \u0275fac=function(n){return new(n||o)(bt(f,13),bt(O,10),bt(Z,10))};static \u0275dir=wt$1({type:o,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:false,features:[Kw([qn]),hw]})}return o})(),Yn={provide:f,useExisting:_u(()=>en)},en=(()=>{class o extends f{_parent;name=null;constructor(t,n,i){super(),this._parent=t,this._setValidators(n),this._setAsyncValidators(i);}ngOnInit(){nn(this._parent),this.formDirective.addFormArray(this);}ngOnDestroy(){this.formDirective?.removeFormArray(this);}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Zt(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(n){return new(n||o)(bt(f,13),bt(O,10),bt(Z,10))};static \u0275dir=wt$1({type:o,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:false,features:[Kw([Yn]),hw]})}return o})();function nn(o){return !(o instanceof tn)&&!(o instanceof Qe)&&!(o instanceof en)}var Zn={provide:A,useExisting:_u(()=>Xn)},Xn=(()=>{class o extends A{_ngModelWarningConfig;_added=false;viewModel;control;name=null;set isDisabled(t){}model;update=new Qe$1;static _ngModelWarningSentOnce=false;_ngModelWarningSent=false;constructor(t,n,i,r,a,l,g){super(g,l,r),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(i);}_setupWithForm(t,n){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,qe(t,this,n));}ngOnChanges(t){this._added||this._setUpControl(),Xe(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model));}ngOnDestroy(){this.formDirective?.removeControl(this);}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t);}get path(){return Zt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=true;}\u0275ngControlCreate(t){super.ngControlCreate(t);}\u0275ngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,true));}static \u0275fac=function(n){return new(n||o)(bt(f,13),bt(O,10),bt(Z,10),bt(Ft,10),bt(Kt,8),bt(xl,8),bt(Ve$1,8))};static \u0275dir=wt$1({type:o,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:false,features:[Kw([Zn,Je]),hw,fr,EN(null)]})}return o})();var Kn={provide:f,useExisting:_u(()=>Jn)},Jn=(()=>{class o extends Qe{form=null;ngSubmit=new Qe$1;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return (t||(t=BE(o)))(i||o)}})();static \u0275dir=wt$1({type:o,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&Fl("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()});},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[Kw([Kn]),hw]})}return o})();var Qn=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At$1({})}return o})();function Ie(o){return !!o&&(o.asyncValidators!==void 0||o.validators!==void 0||o.updateOn!==void 0)}var jo=(()=>{class o{useNonNullable=false;get nonNullable(){let t=new o;return t.useNonNullable=true,t}group(t,n=null){let i=this._reduceControls(t),r={};return Ie(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new Y(i,r)}record(t,n=null){let i=this._reduceControls(t);return new zt(i,n)}control(t,n,i){let r={};return this.useNonNullable?(Ie(n)?r=n:(r.validators=n,r.asyncValidators=i),new yt(t,Ee$1(U({},r),{nonNullable:true}))):new yt(t,n,i)}array(t,n,i){let r=t.map(a=>this._createControl(a));return new Ut(r,n,i)}_reduceControls(t){let n={};return Object.keys(t).forEach(i=>{n[i]=this._createControl(t[i]);}),n}_createControl(t){if(t instanceof yt)return t;if(t instanceof q)return t;if(Array.isArray(t)){let n=t[0],i=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(n,i,r)}else return this.control(t)}static \u0275fac=function(n){return new(n||o)};static \u0275prov=te({token:o,factory:o.\u0275fac})}return o})();var zo=(()=>{class o{static withConfig(t){return {ngModule:o,providers:[{provide:Kt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Nt,useValue:t.callSetDisabledState??Yt}]}}static \u0275fac=function(n){return new(n||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At$1({imports:[Qn]})}return o})();var to=["*",[["","progressIndicator",""]]],eo=["*","[progressIndicator]"];function no(o,e){o&1&&(Bg(0,"div",1),tR(1,1),Hg());}var oo=new G("MAT_BUTTON_CONFIG");function on(o){return o==null?void 0:S3(o)}var Jt=(()=>{class o{_elementRef=I(lt);_ngZone=I(Ce);_animationsDisabled=zd();_config=I(oo,{optional:true});_focusMonitor=I(oC);_cleanupClick;_renderer=I(xl);_rippleLoader=I(CZ);_isAnchor;_isFab=false;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled();}_disableRipple=false;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled();}_disabled=false;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t;}showProgress=$l(false,{transform:vr});constructor(){I(Jo).load(SZ);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??false,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(t="program",n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?true:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:true}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation());}));}static \u0275fac=function(n){return new(n||o)};static \u0275dir=wt$1({type:o,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(n,i){n&2&&(Ia("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),gR(i.color?"mat-"+i.color:""),jl("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",vr],disabled:[2,"disabled","disabled",vr],ariaDisabled:[2,"aria-disabled","ariaDisabled",vr],disabledInteractive:[2,"disabledInteractive","disabledInteractive",vr],tabIndex:[2,"tabIndex","tabIndex",on],_tabindex:[2,"tabindex","_tabindex",on],showProgress:[1,"showProgress"]}})}return o})(),io=(()=>{class o extends Jt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:true});}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=mr({type:o,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[hw],ngContentSelectors:eo,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(eR(to),Ew(0,"span",0),tR(1),LN(2,no,2,0,"div",1),Ew(3,"span",2)(4,"span",3)),n&2&&(V0(2),FN(i.showProgress()?2:-1));},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return o})();var ro=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],ao=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function so(o,e){o&1&&(Bg(0,"div",2),tR(1,3),Hg());}var rn=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),oi=(()=>{class o extends Jt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text");}_appearance=null;constructor(){super();let t=lo(this._elementRef.nativeElement);t&&this.setAppearance(t);}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?rn.get(this._appearance):null,r=rn.get(t);i&&n.remove(...i),n.add(...r),this._appearance=t;}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=mr({type:o,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[hw],ngContentSelectors:ao,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(eR(ro),Ew(0,"span",0),tR(1),Bg(2,"span",1),tR(3,1),Hg(),tR(4,2),LN(5,so,2,0,"div",2),Ew(6,"span",3)(7,"span",4)),n&2&&(jl("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab),V0(5),FN(i.showProgress()?5:-1));},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return o})();function lo(o){return o.hasAttribute("mat-raised-button")?"elevated":o.hasAttribute("mat-stroked-button")?"outlined":o.hasAttribute("mat-flat-button")?"filled":o.hasAttribute("mat-button")?"text":null}var ii=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At$1({imports:[NZ,TC]})}return o})();function an(o){return Error(`Unable to find icon with the name "${o}"`)}function co(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function sn(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function ln(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var w=class{url;svgText;options;svgElement=null;constructor(e,t,n){this.url=e,this.svgText=t,this.options=n;}},dn=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,n,i,r){this._httpClient=t,this._sanitizer=n,this._errorHandler=r,this._document=i;}addSvgIcon(t,n,i){return this.addSvgIconInNamespace("",t,n,i)}addSvgIconLiteral(t,n,i){return this.addSvgIconLiteralInNamespace("",t,n,i)}addSvgIconInNamespace(t,n,i,r){return this._addSvgIconConfig(t,n,new w(i,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,n,i,r){let a=this._sanitizer.sanitize(Wt$1.HTML,i);if(!a)throw ln(i);let l=DP(a);return this._addSvgIconConfig(t,n,new w("",l,r))}addSvgIconSet(t,n){return this.addSvgIconSetInNamespace("",t,n)}addSvgIconSetLiteral(t,n){return this.addSvgIconSetLiteralInNamespace("",t,n)}addSvgIconSetInNamespace(t,n,i){return this._addSvgIconSetConfig(t,new w(n,null,i))}addSvgIconSetLiteralInNamespace(t,n,i){let r=this._sanitizer.sanitize(Wt$1.HTML,n);if(!r)throw ln(n);let a=DP(r);return this._addSvgIconSetConfig(t,new w("",a,i))}registerFontClassAlias(t,n=t){return this._fontCssClassesByAlias.set(t,n),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let n=this._sanitizer.sanitize(Wt$1.RESOURCE_URL,t);if(!n)throw sn(t);let i=this._cachedIconsByUrl.get(n);return i?me(kt(i)):this._loadSvgIconFromConfig(new w(t,null)).pipe(kt$1(r=>this._cachedIconsByUrl.set(n,r)),ve(r=>kt(r)))}getNamedSvgIcon(t,n=""){let i=cn(n,t),r=this._svgIconConfigs.get(i);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(n,t),r)return this._svgIconConfigs.set(i,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(t,a):Qf(an(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear();}_getSvgFromConfig(t){return t.svgText?me(kt(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ve(n=>kt(n)))}_getSvgFromIconSetConfigs(t,n){let i=this._extractIconWithNameFromAnySet(t,n);if(i)return me(i);let r=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ls(l=>{let P=`Loading icon set URL: ${this._sanitizer.sanitize(Wt$1.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(P)),me(null)})));return XT(r).pipe(ve(()=>{let a=this._extractIconWithNameFromAnySet(t,n);if(!a)throw an(t);return a}))}_extractIconWithNameFromAnySet(t,n){for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,t,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(kt$1(n=>t.svgText=n),ve(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?me(null):this._fetchIcon(t).pipe(kt$1(n=>t.svgText=n))}_extractSvgIconFromSet(t,n,i){let r=t.querySelector(`[id="${n}"]`);if(!r)return null;let a=r.cloneNode(true);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let l=this._svgElementFromString(DP("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,i)}_svgElementFromString(t){let n=this._document.createElement("DIV");n.innerHTML=t;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let n=this._svgElementFromString(DP("<svg></svg>")),i=t.attributes;for(let r=0;r<i.length;r++){let{name:a,value:l}=i[r];a!=="id"&&n.setAttribute(a,l);}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&n.appendChild(t.childNodes[r].cloneNode(true));return n}_setSvgAttributes(t,n){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),n&&n.viewBox&&t.setAttribute("viewBox",n.viewBox),t}_fetchIcon(t){let{url:n,options:i}=t,r=i?.withCredentials??false;if(!this._httpClient)throw co();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Wt$1.RESOURCE_URL,n);if(!a)throw sn(n);let l=this._inProgressUrlFetches.get(a);if(l)return l;let g=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(ve(P=>DP(P)),Fs(()=>this._inProgressUrlFetches.delete(a)),nh());return this._inProgressUrlFetches.set(a,g),g}_addSvgIconConfig(t,n,i){return this._svgIconConfigs.set(cn(t,n),i),this}_addSvgIconSetConfig(t,n){let i=this._iconSetConfigs.get(t);return i?i.push(n):this._iconSetConfigs.set(t,[n]),this}_svgElementFromConfig(t){if(!t.svgElement){let n=this._svgElementFromString(t.svgText);this._setSvgAttributes(n,t.options),t.svgElement=n;}return t.svgElement}_getIconConfigFromResolvers(t,n){for(let i=0;i<this._resolvers.length;i++){let r=this._resolvers[i](n,t);if(r)return uo(r)?new w(r.url,null,r.options):new w(r,null)}}static \u0275fac=function(n){return new(n||o)(re(RO,8),re(Em),re(we,8),re(Xt$1))};static \u0275prov=he({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function kt(o){return o.cloneNode(true)}function cn(o,e){return o+":"+e}function uo(o){return !!(o.url&&o.options)}var mo=["*"],fo=new G("MAT_ICON_DEFAULT_OPTIONS"),po=new G("mat-icon-location",{providedIn:"root",factory:()=>{let o=I(we),e=o?o.location:null;return {getPathname:()=>e?e.pathname+e.search:""}}}),un=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ho=un.map(o=>`[${o}]`).join(", "),bo=/^url\(['"]?#(.*?)['"]?\)$/,Di=(()=>{class o{_elementRef=I(lt);_iconRegistry=I(dn);_location=I(po);_errorHandler=I(Xt$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t;}_color;inline=false;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t);}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let n=this._cleanupFontValue(t);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses());}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let n=this._cleanupFontValue(t);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses());}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ye$1.EMPTY;constructor(){let t=I(new Vl("aria-hidden"),{optional:true}),n=I(fo,{optional:true});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true");}_splitIconName(t){if(!t)return ["",""];let n=t.split(":");switch(n.length){case 1:return ["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses();}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n));}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();}_usingFontIcon(){return !this.svgIcon}_setSvgElement(t){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t);}_clearSvgElement(){let t=this._elementRef.nativeElement,n=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=t.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove();}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),n.forEach(i=>t.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon);}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let n=this._elementsWithExternalReferences;n&&n.forEach((i,r)=>{i.forEach(a=>{r.setAttribute(a.name,`url('${t}#${a.value}')`);});});}_cacheChildrenWithExternalReferences(t){let n=t.querySelectorAll(ho),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<n.length;r++)un.forEach(a=>{let l=n[r],g=l.getAttribute(a),P=g?g.match(bo):null;if(P){let at=i.get(l);at||(at=[],i.set(l,at)),at.push({name:a,value:P[1]});}});}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[n,i]=this._splitIconName(t);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(Ot(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${n}:${i}! ${r.message}`;this._errorHandler.handleError(new Error(a));});}}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=mr({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(Ia("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),gR(i.color?"mat-"+i.color:""),jl("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"));},inputs:{color:"color",inline:[2,"inline","inline",vr],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:mo,decls:1,vars:0,template:function(n,i){n&1&&(eR(),tR(0));},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return o})(),Ai=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=Lt$1({type:o});static \u0275inj=At$1({imports:[TC]})}return o})();export{$n as $,Ai as A,Bo as B,Di as D,Ft as F,Hn as H,Jn as J,Ne as N,Oo as O,Po as P,Tt as T,Xn as X,io as a,O as b,A as c,zn as d,en as e,f,ii as i,jo as j,oi as o,tn as t,yt as y,zo as z};