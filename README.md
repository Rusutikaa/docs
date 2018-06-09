* [Swift Standard Library Reference 2018.3.29 日本語訳](https://rusutikaa.github.io/developer.apple.com/documentation/swift.html)

* [The Swift Programming Language 2018.3.29 日本語訳](https://rusutikaa.github.io/developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html)

* [Using Swift with Cocoa and Objective-C 2018.3.29 日本語訳](https://rusutikaa.github.io/developer.apple.com/library/content/documentation/Swift/Conceptual/BuildingCocoaApps/index.html)

* [Start Developing iOS Apps (Swift) 2016.12.08 日本語訳](https://rusutikaa.github.io/developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/index.html)

* [Playground Book Format Reference 2018.4.30 日本語訳](https://rusutikaa.github.io/developer.apple.com/library/content/documentation/Xcode/Conceptual/swift_playgrounds_doc_format/index.html)




swift.org に移った Swift Programming Language のHTMLタグの変更に勝手ながら納得がいかない。 &lt;code class="code-voice"&gt;123&lt;/code&gt; が &lt;code class="docutils literal"&gt;&lt;span class="pre"&gt;123&lt;/span&gt;&lt;/code&gt; に変わると文章は変わらなくともOmegaTでは変更となり作業が必要になる。何かが良くなるなら納得できるし、このやり方でいくという方針ならばそれでいい。しかしタグの変更のたびに全く無駄な作業になってしまう。どうしてプログラミング関係のHTMLタグはこう滅茶苦茶なのか、いつもいつも不思議に思う。そもそもこんなHTML文書なんて高度なプログラマー向けではないのだから簡単で扱いやすくしといてくれればいいのに。以下のリストの上が下に変更になったのなどはこのまま続くのか。なぜトリッキーなタグをつけやがるのか。

* &lt;code class="code-voice"&gt;(404, &quot;Not Found&quot;)&lt;/code&gt;

* &lt;code class="docutils literal"&gt;&lt;span class="pre"&gt;(404,&lt;/span&gt; &lt;span class="pre"&gt;&quot;Not&lt;/span&gt; &lt;span class="pre"&gt;Found&quot;)&lt;/span&gt;&lt;/code&gt;
