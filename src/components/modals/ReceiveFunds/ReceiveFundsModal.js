import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import BigNumber from 'bignumber.js'

import i18n from 'i18n/en'
import config from 'config'
import qrCode from 'services/qrCode'

import { CopyableField, SubmitModal } from 'components'
import JTextInput from 'components/base/JTextInput'

const { placeholder } = i18n.modals.receiveFunds

class ReceiveFundsModal extends SubmitModal {
  renderModalBody = () => {
    return (
      <div>
        {this.renderAmmount()}
        {this.renderRecipientAddress()}
        {this.renderQRCode()}
      </div>
    )
  }

  renderAmmount = () => {
    const { setReceiveFundsAmount, amount } = this.props

    return (
      <JTextInput
        onValueChange={setReceiveFundsAmount}
        name={'amount'}
        placeholder={placeholder.amount}
        value={amount}
        editable
      />
    )
  }

  renderRecipientAddress = () => {
    return <CopyableField placeholder={placeholder.address} value={this.props.currentAddress} />
  }

  renderQRCode = () => {
    return <div id='qr-code' style={{ textAlign: 'center' }} />
  }

  generateQRCodeToReceive = () => {
    const { currentAddress, amount } = this.props
    const amountWei = parseFloat(amount, 10) * (10 ** config.defaultDecimals)

    return qrCode.generate({
      requisites: {
        to: currentAddress,
        value: new BigNumber(amountWei.toFixed(0), 10),
      },
    })
  }

  isModalButtonDisabled = () => {
    const { amount, currentAddress } = this.props

    const isAmountInvalid = /[^\d.]/.test(amount)
    const isAmountLte0 = (isAmountInvalid || (parseFloat(amount, 10) || 0) <= 0)
    const isAddressInvalid = isEmpty(currentAddress)

    return (isAmountLte0 || isAddressInvalid)
  }

  closeModal = () => this.props.closeReceiveFundsModal()
  submitModal = () => this.generateQRCodeToReceive()
}

ReceiveFundsModal.propTypes = {
  closeReceiveFundsModal: PropTypes.func.isRequired,
  setReceiveFundsAmount: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  modalName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  /* optional */
  onClose: PropTypes.func,
  currentAddress: PropTypes.string,
}

ReceiveFundsModal.defaultProps = {
  ...SubmitModal.defaultProps,
  onClose: () => {},
  currentAddress: '',
}

export default ReceiveFundsModal
