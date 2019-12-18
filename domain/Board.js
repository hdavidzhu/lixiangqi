import { List } from 'https://unpkg.com/immutable?module'
import * as Piece from './Piece.js'

export function build () {
  return List([
    List([
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.CHARIOT }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.HORSE }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.ELEPHANT }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.ADVISOR }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.GENERAL }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.ADVISOR }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.ELEPHANT }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.HORSE }),
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.CHARIOT })
    ]),
    List([]),
    List([
      null,
      Piece.build({ color: Piece.COLOR.RED }),
      null,
      null,
      null,
      null,
      null,
      Piece.build({ color: Piece.COLOR.RED }),
      null
    ]),
    List([
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.SOLDIER }),
      null,
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.SOLDIER }),
      null,
      Piece.build({ color: Piece.COLOR.RED, type: Piece.TYPE.SOLDIER })
    ]),
    List([]),
    List([]),
    List([
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.SOLDIER }),
      null,
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.SOLDIER }),
      null,
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.SOLDIER })
    ]),
    List([
      null,
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.CANNON }),
      null,
      null,
      null,
      null,
      null,
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.CANNON }),
      null
    ]),
    List([]),
    List([
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.CHARIOT }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.HORSE }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.ELEPHANT }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.ADVISOR }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.GENERAL }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.ADVISOR }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.ELEPHANT }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.HORSE }),
      Piece.build({ color: Piece.COLOR.BLACK, type: Piece.TYPE.CHARIOT })
    ])
  ])
}
