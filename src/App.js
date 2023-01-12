import React, { Component } from 'react'
import Add from './components/Add'
import Header from './components/Header'
import CompletedData from './components/CompletedData'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mission: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      contact: {
        firstName: 'Aaron',
        lastName: 'DUDE',
        title: 'Web Developer',
        email: '',
        phone: ''
      },
      education: [{
        id: 1,
        school: 'Harvard University',
        study: 'Computer Science',
        gpa: '4',
        gradDate: '2010'
      }],
      skills: [{ id: 1, skill: 'Flying' }, { id: 2, skill: 'HTML' }, { id: 3, skill: 'Javascript' }],
      experiences: [{
        id: 1,
        company: 'Cool Company',
        position: 'Technical Support',
        tasks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        dateFrom: '2017',
        dateTo: '2022'
      }]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }

  edit = (input, location) => {
    const result = this.state[location].map(item => {
      if (item.id === input.id) return input
      return item
    })

    this.setState({
      [location]: result
    })
  }

  remove = (input, location) => {
    const filterArray = this.state[location].filter(item => item !== input)

    this.setState({
      [location]: filterArray
    })
  }

  handleChange = (e) => {
    const { name, value, dataset } = e.target
    this.setState(
      {
        [dataset.section]: {
          ...this.state[dataset.section],
          [name]: value
        }
      })
  }

  handleSubmit = (input, location) => {
    this.setState(
      {
        [location]: [
          ...this.state[location],
          ...[input]
        ]
      })
  }

  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <React.StrictMode>
          <Add
            cv={this.state}
            handleChange={this.handleChange}
            submit={this.handleSubmit}
          />
          <CompletedData
            cv={this.state}
            edit={this.edit}
            remove={this.remove}
          />
          </React.StrictMode>
        </div>
      </div>
    )
  }
}

export default App
