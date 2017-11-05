
class BugList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bugs: [
                {id:0, status:'Closed', priority:'Normal', owner:'Chris', title:'Update css file'},
                {id:1, status:'In Progress', priority:'Critical', owner:'Jeff', title:'Add submit bug form'}
            ]
        }
        this.addBug = this.addBug.bind(this);
    }

    testNewBug() {
        var nextId = this.state.bugs.length + 1;
        this.addBug({id: nextId, priority: 'Normal', status: 'New', owner: 'Chris', title: 'Warning on console'});
    }

    addBug(bug) {
        console.log("Adding bug: ", bug);
        var bugsModified = this.state.bugs.slice();
        bug.id = this.state.bugs.length + 1;
        bugsModified.push(bug);
        this.setState({bugs: bugsModified});
    }

    render() {
        return (
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.bugs}/>
                <hr />
                <BugAdd onSubmit={this.addBug}/>
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
        console.log("BugTable render()");
        this.bugRows = this.props.bugs.map(function(bug) {
            return <BugRow key={bug.id} id={bug.id} status={bug.status} priority={bug.priority} owner={bug.owner} title={bug.title}/>
        });
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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('handle submit');
        var form = document.forms.newBugForm;
        this.props.onSubmit({id: 0, owner: form.owner.value, title: form.title.value, status: 'New', priority: form.priority.value});
        // clear the form for th next input
        form.owner.value = '';
        form.title.value = '';
        form.priority.value = 'Normal'

    }

    render() {
        return (
            <div>
                <form name="newBugForm" onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <th>Priority</th>
                        <th>Owner</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <select name="priority" value="Normal">
                                    <option value="Low">Low</option>
                                    <option value="Normal">Normal</option>
                                    <option value="High">High</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" name="owner"/>
                            </td>
                            <td>
                                <input type="text" name="title"/>
                            </td>
                            <td>
                                <input type="submit" value="Add Bug" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
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
