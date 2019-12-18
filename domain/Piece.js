export const COLOR = Object.freeze({
  BLACK: 'BLACK',
  RED: 'RED'
})

export const TYPE = Object.freeze({
  ADVISOR: 'ADVISOR',
  CANNON: 'CANNON',
  CHARIOT: 'CHARIOT',
  ELEPHANT: 'ELEPHANT',
  GENERAL: 'GENERAL',
  HORSE: 'HORSE',
  SOLDIER: 'SOLDIER'
})

export function build (options) {
  return Object.freeze({
    color: options.color,
    type: options.type
  })
}
