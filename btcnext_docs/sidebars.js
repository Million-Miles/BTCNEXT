module.exports = {
  docs: [
    {
      type: 'category',
      label: '从这开始',
      collapsed: false,
      items: [
        'quick_start/introduction',
      ],
    },
    {
      type: 'category',
      label: 'BTC技术演进',
      collapsed: false,
      items: [
        'btcfork/btcfork',
      ],
    },
    {
      type: 'category',
      label: 'Ordinals',
      collapsed: true,
      items: [
        'ordinals/ordinals',
        {
          type: 'category',
          label: 'BRC20',
          collapsed: false,
          items: [
            'ordinals/BRC20/BRC20',
            'ordinals/BRC20/BRC20Assets',
            'ordinals/BRC20/BRC20S',
            'ordinals/BRC20/BRC21',
            'ordinals/BRC20/ORC20',
          ],
        },
          'ordinals/BRC69',
          'ordinals/BRC100',
          'ordinals/BRC420',
          'ordinals/BRC721',
          'ordinals/Runes',
          'ordinals/TapProtocol',
      ],
    },
    {
      type: 'category',
      label: 'Atomicals',
      collapsed: true,
      items: [
          'atomicals/atomicals',
          'atomicals/ARC20',
          'atomicals/NFT',
          'atomicals/Realm',
      ],
    },
    {
      type: 'category',
      label: '闪电网络',
      collapsed: true,
      items: [
           'lightning/LightningLabs',
           'lightning/LightningNetwork',
           'lightning/TaprootAssets',
      ],
    },
    {
      type: 'category',
      label: '图灵完备扩展',
      collapsed: true,
      items: [
           'turing/turing',
           'turing/RGB',
           'turing/BitVM',
      ],
    },
    {
      type: 'category',
      label: 'STAMPS',
      collapsed: true,
      items: [
           'stamps/stamps',
      ],
    },
    {
      type: 'category',
      label: 'chainsl2',
      collapsed: true,
      items: [
           'chainsl2/chainsl2',
           'chainsl2/MVC',
           'chainsl2/Sidechains',
           'chainsl2/Softchains',
           'chainsl2/Spiderchains',
           'chainsl2/Stacks',
      ],
    },
    {
      type: 'category',
      label: '其他协议',
      collapsed: true,
      items: [
           'other/ColoredCoins',
           'other/DLCs',
           'other/Interlay',
           'other/Libre',
           'other/Omni',

      ],
    },
    {
      type: 'category',
      label: '相关生态',
      collapsed: true,
      items: [
           'related/related',
           'related/Cosmos',
           'related/Ethscriptions',

      ],
    },
  ],
};
