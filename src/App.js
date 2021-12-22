import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App () {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    //console.log('newFeedback', newFeedback, 'feedback', feedback)
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = id => {
    if (window.confirm('Are you sure, you want to delete?')) {
      setFeedback(
        feedback.filter(item => {
          return item.id !== id
        })
      )
    }
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
