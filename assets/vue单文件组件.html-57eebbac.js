import{_ as l,V as c,W as i,X as n,Y as s,Z as e,a1 as p,a0 as t,F as u}from"./framework-41b2e4a5.js";const r={},d=n("h1",{id:"单文件组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单文件组件","aria-hidden":"true"},"#"),s(" 单文件组件")],-1),v=n("h2",{id:"参考项目结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考项目结构","aria-hidden":"true"},"#"),s(" 参考项目结构")],-1),k={href:"http://doc.ruoyi.vip/ruoyi-vue/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|_src
    |_api
    |_assets
    |_components
    |_directive
    |_icons
    |_layout
    |_plugins
    |_router
    |_store
    |_styles
    |_utils
    |_views
    
    app.vue
    main.js
    permission.js
    setting.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2),b=n("strong",null,"api",-1),g=n("strong",null,"assets",-1),h=n("strong",null,"components",-1),_=n("strong",null,"directive",-1),f={href:"https://blog.csdn.net/wuj1935/article/details/120705144",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"icons",-1),w=n("strong",null,"layout",-1),x=n("strong",null,"plugins",-1),j=n("strong",null,"router",-1),S={href:"https://blog.csdn.net/wulala_hei/article/details/80488727",target:"_blank",rel:"noopener noreferrer"},q=n("strong",null,"store",-1),M=n("strong",null,"styles",-1),C=n("strong",null,"utils",-1),H=n("strong",null,"views",-1),V=n("strong",null,"app.vue",-1),F=n("strong",null,"main.js",-1),E=n("strong",null,"permission.js",-1),D=n("strong",null,"setting.js",-1),I={href:"https://juejin.cn/post/7041506596597432334",target:"_blank",rel:"noopener noreferrer"},J=n("hr",null,null,-1),O=n("p",null,"一般来说，我们只需要了解api、router、views文件夹、app.vue、main.js的内容",-1),U=n("h2",{id:"xxx-vue文件-单文件组件-sfc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xxx-vue文件-单文件组件-sfc","aria-hidden":"true"},"#"),s(" xxx.vue文件（单文件组件/SFC）")],-1),Z={href:"https://cn.vuejs.org/api/sfc-spec.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://cn.vuejs.org/guide/scaling-up/sfc.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://blog.csdn.net/XOIIUUZZ/article/details/103095298",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"JavaScript(ES) 模块",-1),T=t(`<p>一个.vue文件主要有3个部分 <code>&lt;template&gt;</code>显示的内容<code>&lt;/template&gt;</code>——模板（或称为视图） <code>&lt;script&gt;</code>执行的功能（业务逻辑）<code>&lt;/script&gt;</code>——逻辑 <code>&lt;style&gt;</code>显示的样式<code>&lt;/style&gt;</code>——样式 <strong>官网示例</strong>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Hello world!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom1</span><span class="token punctuation">&gt;</span></span>
  This could be e.g. documentation for the component.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> template</h3><p><code>&lt;template&gt;&lt;/template&gt;</code>语块包裹的内容将会被提取、传递给 @vue/compiler-dom，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 render 选项（vue渲染页面的一种方式）。 我们来看一下示例中的简单的template视图层</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先是一组<code>&lt;div&gt;</code>标签，表示包含的内容是一个独立的部分，标签里的内容作为一个整体，有福同享，有难同当。</p><p><code>class</code>是表示样式的类型，其在<code>&lt;div&gt;</code>的尖括号表明<code>&lt;div&gt;</code>里包含的内容都会应用到该样式，那么它所说的样式类型是&quot;example&quot;,这个样式来源里我们在<code>&lt;style&gt;&lt;/style&gt;</code>所定义的样式</p>`,7),X=n("code",null,"{{ msg }}",-1),$=n("code",null,"script",-1),A=t(`<p>在这基础之上，我们还可以给这个<code>&lt;div&gt;</code>块加上一个身份标识id</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当需要用到该部分的内容时，即可通过&quot;app&quot;这个id来引用</p><h3 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h3><p><code>&lt;script&gt;&lt;/script&gt;</code>包裹的是脚本代码，会作为es模块执行，进行业务逻辑的处理</p><blockquote><p>ECMAScript模块（简称ES模块）是2015年推出的 JavaScript 中代码重用的机制</p></blockquote><p>我们来看一下示例中的简单的script逻辑层</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Hello world!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),R={href:"https://juejin.cn/post/7002584686232862734",target:"_blank",rel:"noopener noreferrer"},W=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//直接定义</span>
<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//函数返回值</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Y={href:"https://juejin.cn/post/6844903796481458183",target:"_blank",rel:"noopener noreferrer"},z=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 组件的方法</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// watch擅长处理的场景：一个数据影响多个数据</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// computed擅长处理的场景：一个数据受多个数据影响</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">beforeCreate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在挂载开始之前被调用：相关的 render 函数首次被调用。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 编译好的HTML挂载到页面完成后执行的事件钩子</span>
  <span class="token comment">// el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。</span>
  <span class="token comment">// 此钩子函数中一般会做一些ajax请求获取数据进行数据初始化</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Home done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">beforeUpdate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">updated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。</span>
  <span class="token comment">// 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。</span>
  <span class="token comment">// 该钩子在服务器端渲染期间不被调用。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">beforeDestroy</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例销毁之前调用。在这一步，实例仍然完全可用。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在script中除了export（导出）外，还有import（导入），举个例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//从某路径下的show.vue文件导入showMsg()方法,该方法会显示括号里参数的内容</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> showMsg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/show&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Hello world!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//实例已经创建完成之后被调用,即当你打开这个页面时就会使用</span>
    <span class="token comment">//this.showHello()表示该组件方法method里的里的showHello()</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">showHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//调用import进来showMsg,参数this.Msg为该组件数据data里的Msg</span>
      <span class="token function">showMsg</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当打开一个页面时会创建一个vue实例，调用created(),里面又调用了method里的showMsg方法，里面又调用了导入进来的showMsg方法，其参数来源于data里的Msg，而Msg又会与template里的内容绑定</p><p>除了导入方法，还可以导入组件，官网原话</p><blockquote><p>Vue SFC 是一个框架指定的文件格式，因此必须交由 @vue/compiler-sfc 编译为标准的 JavaScript 和 CSS，一个编译后的 SFC 是一个标准的 JavaScript(ES) 模块，这也意味着在构建配置正确的前提下，你可以像导入其他 ES 模块一样导入 SFC：</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    MyComponent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如说我们已经写好了一个MyComponent.vue文件（单文件组件），并且在其他vue文件中想要复用这个组件，import后在template层使用<code>&lt;MyComponent&gt;&lt;/MyComponent&gt;</code>即可</p><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h3><p><code>&lt;style&gt;&lt;/style&gt;</code>包裹的是样式，可以使用 scoped 或 module attribute 来帮助封装当前组件的样式，在template层使用时class=&quot;&quot;即可使用样式 同样看官网示例中<code>&lt;style&gt;</code>标签里的内容</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),G=n("code",null,"<style scoped></style>",-1),K={href:"https://cn.vuejs.org/api/sfc-css-features.html",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"小结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#小结","aria-hidden":"true"},"#"),s(" 小结")],-1),Q=n("p",null,"一个vue文件基本上就由模板、逻辑与样式三部分组成，模板定义了一个个独立的模块与内容，样式决定了这些模块的外观，逻辑描述模板里的内容如何呈现。 至此单个vue文件的逻辑基本已理清， 但要写好一个界面，一个好看的界面还有很多细节需要慢慢地去熟悉，对于vue还要搞清router路由，各个页面之间的逻辑关系，且听下回分解",-1);function nn(o,sn){const a=u("ExternalLinkIcon");return c(),i("div",null,[d,v,n("p",null,[n("a",k,[s("royi前后端分离的vue项目"),e(a)]),s(" 在vue项目的src文件夹下")]),m,n("p",null,[b,s("：接口文件夹，存放对数据接口封装的方法（前后端交互的接口，此处需要声明前端需要使用的方法，该方法在后端的URL路径，请求方式（get、post等），参数）。前端在处理业务需要调用后端方法时，import此处api文件夹里相应js文件里的方法，这个方法通过url，请求方式与参数与后端建立映射。 "),g,s("：静态资源文件夹，存放图片，css样式等资源 "),h,s("：组件库文件夹，存放组件（一些可复用，非独立的页面），也可以创建完整页面，但一般完整页面会在views文件夹编写 "),_,s("：指令文件夹，可以在这里自定义像v-for、v-if之类的指令以供使用 "),n("a",f,[s("https://blog.csdn.net/wuj1935/article/details/120705144"),e(a)])]),n("p",null,[y,s("：图标文件夹 "),w,s("：公共布局组件文件，如项目页面顶部栏区域、侧边导航栏(大部分页面公共的布局) "),x,s(":插件文件夹，自定义插件 "),j,s(":路由配置文件，存放路由跳转的配置信息,路由用于设定访问路径，并将路径和组件映射起来，访问对应的路径就会跳转到相应的页面（组件） "),n("a",S,[s("vue路由"),e(a)]),q,s("：存放 vuex 为vue专门开发的状态管理器 "),M,s("：全局样式文件 "),C,s(":工具包文件夹，存放工具函数 "),H,s("：视图文件夹，存放各个页面的vue文件 "),V,s("：项目的主组件，页面入口文件 ，所有页面都在app.vue下进行切换，app.vue负责构建定义及页面组件归集 "),F,s(":实例化Vue、放置项目中经常会用到的插件和CSS样式、存储全局变量 "),E,s(": 权限管理 "),D,s(":配置 "),n("a",I,[s("配置篇(settings.js)"),e(a)])]),J,O,U,n("p",null,[n("a",Z,[s("vue官方文档-单文件组件语法定义"),e(a)]),n("a",L,[s("vue官方文档-应用规模化-单文件组件"),e(a)]),n("a",N,[s("https://blog.csdn.net/XOIIUUZZ/article/details/103095298"),e(a)]),s(" 首先我们需要了解一下一个vue文件一般由哪些部分组成 单个vue文件被称为单文件组件（Single-File Component，缩写为SFC），其内容为html、css、js的延伸 Vue SFC 是一个框架指定的文件格式，因此必须交由 @vue/compiler-sfc 编译为标准的 JavaScript 和 CSS，一个编译后的 SFC 是一个标准的 "),B]),T,n("p",null,[s("最后让我们看看这个独立部分里面的内容"),X,s("，这里的"+p()+'叫做文本插值，使用"Mustache"语法，它与',1),$,s("标签里定义的msg的数据绑定，"+p(o.msg)+"会被替代为msg的值'Hello world!'，并且保持同步更新",1)]),A,n("p",null,[s("export主要用于对外输出本模块变量的接口，一个文件就可以被理解为一个模块,首先是定义数据对象，使用对象来存放数据。js中{}里的内容表示一个对象，在这里有两种写法，一种是直接定义一个对象，一种是通过一个函数返回一个data对象，基本都用后者，原因参考如下 "),n("a",R,[s("Vue中的data是什么"),e(a)])]),W,n("p",null,[s("除data之外，script层里还可以写其他内容 "),n("a",Y,[s("参考:vue script结构"),e(a)])]),z,n("p",null,[s('样式名为example，在template中使用该样式时加上class="example"即可 此外在标签中可以使用 scoped 等帮助封装当前组件的样式 例如'),G,s("表明该CSS样式只能作用于当前的组件 "),n("a",K,[s("单文件组件 CSS 功能"),e(a)])]),P,Q])}const en=l(r,[["render",nn],["__file","vue单文件组件.html.vue"]]);export{en as default};
