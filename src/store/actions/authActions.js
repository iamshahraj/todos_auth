import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_END,
    AUTH_START,
    CLEAN_UP
} from "./authTypes";

// signup action creator
export const signUp = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({
        type: AUTH_START
    })
    try {
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);

        await firestore
            .collection('Users')
            .doc(res.user.uid)
            .set({
                firstName: data.firstName,
                lastName: data.lastName
            })

        dispatch({
            type: AUTH_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: AUTH_FAIL,
            payload: error.message
        })
    }
    dispatch({
        type: AUTH_END
    })
}

// signout action creator
export const signOut = (_) => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
        await firebase.auth().signOut()
    } catch (error) {
        console.error(error);

    }
}

// Login action creator
export const logIn = data => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({
        type: AUTH_START
    })
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

        dispatch({
            type: AUTH_SUCCESS
        })
    } catch (error) {
        console.error(error);
        dispatch({
            type: AUTH_FAIL,
            payload: error.message
        })
    }
    dispatch({
        type: AUTH_END
    })
}

// cleanup messages action creator
export const clean = (_) => async (dispatch) => {
    dispatch({
        type: CLEAN_UP
    })
}