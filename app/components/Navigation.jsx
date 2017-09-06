var React = require('react');
var {Link, IndexLink} = require('react-router');

class Navigation extends React.Component {
    render () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Time App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>React Time App</IndexLink>
                        </li>
                        <li>
                            <Link to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/Ante994" target="_blank"> Ante Domjanovic</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
module.exports = Navigation;
