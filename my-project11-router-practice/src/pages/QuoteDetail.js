import { Route, Link, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from '../components/UI/LoadingSpinner';



const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { quoteId } = params;
    const { senRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        senRequest(quoteId);
    }, [senRequest, quoteId])

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <p className='centered'>{error}</p>

        );
    }

    if (!loadedQuote.text) {
        return <p>NO Quote found!</p>

    }

    return (
        <section>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Loaded Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>

        </section>


    )

};

export default QuoteDetail;