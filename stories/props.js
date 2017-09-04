const keys = [
  { privateKey: '0x12E67f8FD2E67f8FD2E67f8FD2E67f8FD2E67f8F4E', balance: '12.990', code: 'ETH' },
  { privateKey: '0x22E67f8FD2E67f8FD2E67f8FD2E67f8FD2E67f8F4E', balance: '12.990', code: 'ETH' },
  { privateKey: '0x32E67f8FD2E67f8FD2E67f8FD2E67f8FD2E67f8F4E', balance: '12.990', code: 'ETH' },
  { privateKey: '0x42E67f8FD2E67f8FD2E67f8FD2E67f8FD2E67f8F4E', balance: '12.990', code: 'ETH' },
  { privateKey: '0x52E67f8FD2E67f8FD2E67f8FD2E67f8FD2E67f8F4E', balance: '12.990', code: 'ETH' },
  { privateKey: '0x62E67f8FD2E67f8FD2E67f8FD2E67f8FD2E67f8F4E', balance: '12.990', code: 'ETH' },
]

export default {
  accountsStyle: {
    backgroundColor: '#2d2c3e',
    background: 'linear-gradient(to top, #2d2c3e, #474667)',
  },
  currencyList: [
    { text: 'USD' },
    { text: 'EUR' },
    { text: 'GBK' },
  ],
  loaderStyle: { width: '200px', height: '100px', position: 'relative', border: '3px solid #999' },
  keysManagerProps: {
    setActiveKey: index => { return () => alert(`Key ${index + 1} picked`) },
    addNewKeys: () => alert('addNewKeys handler'),
    importKeys: () => alert('importKeys handler'),
    backupKeys: () => alert('backupKeys handler'),
    clearKeys: () => alert('clearKeys handler'),
    keys: keys,
    active: 1,
  },
  transactions: [{
    type: 'receive',
    symbol: 'ETH',
    status: 'Pending',
    from: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    to: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    txHash: '0x7d6302979fa103b64b9645972774a790b8973e50d9b4771ab3c55e292db0cc1d',
    fee: '0.0005 ETH 1.5 JNT',
    amount: '0.200',
    timestamp: Date.now(),
  }, {
    type: 'send',
    symbol: 'ETH',
    status: 'Accepted',
    from: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    to: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    txHash: '0x7d6302979fa103b64b9645972774a790b8973e50d9b4771ab3c55e292db0cc1d',
    fee: '0.0005 ETH 1.5 JNT',
    amount: '0.200',
    timestamp: Date.now(),
  }, {
    type: 'receive',
    symbol: 'ETH',
    status: 'Rejected',
    from: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    to: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    txHash: '0x7d6302979fa103b64b9645972774a790b8973e50d9b4771ab3c55e292db0cc1d',
    fee: '0.0005 ETH 1.5 JNT',
    amount: '0.200',
    timestamp: Date.now(),
  }, {
    type: 'send',
    symbol: 'ETH',
    status: 'Waiting',
    from: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    to: '0x00360d2b7d240ec0643b6d819ba81a09e40e5bcd',
    txHash: '0x7d6302979fa103b64b9645972774a790b8973e50d9b4771ab3c55e292db0cc1d',
    fee: '0.0005 ETH 1.5 JNT',
    amount: '0.200',
    timestamp: Date.now(),
  }],
}