import React from 'react'
import axios from 'axios'



export default class PersonList extends React.Component {
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
