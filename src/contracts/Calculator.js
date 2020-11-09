export const calculator_address = '0x18620F3e7d3e7Dd99aAE34102016fF533A1C4249'
export const calculator_abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'adderContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'suberContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'multiplierContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'divisorContract',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nb1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nb2',
        type: 'uint256',
      },
    ],
    name: 'add',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nb1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nb2',
        type: 'uint256',
      },
    ],
    name: 'sub',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nb1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nb2',
        type: 'uint256',
      },
    ],
    name: 'mul',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nb1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nb2',
        type: 'uint256',
      },
    ],
    name: 'div',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
]
