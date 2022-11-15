(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{3792:function(a,p,t){a.exports={content:["section",["p","A dropdown list."],["h2","When To Use"],["p","When there are more than a few options to choose from, you can wrap them in a ",["code","Dropdown"],". By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action."],["h3","Usage upgrade after 4.24.0"],function(){var e=t(0),l=t(51),s=o(t(494));function o(n){return n&&n.__esModule?n:{default:n}}return e.createElement(s.default,{message:"After version 4.24.0, we provide a simpler usage <Dropdown menu={{ items: [...] }} /> with better performance and potential of writing simpler code style in your applications. Meanwhile, we deprecated the old usage in browser console, we will remove it in antd 5.0."})},["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// works when >=4.24.0, recommended \u2705</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'item-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// remember to pass the key prop</span>
  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'item-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// works when &lt;4.24.0, deprecated when >=4.24.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// works when >=4.24.0, recommended \u2705
const items = [
  { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' },
];
return (
  <Dropdown menu={{ items }}>
    <a>Hover me</a>
  </Dropdown>
);

// works when <4.24.0, deprecated when >=4.24.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F
const menu = (
  <Menu>
    <Menu.Item>item 1</Menu.Item>
    <Menu.Item>item 2</Menu.Item>
  </Menu>
);
return (
  <Dropdown overlay={menu}>
    <a>Hover me</a>
  </Dropdown>
);`]]],meta:{category:"Components",type:"Navigation",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg",filename:"components/dropdown/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Dropdown"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","arrow"],["td","Whether the dropdown arrow should be visible"],["td","boolean ","|"," { pointAtCenter: boolean }"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","Focus element in ",["code","overlay"]," when opened"],["td","boolean"],["td","false"],["td","4.21.0"]],["tr",["td","disabled"],["td","Whether the dropdown menu is disabled"],["td","boolean"],["td","-"],["td"]],["tr",["td","destroyPopupOnHide"],["td","Whether destroy dropdown when hidden"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownRender"],["td","Customize dropdown content"],["td","(menus: ReactNode) => ReactNode"],["td","-"],["td","4.24.0"]],["tr",["td","getPopupContainer"],["td","To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. ",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"Example on CodePen"]],["td","(triggerNode: HTMLElement) => HTMLElement"],["td","() => document.body"],["td"]],["tr",["td","menu"],["td","The menu props"],["td",["a",{title:null,href:"/components/menu/#API"},"MenuProps"]],["td","-"],["td","4.24.0"]],["tr",["td","overlayClassName"],["td","The class name of the dropdown root element"],["td","string"],["td","-"],["td"]],["tr",["td","overlayStyle"],["td","The style of the dropdown root element"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","placement"],["td","Placement of popup menu: ",["code","bottom"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","top"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","trigger"],["td","The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td","[",["code","hover"],"]"],["td"]],["tr",["td","open"],["td","Whether the dropdown menu is currently open. Use ",["code","visible"]," under 4.23.0 (",["a",{title:null,href:"/docs/react/faq#why-open"},"why?"],")"],["td","boolean"],["td","-"],["td","4.23.0"]],["tr",["td","onOpenChange"],["td","Called when the open state is changed. Not trigger when hidden by click item. Use ",["code","onVisibleChange"]," under 4.23.0 (",["a",{title:null,href:"/docs/react/faq#why-open"},"why?"],")"],["td","(open: boolean) => void"],["td","-"],["td","4.23.0"]]]],["h3","Dropdown.Button"],["p","Same props from Dropdown. And includes additional props:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","buttonsRender"],["td","Custom buttons inside Dropdown.Button"],["td","(buttons: ReactNode","[","]) => ReactNode","[","]"],["td","-"],["td"]],["tr",["td","loading"],["td","Set the loading status of button"],["td","boolean ","|"," { delay: number }"],["td","false"],["td"]],["tr",["td","danger"],["td","Set the danger status of button"],["td","boolean"],["td","-"],["td","4.23.0"]],["tr",["td","icon"],["td","Icon (appears on the right)"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","size"],["td","Size of the button, the same as ",["a",{title:null,href:"/components/button/#API"},"Button"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","type"],["td","Type of the button, the same as ",["a",{title:null,href:"/components/button/#API"},"Button"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","onClick"],["td","The same as ",["a",{title:null,href:"/components/button/#API"},"Button"],": called when you click the button on the left"],["td","(event) => void"],["td","-"],["td"]]]]]}}}]);
