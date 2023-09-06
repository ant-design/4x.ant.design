(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{3845:function(j,J,c){j.exports={async:c(4434),autoSize:c(4435),basic:c(4436),form:c(4437),placement:c(4438),prefix:c(4439),readonly:c(4440),status:c(4441)}},4434:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u5339\u914D\u5185\u5BB9\u5217\u8868\u4E3A\u5F02\u6B65\u8FD4\u56DE\u65F6\u3002"]],"en-US":[["p","async"]]},meta:{order:1,title:{"zh-CN":"\u5F02\u6B65\u52A0\u8F7D","en-US":"Asynchronous loading"},filename:"components/mentions/demo/async.md",id:"components-mentions-demo-async"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useCallback<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42);function d(t){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(t)}var g=x(c(0)),w=c(13),O=M(c(195));function M(t){return t&&t.__esModule?t:{default:t}}function b(t){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(b=function(r){return r?a:n})(t)}function x(t,n){if(!n&&t&&t.__esModule)return t;if(t===null||d(t)!=="object"&&typeof t!="function")return{default:t};var a=b(n);if(a&&a.has(t))return a.get(t);var e={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in t)if(m!=="default"&&Object.prototype.hasOwnProperty.call(t,m)){var f=r?Object.getOwnPropertyDescriptor(t,m):null;f&&(f.get||f.set)?Object.defineProperty(e,m,f):e[m]=t[m]}return e.default=t,a&&a.set(t,e),e}function F(t,n){return X(t)||Q(t,n)||P(t,n)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(t,n){if(t){if(typeof t=="string")return W(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return W(t,n)}}function W(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function Q(t,n){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e,r,m,f,y=[],v=!0,h=!1;try{if(m=(a=a.call(t)).next,n===0){if(Object(a)!==a)return;v=!1}else for(;!(v=(e=m.call(a)).done)&&(y.push(e.value),y.length!==n);v=!0);}catch(S){h=!0,r=S}finally{try{if(!v&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(h)throw r}}return y}}function X(t){if(Array.isArray(t))return t}var Z=function(){var n=(0,g.useState)(!1),a=F(n,2),e=a[0],r=a[1],m=(0,g.useState)([]),f=F(m,2),y=f[0],v=f[1],h=(0,g.useRef)(),S=function(z){if(!z){v([]);return}fetch("https://api.github.com/search/users?q=".concat(z)).then(function(q){return q.json()}).then(function(q){var V=q.items,T=V===void 0?[]:V;h.current===z&&(r(!1),v(T.slice(0,10)))})},I=(0,g.useCallback)((0,O.default)(S,800),[]),A=function(z){console.log("Search:",z),h.current=z,r(!!z),v([]),I(z)};return g.default.createElement(w.Mentions,{style:{width:"100%"},loading:e,onSearch:A,options:y.map(function(L){var z=L.login,q=L.avatar_url;return{key:z,value:z,className:"antd-demo-dynamic-option",label:g.default.createElement(g.default.Fragment,null,g.default.createElement("img",{src:q,alt:z}),g.default.createElement("span",null,z))}})})},l=Z;return E.createElement(l)},style:`
.antd-demo-dynamic-option img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
`}},4435:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\u3002"]],"en-US":[["p","Height autoSize."]]},meta:{order:6,title:{"zh-CN":"\u81EA\u52A8\u5927\u5C0F","en-US":"autoSize"},filename:"components/mentions/demo/autoSize.md",id:"components-mentions-demo-autoSize"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42),d=w(c(0)),g=c(13);function w(b){return b&&b.__esModule?b:{default:b}}var O=function(){return d.default.createElement(g.Mentions,{autoSize:!0,style:{width:"100%"},options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})},M=O;return E.createElement(M)}}},4436:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u57FA\u672C\u4F7F\u7528\u3002"]],"en-US":[["p","Basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic"},filename:"components/mentions/demo/basic.md",id:"components-mentions-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42),d=w(c(0)),g=c(13);function w(F){return F&&F.__esModule?F:{default:F}}var O=function(R){console.log("Change:",R)},M=function(R){console.log("select",R)},b=function(){return d.default.createElement(g.Mentions,{style:{width:"100%"},onChange:O,onSelect:M,defaultValue:"@afc163",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})},x=b;return E.createElement(x)}}},4437:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u53D7\u63A7\u6A21\u5F0F\uFF0C\u4F8B\u5982\u914D\u5408 Form \u4F7F\u7528\u3002"]],"en-US":[["p","Controlled mode, for example, to work with ",["code","Form"],"."]]},meta:{order:2,title:{"zh-CN":"\u914D\u5408 Form \u4F7F\u7528","en-US":"With Form"},filename:"components/mentions/demo/form.md",id:"components-mentions-demo-form"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42);function d(n){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(n)}var g=O(c(0)),w=c(13);function O(n){return n&&n.__esModule?n:{default:n}}function M(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */M=function(){return a};var n,a={},e=Object.prototype,r=e.hasOwnProperty,m=Object.defineProperty||function(o,s,p){o[s]=p.value},f=typeof Symbol=="function"?Symbol:{},y=f.iterator||"@@iterator",v=f.asyncIterator||"@@asyncIterator",h=f.toStringTag||"@@toStringTag";function S(o,s,p){return Object.defineProperty(o,s,{value:p,enumerable:!0,configurable:!0,writable:!0}),o[s]}try{S({},"")}catch(o){S=function(p,u,i){return p[u]=i}}function I(o,s,p,u){var i=s&&s.prototype instanceof an?s:an,k=Object.create(i.prototype),C=new en(u||[]);return m(k,"_invoke",{value:kn(o,p,C)}),k}function A(o,s,p){try{return{type:"normal",arg:o.call(s,p)}}catch(u){return{type:"throw",arg:u}}}a.wrap=I;var L="suspendedStart",z="suspendedYield",q="executing",V="completed",T={};function an(){}function _(){}function $(){}var tn={};S(tn,y,function(){return this});var pn=Object.getPrototypeOf,nn=pn&&pn(pn(cn([])));nn&&nn!==e&&r.call(nn,y)&&(tn=nn);var H=$.prototype=an.prototype=Object.create(tn);function ln(o){["next","throw","return"].forEach(function(s){S(o,s,function(p){return this._invoke(s,p)})})}function sn(o,s){function p(i,k,C,U){var N=A(o[i],o,k);if(N.type!=="throw"){var K=N.arg,D=K.value;return D&&d(D)=="object"&&r.call(D,"__await")?s.resolve(D.__await).then(function(Y){p("next",Y,C,U)},function(Y){p("throw",Y,C,U)}):s.resolve(D).then(function(Y){K.value=Y,C(K)},function(Y){return p("throw",Y,C,U)})}U(N.arg)}var u;m(this,"_invoke",{value:function(k,C){function U(){return new s(function(N,K){p(k,C,N,K)})}return u=u?u.then(U,U):U()}})}function kn(o,s,p){var u=L;return function(i,k){if(u===q)throw new Error("Generator is already running");if(u===V){if(i==="throw")throw k;return{value:n,done:!0}}for(p.method=i,p.arg=k;;){var C=p.delegate;if(C){var U=un(C,p);if(U){if(U===T)continue;return U}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(u===L)throw u=V,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);u=q;var N=A(o,s,p);if(N.type==="normal"){if(u=p.done?V:z,N.arg===T)continue;return{value:N.arg,done:p.done}}N.type==="throw"&&(u=V,p.method="throw",p.arg=N.arg)}}}function un(o,s){var p=s.method,u=o.iterator[p];if(u===n)return s.delegate=null,p==="throw"&&o.iterator.return&&(s.method="return",s.arg=n,un(o,s),s.method==="throw")||p!=="return"&&(s.method="throw",s.arg=new TypeError("The iterator does not provide a '"+p+"' method")),T;var i=A(u,o.iterator,s.arg);if(i.type==="throw")return s.method="throw",s.arg=i.arg,s.delegate=null,T;var k=i.arg;return k?k.done?(s[o.resultName]=k.value,s.next=o.nextLoc,s.method!=="return"&&(s.method="next",s.arg=n),s.delegate=null,T):k:(s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,T)}function rn(o){var s={tryLoc:o[0]};1 in o&&(s.catchLoc=o[1]),2 in o&&(s.finallyLoc=o[2],s.afterLoc=o[3]),this.tryEntries.push(s)}function on(o){var s=o.completion||{};s.type="normal",delete s.arg,o.completion=s}function en(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(rn,this),this.reset(!0)}function cn(o){if(o||o===""){var s=o[y];if(s)return s.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var p=-1,u=function i(){for(;++p<o.length;)if(r.call(o,p))return i.value=o[p],i.done=!1,i;return i.value=n,i.done=!0,i};return u.next=u}}throw new TypeError(d(o)+" is not iterable")}return _.prototype=$,m(H,"constructor",{value:$,configurable:!0}),m($,"constructor",{value:_,configurable:!0}),_.displayName=S($,h,"GeneratorFunction"),a.isGeneratorFunction=function(o){var s=typeof o=="function"&&o.constructor;return!!s&&(s===_||(s.displayName||s.name)==="GeneratorFunction")},a.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,$):(o.__proto__=$,S(o,h,"GeneratorFunction")),o.prototype=Object.create(H),o},a.awrap=function(o){return{__await:o}},ln(sn.prototype),S(sn.prototype,v,function(){return this}),a.AsyncIterator=sn,a.async=function(o,s,p,u,i){i===void 0&&(i=Promise);var k=new sn(I(o,s,p,u),i);return a.isGeneratorFunction(s)?k:k.next().then(function(C){return C.done?C.value:k.next()})},ln(H),S(H,h,"Generator"),S(H,y,function(){return this}),S(H,"toString",function(){return"[object Generator]"}),a.keys=function(o){var s=Object(o),p=[];for(var u in s)p.push(u);return p.reverse(),function i(){for(;p.length;){var k=p.pop();if(k in s)return i.value=k,i.done=!1,i}return i.done=!0,i}},a.values=cn,en.prototype={constructor:en,reset:function(s){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(on),!s)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=n)},stop:function(){this.done=!0;var s=this.tryEntries[0].completion;if(s.type==="throw")throw s.arg;return this.rval},dispatchException:function(s){if(this.done)throw s;var p=this;function u(K,D){return C.type="throw",C.arg=s,p.next=K,D&&(p.method="next",p.arg=n),!!D}for(var i=this.tryEntries.length-1;i>=0;--i){var k=this.tryEntries[i],C=k.completion;if(k.tryLoc==="root")return u("end");if(k.tryLoc<=this.prev){var U=r.call(k,"catchLoc"),N=r.call(k,"finallyLoc");if(U&&N){if(this.prev<k.catchLoc)return u(k.catchLoc,!0);if(this.prev<k.finallyLoc)return u(k.finallyLoc)}else if(U){if(this.prev<k.catchLoc)return u(k.catchLoc,!0)}else{if(!N)throw new Error("try statement without catch or finally");if(this.prev<k.finallyLoc)return u(k.finallyLoc)}}}},abrupt:function(s,p){for(var u=this.tryEntries.length-1;u>=0;--u){var i=this.tryEntries[u];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var k=i;break}}k&&(s==="break"||s==="continue")&&k.tryLoc<=p&&p<=k.finallyLoc&&(k=null);var C=k?k.completion:{};return C.type=s,C.arg=p,k?(this.method="next",this.next=k.finallyLoc,T):this.complete(C)},complete:function(s,p){if(s.type==="throw")throw s.arg;return s.type==="break"||s.type==="continue"?this.next=s.arg:s.type==="return"?(this.rval=this.arg=s.arg,this.method="return",this.next="end"):s.type==="normal"&&p&&(this.next=p),T},finish:function(s){for(var p=this.tryEntries.length-1;p>=0;--p){var u=this.tryEntries[p];if(u.finallyLoc===s)return this.complete(u.completion,u.afterLoc),on(u),T}},catch:function(s){for(var p=this.tryEntries.length-1;p>=0;--p){var u=this.tryEntries[p];if(u.tryLoc===s){var i=u.completion;if(i.type==="throw"){var k=i.arg;on(u)}return k}}throw new Error("illegal catch attempt")},delegateYield:function(s,p,u){return this.delegate={iterator:cn(s),resultName:p,nextLoc:u},this.method==="next"&&(this.arg=n),T}},a}function b(n,a,e,r,m,f,y){try{var v=n[f](y),h=v.value}catch(S){e(S);return}v.done?a(h):Promise.resolve(h).then(r,m)}function x(n){return function(){var a=this,e=arguments;return new Promise(function(r,m){var f=n.apply(a,e);function y(h){b(f,r,m,y,v,"next",h)}function v(h){b(f,r,m,y,v,"throw",h)}y(void 0)})}}function F(n,a){return X(n)||Q(n,a)||P(n,a)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(n,a){if(n){if(typeof n=="string")return W(n,a);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return W(n,a)}}function W(n,a){(a==null||a>n.length)&&(a=n.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=n[e];return r}function Q(n,a){var e=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var r,m,f,y,v=[],h=!0,S=!1;try{if(f=(e=e.call(n)).next,a===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(r=f.call(e)).done)&&(v.push(r.value),v.length!==a);h=!0);}catch(I){S=!0,m=I}finally{try{if(!h&&e.return!=null&&(y=e.return(),Object(y)!==y))return}finally{if(S)throw m}}return v}}function X(n){if(Array.isArray(n))return n}var Z=w.Mentions.getMentions,l=function(){var a=w.Form.useForm(),e=F(a,1),r=e[0],m=function(){r.resetFields()},f=function(){var v=x(M().mark(function h(){var S;return M().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.validateFields();case 3:S=A.sent,console.log("Submit:",S),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log("Error:",A.t0);case 10:case"end":return A.stop()}},h,null,[[0,7]])}));return function(){return v.apply(this,arguments)}}(),y=function(){var v=x(M().mark(function h(S,I){var A;return M().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(A=Z(I),!(A.length<2)){z.next=3;break}throw new Error("More than one must be selected!");case 3:case"end":return z.stop()}},h)}));return function(S,I){return v.apply(this,arguments)}}();return g.default.createElement(w.Form,{form:r,layout:"horizontal",onFinish:f},g.default.createElement(w.Form.Item,{name:"coders",label:"Top coders",labelCol:{span:6},wrapperCol:{span:16},rules:[{validator:y}]},g.default.createElement(w.Mentions,{rows:1,options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})),g.default.createElement(w.Form.Item,{name:"bio",label:"Bio",labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0}]},g.default.createElement(w.Mentions,{rows:3,placeholder:"You can use @ to ref user here",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})),g.default.createElement(w.Form.Item,{wrapperCol:{span:14,offset:6}},g.default.createElement(w.Button,{htmlType:"submit",type:"primary"},"Submit"),"\xA0\xA0\xA0",g.default.createElement(w.Button,{htmlType:"button",onClick:m},"Reset")))},t=l;return E.createElement(t)}}},4438:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u5411\u4E0A\u5C55\u5F00\u5EFA\u8BAE\u3002"]],"en-US":[["p","Change the suggestions placement."]]},meta:{order:5,title:{"zh-CN":"\u5411\u4E0A\u5C55\u5F00","en-US":"Placement"},filename:"components/mentions/demo/placement.md",id:"components-mentions-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42),d=w(c(0)),g=c(13);function w(b){return b&&b.__esModule?b:{default:b}}var O=function(){return d.default.createElement(g.Mentions,{style:{width:"100%"},placement:"top",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})},M=O;return E.createElement(M)}}},4439:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","prefix"]," \u5C5E\u6027\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26\u3002\u9ED8\u8BA4\u4E3A ",["code","@"],", \u53EF\u4EE5\u5B9A\u4E49\u4E3A\u6570\u7EC4\u3002"]],"en-US":[["p","Customize Trigger Token by ",["code","prefix"]," props. Default to ",["code","@"],", ",["code","Array<string>"]," also supported."]]},meta:{order:3,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26","en-US":"Customize Trigger Token"},filename:"components/mentions/demo/prefix.md",id:"components-mentions-demo-prefix"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42);function d(l){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(l)}var g=M(c(0)),w=c(13);function O(l){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(O=function(e){return e?n:t})(l)}function M(l,t){if(!t&&l&&l.__esModule)return l;if(l===null||d(l)!=="object"&&typeof l!="function")return{default:l};var n=O(t);if(n&&n.has(l))return n.get(l);var a={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in l)if(r!=="default"&&Object.prototype.hasOwnProperty.call(l,r)){var m=e?Object.getOwnPropertyDescriptor(l,r):null;m&&(m.get||m.set)?Object.defineProperty(a,r,m):a[r]=l[r]}return a.default=l,n&&n.set(l,a),a}function b(l,t){return W(l)||P(l,t)||F(l,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(l,t){if(l){if(typeof l=="string")return R(l,t);var n=Object.prototype.toString.call(l).slice(8,-1);if(n==="Object"&&l.constructor&&(n=l.constructor.name),n==="Map"||n==="Set")return Array.from(l);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(l,t)}}function R(l,t){(t==null||t>l.length)&&(t=l.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=l[n];return a}function P(l,t){var n=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(n!=null){var a,e,r,m,f=[],y=!0,v=!1;try{if(r=(n=n.call(l)).next,t===0){if(Object(n)!==n)return;y=!1}else for(;!(y=(a=r.call(n)).done)&&(f.push(a.value),f.length!==t);y=!0);}catch(h){v=!0,e=h}finally{try{if(!y&&n.return!=null&&(m=n.return(),Object(m)!==m))return}finally{if(v)throw e}}return f}}function W(l){if(Array.isArray(l))return l}var Q={"@":["afc163","zombiej","yesmeck"],"#":["1.0","2.0","3.0"]},X=function(){var t=(0,g.useState)("@"),n=b(t,2),a=n[0],e=n[1],r=function(f,y){e(y)};return g.default.createElement(w.Mentions,{style:{width:"100%"},placeholder:"input @ to mention people, # to mention tag",prefix:["@","#"],onSearch:r,options:(Q[a]||[]).map(function(m){return{key:m,value:m,label:m}})})},Z=X;return E.createElement(Z)}}},4440:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","disabled"]," \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u751F\u6548\u3002\u901A\u8FC7 ",["code","readOnly"]," \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u53EA\u8BFB\u3002"]],"en-US":[["p","Configurate ",["code","disabled"]," and ",["code","readOnly"],"."]]},meta:{order:4,title:{"zh-CN":"\u65E0\u6548\u6216\u53EA\u8BFB","en-US":"disabled or readOnly"},filename:"components/mentions/demo/readonly.md",id:"components-mentions-demo-readonly"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42),d=w(c(0)),g=c(13);function w(x){return x&&x.__esModule?x:{default:x}}var O=["afc163","zombiej","yesmeck"].map(function(x){return{value:x,key:x,label:x}}),M=function(){return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{style:{marginBottom:10}},d.default.createElement(g.Mentions,{style:{width:"100%"},placeholder:"this is disabled Mentions",disabled:!0,options:O})),d.default.createElement(g.Mentions,{style:{width:"100%"},placeholder:"this is readOnly Mentions",readOnly:!0,options:O}))},b=M;return E.createElement(b)}}},4441:function(j,J,c){j.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","status"]," \u4E3A Mentions \u6DFB\u52A0\u72B6\u6001\u3002\u53EF\u9009 ",["code","error"]," \u6216\u8005 ",["code","warning"],"\u3002"]],"en-US":[["p","Add status to Mentions with ",["code","status"],", which could be ",["code","error"]," or ",["code","warning"],"\u3002"]]},meta:{order:8,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u72B6\u6001","en-US":"Status"},filename:"components/mentions/demo/status.md",id:"components-mentions-demo-status"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Mentions<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
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
`},preview:function(){var E=c(0),G=c(42),d=c(13),g=w(c(0));function w(R){return R&&R.__esModule?R:{default:R}}var O=d.Mentions.Option,M=function(P){console.log("Change:",P)},b=function(P){console.log("select",P)},x=function(){var P=g.default.createElement(g.default.Fragment,null,g.default.createElement(O,{value:"afc163"},"afc163"),g.default.createElement(O,{value:"zombieJ"},"zombieJ"),g.default.createElement(O,{value:"yesmeck"},"yesmeck"));return g.default.createElement(d.Space,{direction:"vertical"},g.default.createElement(d.Mentions,{onChange:M,onSelect:b,defaultValue:"@afc163",status:"error"},P),g.default.createElement(d.Mentions,{onChange:M,onSelect:b,defaultValue:"@afc163",status:"warning"},P))},F=x;return E.createElement(F)}}}}]);
