const USER_DATA = {
  name: 'Codemzy',
  username: 'codemzy',
  image: 'https://pbs.twimg.com/profile_images/701827019198300160/im0uC1ma.jpg'
};

var React = require('react');
var ReactDOM = require('react-dom');

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
}

class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} />
    );
  }
}

class Link extends React.Component {
  
  _changeUrl() {
    window.location.replace(this.props.href);
  }
  
  render() {
    return (
      <span onClick={this._changeUrl.bind(this)}>
        {this.props.children}
      </span>
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <Link href={'http://www.github.com/' + this.props.username}>{this.props.username}</Link>
      </div>
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));