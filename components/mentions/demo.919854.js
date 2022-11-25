(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{3827:function(x,L,c){x.exports={async:c(4416),autoSize:c(4417),basic:c(4418),form:c(4419),placement:c(4420),prefix:c(4421),readonly:c(4422),status:c(4423)}},4416:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u5339\u914D\u5185\u5BB9\u5217\u8868\u4E3A\u5F02\u6B65\u8FD4\u56DE\u65F6\u3002"]],"en-US":[["p","async"]]},meta:{order:1,title:{"zh-CN":"\u5F02\u6B65\u52A0\u8F7D","en-US":"Asynchronous loading"},filename:"components/mentions/demo/async.md",id:"components-mentions-demo-async"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useCallback<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import debounce from <span class="token string">'lodash/debounce'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>{ login<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">; avatar_url: string }[]>([]);</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> loadGithubUsers <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>!key<span class="token punctuation">)</span> {
      <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      return<span class="token comment" spellcheck="true">;</span>
    }

    <span class="token function">fetch</span><span class="token punctuation">(</span>\`https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>search<span class="token operator">/</span>users<span class="token operator">?</span>q<span class="token operator">=</span>\${key}\`<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>{ items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ref<span class="token punctuation">.</span>current !<span class="token operator">==</span> key<span class="token punctuation">)</span> return<span class="token comment" spellcheck="true">;</span>

        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token function">setUsers</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> debounceLoadGithubUsers <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token function">debounce</span><span class="token punctuation">(</span>loadGithubUsers<span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSearch <span class="token operator">=</span> <span class="token punctuation">(</span>search<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Search:'</span><span class="token punctuation">,</span> search<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    ref<span class="token punctuation">.</span>current <span class="token operator">=</span> search<span class="token comment" spellcheck="true">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span>!!search<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token function">debounceLoadGithubUsers</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Mentions
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      loading<span class="token operator">=</span>{loading}
      onSearch<span class="token operator">=</span>{onSearch}
      options<span class="token operator">=</span>{users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>{ login<span class="token punctuation">,</span> avatar_url<span class="token punctuation">:</span> avatar }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
        key<span class="token punctuation">:</span> login<span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> login<span class="token punctuation">,</span>
        className<span class="token punctuation">:</span> <span class="token string">'antd-demo-dynamic-option'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;></span>
            <span class="token operator">&lt;</span>img src<span class="token operator">=</span>{avatar} alt<span class="token operator">=</span>{login} <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>{login}<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'lodash/debounce'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span><span class="token punctuation">{</span> login<span class="token operator">:</span> string<span class="token punctuation">;</span> avatar_url<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">loadGithubUsers</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.github.com/search/users?q=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ref<span class="token punctuation">.</span>current <span class="token operator">!==</span> key<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setUsers</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> debounceLoadGithubUsers <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token function">debounce</span><span class="token punctuation">(</span>loadGithubUsers<span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>search<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Search:'</span><span class="token punctuation">,</span> search<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ref<span class="token punctuation">.</span>current <span class="token operator">=</span> search<span class="token punctuation">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">debounceLoadGithubUsers</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> login<span class="token punctuation">,</span> avatar_url<span class="token operator">:</span> avatar <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        key<span class="token operator">:</span> login<span class="token punctuation">,</span>
        value<span class="token operator">:</span> login<span class="token punctuation">,</span>
        className<span class="token operator">:</span> <span class="token string">'antd-demo-dynamic-option'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>avatar<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>login<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>login<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'lodash/debounce'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">loadGithubUsers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.github.com/search/users?q=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ref<span class="token punctuation">.</span>current <span class="token operator">!==</span> key<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setUsers</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> debounceLoadGithubUsers <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token function">debounce</span><span class="token punctuation">(</span>loadGithubUsers<span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">search</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Search:'</span><span class="token punctuation">,</span> search<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ref<span class="token punctuation">.</span>current <span class="token operator">=</span> search<span class="token punctuation">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">debounceLoadGithubUsers</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> login<span class="token punctuation">,</span> <span class="token literal-property property">avatar_url</span><span class="token operator">:</span> avatar <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> login<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> login<span class="token punctuation">,</span>
        <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'antd-demo-dynamic-option'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>avatar<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>login<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>login<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51);function d(a){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(a)}var m=z(c(0)),w=c(12),R=A(c(157));function A(a){return a&&a.__esModule?a:{default:a}}function v(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,p=new WeakMap;return(v=function(k){return k?p:n})(a)}function z(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||d(a)!=="object"&&typeof a!="function")return{default:a};var p=v(n);if(p&&p.has(a))return p.get(a);var e={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if(g!=="default"&&Object.prototype.hasOwnProperty.call(a,g)){var f=k?Object.getOwnPropertyDescriptor(a,g):null;f&&(f.get||f.set)?Object.defineProperty(e,g,f):e[g]=a[g]}return e.default=a,p&&p.set(a,e),e}function F(a,n){return H(a)||Y(a,n)||E(a,n)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(a,n){if(!!a){if(typeof a=="string")return B(a,n);var p=Object.prototype.toString.call(a).slice(8,-1);if(p==="Object"&&a.constructor&&(p=a.constructor.name),p==="Map"||p==="Set")return Array.from(a);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return B(a,n)}}function B(a,n){(n==null||n>a.length)&&(n=a.length);for(var p=0,e=new Array(n);p<n;p++)e[p]=a[p];return e}function Y(a,n){var p=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(p!=null){var e=[],k=!0,g=!1,f,C;try{for(p=p.call(a);!(k=(f=p.next()).done)&&(e.push(f.value),!(n&&e.length===n));k=!0);}catch(b){g=!0,C=b}finally{try{!k&&p.return!=null&&p.return()}finally{if(g)throw C}}return e}}function H(a){if(Array.isArray(a))return a}var Q=function(){var n=(0,m.useState)(!1),p=F(n,2),e=p[0],k=p[1],g=(0,m.useState)([]),f=F(g,2),C=f[0],b=f[1],y=(0,m.useRef)(),T=function(S){if(!S){b([]);return}fetch("https://api.github.com/search/users?q=".concat(S)).then(function(P){return P.json()}).then(function(P){var $=P.items,X=$===void 0?[]:$;y.current===S&&(k(!1),b(X.slice(0,10)))})},I=(0,m.useCallback)((0,R.default)(T,800),[]),h=function(S){console.log("Search:",S),y.current=S,k(!!S),b([]),I(S)};return m.default.createElement(w.Mentions,{style:{width:"100%"},loading:e,onSearch:h,options:C.map(function(J){var S=J.login,P=J.avatar_url;return{key:S,value:S,className:"antd-demo-dynamic-option",label:m.default.createElement(m.default.Fragment,null,m.default.createElement("img",{src:P,alt:S}),m.default.createElement("span",null,S))}})})},l=Q;return j.createElement(l)},style:`
.antd-demo-dynamic-option img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
`}},4417:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\u3002"]],"en-US":[["p","Height autoSize."]]},meta:{order:6,title:{"zh-CN":"\u81EA\u52A8\u5927\u5C0F","en-US":"autoSize"},filename:"components/mentions/demo/autoSize.md",id:"components-mentions-demo-autoSize"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Mentions
    autoSize
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
    <span class="token attr-name">autoSize</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
    <span class="token attr-name">autoSize</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51),d=w(c(0)),m=c(12);function w(v){return v&&v.__esModule?v:{default:v}}var R=function(){return d.default.createElement(m.Mentions,{autoSize:!0,style:{width:"100%"},options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})},A=R;return j.createElement(A)}}},4418:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u57FA\u672C\u4F7F\u7528\u3002"]],"en-US":[["p","Basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic"},filename:"components/mentions/demo/basic.md",id:"components-mentions-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { MentionsOptionProps } from <span class="token string">'antd/es/mentions'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Change:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token punctuation">:</span> MentionsOptionProps<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Mentions
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    onChange<span class="token operator">=</span>{onChange}
    onSelect<span class="token operator">=</span>{onSelect}
    defaultValue<span class="token operator">=</span><span class="token string">"@afc163"</span>
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MentionsOptionProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/mentions'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Change:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token operator">:</span> MentionsOptionProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
    <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@afc163<span class="token punctuation">"</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Change:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
    <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@afc163<span class="token punctuation">"</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51),d=w(c(0)),m=c(12);function w(F){return F&&F.__esModule?F:{default:F}}var R=function(O){console.log("Change:",O)},A=function(O){console.log("select",O)},v=function(){return d.default.createElement(m.Mentions,{style:{width:"100%"},onChange:R,onSelect:A,defaultValue:"@afc163",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})},z=v;return j.createElement(z)}}},4419:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u53D7\u63A7\u6A21\u5F0F\uFF0C\u4F8B\u5982\u914D\u5408 Form \u4F7F\u7528\u3002"]],"en-US":[["p","Controlled mode, for example, to work with ",["code","Form"],"."]]},meta:{order:2,title:{"zh-CN":"\u914D\u5408 Form \u4F7F\u7528","en-US":"With Form"},filename:"components/mentions/demo/form.md",id:"components-mentions-demo-form"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { getMentions } <span class="token operator">=</span> Mentions<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onReset <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    form<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onFinish <span class="token operator">=</span> async <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    try {
      <span class="token keyword">const</span> values <span class="token operator">=</span> await form<span class="token punctuation">.</span><span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Submit:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } catch <span class="token punctuation">(</span>errInfo<span class="token punctuation">)</span> {
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> errInfo<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> checkMention <span class="token operator">=</span> async <span class="token punctuation">(</span>_<span class="token punctuation">:</span> any<span class="token punctuation">,</span> value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> mentions <span class="token operator">=</span> <span class="token function">getMentions</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>mentions<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> {
      throw new <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">'More than one must be selected!'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Form form<span class="token operator">=</span>{form} layout<span class="token operator">=</span><span class="token string">"horizontal"</span> onFinish<span class="token operator">=</span>{onFinish}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item
        name<span class="token operator">=</span><span class="token string">"coders"</span>
        label<span class="token operator">=</span><span class="token string">"Top coders"</span>
        labelCol<span class="token operator">=</span>{{ span<span class="token punctuation">:</span> <span class="token number">6</span> }}
        wrapperCol<span class="token operator">=</span>{{ span<span class="token punctuation">:</span> <span class="token number">16</span> }}
        rules<span class="token operator">=</span>{<span class="token punctuation">[</span>{ validator<span class="token punctuation">:</span> checkMention }<span class="token punctuation">]</span>}
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>Mentions
          rows<span class="token operator">=</span>{<span class="token number">1</span>}
          options<span class="token operator">=</span>{<span class="token punctuation">[</span>
            {
              value<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
            {
              value<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
            {
              value<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
          <span class="token punctuation">]</span>}
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">></span>
      <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item
        name<span class="token operator">=</span><span class="token string">"bio"</span>
        label<span class="token operator">=</span><span class="token string">"Bio"</span>
        labelCol<span class="token operator">=</span>{{ span<span class="token punctuation">:</span> <span class="token number">6</span> }}
        wrapperCol<span class="token operator">=</span>{{ span<span class="token punctuation">:</span> <span class="token number">16</span> }}
        rules<span class="token operator">=</span>{<span class="token punctuation">[</span>{ required<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">]</span>}
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>Mentions
          rows<span class="token operator">=</span>{<span class="token number">3</span>}
          placeholder<span class="token operator">=</span><span class="token string">"You can use @ to ref user here"</span>
          options<span class="token operator">=</span>{<span class="token punctuation">[</span>
            {
              value<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
            {
              value<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
            {
              value<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
          <span class="token punctuation">]</span>}
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">></span>
      <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item wrapperCol<span class="token operator">=</span>{{ span<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span> offset<span class="token punctuation">:</span> <span class="token number">6</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Button htmlType<span class="token operator">=</span><span class="token string">"submit"</span> type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>
          Submit
        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token operator">&amp;</span>nbsp<span class="token comment" spellcheck="true">;&amp;nbsp;&amp;nbsp;</span>
        <span class="token operator">&lt;</span>Button htmlType<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span>{onReset}<span class="token operator">></span>
          Reset
        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> getMentions <span class="token punctuation">}</span> <span class="token operator">=</span> Mentions<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    form<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onFinish</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token keyword">await</span> form<span class="token punctuation">.</span><span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Submit:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>errInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> errInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">checkMention</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>_<span class="token operator">:</span> any<span class="token punctuation">,</span> value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mentions <span class="token operator">=</span> <span class="token function">getMentions</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>mentions<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'More than one must be selected!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>coders<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Top coders<span class="token punctuation">"</span></span>
        <span class="token attr-name">labelCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> span<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">wrapperCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> span<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> validator<span class="token operator">:</span> checkMention <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
          <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bio<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Bio<span class="token punctuation">"</span></span>
        <span class="token attr-name">labelCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> span<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">wrapperCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> span<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
          <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>You can use @ to ref user here<span class="token punctuation">"</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">wrapperCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> span<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> offset<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Submit
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onReset<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          Reset
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> getMentions <span class="token punctuation">}</span> <span class="token operator">=</span> Mentions<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    form<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onFinish</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token keyword">await</span> form<span class="token punctuation">.</span><span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Submit:'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>errInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> errInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">checkMention</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mentions <span class="token operator">=</span> <span class="token function">getMentions</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mentions<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'More than one must be selected!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>coders<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Top coders<span class="token punctuation">"</span></span>
        <span class="token attr-name">labelCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">wrapperCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">validator</span><span class="token operator">:</span> checkMention<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
          <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bio<span class="token punctuation">"</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Bio<span class="token punctuation">"</span></span>
        <span class="token attr-name">labelCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">wrapperCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
          <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>You can use @ to ref user here<span class="token punctuation">"</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span>
        <span class="token attr-name">wrapperCol</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
          <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Submit
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">htmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onReset<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          Reset
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51);function d(n){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},d(n)}var m=R(c(0)),w=c(12);function R(n){return n&&n.__esModule?n:{default:n}}function A(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */A=function(){return n};var n={},p=Object.prototype,e=p.hasOwnProperty,k=Object.defineProperty||function(o,s,t){o[s]=t.value},g=typeof Symbol=="function"?Symbol:{},f=g.iterator||"@@iterator",C=g.asyncIterator||"@@asyncIterator",b=g.toStringTag||"@@toStringTag";function y(o,s,t){return Object.defineProperty(o,s,{value:t,enumerable:!0,configurable:!0,writable:!0}),o[s]}try{y({},"")}catch(o){y=function(t,u,i){return t[u]=i}}function T(o,s,t,u){var i=s&&s.prototype instanceof J?s:J,r=Object.create(i.prototype),M=new sn(u||[]);return k(r,"_invoke",{value:en(o,t,M)}),r}function I(o,s,t){try{return{type:"normal",arg:o.call(s,t)}}catch(u){return{type:"throw",arg:u}}}n.wrap=T;var h={};function J(){}function S(){}function P(){}var $={};y($,f,function(){return this});var X=Object.getPrototypeOf,Z=X&&X(X(an([])));Z&&Z!==p&&e.call(Z,f)&&($=Z);var K=P.prototype=J.prototype=Object.create($);function tn(o){["next","throw","return"].forEach(function(s){y(o,s,function(t){return this._invoke(s,t)})})}function _(o,s){function t(i,r,M,N){var U=I(o[i],o,r);if(U.type!=="throw"){var W=U.arg,q=W.value;return q&&d(q)=="object"&&e.call(q,"__await")?s.resolve(q.__await).then(function(V){t("next",V,M,N)},function(V){t("throw",V,M,N)}):s.resolve(q).then(function(V){W.value=V,M(W)},function(V){return t("throw",V,M,N)})}N(U.arg)}var u;k(this,"_invoke",{value:function(r,M){function N(){return new s(function(U,W){t(r,M,U,W)})}return u=u?u.then(N,N):N()}})}function en(o,s,t){var u="suspendedStart";return function(i,r){if(u==="executing")throw new Error("Generator is already running");if(u==="completed"){if(i==="throw")throw r;return on()}for(t.method=i,t.arg=r;;){var M=t.delegate;if(M){var N=pn(M,t);if(N){if(N===h)continue;return N}}if(t.method==="next")t.sent=t._sent=t.arg;else if(t.method==="throw"){if(u==="suspendedStart")throw u="completed",t.arg;t.dispatchException(t.arg)}else t.method==="return"&&t.abrupt("return",t.arg);u="executing";var U=I(o,s,t);if(U.type==="normal"){if(u=t.done?"completed":"suspendedYield",U.arg===h)continue;return{value:U.arg,done:t.done}}U.type==="throw"&&(u="completed",t.method="throw",t.arg=U.arg)}}}function pn(o,s){var t=o.iterator[s.method];if(t===void 0){if(s.delegate=null,s.method==="throw"){if(o.iterator.return&&(s.method="return",s.arg=void 0,pn(o,s),s.method==="throw"))return h;s.method="throw",s.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var u=I(t,o.iterator,s.arg);if(u.type==="throw")return s.method="throw",s.arg=u.arg,s.delegate=null,h;var i=u.arg;return i?i.done?(s[o.resultName]=i.value,s.next=o.nextLoc,s.method!=="return"&&(s.method="next",s.arg=void 0),s.delegate=null,h):i:(s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,h)}function cn(o){var s={tryLoc:o[0]};1 in o&&(s.catchLoc=o[1]),2 in o&&(s.finallyLoc=o[2],s.afterLoc=o[3]),this.tryEntries.push(s)}function nn(o){var s=o.completion||{};s.type="normal",delete s.arg,o.completion=s}function sn(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(cn,this),this.reset(!0)}function an(o){if(o){var s=o[f];if(s)return s.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var t=-1,u=function i(){for(;++t<o.length;)if(e.call(o,t))return i.value=o[t],i.done=!1,i;return i.value=void 0,i.done=!0,i};return u.next=u}}return{next:on}}function on(){return{value:void 0,done:!0}}return S.prototype=P,k(K,"constructor",{value:P,configurable:!0}),k(P,"constructor",{value:S,configurable:!0}),S.displayName=y(P,b,"GeneratorFunction"),n.isGeneratorFunction=function(o){var s=typeof o=="function"&&o.constructor;return!!s&&(s===S||(s.displayName||s.name)==="GeneratorFunction")},n.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,P):(o.__proto__=P,y(o,b,"GeneratorFunction")),o.prototype=Object.create(K),o},n.awrap=function(o){return{__await:o}},tn(_.prototype),y(_.prototype,C,function(){return this}),n.AsyncIterator=_,n.async=function(o,s,t,u,i){i===void 0&&(i=Promise);var r=new _(T(o,s,t,u),i);return n.isGeneratorFunction(s)?r:r.next().then(function(M){return M.done?M.value:r.next()})},tn(K),y(K,b,"Generator"),y(K,f,function(){return this}),y(K,"toString",function(){return"[object Generator]"}),n.keys=function(o){var s=Object(o),t=[];for(var u in s)t.push(u);return t.reverse(),function i(){for(;t.length;){var r=t.pop();if(r in s)return i.value=r,i.done=!1,i}return i.done=!0,i}},n.values=an,sn.prototype={constructor:sn,reset:function(s){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(nn),!s)for(var t in this)t.charAt(0)==="t"&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var s=this.tryEntries[0].completion;if(s.type==="throw")throw s.arg;return this.rval},dispatchException:function(s){if(this.done)throw s;var t=this;function u(W,q){return M.type="throw",M.arg=s,t.next=W,q&&(t.method="next",t.arg=void 0),!!q}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],M=r.completion;if(r.tryLoc==="root")return u("end");if(r.tryLoc<=this.prev){var N=e.call(r,"catchLoc"),U=e.call(r,"finallyLoc");if(N&&U){if(this.prev<r.catchLoc)return u(r.catchLoc,!0);if(this.prev<r.finallyLoc)return u(r.finallyLoc)}else if(N){if(this.prev<r.catchLoc)return u(r.catchLoc,!0)}else{if(!U)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return u(r.finallyLoc)}}}},abrupt:function(s,t){for(var u=this.tryEntries.length-1;u>=0;--u){var i=this.tryEntries[u];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&(s==="break"||s==="continue")&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var M=r?r.completion:{};return M.type=s,M.arg=t,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(M)},complete:function(s,t){if(s.type==="throw")throw s.arg;return s.type==="break"||s.type==="continue"?this.next=s.arg:s.type==="return"?(this.rval=this.arg=s.arg,this.method="return",this.next="end"):s.type==="normal"&&t&&(this.next=t),h},finish:function(s){for(var t=this.tryEntries.length-1;t>=0;--t){var u=this.tryEntries[t];if(u.finallyLoc===s)return this.complete(u.completion,u.afterLoc),nn(u),h}},catch:function(s){for(var t=this.tryEntries.length-1;t>=0;--t){var u=this.tryEntries[t];if(u.tryLoc===s){var i=u.completion;if(i.type==="throw"){var r=i.arg;nn(u)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(s,t,u){return this.delegate={iterator:an(s),resultName:t,nextLoc:u},this.method==="next"&&(this.arg=void 0),h}},n}function v(n,p,e,k,g,f,C){try{var b=n[f](C),y=b.value}catch(T){e(T);return}b.done?p(y):Promise.resolve(y).then(k,g)}function z(n){return function(){var p=this,e=arguments;return new Promise(function(k,g){var f=n.apply(p,e);function C(y){v(f,k,g,C,b,"next",y)}function b(y){v(f,k,g,C,b,"throw",y)}C(void 0)})}}function F(n,p){return H(n)||Y(n,p)||E(n,p)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(n,p){if(!!n){if(typeof n=="string")return B(n,p);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return B(n,p)}}function B(n,p){(p==null||p>n.length)&&(p=n.length);for(var e=0,k=new Array(p);e<p;e++)k[e]=n[e];return k}function Y(n,p){var e=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var k=[],g=!0,f=!1,C,b;try{for(e=e.call(n);!(g=(C=e.next()).done)&&(k.push(C.value),!(p&&k.length===p));g=!0);}catch(y){f=!0,b=y}finally{try{!g&&e.return!=null&&e.return()}finally{if(f)throw b}}return k}}function H(n){if(Array.isArray(n))return n}var Q=w.Mentions.getMentions,l=function(){var p=w.Form.useForm(),e=F(p,1),k=e[0],g=function(){k.resetFields()},f=function(){var b=z(A().mark(function y(){var T;return A().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,h.next=3,k.validateFields();case 3:T=h.sent,console.log("Submit:",T),h.next=10;break;case 7:h.prev=7,h.t0=h.catch(0),console.log("Error:",h.t0);case 10:case"end":return h.stop()}},y,null,[[0,7]])}));return function(){return b.apply(this,arguments)}}(),C=function(){var b=z(A().mark(function y(T,I){var h;return A().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(h=Q(I),!(h.length<2)){S.next=3;break}throw new Error("More than one must be selected!");case 3:case"end":return S.stop()}},y)}));return function(T,I){return b.apply(this,arguments)}}();return m.default.createElement(w.Form,{form:k,layout:"horizontal",onFinish:f},m.default.createElement(w.Form.Item,{name:"coders",label:"Top coders",labelCol:{span:6},wrapperCol:{span:16},rules:[{validator:C}]},m.default.createElement(w.Mentions,{rows:1,options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})),m.default.createElement(w.Form.Item,{name:"bio",label:"Bio",labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0}]},m.default.createElement(w.Mentions,{rows:3,placeholder:"You can use @ to ref user here",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})),m.default.createElement(w.Form.Item,{wrapperCol:{span:14,offset:6}},m.default.createElement(w.Button,{htmlType:"submit",type:"primary"},"Submit"),"\xA0\xA0\xA0",m.default.createElement(w.Button,{htmlType:"button",onClick:g},"Reset")))},a=l;return j.createElement(a)}}},4420:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u5411\u4E0A\u5C55\u5F00\u5EFA\u8BAE\u3002"]],"en-US":[["p","Change the suggestions placement."]]},meta:{order:5,title:{"zh-CN":"\u5411\u4E0A\u5C55\u5F00","en-US":"Placement"},filename:"components/mentions/demo/placement.md",id:"components-mentions-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Mentions
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    placement<span class="token operator">=</span><span class="token string">"top"</span>
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'afc163'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'zombieJ'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yesmeck'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51),d=w(c(0)),m=c(12);function w(v){return v&&v.__esModule?v:{default:v}}var R=function(){return d.default.createElement(m.Mentions,{style:{width:"100%"},placement:"top",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})},A=R;return j.createElement(A)}}},4421:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","prefix"]," \u5C5E\u6027\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26\u3002\u9ED8\u8BA4\u4E3A ",["code","@"],", \u53EF\u4EE5\u5B9A\u4E49\u4E3A\u6570\u7EC4\u3002"]],"en-US":[["p","Customize Trigger Token by ",["code","prefix"]," props. Default to ",["code","@"],", ",["code","Array<string>"]," also supported."]]},meta:{order:3,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26","en-US":"Customize Trigger Token"},filename:"components/mentions/demo/prefix.md",id:"components-mentions-demo-prefix"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> MOCK_DATA <span class="token operator">=</span> {
  <span class="token string">'@'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'afc163'</span><span class="token punctuation">,</span> <span class="token string">'zombiej'</span><span class="token punctuation">,</span> <span class="token string">'yesmeck'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">'#'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'1.0'</span><span class="token punctuation">,</span> <span class="token string">'2.0'</span><span class="token punctuation">,</span> <span class="token string">'3.0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
}<span class="token comment" spellcheck="true">;</span>

type PrefixType <span class="token operator">=</span> keyof typeof MOCK_DATA<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>prefix<span class="token punctuation">,</span> setPrefix<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>PrefixType<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSearch <span class="token operator">=</span> <span class="token punctuation">(</span>_<span class="token punctuation">:</span> string<span class="token punctuation">,</span> newPrefix<span class="token punctuation">:</span> PrefixType<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setPrefix</span><span class="token punctuation">(</span>newPrefix<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Mentions
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"input @ to mention people, # to mention tag"</span>
      prefix<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'@'</span><span class="token punctuation">,</span> <span class="token string">'#'</span><span class="token punctuation">]</span>}
      onSearch<span class="token operator">=</span>{onSearch}
      options<span class="token operator">=</span>{<span class="token punctuation">(</span>MOCK_DATA<span class="token punctuation">[</span>prefix<span class="token punctuation">]</span> || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
        key<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
        value<span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
      }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">MOCK_DATA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'afc163'</span><span class="token punctuation">,</span> <span class="token string">'zombiej'</span><span class="token punctuation">,</span> <span class="token string">'yesmeck'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'#'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'1.0'</span><span class="token punctuation">,</span> <span class="token string">'2.0'</span><span class="token punctuation">,</span> <span class="token string">'3.0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type PrefixType <span class="token operator">=</span> keyof <span class="token keyword">typeof</span> <span class="token constant">MOCK_DATA</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>prefix<span class="token punctuation">,</span> setPrefix<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>PrefixType<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_<span class="token operator">:</span> string<span class="token punctuation">,</span> newPrefix<span class="token operator">:</span> PrefixType<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setPrefix</span><span class="token punctuation">(</span>newPrefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input @ to mention people, # to mention tag<span class="token punctuation">"</span></span>
      <span class="token attr-name">prefix</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'@'</span><span class="token punctuation">,</span> <span class="token string">'#'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token constant">MOCK_DATA</span><span class="token punctuation">[</span>prefix<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>value <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        key<span class="token operator">:</span> value<span class="token punctuation">,</span>
        value<span class="token punctuation">,</span>
        label<span class="token operator">:</span> value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">MOCK_DATA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'afc163'</span><span class="token punctuation">,</span> <span class="token string">'zombiej'</span><span class="token punctuation">,</span> <span class="token string">'yesmeck'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'#'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'1.0'</span><span class="token punctuation">,</span> <span class="token string">'2.0'</span><span class="token punctuation">,</span> <span class="token string">'3.0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>prefix<span class="token punctuation">,</span> setPrefix<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> newPrefix</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setPrefix</span><span class="token punctuation">(</span>newPrefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input @ to mention people, # to mention tag<span class="token punctuation">"</span></span>
      <span class="token attr-name">prefix</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'@'</span><span class="token punctuation">,</span> <span class="token string">'#'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token constant">MOCK_DATA</span><span class="token punctuation">[</span>prefix<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
        value<span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51);function d(l){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(l)}var m=A(c(0)),w=c(12);function R(l){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(R=function(e){return e?n:a})(l)}function A(l,a){if(!a&&l&&l.__esModule)return l;if(l===null||d(l)!=="object"&&typeof l!="function")return{default:l};var n=R(a);if(n&&n.has(l))return n.get(l);var p={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in l)if(k!=="default"&&Object.prototype.hasOwnProperty.call(l,k)){var g=e?Object.getOwnPropertyDescriptor(l,k):null;g&&(g.get||g.set)?Object.defineProperty(p,k,g):p[k]=l[k]}return p.default=l,n&&n.set(l,p),p}function v(l,a){return B(l)||E(l,a)||F(l,a)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(l,a){if(!!l){if(typeof l=="string")return O(l,a);var n=Object.prototype.toString.call(l).slice(8,-1);if(n==="Object"&&l.constructor&&(n=l.constructor.name),n==="Map"||n==="Set")return Array.from(l);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(l,a)}}function O(l,a){(a==null||a>l.length)&&(a=l.length);for(var n=0,p=new Array(a);n<a;n++)p[n]=l[n];return p}function E(l,a){var n=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(n!=null){var p=[],e=!0,k=!1,g,f;try{for(n=n.call(l);!(e=(g=n.next()).done)&&(p.push(g.value),!(a&&p.length===a));e=!0);}catch(C){k=!0,f=C}finally{try{!e&&n.return!=null&&n.return()}finally{if(k)throw f}}return p}}function B(l){if(Array.isArray(l))return l}var Y={"@":["afc163","zombiej","yesmeck"],"#":["1.0","2.0","3.0"]},H=function(){var a=(0,m.useState)("@"),n=v(a,2),p=n[0],e=n[1],k=function(f,C){e(C)};return m.default.createElement(w.Mentions,{style:{width:"100%"},placeholder:"input @ to mention people, # to mention tag",prefix:["@","#"],onSearch:k,options:(Y[p]||[]).map(function(g){return{key:g,value:g,label:g}})})},Q=H;return j.createElement(Q)}}},4422:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","disabled"]," \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u751F\u6548\u3002\u901A\u8FC7 ",["code","readOnly"]," \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u53EA\u8BFB\u3002"]],"en-US":[["p","Configurate ",["code","disabled"]," and ",["code","readOnly"],"."]]},meta:{order:4,title:{"zh-CN":"\u65E0\u6548\u6216\u53EA\u8BFB","en-US":"disabled or readOnly"},filename:"components/mentions/demo/readonly.md",id:"components-mentions-demo-readonly"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Mentions } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'afc163'</span><span class="token punctuation">,</span> <span class="token string">'zombiej'</span><span class="token punctuation">,</span> <span class="token string">'yesmeck'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
  value<span class="token punctuation">,</span>
  key<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
  label<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Mentions
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
        placeholder<span class="token operator">=</span><span class="token string">"this is disabled Mentions"</span>
        disabled
        options<span class="token operator">=</span>{options}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>Mentions
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"this is readOnly Mentions"</span>
      readOnly
      options<span class="token operator">=</span>{options}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'afc163'</span><span class="token punctuation">,</span> <span class="token string">'zombiej'</span><span class="token punctuation">,</span> <span class="token string">'yesmeck'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>value <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  value<span class="token punctuation">,</span>
  key<span class="token operator">:</span> value<span class="token punctuation">,</span>
  label<span class="token operator">:</span> value<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this is disabled Mentions<span class="token punctuation">"</span></span>
        <span class="token attr-name">disabled</span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this is readOnly Mentions<span class="token punctuation">"</span></span>
      <span class="token attr-name">readOnly</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'afc163'</span><span class="token punctuation">,</span> <span class="token string">'zombiej'</span><span class="token punctuation">,</span> <span class="token string">'yesmeck'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  value<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this is disabled Mentions<span class="token punctuation">"</span></span>
        <span class="token attr-name">disabled</span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this is readOnly Mentions<span class="token punctuation">"</span></span>
      <span class="token attr-name">readOnly</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51),d=w(c(0)),m=c(12);function w(z){return z&&z.__esModule?z:{default:z}}var R=["afc163","zombiej","yesmeck"].map(function(z){return{value:z,key:z,label:z}}),A=function(){return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{style:{marginBottom:10}},d.default.createElement(m.Mentions,{style:{width:"100%"},placeholder:"this is disabled Mentions",disabled:!0,options:R})),d.default.createElement(m.Mentions,{style:{width:"100%"},placeholder:"this is readOnly Mentions",readOnly:!0,options:R}))},v=A;return j.createElement(v)}}},4423:function(x,L,c){x.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","status"]," \u4E3A Mentions \u6DFB\u52A0\u72B6\u6001\u3002\u53EF\u9009 ",["code","error"]," \u6216\u8005 ",["code","warning"],"\u3002"]],"en-US":[["p","Add status to Mentions with ",["code","status"],", which could be ",["code","error"]," or ",["code","warning"],"\u3002"]]},meta:{order:8,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u72B6\u6001","en-US":"Status"},filename:"components/mentions/demo/status.md",id:"components-mentions-demo-status"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Mentions<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { OptionProps } from <span class="token string">'antd/es/mentions'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Option } <span class="token operator">=</span> Mentions<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Change:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token punctuation">:</span> OptionProps<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"afc163"</span><span class="token operator">></span>afc163<span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
      <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"zombieJ"</span><span class="token operator">></span>zombieJ<span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
      <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"yesmeck"</span><span class="token operator">></span>yesmeck<span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Mentions onChange<span class="token operator">=</span>{onChange} onSelect<span class="token operator">=</span>{onSelect} defaultValue<span class="token operator">=</span><span class="token string">"@afc163"</span> status<span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span>
        {options}
      <span class="token operator">&lt;</span><span class="token operator">/</span>Mentions<span class="token operator">></span>
      <span class="token operator">&lt;</span>Mentions onChange<span class="token operator">=</span>{onChange} onSelect<span class="token operator">=</span>{onSelect} defaultValue<span class="token operator">=</span><span class="token string">"@afc163"</span> status<span class="token operator">=</span><span class="token string">"warning"</span><span class="token operator">></span>
        {options}
      <span class="token operator">&lt;</span><span class="token operator">/</span>Mentions<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> OptionProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/mentions'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Option <span class="token punctuation">}</span> <span class="token operator">=</span> Mentions<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Change:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token operator">:</span> OptionProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afc163<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>afc163<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zombieJ<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>zombieJ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yesmeck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>yesmeck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@afc163<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>options<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mentions</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@afc163<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>options<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mentions</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Mentions<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Option <span class="token punctuation">}</span> <span class="token operator">=</span> Mentions<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Change:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'select'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afc163<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>afc163<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zombieJ<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>zombieJ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yesmeck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>yesmeck<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@afc163<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>options<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mentions</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mentions</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@afc163<span class="token punctuation">"</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>options<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mentions</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var j=c(0),G=c(51),d=c(12),m=w(c(0));function w(O){return O&&O.__esModule?O:{default:O}}var R=d.Mentions.Option,A=function(E){console.log("Change:",E)},v=function(E){console.log("select",E)},z=function(){var E=m.default.createElement(m.default.Fragment,null,m.default.createElement(R,{value:"afc163"},"afc163"),m.default.createElement(R,{value:"zombieJ"},"zombieJ"),m.default.createElement(R,{value:"yesmeck"},"yesmeck"));return m.default.createElement(d.Space,{direction:"vertical"},m.default.createElement(d.Mentions,{onChange:A,onSelect:v,defaultValue:"@afc163",status:"error"},E),m.default.createElement(d.Mentions,{onChange:A,onSelect:v,defaultValue:"@afc163",status:"warning"},E))},F=z;return j.createElement(F)}}}}]);
