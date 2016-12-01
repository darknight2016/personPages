window.onload = function(){
	// 菜单模块
	var oHeadMenu = document.getElementById('headMenu');
 	var MenuBtn = oHeadMenu.getElementsByTagName('span')[0];
 	var oMenuList = document.getElementById('menuList');
 	MenuBtn.onclick = function(){
 		oMenuList.style.display = oMenuList.style.display =='block' ? 'none' : 'block';
 	};

 	// tab切换模块
 	var oTabsContainer = document.getElementById('tabsContainer');
 	console.log(oTabsContainer);
 	var aTabs = getElementsByClass('tab',oTabsContainer);
 	var oTabsList = document.getElementById('tabsList');
 	var aBtn = oTabsList.getElementsByTagName('li');

 	for(var i = 0;i < aBtn.length;i++){
 		aBtn[i].index = i;
 		aBtn[i].now = false;
 		aBtn[i].onclick = function(){
			for(var j = 0;j < aTabs.length;j++){
 				if(j != this.index){
 					aTabs[j].style.display = 'none';
 				}else{
 					aTabs[j].style.display = 'block';
 				}
 			}	
 		}
 	}
};