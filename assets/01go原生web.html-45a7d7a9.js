import{_ as n,V as s,W as a,a0 as t}from"./framework-41b2e4a5.js";const e={},o=t(`<h1 id="go原生web" tabindex="-1"><a class="header-anchor" href="#go原生web" aria-hidden="true">#</a> Go原生web</h1><p>新建main.go文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;io/ioutil&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// http.http.ResponseWriter:表示响应，从后端传递到前端</span>
<span class="token comment">// *http.Request：表示请求，从前端传递到后端</span>
<span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//读取文件的内容，读取到的是字节</span>
	<span class="token comment">//在该 go文件同目录创建hello.txt文件，写入需要展示的内容</span>
	b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;./hello.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//将文件内容转换成字符串，写入响应 w 中</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注册路由，访问服务地址/hello路径，就会调用sayHello函数</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> sayHello<span class="token punctuation">)</span>
	<span class="token comment">//设置服务监听端口并开启服务</span>
	err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:9090&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;服务启动失败，ERROR:%v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//运行go run main.go</span>
<span class="token comment">//访问localhost:9090/hello，显示文件所写的内容</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","01go原生web.html.vue"]]);export{r as default};
