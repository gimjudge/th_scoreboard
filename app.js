const title = <h1>My first react Element! </h1>;
const desc = <p>I just learned how to create a react node and render it into the dom.</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);