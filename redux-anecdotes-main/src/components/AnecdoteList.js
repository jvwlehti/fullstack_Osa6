import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotif, clearNotif, notifier } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      const filteredAnecdotes = state.anecdotes.filter(anecdote => 
        anecdote.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1)
      const sortedAnecdotes = [...filteredAnecdotes].sort((a,b) => b.votes - a.votes)
      return sortedAnecdotes
    })

    const dispatch = useDispatch()
    const vote = (anecdote) => {
      dispatch(voteAnecdote(anecdote))
      dispatch(notifier(`'${anecdote.content}' has been voted on`, 4500))
  }

return(        
    <div>
   {anecdotes.map(anecdote =>
     <div key={anecdote.id}>
         <div>
           {anecdote.content}
         </div>
         <div>
            has {anecdote.votes}
         <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
    )
}

export default AnecdoteList
