import './PlayerForm.css'

function PlayerForm({ label, name, position, onChange, onSubmit }) {
  return (
    <fieldset className="player-form">
      <legend>{label || 'Team Form'}</legend>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" value={name} onChange={onChange} />

        <label htmlFor="position">Position: </label>
        <input id="position" name="position" type="text" value={position} onChange={onChange} />

        <input type="submit" value={label || 'Submit'} />
      </form>
    </fieldset>
  )
}

export default PlayerForm
