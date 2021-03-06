export const NEW_DERIVATION_PATH_OPEN_MODAL = 'NEW_DERIVATION_PATH_OPEN_MODAL'
export const NEW_DERIVATION_PATH_CLOSE_MODAL = 'NEW_DERIVATION_PATH_CLOSE_MODAL'
export const NEW_DERIVATION_PATH_SET_PASSWORD = 'NEW_DERIVATION_PATH_SET_PASSWORD'
export const NEW_DERIVATION_PATH_SET_KNOWN_PATH = 'NEW_DERIVATION_PATH_SET_KNOWN_PATH'
export const NEW_DERIVATION_PATH_SET_CUSTOM_PATH = 'NEW_DERIVATION_PATH_SET_CUSTOM_PATH'
export const NEW_DERIVATION_PATH_SET_INVALID_FIELD = 'NEW_DERIVATION_PATH_SET_INVALID_FIELD'

export function openNewDerivationPathModal(onClose, accountId, derivationPath) {
  return {
    type: NEW_DERIVATION_PATH_OPEN_MODAL,
    onClose,
    accountId,
    derivationPath,
  }
}

export function closeNewDerivationPathModal() {
  return {
    type: NEW_DERIVATION_PATH_CLOSE_MODAL,
  }
}

export function setDerivationPathPassword(password) {
  return {
    type: NEW_DERIVATION_PATH_SET_PASSWORD,
    password,
  }
}

export function setKnownDerivationPath(knownDerivationPath) {
  return {
    type: NEW_DERIVATION_PATH_SET_KNOWN_PATH,
    knownDerivationPath,
  }
}

export function setCustomDerivationPath(customDerivationPath) {
  return {
    type: NEW_DERIVATION_PATH_SET_CUSTOM_PATH,
    customDerivationPath,
  }
}

export function setNewDerivationPathInvalidField(fieldName, message) {
  return {
    type: NEW_DERIVATION_PATH_SET_INVALID_FIELD,
    fieldName,
    message,
  }
}

const ACTION_HANDLERS = {
  [NEW_DERIVATION_PATH_OPEN_MODAL]: (state, action) => ({
    ...state,
    onClose: action.onClose,
    accountId: action.accountId,
    currentDerivationPath: action.derivationPath,
    isOpen: true,
  }),
  [NEW_DERIVATION_PATH_CLOSE_MODAL]: () => initialState,
  [NEW_DERIVATION_PATH_SET_PASSWORD]: (state, action) => ({
    ...state,
    password: action.password,
    invalidFields: {
      ...state.invalidFields,
      password: '',
    },
  }),
  [NEW_DERIVATION_PATH_SET_KNOWN_PATH]: (state, action) => ({
    ...state,
    knownDerivationPath: action.knownDerivationPath,
  }),
  [NEW_DERIVATION_PATH_SET_CUSTOM_PATH]: (state, action) => ({
    ...state,
    customDerivationPath: action.customDerivationPath,
    invalidFields: {
      ...state.invalidFields,
      customDerivationPath: '',
    },
  }),
  [NEW_DERIVATION_PATH_SET_INVALID_FIELD]: (state, action) => ({
    ...state,
    invalidFields: {
      ...state.invalidFields,
      [action.fieldName]: action.message,
    },
  }),
}

const initialState = {
  invalidFields: {},
  password: '',
  accountId: '',
  currentDerivationPath: '',
  knownDerivationPath: '',
  customDerivationPath: '',
  onClose: null,
  isOpen: false,
}

export default function newDerivationPathModal(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
