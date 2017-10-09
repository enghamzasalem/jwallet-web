import { connect } from 'react-redux'

import {
  closeNewKeyModal,
  setNewKeyMnemonic,
  setNewKeyMnemonicConfirm,
  setNewKeyPassword,
  setNewKeyPasswordConfirm,
  setNewKeyCurrentStep,
  setNewKeyValidField,
  setNewKeyInvalidField,
  setNewKeyAlert,
  saveMnemonicToFile,
  createKeystoreAccount,
} from 'routes/JWallet/modules/keystore'

import NewKeyModal from './NewKeyModal'

const mapStateToProps = state => ({
  keystore: state.keystore,
})

const mapDispatchToProps = {
  closeNewKeyModal,
  setNewKeyMnemonic,
  setNewKeyMnemonicConfirm,
  setNewKeyPassword,
  setNewKeyPasswordConfirm,
  setNewKeyCurrentStep,
  setNewKeyValidField,
  setNewKeyInvalidField,
  setNewKeyAlert,
  saveMnemonicToFile,
  createKeystoreAccount,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewKeyModal)