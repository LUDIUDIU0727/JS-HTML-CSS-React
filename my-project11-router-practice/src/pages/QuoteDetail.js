import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
    const params = useParams();
    const DUMMY_QUOTES = [
        { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
        { id: 'q2', author: 'Lulu', text: 'Learning React is difficult!' },

    ];

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.id);
    if (!quote) {
        return <p>NO Quote found!</p>

    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>

        </section>


    )

};

export default QuoteDetail;