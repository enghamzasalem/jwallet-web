import PropTypes from 'prop-types'

import i18n from 'i18n/en'

import SubmitModal from 'components/SubmitModal'

class BackupKeystoreModal extends SubmitModal {
  renderModalBody = () => ''

  backupKeystore = () => {
    const { backupKeystore, password } = this.props

    backupKeystore(password, this.closeModal, this.setIncorrectPassword)
  }

  setIncorrectPassword = () => {
    const errorMessage = i18n.modals.backupKeysore.error.password.invalid

    this.props.setBackupKeystoreInvalidField('password', errorMessage)
    this.shake()
  }

  submitModal = () => this.backupKeystore()
  closeModal = () => this.props.closeBackupKeystoreModal()
  setPassword = password => this.props.setBackupKeystorePassword(password)
}

BackupKeystoreModal.propTypes = {
  closeBackupKeystoreModal: PropTypes.func.isRequired,
  setBackupKeystorePassword: PropTypes.func.isRequired,
  setBackupKeystoreInvalidField: PropTypes.func.isRequired,
  backupKeystore: PropTypes.func.isRequired,
  invalidFields: PropTypes.shape({}).isRequired,
  password: PropTypes.string.isRequired,
  modalName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  /* optional */
  onClose: PropTypes.func,
}

BackupKeystoreModal.defaultProps = {
  ...SubmitModal.defaultProps,
  onClose: () => {},
}

export default BackupKeystoreModal
