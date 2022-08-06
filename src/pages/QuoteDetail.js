import { Fragment } from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
  const params = useParams()

  return (
    <Fragment>
      <h1>Quote Details Page.</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}></Route>
      <Comments />
    </Fragment>
  )
}

export default QuoteDetails
