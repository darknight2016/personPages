// function
// 类选择器
var getElementsByClass = function(className,obj){
	var _Array = [],
	_classInt = 0;
	// console.log(obj);
	_obj = obj || document,
	_tags = _obj.getElementsByTagName('*');
	console.log(_obj);
	for(var i in _tags){
		console.log(_tags);
		if(_tags[i].nodeType == 1 && _tags[i].getAttribute('class') == className){
			/*
			_Array[_classInt] = tags[i];
			_classInt ++;
			*/
			_Array.push(_tags[i]);
		}
	}

	return _Array;
};