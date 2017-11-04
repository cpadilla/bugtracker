
class BugList extends React.Component {
    constructor(props) {
        super(props);
        this.bugData = [
            {id:0, priority:'New', status:'Normal', owner:'Chris', title:'Update css file'},
            {id:1, priority:'New', status:'Critical', owner:'Jeff', title:'Add submit bug form'}
        ];
    }

    render() {
        return (
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.bugData}/>
                <hr />
                <BugAdd />
            </div>
        );
    }
}

class BugFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>This section is meant for a filter.</div>
        );
    }
}

class BugTable extends React.Component {
    constructor(props) {
        super(props);
        this.bugRows = this.props.bugs.map(function(bug) {
            return <BugRow key={bug.id} id={bug.id} status={bug.status} priority={bug.priority} owner={bug.owner} title={bug.title}/>
        });
    }

    renderRow(bug) {
        return <BugRow key={bug.id} id={bug.id} status={bug.status} priority={bug.priority} owner={bug.owner} title={bug.title}/>
    }

    render() {
        return (
            <div>
                <table className="table">
                    <tr>
                        <th>ID</th>
                        <th>STATUS</th>
                        <th>PRIORITY</th>
                        <th>OWNER</th>
                        <th>TITLE</th>
                    </tr>
                    <tbody>
                        {this.bugRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class BugAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>This will be a form to add a new bug.</div>
        );
    }
}

class BugRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.status}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.owner}</td>
                <td>{this.props.title}</td>
            </tr>
        );
    }
}

ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);
