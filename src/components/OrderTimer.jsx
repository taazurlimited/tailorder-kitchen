import React from 'react';

class OrderTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 0,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const { countdown } = this.state;
      this.setState({ countdown: countdown + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { countdown } = this.state;
    const minutes = Math.floor(countdown / 60);
    const seconds = Math.floor(countdown % 60);

    return (
      <div>
        {minutes}:{seconds}
      </div>
    );
  }
}

export default OrderTimer;
