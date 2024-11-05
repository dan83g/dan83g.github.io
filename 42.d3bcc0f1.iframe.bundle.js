"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[42],{"./src/shared/hooks/use-actions/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useActions,r:()=>Action});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Action=function(Action){return Action.CREATE="CREATE",Action.UPDATE="UPDATE",Action.DELETE="DELETE",Action}({}),useActions=function useActions(createAction,updateAction,deleteAction,callBack){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Action.CREATE),2),action=_useState2[0],setAction=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),id=_useState4[0],setId=_useState4[1],t=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.Bd)().t,actionMap=new Map([[Action.CREATE,{name:t("barActions.create"),fn:createAction}],[Action.UPDATE,{name:t("barActions.update"),fn:updateAction}],[Action.DELETE,{name:t("barActions.delete"),fn:deleteAction}]]);return{action,id,setActionAndId:function setActionAndId(action,id){setAction(action),setId(id),callBack()},actionName:actionMap.get(action).name,actionFn:actionMap.get(action).fn}}},"./src/shared/hooks/use-intersection-observer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useIntersectionObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useIntersectionObserver=function useIntersectionObserver(isLoading){var observerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isIntersecting=_useState2[0],setIntersecting=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var observer=new IntersectionObserver((function(entries){entries[0].isIntersecting&&!isLoading&&setIntersecting(!0)}));return observer.observe(observerRef.current),function(){return null==observer?void 0:observer.disconnect()}}),[isLoading]),{observerRef,isIntersecting}};try{useIntersectionObserver.displayName="useIntersectionObserver",useIntersectionObserver.__docgenInfo={description:"",displayName:"useIntersectionObserver",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/hooks/use-intersection-observer/index.tsx#useIntersectionObserver"]={docgenInfo:useIntersectionObserver.__docgenInfo,name:"useIntersectionObserver",path:"src/shared/hooks/use-intersection-observer/index.tsx#useIntersectionObserver"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/crud-action-bar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CRUDActionBar});__webpack_require__("./node_modules/react/index.js");var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/crud-action-bar/styles.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const crud_action_bar_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var _templateObject,_templateObject2,_templateObject3,_templateObject4,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var CRUDActionBar=function CRUDActionBar(_ref){var onCreate=_ref.onCreate,onUpdate=_ref.onUpdate,onDelete=_ref.onDelete,onCancel=_ref.onCancel,t=(0,es.Bd)().t;return(0,jsx_runtime.jsxs)("div",{className:crud_action_bar_styles_module.root,children:[Boolean(onCreate)&&(0,jsx_runtime.jsx)("button",{className:crud_action_bar_styles_module.button,onClick:onCreate,title:t(_templateObject||(_templateObject=_taggedTemplateLiteral(["barActions.create"]))),children:(0,jsx_runtime.jsx)(md.Vbh,{className:crud_action_bar_styles_module.icon})}),Boolean(onUpdate)&&(0,jsx_runtime.jsx)("button",{className:crud_action_bar_styles_module.button,onClick:onUpdate,title:t(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["barActions.update"]))),children:(0,jsx_runtime.jsx)(md.LS5,{className:crud_action_bar_styles_module.icon})}),Boolean(onDelete)&&(0,jsx_runtime.jsx)("button",{className:crud_action_bar_styles_module.button,onClick:onDelete,title:t(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["barActions.delete"]))),children:(0,jsx_runtime.jsx)(md.Kk3,{className:crud_action_bar_styles_module.icon})}),Boolean(onCancel)&&(0,jsx_runtime.jsx)("button",{className:crud_action_bar_styles_module.button,onClick:onCancel,title:t(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["barActions.cancel"]))),children:(0,jsx_runtime.jsx)(md.qiG,{className:crud_action_bar_styles_module.icon})})]})};CRUDActionBar.displayName="CRUDActionBar";try{CRUDActionBar.displayName="CRUDActionBar",CRUDActionBar.__docgenInfo={description:"",displayName:"CRUDActionBar",props:{onCreate:{defaultValue:null,description:"",name:"onCreate",required:!1,type:{name:"() => void"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"() => void"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"() => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/crud-action-bar/index.tsx#CRUDActionBar"]={docgenInfo:CRUDActionBar.__docgenInfo,name:"CRUDActionBar",path:"src/shared/ui/crud-action-bar/index.tsx#CRUDActionBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/modal-wrapper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>ModalFormWrapper});__webpack_require__("./node_modules/react/index.js");var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function Portal(_ref){var children=_ref.children,_ref$container=_ref.container,container=void 0===_ref$container?document.body:_ref$container;return(0,react_dom.createPortal)(children,container)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{container:{defaultValue:{value:"document.body"},description:"",name:"container",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/shared/ui/portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/styles.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const modal_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=function Modal(_ref){var visible=_ref.visible,children=_ref.children,onClose=_ref.onClose;return visible?(0,jsx_runtime.jsx)("div",{className:modal_styles_module.modal,children:(0,jsx_runtime.jsxs)("div",{className:modal_styles_module.modal__content,children:[(0,jsx_runtime.jsx)("button",{className:modal_styles_module["modal__close-button"],"aria-label":"Close",onClick:onClose,children:"×"}),children]})}):null};Modal.displayName="Modal";const ui_modal=Modal;try{modal.displayName="modal",modal.__docgenInfo={description:"",displayName:"modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/modal/index.tsx#modal"]={docgenInfo:modal.__docgenInfo,name:"modal",path:"src/shared/ui/modal/index.tsx#modal"})}catch(__react_docgen_typescript_loader_error){}var ModalFormWrapper=function ModalFormWrapper(_ref){var children=_ref.children,isVisible=_ref.isVisible,onClose=_ref.onClose;return isVisible&&(0,jsx_runtime.jsx)(Portal,{children:(0,jsx_runtime.jsx)(ui_modal,{visible:isVisible,onClose,children})})};try{ModalFormWrapper.displayName="ModalFormWrapper",ModalFormWrapper.__docgenInfo={description:"",displayName:"ModalFormWrapper",props:{isVisible:{defaultValue:null,description:"",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/modal-wrapper/index.tsx#ModalFormWrapper"]={docgenInfo:ModalFormWrapper.__docgenInfo,name:"ModalFormWrapper",path:"src/shared/ui/modal-wrapper/index.tsx#ModalFormWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});__webpack_require__("./node_modules/react/index.js");var md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/spinner/styles.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const spinner_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Spinner=function Spinner(_ref){var _ref$loading=_ref.loading;return void 0!==_ref$loading&&_ref$loading?(0,jsx_runtime.jsx)("div",{className:spinner_styles_module.loading,children:(0,jsx_runtime.jsx)(md.i54,{className:spinner_styles_module.spinner})}):null};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/shared/ui/spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/crud-action-bar/styles.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".RvYWh8UlJ1Kt949BvTRJ{display:flex;justify-content:left}html.light .RvYWh8UlJ1Kt949BvTRJ{background-color:#fff}html.dark .RvYWh8UlJ1Kt949BvTRJ{background-color:#23272f}html.light .RvYWh8UlJ1Kt949BvTRJ{color:#404757}html.dark .RvYWh8UlJ1Kt949BvTRJ{color:#f6f7f9}html.light .RvYWh8UlJ1Kt949BvTRJ{border-color:#e9e9ea}html.dark .RvYWh8UlJ1Kt949BvTRJ{border-color:#2d2f33}.JYH27JFFersJ8IYSR4q2{border:none;border-radius:5px;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:.5rem}html.light .JYH27JFFersJ8IYSR4q2{color:#404757}html.dark .JYH27JFFersJ8IYSR4q2{color:#f6f7f9}html.light .JYH27JFFersJ8IYSR4q2{background-color:#A7B286}html.dark .JYH27JFFersJ8IYSR4q2{background-color:#A7B286}.JYH27JFFersJ8IYSR4q2:hover{opacity:.7}.FyydAoJmtwhGJcJlvo52{font-size:1.25rem;height:2rem;font-weight:700;padding:0;margin:0}","",{version:3,sources:["webpack://./src/shared/ui/crud-action-bar/styles.module.sass","webpack://./src/app/theming/mixins.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,oBAAA,CCuBS,iCACP,qBAAA,CAEO,gCACP,wBAAA,CAJO,iCACP,aAAA,CAEO,gCACP,aAAA,CAJO,iCACP,oBAAA,CAEO,gCACP,oBAAA,CDtBJ,sBACE,WAAA,CACA,iBAAA,CACA,cAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CCWS,iCACP,aAAA,CAEO,gCACP,aAAA,CAJO,iCACP,wBAAA,CAEO,gCACP,wBAAA,CDXF,4BACE,UAAA,CAEJ,sBACE,iBAAA,CACA,WAAA,CACA,eAAA,CACA,SAAA,CACA,QAAA",sourcesContent:["@import src/app/styles/common\n  \n.root\n  display: flex\n  justify-content: left\n  +theme(background-color, mainBg)\n  +theme(color, text)\n  +theme(border-color, borderColor)\n\n.button\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  display: flex\n  justify-content: center\n  align-items: center\n  margin-left: 0.5rem\n  +theme(color, text)\n  +theme(background-color, primaryColor)\n\n  &:hover\n    opacity: .7\n\n.icon\n  font-size: 1.25rem\n  height: 2rem\n  font-weight: 700\n  padding: 0\n  margin: 0",'@import "theme";\n\n/**\nПример использования:\n  body\n    @include theme(color, text)\n\n  создаст\n  html.light body {\n    color: text для светлой темы\n  }\n\n  html.dark body {\n    color: text для темной темы\n  }\n*/\n\n/**\nКак это работает\n@at-root обозначает это написанные свойства не должны быть вложены. То есть не body html.light body, а html.light body\nhtml:global(.light) #{&} обозначает, что нужно в html с классом light в выбранном элементе (& будет заменен на соответствущий селектор) указать следующие свойства\nпоследующая строка создает свойства, например color: #ccc\nmap-get - встроенная функция sass, которая достает из карты (map) значение переменной $var\nв некоторых свойствах недостаточно указать просто значение, а нужно указать дополнительные данные,\nнапример theme(border, var, 1px solid) создаст border: 1px solid varValue(тот цвет, который находится в по ключу var)\n*/\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root html:global(.light) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.dark) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={headerHeight:"40px",light_mainBg:"#fff",light_bg:"#f3f4f6",light_borderColor:"#e9e9ea",light_brightText:"#23272f",light_text:"#404757",light_lightText:"#5f697e",light_accent:"#077ea5",dark_mainBg:"#23272f",dark_bg:"#1a1c22",dark_borderColor:"#2d2f33",dark_brightText:"#f6f7f9",dark_text:"#f6f7f9",dark_lightText:"#ebecf0",dark_accent:"#077ea5",root:"RvYWh8UlJ1Kt949BvTRJ",button:"JYH27JFFersJ8IYSR4q2",icon:"FyydAoJmtwhGJcJlvo52"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/styles.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".wGj1G5JFr3fCBJXrekoK{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;z-index:1000}.BoZBJgSfR4BgYAydDc2V{background-color:#fff;padding:20px;border-radius:4px;position:relative;width:400px}html.light .BoZBJgSfR4BgYAydDc2V{background-color:#fff}html.dark .BoZBJgSfR4BgYAydDc2V{background-color:#23272f}html.light .BoZBJgSfR4BgYAydDc2V{color:#404757}html.dark .BoZBJgSfR4BgYAydDc2V{color:#f6f7f9}html.light .BoZBJgSfR4BgYAydDc2V{border-color:#f0f0f0}html.dark .BoZBJgSfR4BgYAydDc2V{border-color:#3e4148}.A9gmA63IbThu7uJxcASm{position:absolute;top:0px;right:0px;background:none;border:none;font-size:24px;cursor:pointer}html.light .A9gmA63IbThu7uJxcASm{background-color:#fff}html.dark .A9gmA63IbThu7uJxcASm{background-color:#23272f}html.light .A9gmA63IbThu7uJxcASm{color:#404757}html.dark .A9gmA63IbThu7uJxcASm{color:#f6f7f9}html.light .A9gmA63IbThu7uJxcASm{border-color:#f0f0f0}html.dark .A9gmA63IbThu7uJxcASm{border-color:#3e4148}","",{version:3,sources:["webpack://./src/shared/ui/modal/styles.module.sass","webpack://./src/app/theming/mixins.scss"],names:[],mappings:"AAEA,sBACE,cAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,+BAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CAEA,sBACE,qBAAA,CACA,YAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CCQO,iCACP,qBAAA,CAEO,gCACP,wBAAA,CAJO,iCACP,aAAA,CAEO,gCACP,aAAA,CAJO,iCACP,oBAAA,CAEO,gCACP,oBAAA,CDPF,sBACE,iBAAA,CACA,OAAA,CACA,SAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CCJO,iCACP,qBAAA,CAEO,gCACP,wBAAA,CAJO,iCACP,aAAA,CAEO,gCACP,aAAA,CAJO,iCACP,oBAAA,CAEO,gCACP,oBAAA",sourcesContent:["@import src/app/styles/common\n\n.modal\n  position: fixed\n  top: 0\n  left: 0\n  width: 100%\n  height: 100%\n  background-color: rgba(0, 0, 0, 0.2)\n  display: flex\n  justify-content: center\n  align-items: center\n  z-index: 1000\n\n  &__content\n    background-color: white\n    padding: 20px\n    border-radius: 4px\n    position: relative\n    width: 400px\n    +theme(background-color, mainBg)\n    +theme(color, text)\n    +theme(border-color, borderColor2)\n\n  &__close-button\n    position: absolute\n    top: 0px\n    right: 0px\n    background: none\n    border: none\n    font-size: 24px\n    cursor: pointer\n    +theme(background-color, mainBg)\n    +theme(color, text)\n    +theme(border-color, borderColor2)\n",'@import "theme";\n\n/**\nПример использования:\n  body\n    @include theme(color, text)\n\n  создаст\n  html.light body {\n    color: text для светлой темы\n  }\n\n  html.dark body {\n    color: text для темной темы\n  }\n*/\n\n/**\nКак это работает\n@at-root обозначает это написанные свойства не должны быть вложены. То есть не body html.light body, а html.light body\nhtml:global(.light) #{&} обозначает, что нужно в html с классом light в выбранном элементе (& будет заменен на соответствущий селектор) указать следующие свойства\nпоследующая строка создает свойства, например color: #ccc\nmap-get - встроенная функция sass, которая достает из карты (map) значение переменной $var\nв некоторых свойствах недостаточно указать просто значение, а нужно указать дополнительные данные,\nнапример theme(border, var, 1px solid) создаст border: 1px solid varValue(тот цвет, который находится в по ключу var)\n*/\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root html:global(.light) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.dark) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={headerHeight:"40px",light_mainBg:"#fff",light_bg:"#f3f4f6",light_borderColor:"#e9e9ea",light_brightText:"#23272f",light_text:"#404757",light_lightText:"#5f697e",light_accent:"#077ea5",dark_mainBg:"#23272f",dark_bg:"#1a1c22",dark_borderColor:"#2d2f33",dark_brightText:"#f6f7f9",dark_text:"#f6f7f9",dark_lightText:"#ebecf0",dark_accent:"#077ea5",modal:"wGj1G5JFr3fCBJXrekoK",modal__content:"BoZBJgSfR4BgYAydDc2V","modal__close-button":"A9gmA63IbThu7uJxcASm"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/spinner/styles.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".zshKAEdrFtgbD0VTssRD{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}.rgIToGzs83FTqrESGYFn{animation:t3rJA84_3ynCwD7bn6PC infinite 5s linear;font-size:5rem}html.light .rgIToGzs83FTqrESGYFn{color:#A7B286}html.dark .rgIToGzs83FTqrESGYFn{color:#A7B286}@keyframes t3rJA84_3ynCwD7bn6PC{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}","",{version:3,sources:["webpack://./src/shared/ui/spinner/styles.module.sass","webpack://./src/app/theming/mixins.scss"],names:[],mappings:"AAEA,sBACE,cAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CAEF,sBACE,iDAAA,CACA,cAAA,CCiBS,iCACP,aAAA,CAEO,gCACP,aAAA,CDlBF,gCACE,KACE,sBAAA,CACF,GACE,wBAAA,CAAA",sourcesContent:["@import src/app/styles/common\n \n.loading\n  position: fixed\n  top: 50%\n  left: 50%\n  transform: translate(-50%, -50%)\n\n.spinner\n  animation: spin infinite 5s linear\n  font-size: 5rem\n  +theme(color, primaryColor)\n\n  @keyframes spin\n    from\n      transform: rotate(0deg)\n    to\n      transform: rotate(360deg)",'@import "theme";\n\n/**\nПример использования:\n  body\n    @include theme(color, text)\n\n  создаст\n  html.light body {\n    color: text для светлой темы\n  }\n\n  html.dark body {\n    color: text для темной темы\n  }\n*/\n\n/**\nКак это работает\n@at-root обозначает это написанные свойства не должны быть вложены. То есть не body html.light body, а html.light body\nhtml:global(.light) #{&} обозначает, что нужно в html с классом light в выбранном элементе (& будет заменен на соответствущий селектор) указать следующие свойства\nпоследующая строка создает свойства, например color: #ccc\nmap-get - встроенная функция sass, которая достает из карты (map) значение переменной $var\nв некоторых свойствах недостаточно указать просто значение, а нужно указать дополнительные данные,\nнапример theme(border, var, 1px solid) создаст border: 1px solid varValue(тот цвет, который находится в по ключу var)\n*/\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root html:global(.light) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.dark) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={headerHeight:"40px",light_mainBg:"#fff",light_bg:"#f3f4f6",light_borderColor:"#e9e9ea",light_brightText:"#23272f",light_text:"#404757",light_lightText:"#5f697e",light_accent:"#077ea5",dark_mainBg:"#23272f",dark_bg:"#1a1c22",dark_borderColor:"#2d2f33",dark_brightText:"#f6f7f9",dark_text:"#f6f7f9",dark_lightText:"#ebecf0",dark_accent:"#077ea5",loading:"zshKAEdrFtgbD0VTssRD",spinner:"rgIToGzs83FTqrESGYFn",spin:"t3rJA84_3ynCwD7bn6PC"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);