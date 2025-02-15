class FartAudio extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("audio", { id: this.props.id, src: this.props.src }));

  }}


class FartButton extends React.Component {
  toggleShake() {

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("button", { onClick: this.props.onClick, className: "fart-button", id: this.props.id }, this.props.children));

  }}


class Container extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: this.props.id, className: this.props.class }, this.props.children));

  }}


class Soundboard extends React.Component {
  constructor() {
    super();
    this.state = {
      fartSources: [
      {
        description: 'bath tub',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/bathtub.ogg' },

      {
        description: 'shart',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/shart.ogg' },

      {
        description: 'wet fart',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/wetfart.ogg' },

      {
        description: 'fart',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/fart1.ogg' },

      {
        description: 'ripper',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/rip.ogg' },

      {
        description: 'quick fart',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/quickfart.ogg' },

      {
        description: 'fart 2',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/fart2.ogg' },

      {
        description: 'fart 3',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/fart3.ogg' },

      {
        description: 'fart 4',
        src: 'http://www.soundboardcity.com/sounds/fart-machine/fart4.ogg' }] };



  }
  playSound(id) {
    const farts = this.state.fartSources;
    const len = farts.length;
    const random = Math.floor(Math.random() * len) + 1;
    console.log(random);
    const sound = document.getElementById('fart-noise-' + random);
    sound.play();
  }
  renderAudio() {
    const renderables = [];
    for (let i = 0; i < this.state.fartSources.length; i += 1) {
      renderables.push( /*#__PURE__*/
      React.createElement(FartAudio, { id: "fart-noise-" + (i + 1), src: this.state.fartSources[i].src }));

    }
    console.log(renderables);
    return renderables;
  }
  renderButtons() {
    return /*#__PURE__*/(
      React.createElement(FartButton, {
        onClick: () => {
          this.playSound();
          this.showName();
        },
        onTouch: () => {
          this.playSound();
          this.showName();
        } }, "FART"));

  }
  render() {
    return /*#__PURE__*/(
      React.createElement(Container, { id: "soundboard-container", class: "container" }, /*#__PURE__*/
      React.createElement(Container, { id: "audio-container", class: "container" },
      this.renderAudio()), /*#__PURE__*/

      React.createElement(Container, { id: "button-container",
        class: "container" },
      this.renderButtons())));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Soundboard, null),
document.getElementById('fart-soundboard-container'));