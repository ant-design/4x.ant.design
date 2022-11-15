(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{3873:function(t,e){t.exports={content:["section",["p","A Slider component for displaying current value and intervals in range."],["h2","When To Use"],["p","To input a value in a range."]],meta:{category:"Components",type:"Data Entry",title:"Slider",cover:"https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg",filename:"components/slider/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFocus"],["td","Whether get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultValue"],["td","The default value of slider. When ",["code","range"]," is false, use number, otherwise, use ","[","number, number]"],["td","number ","|"," ","[","number, number]"],["td","0 ","|"," ","[","0, 0]"],["td"]],["tr",["td","disabled"],["td","If true, the slider will not be interactable"],["td","boolean"],["td","false"],["td"]],["tr",["td","dots"],["td","Whether the thumb can drag over tick only"],["td","boolean"],["td","false"],["td"]],["tr",["td","included"],["td","Make effect when ",["code","marks"]," not null, true means containment and false means coordinative"],["td","boolean"],["td","true"],["td"]],["tr",["td","marks"],["td","Tick mark of Slider, type of key must be ",["code","number"],", and must in closed interval ","[","min, max], each mark can declare its own style"],["td","object"],["td","{ number: ReactNode } ","|"," { number: { style: CSSProperties, label: ReactNode } }"],["td"]],["tr",["td","max"],["td","The maximum value the slider can slide to"],["td","number"],["td","100"],["td"]],["tr",["td","min"],["td","The minimum value the slider can slide to"],["td","number"],["td","0"],["td"]],["tr",["td","range"],["td","Dual thumb mode"],["td","boolean"],["td","false"],["td"]],["tr",["td","reverse"],["td","Reverse the component"],["td","boolean"],["td","false"],["td"]],["tr",["td","step"],["td","The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When ",["code","marks"]," no null, ",["code","step"]," can be null"],["td","number ","|"," null"],["td","1"],["td"]],["tr",["td","tooltip"],["td","The tooltip relate props"],["td",["a",{title:null,href:"#tooltip"},"tooltip"]],["td","-"],["td","4.23.0"]],["tr",["td","value"],["td","The value of slider. When ",["code","range"]," is false, use number, otherwise, use ","[","number, number]"],["td","number ","|"," ","[","number, number]"],["td","-"],["td"]],["tr",["td","vertical"],["td","If true, the slider will be vertical"],["td","boolean"],["td","false"],["td"]],["tr",["td","onAfterChange"],["td","Fire when onmouseup is fired"],["td","(value) => void"],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function that is fired when the user changes the slider's value"],["td","(value) => void"],["td","-"],["td"]],["tr",["td","trackStyle"],["td","The style of slider track"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","handleStyle"],["td","The style of slider handle"],["td","CSSProperties"],["td","-"],["td"]]]],["h3","range"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","draggableTrack"],["td","Whether range track can be drag"],["td","boolean"],["td","false"],["td","4.10.0"]]]],["h3","tooltip"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","open"],["td","If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering"],["td","boolean"],["td","-"],["td","4.23.0"]],["tr",["td","placement"],["td","Set Tooltip display position. Ref ",["a",{title:null,href:"/components/tooltip/"},"Tooltip"]],["td","string"],["td","-"],["td","4.23.0"]],["tr",["td","getPopupContainer"],["td","The DOM container of the Tooltip, the default behavior is to create a div element in body"],["td","(triggerNode) => HTMLElement"],["td","() => document.body"],["td","4.23.0"]],["tr",["td","formatter"],["td","Slider will pass its value to ",["code","formatter"],", and display its value in Tooltip, and hide Tooltip when return value is null"],["td","value => ReactNode ","|"," null"],["td","IDENTITY"],["td","4.23.0"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"],["td"]],["tr",["td","focus()"],["td","Get focus"],["td"]]]]]}}}]);
