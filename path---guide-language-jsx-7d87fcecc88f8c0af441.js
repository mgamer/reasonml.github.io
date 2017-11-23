webpackJsonp([34],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-jsx.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}}]},file:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{html:'<p>Would you like some HTML syntax in your Reason? If not, quickly skip over this section and pretend you didn\'t see anything!</p>\n<p>Reason supports the JSX syntax, with some slight differences compared to the one in <a href="https://facebook.github.io/react/docs/introducing-jsx.html">ReactJS</a>. Reason JSX isn\'t tied to ReactJS; they translate to normal function calls:</p>\n<p><strong>Note</strong> for <a href="//reasonml.github.io/reason-react/">ReasonReact</a> readers: this isn\'t what ReasonReact turns JSX into, in the end. See Usage section for more info.</p>\n<h3 id="capitalized-tag"><a href="#capitalized-tag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Capitalized Tag</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span> foo={bar} /&gt;</code></pre>\n      </div>\n<p>becomes</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-type">MyComponent</span>.make(~foo=bar, ~children=[], ());</code></pre>\n      </div>\n<h3 id="uncapitalized-tag"><a href="#uncapitalized-tag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Uncapitalized Tag</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;div foo={bar}&gt; child1 child2 &lt;/div&gt;;</code></pre>\n      </div>\n<p>becomes</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>([@<span class="hljs-type">JSX</span>] div(~foo=bar, ~children=[child1, child2], ()));</code></pre>\n      </div>\n<h3 id="children"><a href="#children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Children</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span>&gt; foo bar &lt;/<span class="hljs-type">MyComponent</span>&gt;</code></pre>\n      </div>\n<p>This is the syntax for passing a list of two items, <code>foo</code> and <code>bar</code>, to the children position. It desugars to a list containing <code>foo</code> and <code>bar</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>([@<span class="hljs-type">JSX</span>] <span class="hljs-type">MyComponent</span>.createElement(~children=[foo, bar], ()));</code></pre>\n      </div>\n<p><strong>Note</strong> again that this isn\'t the transform for ReasonReact; ReasonReact turns the final list into an array. But the idea still applies.</p>\n<p>So naturally, <code>&#x3C;MyComponent> foo &#x3C;/MyComponent></code> desugars to <code>([@JSX] MyComponent.createElement(~children=[foo], ()))</code>. I.e. whatever you do, the arguments passed to the children position will be wrapped in a list. What if you don\'t want that? <strong>What if you want to directly pass <code>foo</code> without an extra wrapping</strong>?</p>\n<h4 id="children-spread"><a href="#children-spread" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Children Spread</h4>\n<p>To solve the above problem, we\'ve introduced</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span>&gt; ...foo &lt;/<span class="hljs-type">MyComponent</span>&gt;</code></pre>\n      </div>\n<p>This passes the value <code>foo</code> <em>without</em> wrapping it in a list (or array, in the case of ReasonReact). Aka, this desugars to:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>([@<span class="hljs-type">JSX</span>] <span class="hljs-type">MyComponent</span>.createElement(~children=foo, ()));</code></pre>\n      </div>\n<p>This is extra useful in the cases where you are handled <code>foo</code> that is already a list of things, and want to forward that without wrapping it an extra time (which would be a type error) *. It also allows you to pass arbitrary data structures at <code>children</code> position (remember, JSX <code>children</code> is really just a totally normal prop):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span>&gt; ...((theClassName) =&gt; &lt;div className=theClassName /&gt;) &lt;/<span class="hljs-type">MyComponent</span>&gt;;\n&lt;<span class="hljs-type">MyForm</span>&gt; ...(<span class="hljs-string">"Hello"</span>, <span class="hljs-string">"Submit"</span>) &lt;/<span class="hljs-type">MyForm</span>&gt;;</code></pre>\n      </div>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>See <a href="//reasonml.github.io/reason-react/docs/jsx">ReasonReact</a> for an example application of JSX, which transforms the above calls into a ReasonReact-specific call.</p>\n<p>Here\'s a JSX tag that shows most of the features.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span>\n  booleanAttribute={<span class="hljs-literal">true</span>}\n  stringAttribute=<span class="hljs-string">"string"</span>\n  intAttribute=<span class="hljs-number">1</span>\n  forcedOptional=?{<span class="hljs-type">Some</span>(<span class="hljs-string">"hello"</span>)}\n  onClick={<span class="hljs-built_in">reduce</span>(handleClick)}&gt;\n  &lt;div&gt; {<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"hello"</span>)} &lt;/div&gt;\n&lt;/<span class="hljs-type">MyComponent</span>&gt;</code></pre>\n      </div>\n<h3 id="departures-from-js-jsx"><a href="#departures-from-js-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Departures From JS JSX</h3>\n<ul>\n<li>Attributes and children don\'t mandate <code>{}</code>, but we show them anyway for ease of learning. Once you <code>refmt</code> your file, some of them go away and some turn into parentheses.</li>\n<li>There is no support for JSX prop spread: <code>&#x3C;Foo {...bar} /></code>. Though somewhat related, we do have children spread, described above: <code>&#x3C;Foo> ...baz &#x3C;/Foo></code>.</li>\n<li>Punning!</li>\n</ul>\n<h4 id="punning"><a href="#punning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Punning</h4>\n<p>"Punning" refers to the syntax shorthand for when a label and a value are the same. For example, in JavaScript, instead of doing <code>return {name: name}</code>, you can do <code>return {name}</code>.</p>\n<p>Reason JSX supports punning. <code>&#x3C;input checked /></code> is just a shorthand for <code>&#x3C;input checked=checked /></code>. The formatter will help you format to the latter whenever possible. This is convenient in the cases where there are lots of props to pass down:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span> isLoading text onClick /&gt;</code></pre>\n      </div>\n<p>Consequently, a Reason JSX component can cram in a few more props before reaching for extra libraries solutions that avoids props passing.</p>\n<p><strong>Note</strong> that this is a departure from ReactJS JSX, which does <strong>not</strong> have punning. ReactJS\' <code>&#x3C;input checked /></code> desugars to <code>&#x3C;input checked=true /></code>, in order to conform to DOM\'s idioms and for backward compatibility.</p>\n<h3 id="tip--tricks"><a href="#tip--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tip &#x26; Tricks</h3>\n<p>For library authors wanting to take advantage of the JSX: the <code>[@JSX]</code> attribute above is a hook for potential ppx macros to spot a function wanting to format as JSX. Once you spot the function, you can turn it into any other expression.</p>\n<p>This way, everyone gets to benefit the JSX syntax without needing to opt into a specific library using it, e.g. ReasonReact.</p>\n<p>JSX calls supports the features of <a href="/guide/language/function#labeled-arguments">labeled functions</a>: optional, explicitly passed optional and optional with default.</p>\n<h3 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h3>\n<p>The way we designed this JSX is related to how we\'d like to help the language evolve. See the section "What\'s the point?" in <a href="https://medium.com/@chenglou/cool-things-reason-formatter-does-9e1f79e25a82">this blog post</a>.</p>\n<p>The ability to have macros in the language + the library-agnostic JSX syntax allows every library to potentially have JSX without hassle. This way, we add some visual familiarities to the underlying OCaml language without compromising on its semantics (aka how it executes). One big goal of Reason is to let more folks take advantage of the beautiful language that is OCaml, while discarding the time-consuming debates around syntax and formatting.</p>\n<p>* You might wonder why you never needed such children spread in ReactJS; ReactJS uses some special runtime logic + special syntax transforms + variadic argument detection &#x26; marking to avoid most of these cases (<a href="https://github.com/facebook/react/blob/9b36df86c6ccecb73ca44899386e6a72a83ad445/packages/react/src/ReactElement.js#L207">see here</a>). Such dynamic usage complexifies the type system detection <em>quite a bit</em>. Since we control the whole syntax and ReasonReact, we decided to introduce children spread to disambiguate between the case of wrapping vs not wrapping, without compile-time &#x26; runtime cost!</p>',frontmatter:{title:"JSX"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/jsx.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-jsx-7d87fcecc88f8c0af441.js.map