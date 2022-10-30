import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className=" load bg-danger ">
        <div className='d-flex justify-content-center align-items-center  '>
        <h1 className='   d-flex justify-content-center align-items-center vh-100 bg-success w-100 text-white'>Loading...</h1>
        </div>
        </div>
      </div>
    )
  }
}
