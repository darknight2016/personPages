// jQuery插件编写方法
//一、 对象级别的插件
;(function($){
	$.fn.extend({
		'函数名': function(自定义参数){
			// 这里写插件代码
			alert('这里写插件代码');
		}
	});
})(jQuery);
//或者
;(function($){
	$.fn.funName = function(自定义参数){
		// 同上
	}
});
// 调用方法：$('#id').函数名(参数);



// 二、jQuery类级别的插件，相当于添加静态方法
;(function($){
	$.extend({
		'函数名': function(自定义参数){
			// 这里写插件代码
		}
	});
})(jQuery);
// 或者
;(function($){
	$.funName = function(自定义参数){
		// 这里写插件代码
	};
})(jQuery);