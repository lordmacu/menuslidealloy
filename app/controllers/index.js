function doClick(e) {
    alert($.label.text);
}

//$.index.open();
Alloy.createController('menu').getView().open({
			animate : true
});