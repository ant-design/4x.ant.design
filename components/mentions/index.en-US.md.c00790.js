(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{3823:function(t,n){t.exports={content:["section",["p","Mention component."],["h2","When To Use"],["p","When you need to mention someone or something."]],meta:{category:"Components",type:"Data Entry",title:"Mentions",cover:"https://gw.alipayobjects.com/zos/alicdn/0pF5j477V/Mentions.svg",filename:"components/mentions/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sample<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions.Option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions</span><span class="token punctuation">></span></span>`},["code",`<Mentions onChange={onChange}>
  <Mentions.Option value="sample">Sample</Mentions.Option>
</Mentions>`]],["h3","Mention"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFocus"],["td","Auto get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoSize"],["td","Textarea height autosize feature, can be set to true ","|"," false or an object { minRows: 2, maxRows: 6 }"],["td","boolean ","|"," object"],["td","false"],["td"]],["tr",["td","defaultValue"],["td","Default value"],["td","string"],["td","-"],["td"]],["tr",["td","filterOption"],["td","Customize filter option logic"],["td","false ","|"," (input: string, option: OptionProps) => boolean"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","Set the mount HTML node for suggestions"],["td","() => HTMLElement"],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","Set mentions content when not match"],["td","ReactNode"],["td",["code","Not Found"]],["td"]],["tr",["td","placement"],["td","Set popup placement"],["td",["code","top"]," ","|"," ",["code","bottom"]],["td",["code","bottom"]],["td"]],["tr",["td","prefix"],["td","Set trigger prefix keyword"],["td","string ","|"," string","[","]"],["td",["code","@"]],["td"]],["tr",["td","split"],["td","Set split string before and after selected mention"],["td","string"],["td",["code",""]],["td"]],["tr",["td","status"],["td","Set validation status"],["td","'error' ","|"," 'warning' ","|"," 'success' ","|"," 'validating'"],["td","-"],["td","4.19.0"]],["tr",["td","validateSearch"],["td","Customize trigger search logic"],["td","(text: string, props: MentionsProps) => void"],["td","-"],["td"]],["tr",["td","value"],["td","Set value of mentions"],["td","string"],["td","-"],["td"]],["tr",["td","onBlur"],["td","Trigger when mentions lose focus"],["td","() => void"],["td","-"],["td"]],["tr",["td","onChange"],["td","Trigger when value changed"],["td","(text: string) => void"],["td","-"],["td"]],["tr",["td","onFocus"],["td","Trigger when mentions get focus"],["td","() => void"],["td","-"],["td"]],["tr",["td","onResize"],["td","The callback function that is triggered when textarea resize"],["td","function({ width, height })"],["td","-"],["td"]],["tr",["td","onSearch"],["td","Trigger when prefix hit"],["td","(text: string, prefix: string) => void"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Trigger when user select the option"],["td","(option: OptionProps, prefix: string) => void"],["td","-"],["td"]]]],["h3","Mention methods"],["table",["thead",["tr",["th","Name"],["th","Description"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"]],["tr",["td","focus()"],["td","Get focus"]]]],["h3","Option"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","children"],["td","Suggestion content"],["td","ReactNode"],["td","-"]],["tr",["td","value"],["td","The value of suggestion, the value will insert into input filed while selected"],["td","string"],["td","-"]]]]]}}}]);
