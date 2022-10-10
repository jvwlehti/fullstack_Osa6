import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const AnecdoteSlice = createSlice({  
  name: 'anecdotes',  
  initialState: [],
  reducers: {    
    createAnecdote(state, action) {               
      state.push(action.payload)
    },
    reload(state, action) {
      const changedAnecdote = action.payload
      return state.map( anecdote =>
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      )
    },
    appendAnecdote(state, action) {      
      state.push(action.payload)
    },
    setAnecdotes(state, action) {      
      return action.payload    
    }
  },

})

export const { reload , appendAnecdote, setAnecdotes } = AnecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {  
  return async dispatch => {    
    const newAnecdote = await anecdoteService.createNew(content)    
    dispatch(appendAnecdote(newAnecdote))  
  }
}

export const voteAnecdote = content => {  
  return async dispatch => {
    const votedAnecdote = await anecdoteService.updateVotes(content)
    dispatch(reload(votedAnecdote))
  }
}
export default AnecdoteSlice.reducer