import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Developer"
      },
      show: false,
      mountTime: null
    };
  }

  componentDidMount() {
    this.setState({ mountTime: new Date() });
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    const { person, show, mountTime } = this.state;
    const profile = (
      <div>
        <h2>{person.fullName}</h2>
        <img src={person.imgSrc} alt={person.fullName} />
        <p>{person.bio}</p>
        <p>Profession: {person.profession}</p>
      </div>
    );

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        <div>
          {show && profile}
        </div>
        <p>Time since mount: {mountTime && `${(new Date() - mountTime) / 1000} seconds`}</p>
      </div>
    );
  }
}

export default App;
