import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// var BugList = React.createClass({
//     render: function() {
//         return (
//             <div>The bug list would come here.</div>
//         )
//     }
// });

class BugList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>The bug list would come here.</div>
        );
    }
}

ReactDOM.render(
    <BugList />,
    document.getElementById('example')
);
