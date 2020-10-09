import React, {Component} from 'react';
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users : [
            {
                id : 'id',
                login : 'mojombo',
                avatar_url : 'https://www.gravatar.com/avatar/bd72ad672b055a7d59cfb1c30d1c724f?s=328&d=identicon&r=PG',
                html_url : 'https://stackoverflow.com/users/1439168/miguel-mota'
            },
            {
                id : 'id',
                login : 'kjrkr',
                avatar_url : 'https://www.gravatar.com/avatar/bd72ad672b055a7d59cfb1c30d1c724f?s=328&d=identicon&r=PG',
                html_url : 'https://stackoverflow.com/users/1439168/miguel-mota'
            },
            {
                id : 'id',
                login : 'gjjerdj',
                avatar_url : 'https://www.gravatar.com/avatar/bd72ad672b055a7d59cfb1c30d1c724f?s=328&d=identicon&r=PG',
                html_url : 'https://stackoverflow.com/users/1439168/miguel-mota'
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;