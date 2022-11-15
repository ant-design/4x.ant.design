(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{3821:function(t,d){t.exports={content:["section",["p","\u901A\u7528\u5217\u8868\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u6700\u57FA\u7840\u7684\u5217\u8868\u5C55\u793A\uFF0C\u53EF\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\uFF0C\u5E38\u7528\u4E8E\u540E\u53F0\u6570\u636E\u5C55\u793A\u9875\u9762\u3002"]],meta:{category:"Components",type:"\u6570\u636E\u5C55\u793A",title:"List",subtitle:"\u5217\u8868",cols:1,cover:"https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg",filename:"components/list/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u53E6\u5916\u6211\u4EEC\u5C01\u88C5\u4E86 ",["a",{title:null,href:"https://procomponents.ant.design/components/list"},"ProList"],"\uFF0C\u5728 ",["code","antd"]," List \u4E4B\u4E0A\u6269\u5C55\u4E86\u66F4\u591A\u4FBF\u6377\u6613\u7528\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\u591A\u9009\uFF0C\u5C55\u5F00\u7B49\u529F\u80FD\uFF0C\u4F7F\u7528\u4F53\u9A8C\u8D34\u8FD1 Table\uFF0C\u6B22\u8FCE\u5C1D\u8BD5\u4F7F\u7528\u3002"],["h3","List"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","bordered"],["td","\u662F\u5426\u5C55\u793A\u8FB9\u6846"],["td","boolean"],["td","false"],["td"]],["tr",["td","dataSource"],["td","\u5217\u8868\u6570\u636E\u6E90"],["td","any","[","]"],["td","-"],["td"]],["tr",["td","footer"],["td","\u5217\u8868\u5E95\u90E8"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","grid"],["td","\u5217\u8868\u6805\u683C\u914D\u7F6E"],["td",["a",{title:null,href:"#List-grid-props"},"object"]],["td","-"],["td"]],["tr",["td","header"],["td","\u5217\u8868\u5934\u90E8"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","itemLayout"],["td","\u8BBE\u7F6E ",["code","List.Item"]," \u5E03\u5C40, \u8BBE\u7F6E\u6210 ",["code","vertical"]," \u5219\u7AD6\u76F4\u6837\u5F0F\u663E\u793A, \u9ED8\u8BA4\u6A2A\u6392"],["td","string"],["td","-"],["td"]],["tr",["td","loading"],["td","\u5F53\u5361\u7247\u5185\u5BB9\u8FD8\u5728\u52A0\u8F7D\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u7528 ",["code","loading"]," \u5C55\u793A\u4E00\u4E2A\u5360\u4F4D"],["td","boolean ","|"," ",["a",{title:null,href:"/components/spin/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/8659"},"\u66F4\u591A"],")"],["td","false"],["td"]],["tr",["td","loadMore"],["td","\u52A0\u8F7D\u66F4\u591A"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","locale"],["td","\u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E\uFF0C\u76EE\u524D\u5305\u62EC\u7A7A\u6570\u636E\u6587\u6848"],["td","object"],["td","{emptyText: ",["code","\u6682\u65E0\u6570\u636E"],"}"],["td"]],["tr",["td","pagination"],["td","\u5BF9\u5E94\u7684 ",["code","pagination"]," \u914D\u7F6E, \u8BBE\u7F6E false \u4E0D\u663E\u793A"],["td","boolean ","|"," object"],["td","false"],["td"]],["tr",["td","renderItem"],["td","\u5F53\u4F7F\u7528 dataSource \u65F6\uFF0C\u53EF\u4EE5\u7528 ",["code","renderItem"]," \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u9879"],["td","(item) => ReactNode"],["td","-"],["td"]],["tr",["td","rowKey"],["td","\u5F53 ",["code","renderItem"]," \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u9879\u6709\u6548\u65F6\uFF0C\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684 ",["code","key"]," \u7684\u83B7\u53D6\u65B9\u5F0F"],["td",["code","keyof"]," T ","|"," (item: T) => ",["code","React.Key"]],["td",["code",'"key"']],["td"]],["tr",["td","size"],["td","list \u7684\u5C3A\u5BF8"],["td",["code","default"]," ","|"," ",["code","large"]," ","|"," ",["code","small"]],["td",["code","default"]],["td"]],["tr",["td","split"],["td","\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF"],["td","boolean"],["td","true"],["td"]]]],["h3","pagination"],["p","\u5206\u9875\u7684\u914D\u7F6E\u9879\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","position"],["td","\u6307\u5B9A\u5206\u9875\u663E\u793A\u7684\u4F4D\u7F6E"],["td",["code","top"]," ","|"," ",["code","bottom"]," ","|"," ",["code","both"]],["td",["code","bottom"]]]]],["p","\u66F4\u591A\u914D\u7F6E\u9879\uFF0C\u8BF7\u67E5\u770B ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"\u3002"],["h3","List grid props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","column"],["td","\u5217\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","gutter"],["td","\u6805\u683C\u95F4\u9694"],["td","number"],["td","0"],["td"]],["tr",["td","xs"],["td",["code","<576px"]," \u5C55\u793A\u7684\u5217\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","sm"],["td",["code","\u2265576px"]," \u5C55\u793A\u7684\u5217\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","md"],["td",["code","\u2265768px"]," \u5C55\u793A\u7684\u5217\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","lg"],["td",["code","\u2265992px"]," \u5C55\u793A\u7684\u5217\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","xl"],["td",["code","\u22651200px"]," \u5C55\u793A\u7684\u5217\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","xxl"],["td",["code","\u22651600px"]," \u5C55\u793A\u7684\u5217\u6570"],["td","number"],["td","-"],["td"]]]],["h3","List.Item"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","actions"],["td","\u5217\u8868\u64CD\u4F5C\u7EC4\uFF0C\u6839\u636E ",["code","itemLayout"]," \u7684\u4E0D\u540C, \u4F4D\u7F6E\u5728\u5361\u7247\u5E95\u90E8\u6216\u8005\u6700\u53F3\u4FA7"],["td","Array","<","ReactNode>"],["td","-"],["td"]],["tr",["td","extra"],["td","\u989D\u5916\u5185\u5BB9, \u901A\u5E38\u7528\u5728 ",["code","itemLayout"]," \u4E3A ",["code","vertical"]," \u7684\u60C5\u51B5\u4E0B, \u5C55\u793A\u53F3\u4FA7\u5185\u5BB9; ",["code","horizontal"]," \u5C55\u793A\u5728\u5217\u8868\u5143\u7D20\u6700\u53F3\u4FA7"],["td","ReactNode"],["td","-"],["td"]]]],["h3","List.Item.Meta"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","avatar"],["td","\u5217\u8868\u5143\u7D20\u7684\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","description"],["td","\u5217\u8868\u5143\u7D20\u7684\u63CF\u8FF0\u5185\u5BB9"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","title"],["td","\u5217\u8868\u5143\u7D20\u7684\u6807\u9898"],["td","ReactNode"],["td","-"],["td"]]]]]}}}]);
