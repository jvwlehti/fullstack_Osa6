import { createSlice } from "@reduxjs/toolkit";

const initialState = ''
let timeoutID = 0

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotif(state, action){
            state = action.payload
            clearTimeout(timeoutID)
            return action.payload
        },

        clearNotif(state, action) {
            return ''
        }
    }

})

export const { setNotif, clearNotif } = notificationSlice.actions

export const notifier = (message, timeout) => {
    return async dispatch => {
    dispatch(setNotif(message))
      timeoutID = setTimeout(() => {
        dispatch(clearNotif())
      }, timeout)
    }
}

export default notificationSlice.reducer

