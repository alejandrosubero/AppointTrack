import {k as mf,l as ia,n as Cd,o as fs,j as j_,i as iv,F as Iv}from'./main-OXOBTJGA.js';var u=(()=>{class t{get vertical(){return this._vertical}set vertical(i){this._vertical=fs(i);}_vertical=false;get inset(){return this._inset}set inset(i){this._inset=fs(i);}_inset=false;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=j_({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,r){e&2&&(iv("aria-orientation",r.vertical?"vertical":"horizontal"),Iv("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset));},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})(),f=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=mf({type:t});static \u0275inj=ia({imports:[Cd]})}return t})();export{f,u};