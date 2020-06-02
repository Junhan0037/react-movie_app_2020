import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if (location.state) {
            return <span className="detail__title">{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;