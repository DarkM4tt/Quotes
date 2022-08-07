import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)
  }
  return <QuoteForm onAddQuoteData={addQuoteHandler} />
}

export default NewQuote
