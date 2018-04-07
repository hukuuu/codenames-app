import React from 'react'

export default ({ hint }) => (
  <div
    style={{
      ...styles.hint,
      color: hint ? hint.color : 'crimson'
    }}
  >
    {hint ? hint.text : 'Lord of the rings - 4'}
  </div>
)

const styles = {}

styles.hint = {
  color: 'crimson',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2em'
}
