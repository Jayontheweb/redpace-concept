
import './with-square.styles.scss';


const WithSquare = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <section className="square-wrapper">
            <div className="mega-square-grid">
                <div className="singular-square square-1"></div>
                <div className="singular-square square-2"></div>
                <div className="singular-square square-3"></div>
                <div className="singular-square square-4"></div>
                <div className="singular-square square-5"></div>
                <div className="singular-square square-6"></div>
                <div className="singular-square square-7"></div>
                <div className="singular-square square-8"></div>
                <div className="singular-square square-9"></div>
            </div>
        </section>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSquare;
