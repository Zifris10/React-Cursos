import LoadingQuote from '../03-examples/LoadingQuote';
import Quote from '../03-examples/Quote';
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';

const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <div className='container'>
            <h1>Breaking Quotes</h1>
            <hr />
            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }
            <button disabled={isLoading} className='btn btn-primary' onClick={() => increment(1)}>
                Next quote
            </button>
        </div>
    )
};

export default Layout;
