(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{3914:function(m,R,l){m.exports={async:l(4767),basic:l(4768),checkable:l(4769),multiple:l(4770),placement:l(4771),status:l(4772),suffix:l(4773),treeData:l(4774),treeLine:l(4775)}},4767:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u3002"]],"en-US":[["p","Asynchronous loading tree node."]]},meta:{order:5,title:{"zh-CN":"\u5F02\u6B65\u52A0\u8F7D","en-US":"Asynchronous loading"},filename:"components/tree-select/demo/async.md",id:"components-tree-select-demo-async"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { TreeSelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DefaultOptionType } from <span class="token string">'antd/es/select'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>DefaultOptionType<span class="token punctuation">,</span> <span class="token string">'label'</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    { id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> pId<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span> }<span class="token punctuation">,</span>
    { id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> pId<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span> }<span class="token punctuation">,</span>
    { id<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> pId<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> genTreeNode <span class="token operator">=</span> <span class="token punctuation">(</span>parentId<span class="token punctuation">:</span> number<span class="token punctuation">,</span> isLeaf <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    return {
      id<span class="token punctuation">:</span> random<span class="token punctuation">,</span>
      pId<span class="token punctuation">:</span> parentId<span class="token punctuation">,</span>
      value<span class="token punctuation">:</span> random<span class="token punctuation">,</span>
      title<span class="token punctuation">:</span> isLeaf <span class="token operator">?</span> <span class="token string">'Tree Node'</span> <span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
      isLeaf<span class="token punctuation">,</span>
    }<span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onLoadData<span class="token punctuation">:</span> TreeSelectProps<span class="token punctuation">[</span><span class="token string">'loadData'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>{ id }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
    new <span class="token function">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>
          treeData<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>undefined<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TreeSelect
      treeDataSimpleMode
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      value<span class="token operator">=</span>{value}
      dropdownStyle<span class="token operator">=</span>{{ maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      onChange<span class="token operator">=</span>{onChange}
      loadData<span class="token operator">=</span>{onLoadData}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> TreeSelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DefaultOptionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/select'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>DefaultOptionType<span class="token punctuation">,</span> <span class="token string">'label'</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> pId<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> pId<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> pId<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">genTreeNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span>parentId<span class="token operator">:</span> number<span class="token punctuation">,</span> isLeaf <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      id<span class="token operator">:</span> random<span class="token punctuation">,</span>
      pId<span class="token operator">:</span> parentId<span class="token punctuation">,</span>
      value<span class="token operator">:</span> random<span class="token punctuation">,</span>
      title<span class="token operator">:</span> isLeaf <span class="token operator">?</span> <span class="token string">'Tree Node'</span> <span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
      isLeaf<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onLoadData<span class="token operator">:</span> TreeSelectProps<span class="token punctuation">[</span><span class="token string">'loadData'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>
          treeData<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">treeDataSimpleMode</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">genTreeNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">parentId<span class="token punctuation">,</span> isLeaf <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> random<span class="token punctuation">,</span>
      <span class="token literal-property property">pId</span><span class="token operator">:</span> parentId<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> random<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> isLeaf <span class="token operator">?</span> <span class="token string">'Tree Node'</span> <span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
      isLeaf<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onLoadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>
          treeData<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">genTreeNode</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">treeDataSimpleMode</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(c){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(c)}var i=l(12),r=h(l(0));function g(c){if(typeof WeakMap!="function")return null;var n=new WeakMap,s=new WeakMap;return(g=function(t){return t?s:n})(c)}function h(c,n){if(!n&&c&&c.__esModule)return c;if(c===null||k(c)!=="object"&&typeof c!="function")return{default:c};var s=g(n);if(s&&s.has(c))return s.get(c);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in c)if(p!=="default"&&Object.prototype.hasOwnProperty.call(c,p)){var e=t?Object.getOwnPropertyDescriptor(c,p):null;e&&(e.get||e.set)?Object.defineProperty(a,p,e):a[p]=c[p]}return a.default=c,s&&s.set(c,a),a}function f(c,n){return C(c)||w(c,n)||b(c,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(c,n){if(!!c){if(typeof c=="string")return y(c,n);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return y(c,n)}}function y(c,n){(n==null||n>c.length)&&(n=c.length);for(var s=0,a=new Array(n);s<n;s++)a[s]=c[s];return a}function w(c,n){var s=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var a=[],t=!0,p=!1,e,o;try{for(s=s.call(c);!(t=(e=s.next()).done)&&(a.push(e.value),!(n&&a.length===n));t=!0);}catch(u){p=!0,o=u}finally{try{!t&&s.return!=null&&s.return()}finally{if(p)throw o}}return a}}function C(c){if(Array.isArray(c))return c}var A=function(){var n=(0,r.useState)(),s=f(n,2),a=s[0],t=s[1],p=(0,r.useState)([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),e=f(p,2),o=e[0],u=e[1],d=function(P){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=Math.random().toString(36).substring(2,6);return{id:O,pId:P,value:O,title:L?"Tree Node":"Expand to load",isLeaf:L}},T=function(P){var L=P.id;return new Promise(function(O){setTimeout(function(){u(o.concat([d(L,!1),d(L,!0),d(L,!0)])),O(void 0)},300)})},I=function(P){console.log(P),t(P)};return r.default.createElement(i.TreeSelect,{treeDataSimpleMode:!0,style:{width:"100%"},value:a,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",onChange:I,loadData:T,treeData:o})},D=A;return v.createElement(D)}}},4768:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/tree-select/demo/basic.md",id:"components-tree-select-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    value<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf3'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>b style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#08c'</span> }}<span class="token operator">></span>leaf3<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string | undefined<span class="token operator">></span><span class="token punctuation">(</span>undefined<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TreeSelect
      showSearch
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      value<span class="token operator">=</span>{value}
      dropdownStyle<span class="token operator">=</span>{{ maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      allowClear
      treeDefaultExpandAll
      onChange<span class="token operator">=</span>{onChange}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf3'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#08c'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>leaf3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#08c'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                leaf3
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(n){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},k(n)}var i=l(12),r=h(l(0));function g(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(g=function(p){return p?a:s})(n)}function h(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var a=g(s);if(a&&a.has(n))return a.get(n);var t={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in n)if(e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)){var o=p?Object.getOwnPropertyDescriptor(n,e):null;o&&(o.get||o.set)?Object.defineProperty(t,e,o):t[e]=n[e]}return t.default=n,a&&a.set(n,t),t}function f(n,s){return C(n)||w(n,s)||b(n,s)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,s){if(!!n){if(typeof n=="string")return y(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(n,s)}}function y(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}function w(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var t=[],p=!0,e=!1,o,u;try{for(a=a.call(n);!(p=(o=a.next()).done)&&(t.push(o.value),!(s&&t.length===s));p=!0);}catch(d){e=!0,u=d}finally{try{!p&&a.return!=null&&a.return()}finally{if(e)throw u}}return t}}function C(n){if(Array.isArray(n))return n}var A=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:r.default.createElement("b",{style:{color:"#08c"}},"leaf3")}]}]}],D=function(){var s=(0,r.useState)(void 0),a=f(s,2),t=a[0],p=a[1],e=function(u){p(u)};return r.default.createElement(i.TreeSelect,{showSearch:!0,style:{width:"100%"},value:t,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:e,treeData:A})},c=D;return v.createElement(c)}}},4769:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002"]],"en-US":[["p","Multiple and checkable."]]},meta:{order:3,title:{"zh-CN":"\u53EF\u52FE\u9009","en-US":"Checkable"},filename:"components/tree-select/demo/checkable.md",id:"components-tree-select-demo-checkable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { SHOW_PARENT } <span class="token operator">=</span> TreeSelect<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Node1'</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Child Node1'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Node2'</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Child Node3'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Child Node4'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Child Node5'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'0-1-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-1-2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange '</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> tProps <span class="token operator">=</span> {
    treeData<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    onChange<span class="token punctuation">,</span>
    treeCheckable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showCheckedStrategy<span class="token punctuation">:</span> SHOW_PARENT<span class="token punctuation">,</span>
    placeholder<span class="token punctuation">:</span> <span class="token string">'Please select'</span><span class="token punctuation">,</span>
    style<span class="token punctuation">:</span> {
      width<span class="token punctuation">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token operator">&lt;</span>TreeSelect {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>tProps} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">SHOW_PARENT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> TreeSelect<span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Node1'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Child Node1'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Node2'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Child Node3'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Child Node4'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Child Node5'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'0-1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange '</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> tProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    treeData<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    onChange<span class="token punctuation">,</span>
    treeCheckable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showCheckedStrategy<span class="token operator">:</span> <span class="token constant">SHOW_PARENT</span><span class="token punctuation">,</span>
    placeholder<span class="token operator">:</span> <span class="token string">'Please select'</span><span class="token punctuation">,</span>
    style<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>tProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">SHOW_PARENT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> TreeSelect<span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Node1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Node2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node5'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-1-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange '</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    treeData<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    onChange<span class="token punctuation">,</span>
    <span class="token literal-property property">treeCheckable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showCheckedStrategy</span><span class="token operator">:</span> <span class="token constant">SHOW_PARENT</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Please select'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>tProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(s){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k(s)}var i=l(12),r=h(l(0));function g(s){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(g=function(e){return e?t:a})(s)}function h(s,a){if(!a&&s&&s.__esModule)return s;if(s===null||k(s)!=="object"&&typeof s!="function")return{default:s};var t=g(a);if(t&&t.has(s))return t.get(s);var p={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in s)if(o!=="default"&&Object.prototype.hasOwnProperty.call(s,o)){var u=e?Object.getOwnPropertyDescriptor(s,o):null;u&&(u.get||u.set)?Object.defineProperty(p,o,u):p[o]=s[o]}return p.default=s,t&&t.set(s,p),p}function f(s,a){return C(s)||w(s,a)||b(s,a)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(s,a){if(!!s){if(typeof s=="string")return y(s,a);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(s,a)}}function y(s,a){(a==null||a>s.length)&&(a=s.length);for(var t=0,p=new Array(a);t<a;t++)p[t]=s[t];return p}function w(s,a){var t=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var p=[],e=!0,o=!1,u,d;try{for(t=t.call(s);!(e=(u=t.next()).done)&&(p.push(u.value),!(a&&p.length===a));e=!0);}catch(T){o=!0,d=T}finally{try{!e&&t.return!=null&&t.return()}finally{if(o)throw d}}return p}}function C(s){if(Array.isArray(s))return s}var A=i.TreeSelect.SHOW_PARENT,D=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0"},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}],c=function(){var a=(0,r.useState)(["0-0-0"]),t=f(a,2),p=t[0],e=t[1],o=function(T){console.log("onChange ",p),e(T)},u={treeData:D,value:p,onChange:o,treeCheckable:!0,showCheckedStrategy:A,placeholder:"Please select",style:{width:"100%"}};return r.default.createElement(i.TreeSelect,u)},n=c;return v.createElement(n)}}},4770:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u591A\u9009\u7684\u6811\u9009\u62E9\u3002"]],"en-US":[["p","Multiple selection usage."]]},meta:{order:1,title:{"zh-CN":"\u591A\u9009","en-US":"Multiple Selection"},filename:"components/tree-select/demo/multiple.md",id:"components-tree-select-demo-multiple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    value<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'my leaf'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'your leaf'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>b style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#08c'</span> }}<span class="token operator">></span>sss<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TreeSelect
      showSearch
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      value<span class="token operator">=</span>{value}
      dropdownStyle<span class="token operator">=</span>{{ maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      allowClear
      multiple
      treeDefaultExpandAll
      onChange<span class="token operator">=</span>{onChange}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'my leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'your leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#08c'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'my leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'your leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#08c'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                sss
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(n){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},k(n)}var i=l(12),r=h(l(0));function g(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(g=function(p){return p?a:s})(n)}function h(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var a=g(s);if(a&&a.has(n))return a.get(n);var t={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in n)if(e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)){var o=p?Object.getOwnPropertyDescriptor(n,e):null;o&&(o.get||o.set)?Object.defineProperty(t,e,o):t[e]=n[e]}return t.default=n,a&&a.set(n,t),t}function f(n,s){return C(n)||w(n,s)||b(n,s)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,s){if(!!n){if(typeof n=="string")return y(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(n,s)}}function y(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}function w(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var t=[],p=!0,e=!1,o,u;try{for(a=a.call(n);!(p=(o=a.next()).done)&&(t.push(o.value),!(s&&t.length===s));p=!0);}catch(d){e=!0,u=d}finally{try{!p&&a.return!=null&&a.return()}finally{if(e)throw u}}return t}}function C(n){if(Array.isArray(n))return n}var A=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"my leaf"},{value:"leaf2",title:"your leaf"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"sss",title:r.default.createElement("b",{style:{color:"#08c"}},"sss")}]}]}],D=function(){var s=(0,r.useState)(),a=f(s,2),t=a[0],p=a[1],e=function(u){console.log(u),p(u)};return r.default.createElement(i.TreeSelect,{showSearch:!0,style:{width:"100%"},value:t,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,multiple:!0,treeDefaultExpandAll:!0,onChange:e,treeData:A})},c=D;return v.createElement(c)}}},4771:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u901A\u8FC7 ",["code","placement"]," \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002"]],"en-US":[["p","You can manually specify the position of the popup via ",["code","placement"],"."]]},meta:{order:8,title:{"zh-CN":"\u5F39\u51FA\u4F4D\u7F6E","en-US":"Placement"},filename:"components/tree-select/demo/placement.md",id:"components-tree-select-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { RadioChangeEvent } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Radio<span class="token punctuation">,</span> TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectCommonPlacement } from <span class="token string">'antd/es/_util/motion'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    value<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf3'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>b style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#08c'</span> }}<span class="token operator">></span>leaf3<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>placement<span class="token punctuation">,</span> SetPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SelectCommonPlacement<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'topLeft'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> placementChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> RadioChangeEvent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">SetPlacement</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Group value<span class="token operator">=</span>{placement} onChange<span class="token operator">=</span>{placementChange}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"topLeft"</span><span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"topRight"</span><span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"bottomLeft"</span><span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"bottomRight"</span><span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Group<span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>

      <span class="token operator">&lt;</span>TreeSelect
        showSearch
        dropdownStyle<span class="token operator">=</span>{{ maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token number">300</span> }}
        placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
        dropdownMatchSelectWidth<span class="token operator">=</span>{<span class="token boolean">false</span>}
        placement<span class="token operator">=</span>{placement}
        allowClear
        treeDefaultExpandAll
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> RadioChangeEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectCommonPlacement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/_util/motion'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf3'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#08c'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>leaf3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>placement<span class="token punctuation">,</span> SetPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SelectCommonPlacement<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'topLeft'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">placementChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> RadioChangeEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">SetPlacement</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placementChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
        <span class="token attr-name">showSearch</span>
        <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span> minWidth<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
        <span class="token attr-name">dropdownMatchSelectWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span>
        <span class="token attr-name">allowClear</span>
        <span class="token attr-name">treeDefaultExpandAll</span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#08c'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                leaf3
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>placement<span class="token punctuation">,</span> SetPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'topLeft'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">placementChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">SetPlacement</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placementChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
        <span class="token attr-name">showSearch</span>
        <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
          <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
        <span class="token attr-name">dropdownMatchSelectWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span>
        <span class="token attr-name">allowClear</span>
        <span class="token attr-name">treeDefaultExpandAll</span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(n){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},k(n)}var i=l(12),r=h(l(0));function g(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(g=function(p){return p?a:s})(n)}function h(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var a=g(s);if(a&&a.has(n))return a.get(n);var t={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in n)if(e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)){var o=p?Object.getOwnPropertyDescriptor(n,e):null;o&&(o.get||o.set)?Object.defineProperty(t,e,o):t[e]=n[e]}return t.default=n,a&&a.set(n,t),t}function f(n,s){return C(n)||w(n,s)||b(n,s)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,s){if(!!n){if(typeof n=="string")return y(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(n,s)}}function y(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}function w(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var t=[],p=!0,e=!1,o,u;try{for(a=a.call(n);!(p=(o=a.next()).done)&&(t.push(o.value),!(s&&t.length===s));p=!0);}catch(d){e=!0,u=d}finally{try{!p&&a.return!=null&&a.return()}finally{if(e)throw u}}return t}}function C(n){if(Array.isArray(n))return n}var A=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:r.default.createElement("b",{style:{color:"#08c"}},"leaf3")}]}]}],D=function(){var s=(0,r.useState)("topLeft"),a=f(s,2),t=a[0],p=a[1],e=function(u){p(u.target.value)};return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.Radio.Group,{value:t,onChange:e},r.default.createElement(i.Radio.Button,{value:"topLeft"},"topLeft"),r.default.createElement(i.Radio.Button,{value:"topRight"},"topRight"),r.default.createElement(i.Radio.Button,{value:"bottomLeft"},"bottomLeft"),r.default.createElement(i.Radio.Button,{value:"bottomRight"},"bottomRight")),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(i.TreeSelect,{showSearch:!0,dropdownStyle:{maxHeight:400,overflow:"auto",minWidth:300},placeholder:"Please select",dropdownMatchSelectWidth:!1,placement:t,allowClear:!0,treeDefaultExpandAll:!0,treeData:A}))},c=D;return v.createElement(c)}}},4772:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","status"]," \u4E3A TreeSelect \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 ",["code","error"]," \u6216\u8005 ",["code","warning"],"\u3002"]],"en-US":[["p","Add status to TreeSelect with ",["code","status"],", which could be ",["code","error"]," or ",["code","warning"],"."]]},meta:{order:9,version:"4.19.0",title:{"zh-CN":"\u81EA\u5B9A\u4E49\u72B6\u6001","en-US":"Status"},filename:"components/tree-select/demo/status.md",id:"components-tree-select-demo-status"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Space<span class="token punctuation">,</span> TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>TreeSelect status<span class="token operator">=</span><span class="token string">"error"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }} placeholder<span class="token operator">=</span><span class="token string">"Error"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>TreeSelect
      status<span class="token operator">=</span><span class="token string">"warning"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      multiple
      placeholder<span class="token operator">=</span><span class="token string">"Warning multiple"</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Error<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Warning multiple<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Error<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Warning multiple<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51),k=l(12),i=r(l(0));function r(f){return f&&f.__esModule?f:{default:f}}var g=function(){return i.default.createElement(k.Space,{direction:"vertical",style:{width:"100%"}},i.default.createElement(k.TreeSelect,{status:"error",style:{width:"100%"},placeholder:"Error"}),i.default.createElement(k.TreeSelect,{status:"warning",style:{width:"100%"},multiple:!0,placeholder:"Warning multiple"}))},h=g;return v.createElement(h)}}},4773:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:12,debug:!0,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},filename:"components/tree-select/demo/suffix.md",id:"components-tree-select-demo-suffix"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { SmileOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    value<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'my leaf'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'your leaf'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>b style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#08c'</span> }}<span class="token operator">></span>sss<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TreeSelect
      showSearch
      suffixIcon<span class="token operator">=</span>{icon}
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      value<span class="token operator">=</span>{value}
      dropdownStyle<span class="token operator">=</span>{{ maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      allowClear
      treeDefaultExpandAll
      onChange<span class="token operator">=</span>{onChange}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'my leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'your leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#08c'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'my leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'your leaf'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#08c'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                sss
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>icon<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(a){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(a)}var i=l(61),r=l(12),g=f(l(0));function h(a){if(typeof WeakMap!="function")return null;var t=new WeakMap,p=new WeakMap;return(h=function(o){return o?p:t})(a)}function f(a,t){if(!t&&a&&a.__esModule)return a;if(a===null||k(a)!=="object"&&typeof a!="function")return{default:a};var p=h(t);if(p&&p.has(a))return p.get(a);var e={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in a)if(u!=="default"&&Object.prototype.hasOwnProperty.call(a,u)){var d=o?Object.getOwnPropertyDescriptor(a,u):null;d&&(d.get||d.set)?Object.defineProperty(e,u,d):e[u]=a[u]}return e.default=a,p&&p.set(a,e),e}function S(a,t){return A(a)||C(a,t)||y(a,t)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(a,t){if(!!a){if(typeof a=="string")return w(a,t);var p=Object.prototype.toString.call(a).slice(8,-1);if(p==="Object"&&a.constructor&&(p=a.constructor.name),p==="Map"||p==="Set")return Array.from(a);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return w(a,t)}}function w(a,t){(t==null||t>a.length)&&(t=a.length);for(var p=0,e=new Array(t);p<t;p++)e[p]=a[p];return e}function C(a,t){var p=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(p!=null){var e=[],o=!0,u=!1,d,T;try{for(p=p.call(a);!(o=(d=p.next()).done)&&(e.push(d.value),!(t&&e.length===t));o=!0);}catch(I){u=!0,T=I}finally{try{!o&&p.return!=null&&p.return()}finally{if(u)throw T}}return e}}function A(a){if(Array.isArray(a))return a}var D=g.default.createElement(i.SmileOutlined,null),c=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"my leaf"},{value:"leaf2",title:"your leaf"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"sss",title:g.default.createElement("b",{style:{color:"#08c"}},"sss")}]}]}],n=function(){var t=(0,g.useState)(),p=S(t,2),e=p[0],o=p[1],u=function(T){console.log(T),o(T)};return g.default.createElement(r.TreeSelect,{showSearch:!0,suffixIcon:D,style:{width:"100%"},value:e,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:u,treeData:c})},s=n;return v.createElement(s)}}},4774:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","treeData"]," \u628A JSON \u6570\u636E\u76F4\u63A5\u751F\u6210\u6811\u7ED3\u6784\u3002"]],"en-US":[["p","The tree structure can be populated using ",["code","treeData"]," property. This is a quick and easy way to provide the tree content."]]},meta:{order:2,title:{"zh-CN":"\u4ECE\u6570\u636E\u76F4\u63A5\u751F\u6210","en-US":"Generate from tree data"},filename:"components/tree-select/demo/treeData.md",id:"components-tree-select-demo-treeData"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Node1'</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Child Node1'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Child Node2'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Node2'</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TreeSelect
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      value<span class="token operator">=</span>{value}
      dropdownStyle<span class="token operator">=</span>{{ maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span> }}
      treeData<span class="token operator">=</span>{treeData}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      treeDefaultExpandAll
      onChange<span class="token operator">=</span>{onChange}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Node1'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Child Node1'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Child Node2'</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Node2'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Node1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Node2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">treeDefaultExpandAll</span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(n){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},k(n)}var i=l(12),r=h(l(0));function g(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(g=function(p){return p?a:s})(n)}function h(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var a=g(s);if(a&&a.has(n))return a.get(n);var t={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in n)if(e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)){var o=p?Object.getOwnPropertyDescriptor(n,e):null;o&&(o.get||o.set)?Object.defineProperty(t,e,o):t[e]=n[e]}return t.default=n,a&&a.set(n,t),t}function f(n,s){return C(n)||w(n,s)||b(n,s)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,s){if(!!n){if(typeof n=="string")return y(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(n,s)}}function y(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}function w(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var t=[],p=!0,e=!1,o,u;try{for(a=a.call(n);!(p=(o=a.next()).done)&&(t.push(o.value),!(s&&t.length===s));p=!0);}catch(d){e=!0,u=d}finally{try{!p&&a.return!=null&&a.return()}finally{if(e)throw u}}return t}}function C(n){if(Array.isArray(n))return n}var A=[{title:"Node1",value:"0-0",children:[{title:"Child Node1",value:"0-0-1"},{title:"Child Node2",value:"0-0-2"}]},{title:"Node2",value:"0-1"}],D=function(){var s=(0,r.useState)(),a=f(s,2),t=a[0],p=a[1],e=function(u){console.log(u),p(u)};return r.default.createElement(i.TreeSelect,{style:{width:"100%"},value:t,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:A,placeholder:"Please select",treeDefaultExpandAll:!0,onChange:e})},c=D;return v.createElement(c)}}},4775:function(m,R,l){m.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","treeLine"]," \u914D\u7F6E\u7EBF\u6027\u6837\u5F0F\u3002"]],"en-US":[["p","Use ",["code","treeLine"]," to show the line style."]]},meta:{order:6,title:{"zh-CN":"\u7EBF\u6027\u6837\u5F0F","en-US":"Show Tree Line"},filename:"components/tree-select/demo/treeLine.md",id:"components-tree-select-demo-treeLine"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Space<span class="token punctuation">,</span> <span class="token keyword">Switch</span><span class="token punctuation">,</span> TreeSelect } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    value<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeLine<span class="token punctuation">,</span> setTreeLine<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Switch</span>
        checkedChildren<span class="token operator">=</span><span class="token string">"treeLine"</span>
        unCheckedChildren<span class="token operator">=</span><span class="token string">"treeLine"</span>
        checked<span class="token operator">=</span>{treeLine}
        onChange<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setTreeLine</span><span class="token punctuation">(</span>!treeLine<span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Switch</span>
        disabled<span class="token operator">=</span>{!treeLine}
        checkedChildren<span class="token operator">=</span><span class="token string">"showLeafIcon"</span>
        unCheckedChildren<span class="token operator">=</span><span class="token string">"showLeafIcon"</span>
        checked<span class="token operator">=</span>{showLeafIcon}
        onChange<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>!showLeafIcon<span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TreeSelect
        treeLine<span class="token operator">=</span>{treeLine <span class="token operator">&amp;</span><span class="token operator">&amp;</span> { showLeafIcon }}
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">300</span> }}
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeLine<span class="token punctuation">,</span> setTreeLine<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>
        <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>treeLine<span class="token punctuation">"</span></span>
        <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>treeLine<span class="token punctuation">"</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTreeLine</span><span class="token punctuation">(</span><span class="token operator">!</span>treeLine<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>
        <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>treeLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showLeafIcon<span class="token punctuation">"</span></span>
        <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showLeafIcon<span class="token punctuation">"</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token operator">!</span>showLeafIcon<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
        <span class="token attr-name">treeLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeLine <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'sss'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeLine<span class="token punctuation">,</span> setTreeLine<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>
        <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>treeLine<span class="token punctuation">"</span></span>
        <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>treeLine<span class="token punctuation">"</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTreeLine</span><span class="token punctuation">(</span><span class="token operator">!</span>treeLine<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>
        <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>treeLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showLeafIcon<span class="token punctuation">"</span></span>
        <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showLeafIcon<span class="token punctuation">"</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token operator">!</span>showLeafIcon<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span>
        <span class="token attr-name">treeLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          treeLine <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span>
            showLeafIcon<span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var v=l(0),N=l(51);function k(n){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},k(n)}var i=l(12),r=h(l(0));function g(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(g=function(p){return p?a:s})(n)}function h(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||k(n)!=="object"&&typeof n!="function")return{default:n};var a=g(s);if(a&&a.has(n))return a.get(n);var t={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in n)if(e!=="default"&&Object.prototype.hasOwnProperty.call(n,e)){var o=p?Object.getOwnPropertyDescriptor(n,e):null;o&&(o.get||o.set)?Object.defineProperty(t,e,o):t[e]=n[e]}return t.default=n,a&&a.set(n,t),t}function f(n,s){return C(n)||w(n,s)||b(n,s)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(n,s){if(!!n){if(typeof n=="string")return y(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(n,s)}}function y(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}function w(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var t=[],p=!0,e=!1,o,u;try{for(a=a.call(n);!(p=(o=a.next()).done)&&(t.push(o.value),!(s&&t.length===s));p=!0);}catch(d){e=!0,u=d}finally{try{!p&&a.return!=null&&a.return()}finally{if(e)throw u}}return t}}function C(n){if(Array.isArray(n))return n}var A=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"sss",title:"sss"}]}]}],D=function(){var s=(0,r.useState)(!0),a=f(s,2),t=a[0],p=a[1],e=(0,r.useState)(!1),o=f(e,2),u=o[0],d=o[1];return r.default.createElement(i.Space,{direction:"vertical"},r.default.createElement(i.Switch,{checkedChildren:"treeLine",unCheckedChildren:"treeLine",checked:t,onChange:function(){return p(!t)}}),r.default.createElement(i.Switch,{disabled:!t,checkedChildren:"showLeafIcon",unCheckedChildren:"showLeafIcon",checked:u,onChange:function(){return d(!u)}}),r.default.createElement(i.TreeSelect,{treeLine:t&&{showLeafIcon:u},style:{width:300},treeData:A}))},c=D;return v.createElement(c)}}}}]);
