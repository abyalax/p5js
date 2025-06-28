class StartButton {

  /**
   * @constructor
   * @param {string} text Text untuk maksud penggunaan tombol
   * @param {number} x X position
   * @param {number} y Y position
   */
  constructor(text, x, y) {
    this.text = text
    this.x = x
		this.y = y
		this.button = createButton(this.text);
  }
  
  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
    this.button.addClass('action-button');
    this.button.mousePressed(() => this.changeScreen())
  }
  
  changeScreen() {
		this.button.remove();
		this.button = null;
		g_currentScreen = 'gameScreen';
  }
}