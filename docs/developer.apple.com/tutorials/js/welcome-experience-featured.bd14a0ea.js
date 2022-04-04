/*!
 * This source file is part of the Swift.org open source project
 * 
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 * 
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["welcome-experience-featured"],{"0721":function(e,t,a){"use strict";a("7ca5")},"0b66":function(e,t,a){},"0e7f":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-menu-item",class:{"nav-menu-item--animated":e.animate}},[e._t("default")],2)},n=[],s={name:"NavMenuItemBase",props:{animate:{type:Boolean,default:!0}}},i=s,o=(a("60c9"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,"65b9129d",null);t["a"]=c.exports},1938:function(e,t,a){"use strict";a("d991")},"283a":function(e,t,a){},"294c":function(e,t,a){},"30c8":function(e,t,a){"use strict";t["a"]={methods:{abstractForTechnology({content:e,destination:t={}}){if(e&&e.length>0)return e;const{abstract:a}=this.references[t.identifier]||{};return a}}}},"3faa":function(e,t,a){"use strict";a("294c")},"467e":function(e,t,a){},"4c16":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SVGIcon",{staticClass:"inline-chevron-right-icon",attrs:{viewBox:"0 0 14 14"}},[a("path",{attrs:{d:"m4.81347656 13.1269531c.22558594 0 .41015625-.0820312.56738282-.2324219l5.31835942-5.19531245c.1845703-.19140625.2802734-.38964844.2802734-.63574219 0-.23925781-.0888672-.45117187-.2802734-.62890625l-5.31835942-5.20214843c-.15722657-.15039063-.34179688-.23242188-.56738282-.23242188-.45800781 0-.81347656.35546875-.81347656.80664062 0 .21875.09570312.43066407.24609375.58789063l4.79199219 4.67578125-4.79199219 4.6621094c-.15722656.1640625-.24609375.3623047-.24609375.5878906 0 .4511719.35546875.8066406.81347656.8066406z"}})])},n=[],s=a("5f73"),i={name:"InlineChevronRightIcon",components:{SVGIcon:s["a"]}},o=i,c=a("2877"),l=Object(c["a"])(o,r,n,!1,null,null,null);t["a"]=l.exports},5432:function(e,t,a){},"5a54":function(e,t,a){},"60c9":function(e,t,a){"use strict";a("6737")},6514:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.resolvedComponent,e._b({tag:"component",staticClass:"button-cta",class:{"is-dark":e.isDark}},"component",e.componentProps,!1),[e._t("default")],2)},n=[],s=a("5bc9"),i={name:"ButtonLink",components:{Reference:s["a"]},props:{url:{type:String,required:!1},isDark:{type:Boolean,default:!1}},computed:{resolvedComponent:({url:e})=>e?s["a"]:"button",componentProps:({url:e})=>e?{url:e}:{}}},o=i,c=(a("73a1"),a("2877")),l=Object(c["a"])(o,r,n,!1,null,"53d68b9e",null);t["a"]=l.exports},6737:function(e,t,a){},6989:function(e,t,a){"use strict";a("c4a2")},"70e6":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SVGIcon",{staticClass:"diagonal-arrow",attrs:{viewBox:"0 0 14 14"}},[a("path",{attrs:{d:"M1.964 13c0.239 0 0.478-0.094 0.683-0.299l7.314-7.314 1.314-1.494-0.137 3.354v2.731c0 0.521 0.41 0.956 0.922 0.956 0.504 0 0.939-0.427 0.939-0.981v-7.955c0-0.597-0.384-0.999-0.999-0.999l-7.955 0.017c-0.58 0-0.973 0.435-0.973 0.93 0 0.512 0.435 0.913 0.947 0.913h2.586l3.491-0.137-1.485 1.314-7.306 7.323c-0.205 0.196-0.307 0.444-0.307 0.674 0 0.504 0.452 0.964 0.964 0.964z"}})])},n=[],s=a("5f73"),i={name:"DiagonalArrowIcon",components:{SVGIcon:s["a"]}},o=i,c=a("2877"),l=Object(c["a"])(o,r,n,!1,null,null,null);t["a"]=l.exports},"73a1":function(e,t,a){"use strict";a("bc17")},"776e":function(e,t,a){"use strict";a("aca9")},"7ca5":function(e,t,a){},"7ec3":function(e,t,a){"use strict";a("283a")},"86a7":function(e,t,a){"use strict";a("e8a4")},"88eb":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"welcome",class:{ide:e.ide}},[e.isTargetIDE?e._e():a("Nav",{attrs:{homepageNavigation:e.homepageNavigation}}),a("main",{staticClass:"main",attrs:{id:"main",role:"main",tabindex:"0"}},[a("div",{class:["hero-background",{transparent:e.isTransparent}]},[e._t("hero")],2),e._t("default")],2)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("NavBase",{staticClass:"theme-dark"},[a("ReferenceUrlProvider",{attrs:{reference:e.technologiesReference},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.url;return a("router-link",{attrs:{to:e.buildUrl(r,e.$route.query),tabindex:"0"}},[e._v(" Documentation ")])}}])}),a("template",{slot:"menu-items"},e._l(e.homepageNavigation,(function(t){return a("ReferenceUrlProvider",{key:t.reference,attrs:{reference:t.reference},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.url,n=t.title;return a("NavMenuItem",{attrs:{url:e.buildUrl(r,e.$route.query)}},[e._v(" "+e._s(n)+" ")])}}],null,!0)})})),1)],2)},i=[],o=a("04d9"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("NavMenuItemBase",[a("NavMenuLink",{attrs:{url:e.url}},[e._t("default")],2)],1)},l=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isCurrent?a("span",{staticClass:"nav-menu-link current",attrs:{"aria-current":"page","aria-disabled":"true",role:"link"}},[e._t("default")],2):a("router-link",{staticClass:"nav-menu-link",attrs:{to:e.url,tabindex:"0"}},[e._t("default")],2)},d=[],p=(a("5319"),a("5f44")),f={name:"NavMenuLink",computed:{isCurrent:({$route:e,url:t})=>"string"===typeof t?t===Object(p["b"])(e.path,e.query).replace(/\/$/,""):t.name===e.name},props:{url:{type:[Object,String],required:!0}}},m=f,h=(a("7ec3"),a("2877")),v=Object(h["a"])(m,u,d,!1,null,"6d58b863",null),b=v.exports,y=a("0e7f"),g={name:"NavMenuItem",components:{NavMenuItemBase:y["a"],NavMenuLink:b},props:{url:{type:[Object,String],required:!0}}},_=g,C=Object(h["a"])(_,c,l,!1,null,null,null),k=C.exports,I=a("f54f"),w={name:"Nav",inject:["references"],components:{ReferenceUrlProvider:I["a"],NavBase:o["a"],NavMenuItem:k},props:{homepageNavigation:{type:Array,required:!0}},computed:{technologiesReference({homepageNavigation:e,references:t}){const{reference:a}=e.find(({reference:e})=>"Technologies"===(t[e]||{}).title)||{};return a}},methods:{buildUrl:p["b"]}},A=w,S=(a("c571"),Object(h["a"])(A,s,i,!1,null,"0358ee82",null)),E=S.exports,j={name:"WelcomeExperience",inject:{isTargetIDE:{default:()=>!1}},props:{homepageNavigation:{type:Array,default:()=>[]},isTransparent:{type:Boolean,default:!1}},components:{Nav:E},computed:{ide:({isTargetIDE:e})=>e}},R=j,x=(a("a864"),Object(h["a"])(R,r,n,!1,null,"ffc5bd5c",null));t["a"]=x.exports},"9a27":function(e,t,a){},a864:function(e,t,a){"use strict";a("5432")},aca9:function(e,t,a){},ade8:function(e,t,a){},afb8:function(e,t,a){"use strict";a("ade8")},b775:function(e,t,a){"use strict";a("9a27")},bc17:function(e,t,a){},c4a2:function(e,t,a){},c571:function(e,t,a){"use strict";a("5a54")},cb53:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"asset"},[a(e.assetComponent,e._g(e._b({tag:"component"},"component",e.assetProps,!1),e.assetListeners))],1)},n=[],s=a("79a0"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("video",{attrs:{controls:e.showsControls,autoplay:e.autoplays,poster:e.normalizeAssetUrl(e.defaultPosterAttributes.url),muted:"",playsinline:""},domProps:{muted:!0},on:{playing:function(t){return e.$emit("playing")},ended:function(t){return e.$emit("ended")}}},[a("source",{attrs:{src:e.normalizeAssetUrl(e.videoAttributes.url)}})])},o=[],c=a("7b31"),l=a("5399"),u=a("7b4e"),d={name:"VideoAsset",props:{variants:{type:Array,required:!0},showsControls:{type:Boolean,default:()=>!0},autoplays:{type:Boolean,default:()=>!0},posterVariants:{type:Array,required:!1,default:()=>[]}},data:()=>({appState:l["a"].state}),computed:{preferredColorScheme:({appState:e})=>e.preferredColorScheme,systemColorScheme:({appState:e})=>e.systemColorScheme,userPrefersDark:({preferredColorScheme:e,systemColorScheme:t})=>e===u["a"].dark.value||e===u["a"].auto.value&&t===u["a"].dark.value,shouldShowDarkVariant:({darkVideoVariantAttributes:e,userPrefersDark:t})=>e&&t,defaultVideoAttributes(){return this.videoVariantsGroupedByAppearance.light[0]||this.darkVideoVariantAttributes||{}},darkVideoVariantAttributes(){return this.videoVariantsGroupedByAppearance.dark[0]},videoVariantsGroupedByAppearance(){return Object(c["d"])(this.variants)},posterVariantsGroupedByAppearance(){return Object(c["d"])(this.posterVariants)},defaultPosterAttributes:({posterVariantsGroupedByAppearance:e,userPrefersDark:t})=>t&&e.dark.length?e.dark[0]:e.light[0]||{},videoAttributes:({darkVideoVariantAttributes:e,defaultVideoAttributes:t,shouldShowDarkVariant:a})=>a?e:t},methods:{normalizeAssetUrl:c["b"]}},p=d,f=a("2877"),m=Object(f["a"])(p,i,o,!1,null,null,null),h=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"video-replay-container"},[a("VideoAsset",{ref:"asset",attrs:{variants:e.variants,showsControls:e.showsControls,autoplays:e.autoplays},on:{ended:e.onVideoEnd}}),a("a",{staticClass:"replay-button",class:{visible:this.showsReplayButton},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.replay.apply(null,arguments)}}},[e._v(" Replay "),a("InlineReplayIcon",{staticClass:"replay-icon icon-inline"})],1)],1)},b=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SVGIcon",{staticClass:"inline-replay-icon",attrs:{viewBox:"0 0 14 14"}},[a("path",{attrs:{d:"M6.997 14c3.495 0 6.38-2.885 6.38-6.38 0-3.057-2.213-5.646-5.104-6.244v-0.906c0-0.468-0.351-0.604-0.734-0.327l-2.083 1.473c-0.314 0.228-0.314 0.573 0 0.795l2.077 1.479c0.382 0.277 0.74 0.154 0.74-0.327v-0.888c2.207 0.561 3.822 2.552 3.822 4.944 0 2.829-2.268 5.104-5.098 5.104s-5.104-2.275-5.098-5.104c0.006-1.646 0.777-3.082 1.985-4.013 0.29-0.253 0.382-0.616 0.16-0.918-0.203-0.29-0.604-0.339-0.937-0.068-1.498 1.122-2.484 3.008-2.484 4.999 0 3.495 2.885 6.38 6.374 6.38z"}})])},g=[],_=a("5f73"),C={name:"InlineReplayIcon",components:{SVGIcon:_["a"]}},k=C,I=Object(f["a"])(k,y,g,!1,null,null,null),w=I.exports,A={name:"ReplayableVideoAsset",components:{InlineReplayIcon:w,VideoAsset:h},props:{variants:{type:Array,required:!0},showsControls:{type:Boolean,default:()=>!0},autoplays:{type:Boolean,default:()=>!0}},data(){return{showsReplayButton:!1}},methods:{async replay(){const e=this.$refs.asset.$el;e&&(this.showsReplayButton=!1,e.currentTime=0,await e.play())},onVideoEnd(){this.showsReplayButton=!0}}},S=A,E=(a("3faa"),Object(f["a"])(S,v,b,!1,null,"7aadecf0",null)),j=E.exports;const R={video:"video",image:"image"};var x={name:"Asset",components:{ImageAsset:s["a"],VideoAsset:h},constants:{AssetTypes:R},inject:["references"],props:{identifier:{type:String,required:!0},showsReplayButton:{type:Boolean,default:()=>!1},showsVideoControls:{type:Boolean,default:()=>!0},videoAutoplays:{type:Boolean,default:()=>!0}},computed:{rawAsset(){return this.references[this.identifier]||{}},isRawAssetVideo:({rawAsset:e})=>e.type===R.video,videoPoster(){return this.isRawAssetVideo&&this.references[this.rawAsset.poster]},asset(){return this.isRawAssetVideo&&this.prefersReducedMotion&&this.videoPoster||this.rawAsset},assetComponent(){switch(this.asset.type){case R.image:return s["a"];case R.video:return this.showsReplayButton?j:h;default:return}},prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion)").matches},assetProps(){return{[R.image]:this.imageProps,[R.video]:this.videoProps}[this.asset.type]},imageProps(){return{alt:this.asset.alt,variants:this.asset.variants}},videoProps(){return{variants:this.asset.variants,showsControls:this.showsVideoControls,autoplays:!this.prefersReducedMotion&&this.videoAutoplays,posterVariants:this.videoPoster?this.videoPoster.variants:[]}},assetListeners(){return{[R.image]:null,[R.video]:{ended:()=>this.$emit("videoEnded")}}[this.asset.type]}}},D=x,T=(a("0721"),Object(f["a"])(D,r,n,!1,null,"5cfd1d2a",null));t["a"]=T.exports},d991:function(e,t,a){},d9c7:function(e,t,a){"use strict";a("467e")},dd9c:function(e,t,a){"use strict";a("0b66")},e8a4:function(e,t,a){},f54f:function(e,t,a){"use strict";var r,n,s=a("5f44"),i={name:"ReferenceUrlProvider",inject:{references:{default:()=>({})}},props:{reference:{type:String,required:!0}},computed:{resolvedReference:({references:e,reference:t})=>e[t]||{},url:({resolvedReference:e})=>e.url,title:({resolvedReference:e})=>e.title},render(){return this.$scopedSlots.default({url:this.url,urlWithParams:Object(s["b"])(this.url,this.$route.query),title:this.title,reference:this.resolvedReference})}},o=i,c=a("2877"),l=Object(c["a"])(o,r,n,!1,null,null,null);t["a"]=l.exports},fb0e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.data?a("Featured",e._b({},"Featured",e.featuredProps,!1)):e._e()},n=[],s=a("7aa6"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("WelcomeExperience",{staticClass:"featured",attrs:{homepageNavigation:e.homepageNavigation}},[e.heroSection?a("Hero",{attrs:{slot:"hero",content:e.heroSection.content,title:e.heroSection.title,video:e.heroSection.video},slot:"hero"}):e._e(),e._l(e.otherSections,(function(t,r){return a(e.componentFor(t),e._b({key:r,tag:"component"},"component",e.propsFor(t),!1))}))],2)},o=[],c=(a("ddb0"),a("88eb")),l=a("2c77"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero",class:{ide:e.ide}},[e.video?a("Asset",{attrs:{identifier:e.video,showsVideoControls:!1,"aria-hidden":"true"}}):e._e(),a("div",{staticClass:"copy"},[a("Row",[a("Column",{attrs:{span:e.columnSize,isCentered:{large:!0}}},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e.content?a("ContentNode",{attrs:{content:e.content}}):e._e()],1)],1)],1)],1)},d=[],p=a("cb53"),f=a("31d7"),m=a("d31e"),h=a("60d4"),v={name:"Hero",components:{Row:h["a"],Column:m["a"],Asset:p["a"],ContentNode:f["a"]},inject:{isTargetIDE:{default:!1}},props:{content:{...f["a"].props.content,required:!1},title:{type:String,required:!0},video:{type:String,required:!1}},computed:{ide:({isTargetIDE:e})=>e,columnSize:({isTargetIDE:e})=>e?{large:12}:{small:12,medium:10,large:10}}},b=v,y=(a("776e"),a("2877")),g=Object(y["a"])(b,u,d,!1,null,"5b88d89f",null),_=g.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resources",class:{ide:e.ide}},[a("div",{staticClass:"content-wrapper"},[a("ul",{staticClass:"resource-list"},e._l(e.resources,(function(t,r){return a("DestinationDataProvider",{key:t.title,attrs:{destination:t.destination},scopedSlots:e._u([{key:"default",fn:function(n){var s=n.url,i=n.title,o=n.formatAriaLabel;return s?a("li",{staticClass:"resource-list-item"},[a("Reference",{staticClass:"resource",attrs:{url:s,"aria-label":o(t.title),"aria-describedby":"resource_content_"+r}},[a("Asset",{attrs:{identifier:t.image,"aria-hidden":"true"}}),a("p",{staticClass:"title",attrs:{"aria-hidden":"true"}},[e._v(e._s(t.title))]),a("ContentNode",{attrs:{id:"resource_content_"+r,content:t.content,"aria-hidden":"true"}}),a("span",{staticClass:"link",attrs:{"aria-hidden":"true"}},[e._v(" "+e._s(i)+" "),a("InlineChevronRightIcon",{staticClass:"link-icon icon-inline"})],1)],1)],1):e._e()}}],null,!0)})})),1)])])},k=[],I=a("5bc9"),w=a("71d0"),A=a("4c16"),S={name:"Resources",inject:{isTargetIDE:{default:!1},references:{default:{}}},components:{InlineChevronRightIcon:A["a"],DestinationDataProvider:w["a"],Asset:p["a"],ContentNode:f["a"],Reference:I["a"]},props:{resources:{type:Array,required:!0}},computed:{ide:({isTargetIDE:e})=>e}},E=S,j=(a("dd9c"),Object(y["a"])(E,C,k,!1,null,"98e1fbac",null)),R=j.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section",class:e.classes},[a("div",{staticClass:"section-background"},[a("div",{staticClass:"content-container"},[a("Row",[a("Column",{attrs:{span:e.columnSize,"is-centered":{large:!0}}},[a("div",{staticClass:"copy"},[a("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e.content?a("ContentNode",{attrs:{content:e.content}}):e._e()],1)])],1),e.body?a(e.bodyComponent,e._b({tag:"component"},"component",e.bodyProps,!1)):e._e()],1)])])},D=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-stack-container",class:{ide:e.ide}},[e._l(e.cards,(function(t,r){return[t.isFeatured?a("FeaturedCard",e._b({key:r},"FeaturedCard",t.cards[0],!1)):a("div",{key:r,staticClass:"card-stack",class:e.cardClass(t)},e._l(t.cards,(function(r,n){return a("Card",e._b({key:r.title+n,attrs:{size:e.cardSize(t)}},"Card",r,!1))})),1)]}))],2)},O=[],V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardLink",e._b({staticClass:"card",class:e.classes,attrs:{destination:e.destination},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.formatAriaLabel,n=t.isExternal;return[a("CardCover",{attrs:{variants:e.imageReference.variants,"aria-hidden":"true"}}),a("div",{staticClass:"details",attrs:{"aria-hidden":"true"}},[e.eyebrow?a("div",{staticClass:"eyebrow",attrs:{id:e.eyebrowId,"aria-label":r("- "+e.eyebrow)}},[e._v(" "+e._s(e.eyebrow)+" ")]):e._e(),a("div",{staticClass:"title",attrs:{id:e.titleId}},[e._v(" "+e._s(e.title)+" ")]),e.abstract?a("ContentNode",{attrs:{content:e.abstract,id:e.contentId}}):e._e(),a(e.hasButton?"ButtonLink":"div",{tag:"component",staticClass:"link"},[e._v(" "+e._s(e.linkText)+" "),e.isTargetIDE&&n?a("DiagonalArrowIcon",{staticClass:"icon-inline link-icon"}):e.hasButton?e._e():a("InlineChevronRightIcon",{staticClass:"icon-inline link-icon"})],1)],1)]}}])},"CardLink",e.linkAriaTags,!1))},$=[],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("DestinationDataProvider",{attrs:{destination:e.destination},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.url,n=t.formatAriaLabel,s=t.isExternal;return r?a("Reference",{attrs:{url:r}},[e._t("default",null,null,{formatAriaLabel:n,isExternal:s})],2):e._e()}}],null,!0)})},P=[],N={name:"CardLink",components:{Reference:I["a"],DestinationDataProvider:w["a"]},props:{destination:{type:Object,required:!0}}},q=N,L=Object(y["a"])(q,B,P,!1,null,null,null),z=L.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-cover-wrap"},[a("div",{staticClass:"card-cover card-cover--light",style:e.styles.light}),a("div",{staticClass:"card-cover card-cover--dark",style:e.styles.dark})])},M=[],U=a("9ed9"),G=a("7b31");const W=e=>e?`url('${Object(G["b"])(e)}')`:void 0;var H={name:"CardCover",mixins:[U["a"]],computed:{backgroundUrls:({darkVariants:e,lightVariants:t})=>({dark:e.length?e[0].src:null,light:t.length?t[0].src:null}),styles:({backgroundUrls:e})=>({dark:{backgroundImage:W(e.dark||e.light)},light:{backgroundImage:W(e.light)}})}},J=H,K=Object(y["a"])(J,F,M,!1,null,null,null),Q=K.exports,X=a("30c8"),Y=a("6514"),Z=a("70e6");const ee={small:"small",large:"large"};var te={name:"Card",components:{DiagonalArrowIcon:Z["a"],InlineChevronRightIcon:A["a"],ContentNode:f["a"],CardCover:Q,CardLink:z,ButtonLink:Y["a"]},constants:{Size:ee},inject:{isTargetIDE:{default:!1},references:{default:()=>({})}},mixins:[X["a"]],computed:{titleId:({_uid:e})=>"card_title_"+e,contentId:({_uid:e})=>"card_content_"+e,eyebrowId:({_uid:e})=>"card_eyebrow_"+e,linkAriaTags:({titleId:e,eyebrowId:t,contentId:a})=>({"aria-labelledby":`${e} ${t}`,"aria-describedby":""+a}),classes:({isTargetIDE:e,size:t})=>[t,{ide:e}],imageReference:({image:e,references:t})=>t[e]||{},linkText:({callToActionText:{ide:e,web:t}={},isTargetIDE:a})=>a?e:t,abstract({abstractForTechnology:e,content:t,destination:a}){return e({content:t,destination:a})}},props:{callToActionText:{type:Object,required:!0},content:{type:Array,required:!1},destination:{type:Object,required:!1},eyebrow:{type:String,required:!1},image:{type:String,required:!0},size:{type:String,validator:e=>e in ee},title:{type:String,required:!0},hasButton:{type:Boolean,default:()=>!1}}},ae=te,re=(a("d9c7"),Object(y["a"])(ae,V,$,!1,null,"e2d88c1a",null)),ne=re.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",e._b({staticClass:"featured-card",class:{ide:e.ide},attrs:{hasButton:""}},"Card",e.$props,!1))},ie=[];const{size:oe,...ce}=ne.props;var le={name:"FeaturedCard",components:{Card:ne},inject:{isTargetIDE:{default:!1}},props:ce,computed:{ide:({isTargetIDE:e})=>e}},ue=le,de=(a("1938"),Object(y["a"])(ue,se,ie,!1,null,"2c1738a3",null)),pe=de.exports;const{Size:fe}=ne.constants;var me={name:"CardStack",inject:{isTargetIDE:{default:!1}},components:{Card:ne,FeaturedCard:pe},props:{cards:{type:Array,required:!0}},computed:{ide:({isTargetIDE:e})=>e},methods:{cardSize({cards:{length:e=0}=[]}){return e>=3?fe.small:fe.large},cardClass({cards:{length:e=0}=[]}){return"count-"+e}}},he=me,ve=(a("86a7"),Object(y["a"])(he,T,O,!1,null,"a9626bcc",null)),be=ve.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"links",class:{ide:e.ide},attrs:{role:"list"}},e._l(e.links,(function(t){return a("li",{key:t.title,staticClass:"pill"},[a("DestinationDataProvider",{attrs:{destination:t},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.url,n=t.title,s=t.formatAriaLabel;return a("Reference",{staticClass:"link",attrs:{url:r,"aria-label":s(n+" "+e.sectionTitle)}},[a("span",{staticClass:"text"},[e._v(" "+e._s(n)+" "),e.isTargetIDE?a("DiagonalArrowIcon",{staticClass:"icon-inline text-icon"}):e._e()],1)])}}],null,!0)})],1)})),0)},ge=[],_e={name:"Links",components:{DiagonalArrowIcon:Z["a"],DestinationDataProvider:w["a"],Reference:I["a"]},inject:{isTargetIDE:{default:!1}},props:{links:{type:Array,required:!0},sectionTitle:{type:String,required:!1}},computed:{ide:({isTargetIDE:e})=>e}},Ce=_e,ke=(a("b775"),Object(y["a"])(Ce,ye,ge,!1,null,"2a555971",null)),Ie=ke.exports;const we={cards:"cards",links:"links"};var Ae={name:"Section",inject:{isTargetIDE:{default:!1}},components:{Row:h["a"],Column:m["a"],CardStack:be,ContentNode:f["a"],Links:Ie},constants:{BodyKind:we},props:{body:{type:Object,required:!1,validator:e=>Object.hasOwnProperty.call(we,e.kind)},content:{...f["a"].props.content,required:!1},title:{type:String,required:!0}},computed:{bodyComponent:({body:e})=>({[we.cards]:be,[we.links]:Ie}[e.kind]),bodyProps:({body:e,title:t})=>({[we.cards]:{cards:e.cards},[we.links]:{links:e.links,sectionTitle:t}}[e.kind]),classes:({isTargetIDE:e,body:t={}})=>({ide:e,["section--"+t.kind]:t.kind}),columnSize:({isTargetIDE:e})=>e?{large:12}:{small:12,medium:10,large:10}}},Se=Ae,Ee=(a("afb8"),Object(y["a"])(Se,x,D,!1,null,"bf8bc0aa",null)),je=Ee.exports;const Re={hero:"hero",resources:"homepageResources",section:"section"};var xe={name:"Featured",components:{Hero:_,Resources:R,Section:je,WelcomeExperience:c["a"]},mixins:[l["a"]],constants:{SectionKind:Re},props:{homepageNavigation:{type:Array,default:()=>[]},references:{type:Object,default:()=>({})},sections:{type:Array,default:()=>[]}},computed:{pageTitle:()=>"Featured",partitionedSections:({sections:e})=>e.reduce(([e,t],a)=>a.kind===Re.hero?[e.concat(a),t]:[e,t.concat(a)],[[],[]]),heroSections:({partitionedSections:e})=>e[0],otherSections:({partitionedSections:e})=>e[1],heroSection:({heroSections:e})=>e[0]},methods:{componentFor(e){return{[Re.resources]:R,[Re.section]:je}[e.kind]},propsFor(e){const{body:t,content:a,kind:r,resources:n,title:s}=e;return{[Re.resources]:{resources:n},[Re.section]:{body:t,content:a,title:s}}[r]}},provide(){return{references:this.references}}},De=xe,Te=(a("6989"),Object(y["a"])(De,i,o,!1,null,"637eaea0",null)),Oe=Te.exports,Ve=a("0a3c"),$e=a("3b30"),Be={name:"WelcomeExperienceFeatured",components:{Featured:Oe},mixins:[Ve["a"],$e["a"]],data(){return{data:null}},computed:{featuredProps:({data:{hierarchy:e,references:t,sections:a}})=>{const{homepageNavigation:r}=e||{};return{references:t,sections:a,homepageNavigation:r}}},beforeRouteEnter(e,t,a){Object(s["c"])(e,t,a).then(e=>a(t=>{t.data=e})).catch(a)},beforeRouteUpdate(e,t,a){Object(s["d"])(e,t)?Object(s["c"])(e,t,a).then(e=>{this.data=e,a()}).catch(a):a()},watch:{data(){this.$nextTick(()=>{this.newContentMounted()})}}},Pe=Be,Ne=Object(y["a"])(Pe,r,n,!1,null,null,null);t["default"]=Ne.exports}}]);