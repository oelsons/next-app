import Head from 'next/head'
import Layout from '../components/MyLayout.js'

const Game = (props) => (

<Layout>
  <Head>
    <title>Unity WebGL Player | Block Breaker</title>
    <script src="/pages/game/TemplateData/UnityProgress.js"></script>
    <script src="/pages/game/Build/UnityLoader.js"></script>
    <script dangerouslySetInnerHTML={{ __html: `
      var gameInstance = UnityLoader.instantiate("gameContainer", "/pages/game/Build/Build.json", {onProgress: UnityProgress});
      `}}></script>
  </Head>
  <div class="webgl-content">
    <div id="gameContainer" style="width: 960px; height: 600px"></div>
    <div class="footer">
      <div class="webgl-logo"></div>
      <div class="fullscreen" onclick="gameInstance.SetFullscreen(1)"></div>
      <div class="title">Block Breaker</div>
    </div>
  </div>
</Layout>
)

export default Game