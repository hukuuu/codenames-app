import React from 'react'

export default ({ color, title, full, children }) => (
  <div style={full ? styles.fullSlot : styles.halfSlot}>
    <span
      style={{
        ...styles.title,
        color
      }}
    >
      {title}
    </span>
    <div style={styles.content}>{children}</div>
  </div>
)

const styles = {}
styles.slot = {
  display: 'flex',
  height: '50vw',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'column'
}
styles.fullSlot = {
  ...styles.slot,
  width: '100vw'
}
styles.halfSlot = {
  ...styles.slot,
  width: '50vw'
}
styles.content = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  alignSelf: 'stretch'
}
styles.title = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
}
