'use strict'; // To enable strict mode and modern JavaScript functionality. Without this, the code will not work.

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this. 💙';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like ❤️'
    );
  }
}

const domContainer = document.querySelector('#like-button');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));