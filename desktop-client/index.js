import { React, ReactDOM } from 'https://unpkg.com/es-react/dev'
import htm from 'https://unpkg.com/htm?module'
import * as Board from './domain/Board.js'

const html = htm.bind(React.createElement)

ReactDOM.render(
  html`
    <div>
      <pre>
        ${JSON.stringify(Board.build(), null, 2)}
      </pre
      >
    </div>
  `,
  document.body
)
