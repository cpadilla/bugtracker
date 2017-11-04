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

    render() {
        return (
            <div>This will be a table to list all the bugs.</div>
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

ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);
