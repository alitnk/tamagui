(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{381:function(e,t,o){"use strict";var r=o(1706),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,i,a,n,l,_,d=!1;t||(t={}),o=t.debug||!1;try{if(a=r(),n=document.createRange(),l=document.getSelection(),(_=document.createElement("span")).textContent=e,_.ariaHidden="true",_.style.all="unset",_.style.position="fixed",_.style.top=0,_.style.clip="rect(0, 0, 0, 0)",_.style.whiteSpace="pre",_.style.webkitUserSelect="text",_.style.MozUserSelect="text",_.style.msUserSelect="text",_.style.userSelect="text",_.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=s[t.format]||s.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(_),n.selectNodeContents(_),l.addRange(n),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(c){o&&console.error("unable to copy using execCommand: ",c),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(c){o&&console.error("unable to copy using clipboardData: ",c),o&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(n):l.removeAllRanges()),_&&document.body.removeChild(_),a()}return d}},2407:function(e,t,o){"use strict";o.r(t)},578:function(e,t,o){"use strict";o.r(t)},7277:function(e,t,o){"use strict";o.r(t)},7999:function(e,t,o){"use strict";o.r(t)},6035:function(e,t,o){"use strict";o.r(t)},7679:function(e,t,o){"use strict";o.r(t)},3497:function(e,t,o){"use strict";o.r(t)},4028:function(e,t,o){"use strict";o.r(t)},7820:function(e,t,o){"use strict";o.r(t)},3554:function(e,t,o){"use strict";o.r(t)},9205:function(e,t,o){"use strict";o.r(t)},1560:function(e,t,o){"use strict";o.d(t,{X:function(){return l}});var r=o(2322),s=o(8001),i=o(9097),a=o.n(i),n=(o(2784),o(9145));const l=()=>(0,r.jsx)(a(),{href:"/blog/tamagui-enters-beta-themes-and-animations",passHref:!0,children:(0,r.jsx)(n.zx,{accessibilityLabel:"Beta blog post",marginLeft:"_ml-1aj148u",marginRight:"_mr-1aj148u",transform:"_transform-1crgu28",theme:"pink_alt2","opacity-hover":"_o-0hover-1",opacity:"_o-0dot9",cursor:"_cur-pointer",tag:"a",size:"$2",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",height:"_h-a0wksh",borderTopLeftRadius:"_btlr-lmima8",borderTopRightRadius:"_btrr-lmima8",borderBottomRightRadius:"_bbrr-lmima8",borderBottomLeftRadius:"_bblr-lmima8",icon:s.V,className:"  _dsp-_sm_none ",children:"Beta"})});o(2407)},6709:function(e,t,o){"use strict";o.d(t,{i:function(){return _}});var r=o(7328),s=o(6670),i=o(2322),a=(o(2784),o(5300)),n=o(6486);const l=e=>{switch(e){case"Tamagui":return"$pink9";case"Stitches":return"$yellow9";case"Stitches 0.1.9":return"$yellow4";case"Styled Components":case"SC":return"$red9";case"react-native-web":case"RNW":return"$purple9";case"Emotion":return"$green9";case"Dripsy":return"$blue9";case"NativeBase":return"$orange9";default:return"gray"}};function _(e){let{data:t,large:o,skipOthers:_=!1,animateEnter:d=!1}=e;const c=Math.max(...t.map((e=>e.value)));return(0,i.jsx)(a.FA,{space:"$2",marginTop:"_mt-1aj14ak",marginBottom:"_mb-1aj14ak",children:t.map(((e,t)=>{const _="".concat(e.value/c*100,"%");return(0,i.jsxs)(a.sL,{space:"$3",children:[(0,i.jsx)("div",{className:(0,n.concatClassName)("  is_YStack _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  "+(o?" _w-120px":" _w-70px")),children:(0,i.jsx)("p",{className:(0,n.concatClassName)("  is_Paragraph font_body _cur-text _ussel-text _ww-break-word _boxs-border-box _dsp-inline  _mb--3px _mt--3px _ta-right _whiteSpace-nowrap _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz  "+("Tamagui"===e.name?" _fow-700":" _fow-400")),children:e.name},e.name)}),(0,i.jsx)("div",{className:"  is_XStack _fg-1 _mr-65px _fd-row _boxs-border-box _fb-auto _dsp-flex _fs-1 _ai-center ",children:(0,i.jsx)(a.FA,(0,s.Z)((0,r.Z)({bc:l(e.name),o:(e.name,1),width:_,height:20,br:"$2",position:"relative",jc:"center",scaleX:1,animation:"lazy"},d&&{enterStyle:{scaleX:0}}),{children:(0,i.jsxs)("p",{className:"  is_Paragraph font_body _transform-1hmnzav _r-lrpkgt _pos-absolute _whiteSpace-nowrap _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcbz _ls-3oolt0 _fos-3slpwn _lh-3or5r4 _ww-break-word _boxs-border-box _dsp-inline ",children:[e.value,"ms"]})}))})]},t)}))})}o(578)},3548:function(e,t,o){"use strict";o.d(t,{f:function(){return i}});var r=o(2322),s=o(609);o(2784);const i=()=>(0,r.jsx)("div",{className:"  is_YStack _mr-lrpjp9 _bblr-100px _bbrr-100px _btrr-100px _btlr-100px _jc-center _h-25px _w-25px _bg-1exdlax _mt-2px _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:(0,r.jsx)(s.J,{size:12,color:"var(--green10)"})});o(7277)},773:function(e,t,o){"use strict";o.d(t,{E:function(){return i},w:function(){return a}});var r=o(6227),s=o(7855);const i=(0,r.z)(s.Paragraph,{name:"Code",tag:"code",fontFamily:"$mono",size:"$4",variants:{colored:{true:{color:"$color",backgroundColor:"$background"}}},borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj147z",paddingRight:"_pr-1aj147z",paddingBottom:"_pb-1aj147z",paddingLeft:"_pl-1aj147z",whiteSpace:"_whiteSpace-pre"}),a=(0,r.z)(s.Paragraph,{name:"CodeInline",tag:"code",fontFamily:"$mono",size:"$4",paddingTop:"_pt-1aj148u",paddingBottom:"_pb-1aj148u",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",backgroundColor:"_bg-180kg62",color:"_col-rnt87j"});o(7999)},815:function(e,t,o){"use strict";o.d(t,{s:function(){return b}});var r=o(7328),s=o(6670),i=o(6297),a=o(2322),n=(o(2784),o(1077)),l=o(5300),_=o(773),d=o(2897),c=o(6486);function b(e){var{source:t,language:o}=e,b=(0,i.Z)(e,["source","language"]);return(0,a.jsx)(l.FA,(0,s.Z)((0,r.Z)({borderTopLeftRadius:"_btlr-lmimfe",borderTopRightRadius:"_btrr-lmimfe",borderBottomRightRadius:"_bbrr-lmimfe",borderBottomLeftRadius:"_bblr-lmimfe",flexShrink:"_fs-1",flexGrow:"_fg-1",borderRightStyle:"_borderRightStyle-solid",borderLeftStyle:"_bls-solid",borderTopStyle:"_borderTopStyle-solid",borderBottomStyle:"_borderBottomStyle-solid",borderLeftWidth:"_blw-1px",borderBottomWidth:"_bbw-1px",borderRightWidth:"_brw-1px",borderTopWidth:"_btw-1px",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",backgroundColor:"_bg-8htuv0"},b),{className:(0,c.concatClassName)(("language-".concat(o)||0)+" "+(b&&b.className||""),b),children:(0,a.jsx)(n.Z,{showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,a.jsx)(d.S,{f:1,children:(0,a.jsx)(_.E,{dangerouslySetInnerHTML:{__html:t}})})})}))}o(6035)},3975:function(e,t,o){"use strict";o.d(t,{L:function(){return m},d:function(){return p}});var r=o(7328),s=o(6670),i=o(2322),a=o(6747),n=o(2784),l=o(9141),_=o(9145),d=o(844),c=o(6486);const b=new Set,p=()=>{const{0:e,1:t}=(0,n.useState)(4),o=a.ji[e];(0,n.useEffect)((()=>{const e=e=>t(e);return b.add(e),()=>{b.delete(e)}}),[]);const r=(a.ji.indexOf(o)+1)%a.ji.length,s=a.ji[r],i=e=>{const o=a.ji.indexOf(e);t(o),b.forEach((e=>e(o)))};return{tint:o,setTint:i,setNextTint:()=>{i(s)}}},m=e=>{const{tint:t,setNextTint:o}=p();return(0,i.jsx)(l.w,{groupId:"header-actions-color",label:"Change color",children:(0,i.jsx)(_.zx,(0,s.Z)((0,r.Z)({size:"$3",paddingRight:"_pr-1aj149p",paddingLeft:"_pl-1aj149p",height:"_h-a0wktc",borderTopLeftRadius:"_btlr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderBottomLeftRadius:"_bblr-lmimb3",onPress:o},e),{"aria-label":"toggle a light and dark color scheme",className:(0,c.concatClassName)(""+(e&&e.className||""),e),children:(0,i.jsx)(d.C,{marginLeft:"_ml-2px",marginBottom:"_mb-2px",marginRight:"_mr-2px",marginTop:"_mt-2px",borderLeftColor:"_blc-1q780h6",borderBottomColor:"_bbc-1q780h6",borderRightColor:"_brc-1q780h6",borderTopColor:"_btc-1q780h6",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_borderRightStyle-solid",size:12,width:"_w-12px",height:"_h-12px",minWidth:"_miw-12px",maxWidth:"_maw-12px",maxHeight:"_mah-12px",minHeight:"_mih-12px",backgroundColor:t})}))})};o(7679)},8264:function(e,t,o){"use strict";o.d(t,{E:function(){return a}});var r=o(7328),s=o(6670),i=o(2322);o(2784);const a=e=>(0,i.jsx)("svg",(0,s.Z)((0,r.Z)({width:"30",height:"30",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:(0,i.jsx)("path",{d:"M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z",fill:"var(--color)",fillRule:"evenodd",clipRule:"evenodd"})}))},5147:function(e,t,o){"use strict";o.d(t,{q:function(){return R},M:function(){return S}});var r=o(2322),s=o(6722),i=o(1428),a=o(2470),n=o(9097),l=o.n(n),_=o(2784),d=o(5300),c=o(9145),b=o(2341),p=o(7328),m=o(8682),x=o(3975);const f=e=>{const{tint:t}=(0,x.d)();return(0,r.jsx)(m.Q,(0,p.Z)({tint:t},e))};var u=o(815),h=o(5437),g=o(7219),w=o(6486);const y="  is_YStack",v="  is_YStack _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",j=[{name:"Bouncy",description:"A bouncy spring",animation:"bouncy",settings:s.s.animations.bouncy},{name:"Lazy",description:"A lazy, straightforward spring",animation:"lazy",settings:s.s.animations.lazy},{name:"Quick",description:"A super fast spring",animation:"quick",settings:s.s.animations.quick}];let k=!1;function S(e){let{animationCode:t}=e;const{tint:o}=(0,x.d)(),{0:s,1:i}=(0,_.useState)(!0);return(0,r.jsx)("div",{className:v,children:(0,r.jsxs)(h._k,{position:"relative",space:"$8",children:[(0,r.jsxs)(d.FA,{zIndex:"_zi-1",space:"$3",children:[(0,r.jsxs)(g.P,{pos:"relative",children:["Universal ",(0,r.jsx)("span",{className:"rainbow clip-text",children:"Animations"})]}),(0,r.jsx)(g.v,{children:"Better platform targeting with animation drivers that can be changed without changing code."})]}),(0,r.jsxs)("div",{className:"  is_XStack _fd-row _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,r.jsx)(b.Q,{name:o,children:(0,r.jsx)("div",{className:"  is_YStack _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _zi-100 _bg-8htuv0 _mr-lrpkgt _als-center _miw-5511 _fg-2 _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch _boxsh-asvu26 ",children:(0,r.jsx)(R,{})})}),(0,r.jsxs)("div",{className:"  is_YStack _transform-1rgx1si _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _ovy-hidden _ovx-hidden _bblr-lmimfe _bbrr-lmimfe _btrr-lmimfe _btlr-lmimfe _pos-relative _boxsh-1duix2k _dsp-_sm_none ",children:[(0,r.jsxs)("div",{className:(0,w.concatClassName)(y+" _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0  _jc-center _ai-center _pos-absolute _t-0px _l-0px _r-0px _b-0px  "+(s?" _o-1 _pe-auto":" _o-0 _pe-none")),children:[(0,r.jsx)("div",{className:"  is_YStack _o-0dot5 _t-6011 _pos-absolute _l-0px _r-0px _b-0px _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "}),(0,r.jsx)(c.zx,{accessibilityLabel:"View more",transform:"_transform-1m3rtws",iconAfter:a.K,size:"$4",paddingRight:"_pr-1aj14ak",paddingLeft:"_pl-1aj14ak",height:"_h-a0wku7",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",themeInverse:!0,zIndex:"_zi-10",onPress:()=>i(!1),children:"View more"})]}),(0,r.jsx)(u.s,{pe:s?"none":"auto",maxHeight:500,height:500,maxWidth:530,minWidth:530,language:"tsx",source:t})]})]}),(0,r.jsxs)(d.sL,{alignSelf:"_als-center",space:"$3",children:[(0,r.jsx)(l(),{href:"/docs/core/animations#css",passHref:!0,children:(0,r.jsx)(c.zx,{accessibilityLabel:"CSS docs",fontFamily:"$silkscreen",theme:o,tag:"a",children:"CSS \xbb"})}),(0,r.jsx)(l(),{href:"/docs/core/animations#reanimated",passHref:!0,children:(0,r.jsx)(c.zx,{accessibilityLabel:"Reanimated docs",fontFamily:"$silkscreen",tag:"a",children:"Reanimated \xbb"})}),(0,r.jsx)(l(),{href:"/docs/core/animations",passHref:!0,children:(0,r.jsx)(c.zx,{accessibilityLabel:"Animation docs",fontFamily:"$silkscreen",tag:"a",children:"Docs \xbb"})})]})]})})}const R=(0,_.memo)((()=>{const{0:e,1:t}=(0,_.useState)(0),o=j[e],s=(0,_.useRef)(null),{0:a,1:n}=(0,_.useState)(2),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n((t=>(t+e)%3))},d="string"===typeof o.settings?[["transition",o.settings]]:Object.entries(o.settings);return(0,i.q)(s,(e=>{let{isIntersecting:t,dispose:o}=e;const r=e=>{"ArrowRight"===e.key&&l(),"ArrowLeft"===e.key&&l(-1)};if(t)return k||(k=!0,l()),window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)};null===o||void 0===o||o()})),(0,r.jsxs)("div",{className:"  is_XStack _transform-199k8sv _als-center _h-305px _ovy-hidden _ovx-hidden _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _w-10011 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _borderRightStyle-solid _bls-solid _borderTopStyle-solid _borderBottomStyle-solid _blw-1px _bbw-1px _brw-1px _btw-1px _fd-1b2fkz3 _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _boxsh-9enu5w ",children:[(0,r.jsx)("div",{ref:s,className:"  is_YStack _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _w-6011 _jc-center _ai-center _bg-180kg62 _pos-relative _w-_sm_10011 ",children:(0,r.jsx)(f,{position:a,animation:o.animation})}),(0,r.jsx)("div",{className:"  is_Separator _transform-cx1iw7 _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _borderBottomStyle-solid _borderRightStyle-solid _fg-1 _bls-solid _borderTopStyle-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _boxs-border-box _fb-auto _dsp-flex _ai-stretch "}),(0,r.jsxs)("div",{className:"  is_YStack _pos-relative _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _w-4011 _dsp-_sm_none ",children:[(0,r.jsx)(b.Q,{name:"alt2",children:(0,r.jsx)("div",{className:"  is_YStack _bg-cbjnf9 _zi--1 _pos-absolute _t-0px _l-0px _r-0px _b-0px _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "})}),(0,r.jsx)("div",{className:"  is_YStack _fg-1 _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:j.map(((e,s)=>{const i=e===o;return(0,r.jsx)(b.Q,{name:i?"active":"alt2",children:(0,r.jsxs)("div",{onClick:()=>{t(s),l()},className:(0,w.concatClassName)(y+" _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _cur-pointer _pb-1aj148u _pt-1aj148u _pr-1aj14ak _pl-1aj14ak  "+(i?"  _bg-8htuv0":" ")),children:[(0,r.jsx)("p",{className:"  is_Paragraph font_body _fow-800 _mb-lrpkfy _cur-inherit _ussel-none _col-b5vn3b _ff-4yewjq _ls-3ooluq _fos-3slpyd _lh-3or5su _ww-break-word _boxs-border-box _dsp-inline ",children:e.name}),(0,r.jsx)("p",{className:"  is_Paragraph font_body _col-vhj0rs _maw-10011 _ovx-hidden _ovy-hidden _textOverflow-ellipsis _whiteSpace-nowrap _cur-inherit _ussel-none _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz _ww-break-word _boxs-border-box _dsp-inline ",children:e.description})]})},e.name)}))}),(0,r.jsx)("div",{className:"  is_Separator _transform-n24na2 _mah-0px _h-0px _fg-1 _borderRightStyle-solid _bls-solid _borderTopStyle-solid _borderBottomStyle-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _boxs-border-box _fb-auto _dsp-flex _ai-stretch "}),(0,r.jsx)("div",{className:"  is_XStack _jc-center _pl-1aj14ak _pb-1aj14ak _pr-1aj14ak _pt-1aj14ak _bg-180kg62 _fd-row _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:d.map(((e,t)=>{let[o,s]=e;return"type"===o?null:(0,r.jsxs)(_.Fragment,{children:[(0,r.jsxs)("div",{className:v,children:[(0,r.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz _ww-break-word _boxs-border-box _dsp-inline ",children:o}),(0,r.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcek _ls-3oolvl _fos-3slpz8 _lh-3or5tp _ww-break-word _boxs-border-box _dsp-inline ",children:s})]}),t<d.length-1&&(0,r.jsx)("div",{className:"  is_Separator _ml-15px _mr-15px _transform-cx1iw7 _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _borderBottomStyle-solid _borderRightStyle-solid _fg-1 _bls-solid _borderTopStyle-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _boxs-border-box _fb-auto _dsp-flex _ai-stretch "})]},o)}))})]})]})}));o(3497)},7219:function(e,t,o){"use strict";o.d(t,{P:function(){return i},v:function(){return a}});var r=o(6227),s=o(7855);const i=(0,r.z)(s.H2,{name:"HomeH2",size:"$11","color-xs":"_col-_xs_b5vn3b","textTransform-xs":"_tt-_xs_3tb9kn","fontFamily-xs":"_ff-_xs_4yewjq","fontWeight-xs":"_fow-_xs_3uqciv","letterSpacing-xs":"_ls-_xs_3oolzw","fontSize-xs":"_fos-_xs_3slq3j","lineHeight-xs":"_lh-_xs_3or5y0","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_1b7l12b","fontFamily-sm":"_ff-_sm_4yewjq","fontWeight-sm":"_fow-_sm_1cfkkj7","letterSpacing-sm":"_ls-_sm_1782q72","fontSize-sm":"_fos-_sm_1all9bv","lineHeight-sm":"_lh-_sm_17a9wki",marginTop:"_mt-lrpkgt",maxWidth:"_maw-720px",alignSelf:"_als-center",textAlign:"_ta-center"}),a=(0,r.z)(s.H3,{fontFamily:"$body",name:"HomeH3",theme:"alt2",size:"$8","fontWeight-sm":"_fow-_sm_400","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_none","fontFamily-sm":"_ff-_sm_4yewjq","letterSpacing-sm":"_ls-_sm_-05px1a","fontSize-sm":"_fos-_sm_3slq0y","lineHeight-sm":"_lh-_sm_3or5vf",maxWidth:"_maw-620px",letterSpacing:"_ls--05px1a",paddingRight:"_pr-30px",paddingLeft:"_pl-30px",fontWeight:"_fow-400",alignSelf:"_als-center",textAlign:"_ta-center"});o(4028)},5890:function(e,t,o){"use strict";o.d(t,{S:function(){return g}});var r=o(7328),s=o(6670),i=o(6297),a=o(2322),n=o(6462),l=o(6341),_=o(2366),d=o(2784),c=o(2341),b=o(5947),p=o(5300),m=o(6186),x=o(9145),f="/_next/static/media/kanye.8a1ab422.jpg",u=o(6486);const h="  is_Paragraph font_body _col-rnt87j _cur-text _ussel-text _ff-4yewjq _fow-3uqcdp _ls-3ooluq _fos-3slpyd _lh-3or5su _ww-break-word _boxs-border-box _dsp-inline ",g=(0,d.memo)((e=>{var{theme:t,alt:o,onHoverSection:d,pointerEvents:g,pointerEventsControls:w}=e,y=(0,i.Z)(e,["theme","alt","onHoverSection","pointerEvents","pointerEventsControls"]);return(0,a.jsx)(c.Q,{name:o?"alt".concat(o):null,children:(0,a.jsxs)(b.Zb,(0,s.Z)((0,r.Z)({overflowX:"_ovx-visible",overflowY:"_ovy-visible",bordered:!0,borderBottomLeftRadius:"_bblr-lmimej",borderBottomRightRadius:"_bbrr-lmimej",borderTopRightRadius:"_btrr-lmimej",borderTopLeftRadius:"_btlr-lmimej",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_borderRightStyle-solid",pointerEvents:g,alignItems:"_ai-stretch",paddingTop:"_pt-0px",paddingRight:"_pr-0px",paddingBottom:"_pb-0px",paddingLeft:"_pl-0px"},y),{className:(0,u.concatClassName)(""+(y&&y.className||""),y),children:[(0,a.jsxs)(p.sL,{paddingLeft:"_pl-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingRight:"_pr-1aj14ak",paddingTop:"_pt-1aj14ak",alignItems:"_ai-center",space:"$5",children:[(0,a.jsx)("div",{className:"  is_Square _w-90px _h-90px _miw-90px _maw-90px _mah-90px _mih-90px _bblr-lmimdo _bbrr-lmimdo _btrr-lmimdo _btlr-lmimdo _ovy-hidden _ovx-hidden _pos-relative _bg-180kg62 _jc-center _ai-center _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 ",children:(0,a.jsx)(m.E,{width:90,height:90,src:f})}),(0,a.jsxs)("div",{className:"  is_YStack _jc-center _mt--10px _miw-165px _fd-column _boxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,a.jsx)("p",{className:"  is_Paragraph font_body _fow-700 _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _ls-3oolvl _fos-3slpz8 _lh-3or5tp _ww-break-word _boxs-border-box _dsp-inline ",children:"Spaceship"}),(0,a.jsx)("p",{className:h,children:"Kanye West"}),(0,a.jsx)("p",{className:h,children:"College Dropout"})]})]}),(0,a.jsx)("div",{className:"  is_Separator _mb--1px _transform-n24na2 _mah-0px _h-0px _fg-1 _borderRightStyle-solid _bls-solid _borderTopStyle-solid _borderBottomStyle-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _boxs-border-box _fb-auto _dsp-flex _ai-stretch "}),(0,a.jsxs)(p.sL,{alignItems:"_ai-center",borderBottomLeftRadius:"_bblr-17px",borderBottomRightRadius:"_bbrr-17px",backgroundColor:"_bg-8htuv0",paddingBottom:"_pb-1aj14ak",paddingTop:"_pt-1aj14ak",paddingLeft:"_pl-1aj14ca",paddingRight:"_pr-1aj14ca",width:"_w-10011",zIndex:"_zi-1000",space:"$5",justifyContent:"_jc-center",pointerEvents:g,children:[(0,a.jsx)(n.F,{size:20}),(0,a.jsx)(x.zx,{bordered:!0,"borderTopColor-hover":"_btc-0hover-1byp41v","borderRightColor-hover":"_brc-0hover-1byp41v","borderBottomColor-hover":"_bbc-0hover-1byp41v","borderLeftColor-hover":"_blc-0hover-1byp41v","borderTopColor-active":"_btc-0active-1fsewm4","borderRightColor-active":"_brc-0active-1fsewm4","borderBottomColor-active":"_bbc-0active-1fsewm4","borderLeftColor-active":"_blc-0active-1fsewm4",marginBottom:"_mb-lrpl37",marginTop:"_mt-lrpl37",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_bls-solid",borderRightStyle:"_borderRightStyle-solid",icon:l.d,size:"$8",circular:!0,width:"_w-a0wkxn",height:"_h-a0wkxn",maxWidth:"_maw-a0wkxn",maxHeight:"_mah-a0wkxn",minWidth:"_miw-a0wkxn",minHeight:"_mih-a0wkxn",borderTopLeftRadius:"_btlr-100000px",borderTopRightRadius:"_btrr-100000px",borderBottomRightRadius:"_bbrr-100000px",borderBottomLeftRadius:"_bblr-100000px",paddingTop:"_pt-0px",paddingBottom:"_pb-0px",paddingRight:"_pr-0px",paddingLeft:"_pl-0px",elevation:"$4",boxShadow:"_boxsh-asvu26",pointerEvents:w}),(0,a.jsx)(_.N,{size:20})]})]}))})}));o(7820)},2897:function(e,t,o){"use strict";o.d(t,{S:function(){return i}});var r=o(6227),s=o(5300);const i=(0,r.z)(s.FA,{tag:"pre",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj14ak",paddingRight:"_pr-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingLeft:"_pl-1aj14ak",overflowX:"_ovx-visible",overflowY:"_ovy-visible"});o(3554)},856:function(e,t,o){"use strict";o.d(t,{Q:function(){return p}});var r=o(7328),s=o(6670),i=o(2322),a=o(9757),n=o(2784),l=o(2815),_=o(9141),d=o(9145),c=o(6610),b=o(6486);const p=(0,n.memo)((e=>{const{onOpen:t,onInput:o}=(0,n.useContext)(c.c),p=(0,l.Y)(),m=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=e=>{m&&m.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[o,m]),(0,i.jsx)(_.w,{groupId:"header-actions-search",label:"Search docs..",children:(0,i.jsx)(d.zx,(0,s.Z)((0,r.Z)({accessibilityLabel:"Search docs",ref:m,onPress:t,icon:a.o,iconAfter:p?null:(0,i.jsx)(d.zx,{size:"$2",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",height:"_h-a0wksh",borderTopLeftRadius:"_btlr-lmima8",borderTopRightRadius:"_btrr-lmima8",borderBottomRightRadius:"_bbrr-lmima8",borderBottomLeftRadius:"_bblr-lmima8",chromeless:!0,opacity:"_o-0dot35",pointerEvents:"_pe-none",borderRightStyle:"_borderRightStyle-solid",borderLeftStyle:"_bls-solid",borderTopStyle:"_borderTopStyle-solid",borderBottomStyle:"_borderBottomStyle-solid",borderLeftWidth:"_blw-0px",borderBottomWidth:"_bbw-0px",borderRightWidth:"_brw-0px",borderTopWidth:"_btw-0px",backgroundColor:"_bg-16hdpw2",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",shadowColor:"_shac-16hdpw2",children:"/"})},e),{className:(0,b.concatClassName)(""+(e&&e.className||""),e)}))})}));o(9205)},3106:function(e,t,o){"use strict";o.d(t,{T:function(){return x}});var r=o(7328),s=o(6670),i=o(2322),a=o(9793),n=o(2947),l=o(8253),_=o(1191),d=o(2784),c=o(9611),b=o(9141),p=o(9145);const m={system:a.u,light:n.k,dark:l.J},x=e=>{const{theme:t,toggleTheme:o}=(0,_.Fg)(),{0:a,1:n}=(0,d.useState)("light");(0,c.LI)((()=>{n(t||"light")}),[t]);const l=m[a];return(0,i.jsx)(b.w,{groupId:"header-actions-theme",label:"Switch theme (".concat(t,")"),children:(0,i.jsx)(p.zx,(0,s.Z)((0,r.Z)({size:"$3",onPress:o},e),{"aria-label":"toggle a light and dark color scheme",icon:l}))})}},9141:function(e,t,o){"use strict";o.d(t,{w:function(){return c}});var r=o(7328),s=o(6670),i=o(6297),a=o(2322),n=o(8333),l=o(7038),_=o(2560),d=o(314);const c=e=>{var{label:t,children:o,contentProps:c}=e,b=(0,i.Z)(e,["label","children","contentProps"]);let p;try{p=(0,n.tj)()}catch(x){}const m=(0,a.jsxs)(d.u,(0,s.Z)((0,r.Z)({},b),{children:[(0,a.jsx)(d.u.Trigger,{asChild:!0,children:o}),(0,a.jsx)(l.f,{children:(0,a.jsxs)(d.u.Content,(0,s.Z)((0,r.Z)({enterStyle:{x:0,y:-10,opacity:0,scale:.9},exitStyle:{x:0,y:-10,opacity:0,scale:.9},x:0,scale:1,y:0,elevation:"$0.5",opacity:1,animation:["bouncy",{opacity:{overshootClamping:!0}}]},c),{children:[(0,a.jsx)(d.u.Arrow,{}),(0,a.jsx)(_.n,{size:"$2",lineHeight:"$1",children:t})]}))})]}));return p?m:(0,a.jsx)(d.A,{delay:{open:3e3,close:100},children:m})}},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);