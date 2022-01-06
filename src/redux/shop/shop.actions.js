import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccsess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCSESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccsess(collectionsMap));
            }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}

