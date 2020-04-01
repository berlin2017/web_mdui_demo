
var inst = new mdui.Drawer('#drawer');

document.getElementById('toggle').addEventListener('click', function () {
  inst.toggle();
});

var drawer = document.getElementById('drawer')
drawer.addEventListener("open.mdui.drawer",function(argument) {
	// body.
	console.log('open drawer')
})

drawer.addEventListener("opened.mdui.drawer",function(argument) {
	// body.
	console.log('drawer is opened')
})

drawer.addEventListener("closed.mdui.drawer",function(argument) {
	// body.
	console.log('drawer is closed')
})

drawer.addEventListener("close.mdui.drawer",function(argument) {
	// body.
	console.log('close drawer')
})