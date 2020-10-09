import React, {Component} from 'react';

class UserItem extends Component {

    render() {
        //this allows us to destructure so that we dont have to use a constructor and this.state when accessing variable from the state object
        const { login, avatar_url, html_url } = this.props.user;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>
                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btm-sm my-1">More</a>
                </div>
            </div>
        );
    }
}

export default UserItem;