import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 5
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  // Add Feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    //console.log('newFeedback', newFeedback, 'feedback', feedback)
    setFeedback([newFeedback, ...feedback])
  }

  // Delete Feedback
  const deleteFeedback = id => {
    if (window.confirm('Are you sure, you want to delete?')) {
      setFeedback(
        feedback.filter(item => {
          return item.id !== id
        })
      )
    }
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map(item => {
        return item.id === id ? { ...item, ...updItem } : item
      })
    )
  }

  // Set item to be updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, // Actual peice of STATE that holds the item
        deleteFeedback,
        addFeedback,
        editFeedback, // Func after click
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
