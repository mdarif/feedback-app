import PropTypes from 'prop-types'

function FeedbackStats ({ feedback }) {
  //Calculate readings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  //average = average.toFixed()

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats
