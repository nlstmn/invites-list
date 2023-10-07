import React, { Component } from "react";

class PropsDynamic fetchData extends Component {
    state = {
        data: null,
        loading: null,
        error: null
    }

    fetchData = async () => {
        this.setState({ loading: true })
        try {
            const response = await fetch("https://nsfnsk.com")
            const data = response.json();
            this.setState({ data, loading: false })
        } catch (error) {
            this.setState({ error, loading: false })
        }
    }

    render() {
        const { data, loading, error } = this.state
        return (
            this.props.render(data, loading, error, this.fetchData)
        );
    }
}
