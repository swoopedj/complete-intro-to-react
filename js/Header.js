import React from 'react'
import { Link } from 'react-router'

  /*
  //Problems with es6 classes (inside of component)
  someMethod () {
    this.setState({blah: 'string'})
  }
  <h1 onChange={this.someMethod.bind(this)}

  // OR because calling this.someMethod.bind(this) for every change is expensive
  // inside of constructor . . .
  this.someMethod = this.someMethod.bind(this)
  <h1 onChange={this.someMethod}>

  *** using arrow function can side step the problem

  <h1 onChange={() => {this.someMethod}}>

  */

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
          Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
          svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}
const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
