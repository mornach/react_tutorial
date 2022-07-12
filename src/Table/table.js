import { Comments } from "./Commetns/Comments";
import { useState } from 'react'


function TableRow(user) {
    const [completed, setCompleted] = useState(user.completed)
    function switchCompleted() {
        setCompleted(prev => !prev)
    }
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td onClick={switchCompleted}>{completed.toString()}</td>
            <td>
                <Comments user_id={user.id}></Comments>
            </td>
        </tr>
    );
}

export function Table(props) {
    const tableRows = props.users.map((user) => {
        return TableRow(user)
    });

    return (
        <div>
            <table id={props.id} className="table table-stripped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>completed</th>
                        <th>comments</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
}

