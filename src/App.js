class BugList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable />
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
    }

    renderRow(id, status, priority, owner, title) {
        return <BugRow id={id} status={status} priority={priority} owner={owner} title={title}/>
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
                    {this.renderRow(0, 'New', 'Normal', 'Chris', 'Update css file')}
                    {this.renderRow(1, 'New', 'Critical', 'Jeff', 'Add submit bug form')}
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
