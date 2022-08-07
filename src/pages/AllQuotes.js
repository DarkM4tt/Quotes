import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Prabhat', text: 'Learning React is fun' },
  { id: 'q2', author: 'Mani', text: 'Learning React is great' },
  { id: 'q3', author: 'Srivastava', text: 'Learning React is typical' },
  { id: 'q4', author: 'DarkM4tt', text: 'Learning React is time-taking' },
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes
