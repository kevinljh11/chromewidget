// chrome.browserAction.onClicked.addListener(function(tab){
// //alert(tab.title);
// chrome.tabs.executeScript({
// code:'document.body.style.backgroundColor="red"'
// });
// });

//新标签创建后触发，此时url可能为空
chrome.tabs.onCreated.addListener(function(tab) {
  alert('tabs.onCreated --'
              + ' window: ' + tab.windowId
              + ' tab: '    + tab.id
              + ' index: '  + tab.index
              + ' url: '    + tab.url);
});
//标签更新
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab1) {
	//alert(changeInfo.status);
	if ( changeInfo.status == 'complete') {
		//alert('onUpdated:'+changeInfo.url+tab.url);
		//chrome.tabs.getCurrent(function(tab1){ 
			console.log(tab1.title); 
			console.log(tab1.url); 
			alert(tab1.title); 
			alert(tab1.url); 
			if (tab1.url.indexOf("qq.com")>0) {
				chrome.tabs.executeScript({
				//code:'document.body.style.backgroundColor="red"'
					code:'window.close()'
				});
			};
		//});
	};
			//window.close();

});

document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.executeScript({
		code:'document.body.style.backgroundColor="red"'
	});
});
