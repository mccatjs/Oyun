
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>4096</title>

  <link href="style/main.css" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="meta/apple-touch-icon.png">
  <meta name="apple-mobile-web-app-capable" content="yes">

  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div class="container">
    <div class="heading">
      <h1 class="title">4096</h1>
      <div class="scores-container">
        <div class="score-container">0</div>
        <div class="best-container">0</div>
      </div>
    </div>
    <p class="game-intro">Join the numbers and get to the <strong>4096 tile!</strong></p>
    <p class="game-intro">I blog at <a href="https://blog.mjouan.fr" onclick="trackOutboundLink('https://blog.mjouan.fr'); return false;">blog.mjouan.fr</a>, if you want to pay me a visit.</p>
    <div class="game-container">
      <div class="game-message">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Keep going</a>
          <a class="retry-button">Try again</a>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>

      <div class="tile-container">

      </div>
    </div>

    <p class="game-explanation">
      <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
    </p>
    <hr>
    <p>
    A clone of <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli</a>'s <a href="http://git.io/2048">2048</a> game by <a href="http://blog.mjouan.fr/" target="_blank">Matthias Jouan</a>.
    </p>
    <hr>
    <p>
    Key differences from the original 2048 game:
    </p>
    <ul>
      <li>The goal is to get to the <strong>4096</strong> tile</li>
      <li>The grid is <strong>5x5</strong> instead of 4x4</li>
      <li><strong>2 tiles</strong> are added each round instead of 1</li>
    </ul>
  </div>

  <script src="js/animframe_polyfill.js"></script>
  <script src="js/keyboard_input_manager.js"></script>
  <script src="js/html_actuator.js"></script>
  <script src="js/grid.js"></script>
  <script src="js/tile.js"></script>
  <script src="js/local_score_manager.js"></script>
  <script src="js/game_manager.js"></script>
  <script src="js/application.js"></script>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-37428276-3', 'mattjmattj.github.io');
    ga('send', 'pageview');
	  
    var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
    });
}

  </script>

</body>
</html>
