webpackJsonp([1],{963:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{showAddPost:(0,_.getShowAddPost)(e),posts:(0,P.getPosts)(e)}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,r,n){var l=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&l)for(var s in l)void 0===o[s]&&(o[s]=l[s]);else o||(o=l||{});if(1===a)o.children=n;else if(a>1){for(var i=Array(a),u=0;u<a;u++)i[u]=arguments[u+3];o.children=i}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=o(1),c=r(f),d=o(106),p=o(966),y=r(p),v=o(965),m=r(v),h=o(363),b=o(228),_=o(365),P=o(364),g=i("h1",{},void 0,"Hello world"),w=function(e){function t(){var e,o,r,a;n(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return o=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleDeletePost=function(e){confirm("Do you want to delete this post")&&r.props.dispatch((0,h.deletePostRequest)(e))},r.handleAddPost=function(e,t,o){r.props.dispatch((0,b.toggleAddPost)()),r.props.dispatch((0,h.addPostRequest)({name:e,title:t,content:o}))},a=o,l(r,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.dispatch((0,h.fetchPosts)())}},{key:"render",value:function(){return i("div",{},void 0,g,i(m["default"],{addPost:this.handleAddPost,showAddPost:this.props.showAddPost}),i(y["default"],{handleDeletePost:this.handleDeletePost,posts:this.props.posts}))}}]),t}(f.Component);w.need=[function(){return(0,h.fetchPosts)()}],w.contextTypes={router:c["default"].PropTypes.object},t["default"]=(0,d.connect)(s)(w)},964:function(e,t){e.exports={"single-post":"_3B15Q62CNe0LaxJ8BUZr5W","post-title":"_3mZF-WLrnBUxaWr9zFi6Q_","author-name":"_1cSDPptMi8rvUEB2tAonlW","post-desc":"_3D8Fgk2edKTkFyBDsUEZ2u","post-action":"_3S84cKmlvGO49pK1biPlXr",divider:"y2SIF3ydn02JYMgeklO7S","post-detail":"_3W9vrxIdnQ93EmH-x2UgJR"}},965:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PostCreateWidget=void 0;var s=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,r,n){var l=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&l)for(var s in l)void 0===o[s]&&(o[s]=l[s]);else o||(o=l||{});if(1===a)o.children=n;else if(a>1){for(var i=Array(a),u=0;u<a;u++)i[u]=arguments[u+3];o.children=i}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o(1),f=r(u),c=o(105),d=o(968),p=r(d),y=s(c.FormattedMessage,{id:"createNewPost"}),v=s(c.FormattedMessage,{id:"submit"}),m=t.PostCreateWidget=function(e){function t(){var e,o,r,a;n(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return o=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.addPost=function(){var e=r.refs.name,t=r.refs.title,o=r.refs.content;e.value&&t.value&&o.value&&(r.props.addPost(e.value,t.value,o.value),e.value=t.value=o.value="")},a=o,l(r,a)}return a(t,e),i(t,[{key:"render",value:function(){var e=p["default"].form+" "+(this.props.showAddPost?p["default"].appear:"");return s("div",{className:e},void 0,s("div",{className:p["default"]["form-content"]},void 0,s("h2",{className:p["default"]["form-title"]},void 0,y),f["default"].createElement("input",{placeholder:this.props.intl.messages.authorName,className:p["default"]["form-field"],ref:"name"}),f["default"].createElement("input",{placeholder:this.props.intl.messages.postTitle,className:p["default"]["form-field"],ref:"title"}),f["default"].createElement("textarea",{placeholder:this.props.intl.messages.postContent,className:p["default"]["form-field"],ref:"content"}),s("a",{className:p["default"]["post-submit-button"],href:"#",onClick:this.addPost},void 0,v)))}}]),t}(u.Component);t["default"]=(0,c.injectIntl)(m)},966:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e){return l("div",{className:"listView"},void 0,e.posts.map(function(t){return l(i["default"],{post:t,onDelete:function(){return e.handleDeletePost(t.cuid)}},t.cuid)}))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,r,n){var l=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&l)for(var s in l)void 0===o[s]&&(o[s]=l[s]);else o||(o=l||{});if(1===a)o.children=n;else if(a>1){for(var i=Array(a),u=0;u<a;u++)i[u]=arguments[u+3];o.children=i}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),a=o(1),s=(r(a),o(967)),i=r(s);t["default"]=n},967:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e){return l("div",{className:f["default"]["single-post"]},void 0,l("h3",{className:f["default"]["post-title"]},void 0,l(s.Link,{to:"/posts/"+e.post.slug+"-"+e.post.cuid},void 0,e.post.title)),l("p",{className:f["default"]["author-name"]},void 0,c," ",e.post.name),l("p",{className:f["default"]["post-desc"]},void 0,e.post.content),l("p",{className:f["default"]["post-action"]},void 0,l("a",{href:"#",onClick:e.onDelete},void 0,d)),l("hr",{className:f["default"].divider}),p)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,r,n){var l=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&l)for(var s in l)void 0===o[s]&&(o[s]=l[s]);else o||(o=l||{});if(1===a)o.children=n;else if(a>1){for(var i=Array(a),u=0;u<a;u++)i[u]=arguments[u+3];o.children=i}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),a=o(1),s=(r(a),o(138)),i=o(105),u=o(964),f=r(u),c=l(i.FormattedMessage,{id:"byyyyyyyyyyy"}),d=l(i.FormattedMessage,{id:"deletePost"}),p=l("p",{},void 0,"Hello World");t["default"]=n},968:function(e,t){e.exports={form:"_1HNxVmVCIfsWU6Q22cRSd7","form-content":"VlHIHfXe5nkoruuc0N8pJ","form-title":"_32cczwmKrlcNdTsvCr-oBL","form-field":"_1srubE9zVaJuCqkgKCA3lY","post-submit-button":"_2m9Bzr_sJcQ7FK3o3X0PBL",appear:"_30KT3DYyUvGj_5sBYnixvw"}}});