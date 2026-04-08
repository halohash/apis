fetch("https://halohash.github.io/apis/news/news.html")
  .then(t => t.text())
  .then(xbla => {
    window.windowtemple = xbla;
    w.doAnnounce(window.windowtemple);
  });
