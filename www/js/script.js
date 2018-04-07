function hide() {
  document.getElementById('video_1').style.display = 'none';
  document.getElementById('video_2').style.display = 'none';
  document.getElementById('video_3').style.display = 'none';
  document.getElementById('news').style.display = 'none';
}

function show(id) {
  hide()
  document.getElementById(id).style.display = 'block';
}