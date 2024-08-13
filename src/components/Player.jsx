import { useState } from "react"

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditButton() {
    setIsEditing(editing => !editing) // Not using !isEditing for better working button
  }

  let playerName = <span className="player-name">{name}</span>

  if (isEditing) {
    playerName = <input type="text" required value={name} />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}