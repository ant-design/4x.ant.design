(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{3766:function(t,e){t.exports={content:["section",["p","\u7EA7\u8054\u9009\u62E9\u6846\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002"]],["li",["p","\u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002"]],["li",["p","\u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002"]]]],meta:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"Cascader",subtitle:"\u7EA7\u8054\u9009\u62E9",cover:"https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg",filename:"components/cascader/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65B9\u6CD5",title:"\u65B9\u6CD5"},"\u65B9\u6CD5"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowClear"],["td","\u662F\u5426\u652F\u6301\u6E05\u9664"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","\u662F\u5426\u6709\u8FB9\u6846"],["td","boolean"],["td","true"],["td"]],["tr",["td","clearIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u6E05\u7A7A\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","changeOnSelect"],["td","\uFF08\u5355\u9009\u65F6\u751F\u6548\uFF09\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","\u81EA\u5B9A\u4E49\u7C7B\u540D"],["td","string"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879"],["td","string","[","] ","|"," number","[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","displayRender"],["td","\u9009\u62E9\u540E\u5C55\u793A\u7684\u6E32\u67D3\u51FD\u6570"],["td","(label, selectedOptions) => ReactNode"],["td","label => label.join(",["code","/"],")"],["td",["code","multiple"],": 4.18.0"]],["tr",["td","popupClassName"],["td","\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D"],["td","string"],["td","-"],["td","4.23.0"]],["tr",["td","dropdownRender"],["td","\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9"],["td","(menus: ReactNode) => ReactNode"],["td","-"],["td","4.4.0"]],["tr",["td","expandIcon"],["td","\u81EA\u5B9A\u4E49\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u56FE\u6807"],["td","ReactNode"],["td","-"],["td","4.4.0"]],["tr",["td","expandTrigger"],["td","\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 'click' \u548C 'hover'"],["td","string"],["td",["code","click"]],["td"]],["tr",["td","fieldNames"],["td","\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5"],["td","object"],["td","{ label: ",["code","label"],", value: ",["code","value"],", children: ",["code","children"]," }"],["td"]],["tr",["td","getPopupContainer"],["td","\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"\u793A\u4F8B"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","loadData"],["td","\u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u9009\u9879\uFF0C\u65E0\u6CD5\u4E0E ",["code","showSearch"]," \u4E00\u8D77\u4F7F\u7528"],["td","(selectedOptions) => void"],["td","-"],["td"]],["tr",["td","maxTagCount"],["td","\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017"],["td","number ","|"," ",["code","responsive"]],["td","-"],["td","4.17.0"]],["tr",["td","maxTagPlaceholder"],["td","\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode ","|"," function(omittedValues)"],["td","-"],["td","4.17.0"]],["tr",["td","notFoundContent"],["td","\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","string"],["td",["code","Not Found"]],["td"]],["tr",["td","open"],["td","\u63A7\u5236\u6D6E\u5C42\u663E\u9690"],["td","boolean"],["td","-"],["td","4.17.0"]],["tr",["td","options"],["td","\u53EF\u9009\u9879\u6570\u636E\u6E90"],["td",["a",{title:null,href:"#Option"},"Option"],"[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C"],["td","string"],["td",["code","\u8BF7\u9009\u62E9"]],["td"]],["tr",["td","placement"],["td","\u6D6E\u5C42\u9884\u8BBE\u4F4D\u7F6E"],["td",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td",["code","bottomLeft"]],["td","4.17.0"]],["tr",["td","showSearch"],["td","\u5728\u9009\u62E9\u6846\u4E2D\u663E\u793A\u641C\u7D22\u6846"],["td","boolean ","|"," ",["a",{title:null,href:"#showSearch"},"Object"]],["td","false"],["td"]],["tr",["td","size"],["td","\u8F93\u5165\u6846\u5927\u5C0F"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td"]],["tr",["td","status"],["td","\u8BBE\u7F6E\u6821\u9A8C\u72B6\u6001"],["td","'error' ","|"," 'warning'"],["td","-"],["td","4.19.0"]],["tr",["td","style"],["td","\u81EA\u5B9A\u4E49\u6837\u5F0F"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","suffixIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","\u6307\u5B9A\u9009\u4E2D\u9879"],["td","string","[","] ","|"," number","[","]"],["td","-"],["td"]],["tr",["td","onChange"],["td","\u9009\u62E9\u5B8C\u6210\u540E\u7684\u56DE\u8C03"],["td","(value, selectedOptions) => void"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","\u663E\u793A/\u9690\u85CF\u6D6E\u5C42\u7684\u56DE\u8C03"],["td","(value) => void"],["td","-"],["td","4.17.0"]],["tr",["td","multiple"],["td","\u652F\u6301\u591A\u9009\u8282\u70B9"],["td","boolean"],["td","-"],["td","4.17.0"]],["tr",["td","showCheckedStrategy"],["td","\u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002",["code","Cascader.SHOW_CHILD"],": \u53EA\u663E\u793A\u9009\u4E2D\u7684\u5B50\u8282\u70B9\u3002",["code","Cascader.SHOW_PARENT"],": \u53EA\u663E\u793A\u7236\u8282\u70B9\uFF08\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6\uFF09\u3002"],["td",["code","Cascader.SHOW_PARENT"]," ","|"," ",["code","Cascader.SHOW_CHILD"]],["td",["code","Cascader.SHOW_PARENT"]],["td","4.20.0"]],["tr",["td","removeIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","searchValue"],["td","\u8BBE\u7F6E\u641C\u7D22\u7684\u503C\uFF0C\u9700\u8981\u4E0E ",["code","showSearch"]," \u914D\u5408\u4F7F\u7528"],["td","string"],["td","-"],["td","4.17.0"]],["tr",["td","onSearch"],["td","\u76D1\u542C\u641C\u7D22\uFF0C\u8FD4\u56DE\u8F93\u5165\u7684\u503C"],["td","(search: string) => void"],["td","-"],["td","4.17.0"]],["tr",["td","dropdownMenuColumnStyle"],["td","\u4E0B\u62C9\u83DC\u5355\u5217\u7684\u6837\u5F0F"],["td","CSSProperties"],["td","-"],["td"]]]],["h3","showSearch"],["p",["code","showSearch"]," \u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5176\u4E2D\u7684\u5B57\u6BB5\uFF1A"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","filter"],["td","\u63A5\u6536 ",["code","inputValue"]," ",["code","path"]," \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 ",["code","path"]," \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false"],["td","function(inputValue, path): boolean"],["td","-"],["td"]],["tr",["td","limit"],["td","\u641C\u7D22\u7ED3\u679C\u5C55\u793A\u6570\u91CF"],["td","number ","|"," false"],["td","50"],["td"]],["tr",["td","matchInputWidth"],["td","\u641C\u7D22\u7ED3\u679C\u5217\u8868\u662F\u5426\u4E0E\u8F93\u5165\u6846\u540C\u5BBD\uFF08",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/25779"},"\u6548\u679C"],"\uFF09"],["td","boolean"],["td","true"],["td"]],["tr",["td","render"],["td","\u7528\u4E8E\u6E32\u67D3 filter \u540E\u7684\u9009\u9879"],["td","function(inputValue, path): ReactNode"],["td","-"],["td"]],["tr",["td","sort"],["td","\u7528\u4E8E\u6392\u5E8F filter \u540E\u7684\u9009\u9879"],["td","function(a, b, inputValue)"],["td","-"],["td"]]]],["h3","Option"],["pre",{lang:"typescript",highlighted:`<span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment" spellcheck="true">// \u6807\u8BB0\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u8BBE\u7F6E\u4E86 \`loadData\` \u65F6\u6709\u6548</span>
  <span class="token comment" spellcheck="true">// \u8BBE\u4E3A \`false\` \u65F6\u4F1A\u5F3A\u5236\u6807\u8BB0\u4E3A\u7236\u8282\u70B9\uFF0C\u5373\u4F7F\u5F53\u524D\u8282\u70B9\u6CA1\u6709 children\uFF0C\u4E5F\u4F1A\u663E\u793A\u5C55\u5F00\u56FE\u6807</span>
  isLeaf<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`},["code",`interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // \u6807\u8BB0\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u8BBE\u7F6E\u4E86 \`loadData\` \u65F6\u6709\u6548
  // \u8BBE\u4E3A \`false\` \u65F6\u4F1A\u5F3A\u5236\u6807\u8BB0\u4E3A\u7236\u8282\u70B9\uFF0C\u5373\u4F7F\u5F53\u524D\u8282\u70B9\u6CA1\u6709 children\uFF0C\u4E5F\u4F1A\u663E\u793A\u5C55\u5F00\u56FE\u6807
  isLeaf?: boolean;
}`]],["h2","\u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u63CF\u8FF0"],["th","\u7248\u672C"]]],["tbody",["tr",["td","blur()"],["td","\u79FB\u9664\u7126\u70B9"],["td"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"],["td"]]]],["blockquote",["p","\u6CE8\u610F\uFF0C\u5982\u679C\u9700\u8981\u83B7\u5F97\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17"},"china-division"],"\u3002"]]]}}}]);
