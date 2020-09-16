import React from 'react'
import ReactDOM from 'react-dom'

class Busca extends React.Component {
    constructor (props) {
        super()
        this.state = {value: ''};
    }

    render() {
        return (
            <div>
                <label>
                    Busca:
                </label>
                <form>
                    <input type="text" value={this.state.value} />
                </form>
                <input type="submit" value="Trazer dados" />
            </div>
        )
    }
}

export default Busca