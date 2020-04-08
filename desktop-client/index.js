import { React, ReactDOM } from 'https://unpkg.com/es-react/dev'
import htm from 'https://unpkg.com/htm?module'
import * as Board from './domain/Board.js'

const html = htm.bind(React.createElement)

ReactDOM.render(
  html`
    <div>
      ${Board.build().map(line => {
        return line.map(piece => {
          JSON.stringify(piece, null, 2)
        })
      })}
    </div>
  `,
  document.body
)
