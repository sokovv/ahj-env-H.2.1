
export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
  }

  init() {
    this.gamePlay.drawUi()
    this.gamePlay.redrawPositions()
  }

}
