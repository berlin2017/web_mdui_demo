var inst = new mdui.Tab('#tab');

document.getElementById('tab').addEventListener('change.mdui.tab', function (event) {
  console.log('event: change; tab: ' + event._detail.index);
});

document.getElementById('tab1').addEventListener('show.mdui.tab', function () {
  console.log('event: show; tab: 0');
});

document.getElementById('tab2').addEventListener('show.mdui.tab', function () {
  console.log('event: show; tab 1');
});

document.getElementById('tab3').addEventListener('show.mdui.tab', function () {
  console.log('event: show; tab 2');
});
