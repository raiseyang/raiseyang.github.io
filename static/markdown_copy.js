// ==UserScript==
// @name         复制成 Markdown 的 Link
// @namespace    https://raiseyang.github.io/
// @version      0.1
// @description  将当前网站链接拷贝成 Markdown 格式
// @author       RaiseYang
// @include        *
// @match        https://blog.csdn.net/**
// @icon         https://raiseyang.github.io/raiseyang/markdown_copy.png
// @grant        GM_setClipboard
// @require     https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js
// @license        MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
      var $ = window.$;

    console.log('复制成 Markdown 的 Link 脚本加载了');
	var button = document.createElement("button"); //创建一个input对象（提示框按钮）
	button.id = "id001";
	button.textContent = "Markdown Link";
    button.style.background="red";
	button.style.width = "100px";
	button.style.height = "40px";
	button.style.position = "fixed";
	button.style.bottom = "100px";
	button.style.right = "20px";

	//绑定按键点击功能
	button.onclick = function (){
		console.log('点击了按键');

        // 当前网站链接
        var link = window.location.href

        let title;

        let CSDNegexp= /.*csdn\.net\/.+/; // 匹配CSDN
        if(CSDNegexp.test(link)){
            console.log("CSDNegexp")

            title = $("#articleContentId").text(); // CSDN的title定制化
        }else {
            console.log("other site")
            title = $(document).attr('title');
        }

		//alert("["+title+"]("+link+")");
        let markdownLink = "["+title+"]("+link+")"; // 拼接成Markdown格式
        GM_setClipboard(markdownLink, "text"); // 复制到剪切板
        console.log('GM_setClipboard='+markdownLink); // 控制台打印，便于调试
		return;
	};

    $("body").append(button); // 添加button按钮

})();