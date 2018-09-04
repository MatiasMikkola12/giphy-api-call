import React, { Component } from 'react';

class Call extends Component {

static searchWord = (word, limit) =>
`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=AYVMoKQfszsEaFfDO6haD1HIjFVwKPuF&limit=${limit}`


constructor(props) {
    super(props);
    this.state = {};
}

componentDidMount() {
    fetch(Call.searchWord(this.props.word, this.props.limit))
    .then(d => d.json())
    .then(d => {
        this.setState({
            giphy: d
        })
    })
}

  render() {

    if (!this.state.giphy) return <p>aint find gifs</p>
    const gifs = this.state.giphy.data;

    return (
      <div className="Call">
        <p>yup</p>
        {
            gifs.map(gif => (
                <div>
                    <h1>{gif.title}</h1>
                    <img src={gif.images.downsized.url} />
                </div>

            ))
        }
      </div>
    );
  }
}

export default Call;
 