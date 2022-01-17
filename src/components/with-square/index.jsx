
import Square from '../square';




const WithSquare = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <Square />
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSquare;
