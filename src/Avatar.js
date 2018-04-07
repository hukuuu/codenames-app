import React from 'react'

const url =
  'https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-0/c0.68.370.370/p370x247/14125040_10206780491618675_2081117351407572647_o.jpg?_nc_cat=0&oh=f3bb9ee02a0747914130ebb4eea558ad&oe=5B716C0B'

const emptyUrl =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzIwMCcgd2lkdGg9JzIwMCcgIGZpbGw9IiMwMDAwMDAiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpIj48cGF0aCBzdHlsZT0idGV4dC1pbmRlbnQ6MDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7Y29sb3I6IzAwMDAwMDtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlOyIgZD0ibSA1MCw5NzcuMzYyMTYgYyAtMS4xMDQ2LDAgLTIsMC44OTU0NCAtMiwyIGwgMCwyMS4wMDAwNCAtMjEsMCBjIC0xLjEwNDU3LDAgLTIsMC44OTU0IC0yLDIgMCwxLjEwNDYgMC44OTU0MywyIDIsMiBsIDIxLDAgMCwyMSBjIDAsMS4xMDQ2IDAuODk1NCwyIDIsMiAxLjEwNDYsMCAyLC0wLjg5NTQgMiwtMiBsIDAsLTIxIDIxLDAgYyAxLjEwNDU3LDAgMiwtMC44OTU0IDIsLTIgMCwtMS4xMDQ2IC0wLjg5NTQzLC0yIC0yLC0yIGwgLTIxLDAgMCwtMjEuMDAwMDQgYyAwLC0xLjEwNDU2IC0wLjg5NTQsLTIgLTIsLTIgeiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIG1hcmtlcj0ibm9uZSIgdmlzaWJpbGl0eT0idmlzaWJsZSIgZGlzcGxheT0iaW5saW5lIiBvdmVyZmxvdz0idmlzaWJsZSI+PC9wYXRoPjwvZz48L3N2Zz4='

export default ({ color, small, empty }) => {
  const style = small ? styles.smallImg : styles.largeImg

  return (
    <img
      style={{ ...style, borderColor: color }}
      src={empty ? emptyUrl : url}
    />
  )
}
const styles = {}
styles.img = {
  border: '3px solid',
  borderRadius: '50%',
  padding: '2px'
}
styles.smallImg = {
  ...styles.img,
  width: '15vw',
  height: '15vw'
}
styles.largeImg = {
  ...styles.img,
  width: '20vw',
  height: '20vw'
}
