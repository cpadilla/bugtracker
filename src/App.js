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
