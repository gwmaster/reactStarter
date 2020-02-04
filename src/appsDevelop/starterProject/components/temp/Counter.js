import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Counter = (props) => (
  <div>
    Counter
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,

}

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
