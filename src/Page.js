import React from 'react'

const styles = {
  room: {
    display: 'flex',
    flex: 1
  }
}

export default ({ children }) => <div style={styles.room}>{children}</div>
