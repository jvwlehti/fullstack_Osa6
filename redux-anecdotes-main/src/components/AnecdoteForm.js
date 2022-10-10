import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { notifier } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      props.createAnecdote(content)
      props.notifier(`'${content}' has been created`, 4500)
    }

    return (
    <div>
      <h2>create new</h2>
       <form onSubmit={addAnecdote}>
          <input name="anecdote" />
          <button type="submit">create</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  notifier 
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)