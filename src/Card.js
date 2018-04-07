import React from 'react'

export default ({ card, key }) => (
  <span
    style={{
      ...styles.card,
      color: card.color
    }}
    key={key}
  >
    {card.text}
  </span>
)
const styles = {
  card: {
    alignItems: 'center',
    background: '#f6e4c4',
    border: '3px solid grey',
    borderRadius: '0.7rem',
    display: 'flex',
    fontSize: '20px',
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: '0 .3rem',
    marginBottom: '.4rem',
    padding: '0.4rem',
    textTransform: 'uppercase'
  }
}
