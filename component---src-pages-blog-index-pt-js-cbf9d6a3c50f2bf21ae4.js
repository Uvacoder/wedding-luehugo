(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return r});var a=n(0),o=n.n(a),i=n(336);t.default=function(e){return o.a.createElement(i.a,e)};var r="3195764717"},227:function(e,t,n){"use strict";var a=n(212),o=n(210).d.a.withConfig({displayName:"A",componentId:"sc-1lc4gcg-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.a.color},function(e){return e.theme.a.textDecoration},function(e){return e.theme.a.hover.color});t.a=o.withComponent(a.a)},238:function(e,t,n){"use strict";n(50);var a=n(0),o=n.n(a),i=n(210),r=n(220),l=n(286),m=n.n(l),c=(n(14),n(217)),u=function(e){return o.a.createElement("time",Object.assign({},e,{dateTime:e.date}),o.a.createElement(c.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))},d=(n(287),Object(i.d)(r.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"io44ma-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),s=i.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"io44ma-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),p=Object(i.d)(m.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"io44ma-2"})(["display:block;border-radius:50%;"]),f=i.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"io44ma-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]);t.a=function(e){var t,n,a=e.author,i=e.className,l=e.date,m=e.showFollow,c=e.timeToRead;return o.a.createElement(d,{columns:"50px 1fr",className:i},o.a.createElement(r.a,{middle:!0},o.a.createElement(p,{email:a.email,alt:a.name,width:42,height:42})),o.a.createElement(r.a,{middle:!0},o.a.createElement("span",null,a.name,m?o.a.createElement(f,{href:"http://twitter.com/"+a.twitter,target:"_blank"},o.a.createElement("span",null,"Follow")):null),o.a.createElement(s,null,o.a.createElement(u,{pubdate:"pubdate",date:l}),c&&" • "+(t=c,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))}},244:function(e,t,n){"use strict";n(14);var a=n(0),o=n.n(a),i=n(227),r=n(210),l=n(220),m=n(258),c=n.n(m),u=n(238),d=n(233);function s(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    ",";\n  "]);return s=function(){return e},e}var p=Object(r.d)(l.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1q927f0-0"})(["height:100%;"]),f=Object(r.d)(p).withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1q927f0-1"})(["border:",";border-radius:0.25rem;grid-template-rows:repeat(1,1fr);grid-template-columns:3fr 5fr;",""],function(e){return e.theme.blog.list.item.border},d.b.md(s(),function(e){return e.imageOnTop?" grid-template-rows: repeat(2,1fr);\n        grid-template-columns: 1fr;":""})),h=Object(r.d)(l.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1q927f0-2"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),g=Object(r.d)(l.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1q927f0-3"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),b=r.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1q927f0-4"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),y=Object(r.d)(i.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1q927f0-5"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),E=r.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1q927f0-6"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),w=r.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1q927f0-7"})(["position:absolute;right:18px;bottom:18px;"]),_=Object(r.d)(c.a).withConfig({displayName:"PostCard__Image",componentId:"sc-1q927f0-8"})(["height:100%;"]),C=function(e){var t=e.post,n=e.author,a=e.imageOnTop;return o.a.createElement(f,{imageOnTop:a},o.a.createElement(l.a,null,o.a.createElement(i.a,{to:t.fields.slug},o.a.createElement(_,{sizes:t.frontmatter.image.childImageSharp.sizes}))),o.a.createElement(l.a,null,o.a.createElement(p,{columns:1,rows:"1fr auto"},o.a.createElement(h,null,o.a.createElement(b,null,o.a.createElement(y,{to:t.fields.slug},t.frontmatter.title)),o.a.createElement(E,null,t.excerpt)),o.a.createElement(g,null,o.a.createElement(u.a,{author:n,date:t.frontmatter.date}),o.a.createElement(w,null,o.a.createElement(i.a,{to:t.fields.slug},o.a.createElement("svg",{width:"25",height:"25"},o.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))))};t.a=function(e){return o.a.createElement("nav",null,o.a.createElement(l.b,{columns:"repeat(auto-fit,minmax(260px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return o.a.createElement(l.a,{key:t.fields.slug},o.a.createElement(C,Object.assign({post:t},e)))})))}},336:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(244),r=n(228),l=n.n(r),m=n(217),c=n(235),u=n(210),d=u.d.section.withConfig({displayName:"Blog__Wrapper",componentId:"sc-1p6u6zy-0"})(["margin:",";padding:",";"],function(e){return e.theme.page.margin},function(e){return e.theme.page.padding}),s=u.d.header.withConfig({displayName:"Blog__Header",componentId:"sc-1p6u6zy-1"})(["font-family:",";border-bottom:1px solid rgba(0,0,0,0.125);margin:",";"],function(e){return e.theme.page.header.fontFamily},function(e){return e.theme.page.header.margin}),p=u.d.h1.withConfig({displayName:"Blog__H1",componentId:"sc-1p6u6zy-2"})(["font-size:",";padding:0;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:",";margin-bottom:-1px;}"],function(e){return e.theme.page.header.fontSize},function(e){return e.theme.scale(3.5)});t.a=function(e){var t=e.data.site.siteMetadata.author;return o.a.createElement(c.a,{location:e.location},o.a.createElement(d,null,o.a.createElement(m.b,{id:"posts"},function(e){return o.a.createElement(s,null,o.a.createElement(l.a,{title:e,meta:[{name:"description",content:e}]}),o.a.createElement(p,null,o.a.createElement("span",null,e)))}),o.a.createElement(i.a,{posts:e.data.allMarkdownRemark.edges.map(function(e){return e.node}),author:t,imageOnTop:!0})))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-pt-js-cbf9d6a3c50f2bf21ae4.js.map