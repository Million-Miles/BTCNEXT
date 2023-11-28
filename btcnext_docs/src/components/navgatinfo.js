export const selectTypeList = [
  {
    name: 'All',
    type: 'all'
  },
  {
    name: 'Release',
    type: 'release'
  },
  {
    name: 'AMA',
    type: 'ama'
  },
    {
    name: 'Airdrop',
    type: 'airdrop'
  },
  {
    name: 'Tokenomics',
    type: 'tokenomics'
  },
  {
    name: 'Community',
    type: 'community'
  },
    {
    name: 'Other',
    type: 'other'
  }
]

export const navpageinfolist = [
  {
    type: 'category', // category有二级目录 link只有一级
    label: 'BTCNEXT推荐',
    collapsed: false, // 是否折叠
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '🪂 空投必备',
        href: '#AirDrop',
        docId: 'AirDrop',
        nextitems: [
          {
            avator:
              'img/navigator/earni.png',
            href: '/docs/installation',
            title: 'earni',
            type: 'release',
            desc:
              "遗漏空投查询工具",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://earni.fi/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/earni_fi/',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/AdsPower.png',
            title: 'AdsPower指纹浏览器',
            desc:
              "是一款专注跨境电商账号矩阵安全管理的指纹浏览器",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.adspower.net/',
              },{
                name: 'twitter',
                link: 'https://twitter.com/viamirror',
              },
              {
                name: 'telegram',
                link: '',
              },
            ],
          },
          {
            avator:
              'img/navigator/DFarm.jpg',
            title: 'DFarm',
            desc:
              "薅羊毛基础分享",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://mirror.xyz/dfarm.eth',
              },{
                name: 'Telegram',
                link: 'https://t.me/adspowercn',
              },
              {
                 name: 'Facebook',
                 link: 'https://www.facebook.com/adspowerbrowser',
              },
            ],
          },
          {
            avator:
              'img/navigator/gopluslabs.png',
            title: '代币合约安全检测',
            desc:
              "Token 安全检测开放的、无需许可的、用户驱动的代币安全检测平台",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://gopluslabs.io/token-security/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/GoplusSecurity',
              },
               {
                 name: 'Telegram',
                 link: 'https://t.me/GoPlusSecurity',
               },
               {
                 name: 'Discord',
                 link: 'https://discord.com/invite/5cvSsaT8N5',
               },
               {
                 name: 'Medium',
                 link: 'https://goplussecurity.medium.com/',
               },
            ],
          },          

          {
            avator:
              'img/navigator/crunchbase.png',
            title: '项目融资情况查看',
            desc:
              "web3项目融资情况查询网站",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.crunchbase.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/crunchbase',
              },
               {
                 name: 'Facebook',
                 link: 'https://www.facebook.com/crunchbase/',
               },
            ],
          },
          {
            avator:
              'img/navigator/chaindrop.png',
            title: 'ChainDrop测试网水龙头',
            desc:
              "ChainDrop Web3 Faucet Network",
            tags: ['Faucet', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://chaindrop.org/',
              }
            ],
          },
          {
            avator:
              'img/navigator/Faucet.png',
            title: '水龙头-Faucet',
            desc:
              "适合所有人的多链式水龙头。各个链的水都有,很全,但是领取的额度很小,可以救急用",
            tags: ['Faucet', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://faucet.triangleplatform.com/',
              },
              {
                name:'twitter',
                link:'https://twitter.com/triangleplatfrm/'
              }
            ],
          },          
          {
            avator:
              'img/navigator/danny.jpeg',
            title: '测试网水龙头汇总',
            desc:
              "包括以太坊歌尔力测试网,BSC链测试网,多边形主网,比特币测试网等各种测试网。By:danny",
            tags: ['Faucet', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.danny.hk/测试网水龙头/?dwaf=3467548',
              }
            ],
          },
          {
            avator:
              'img/navigator/analytics.svg',
            title: 'Analytics',
            desc:
              "区块链最近的所有募资筹款活动",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://icoanalytics.org/',
              }
            ],
          },
          {
            avator:
              'img/navigator/mirrorbeats.png',
            title: 'MirrorBeats',
            desc:
              "基于 Web3.0 内容平台 Mirror 的搜索引擎",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.mirrorbeats.xyz/',
              }
            ],
          },
          {
            avator:
              'img/navigator/SMS-Man.png',
            title: 'SMS-MAN全球短信接码',
            desc:
              "SMS-Man 是一个提供在线短信接收的国际平台,让你有机会在网上以最优惠的价格购买一个虚拟号码用于注册流行服务。",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://sms-man.com/cn',
              }
            ],
          },
          {
            avator:
              'img/navigator/Bress.png',
            title: 'Bress',
            desc:
              "Bress.xyz是基于Mirror开发的去中心化社交网络,在这里你可以找到 Mirror 生态上的高质量文章和优秀作者。",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bress.xyz/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/0xHaole',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/Qw2ZPteQqQ',
              },
              
            ],
          },
          {
            avator:
              'img/navigator/yescap.png',
            title: '识别谷歌图形验证码插件',
            desc:
              "自动识别点击谷歌图像验证码",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://yescaptcha.com/',
              }
            ],
          },
          {
            avator:
              'img/navigator/airdr.png',
            title: '空投交互教程',
            type: 'ama',
            desc:
              "每日更新",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://zlexdl.notion.site/db2e69b82a364d9e8bd356c4c73a228c?v=b3a4e992cd014603975d50df4e0fe9af',
              },
              {
                name:'twitter',
                link:'https://twitter.com/zlexdl'
              }
            ],
          },
          {
            avator:
              'img/navigator/lumao.png',
            title: 'L0/L1/L2各个链信息简介',
            desc:
              "撸毛人必存,L0/L1/L2各个链信息",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://docs.google.com/spreadsheets/d/1RFWFwBhKz6Rqc7YypASqB92KsGsHASDNvYsJvdd_vXI/edit?ref=www.sihuo.club&pli=1#gid=1811352306',
              }
            ],
          },
          {
            avator:
              'img/navigator/Coinowo.jpg',
            title: 'Coinowo空投派发现',
            type: 'ama',
            desc:
              "Coinowo发现分享最新空投和加密货币新闻,学习网格量化交易,研究流动性挖矿和各种Defi项目",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://coinowo.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/Coinowodrop',
              },
              {
                name: 'telegram',
                link: 'https://t.me/coinowonewalpha',
              }
            
            ],
          },
          {
            avator:
              'img/navigator/baozao.png',
            title: '暴躁兔',
            desc:
              "暴躁兔是一个搞技术,数据为导向的社区",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://gamefi.ask4coin.com/',
              },
              {
                name:'twitter',
                link:'https://twitter.com/fengye2'
              },
              {
                 name: 'Discord',
                 link: 'https://discord.com/invite/NRMgYzxz3v',
               }
            ],
          },
          {
            avator:
              'img/navigator/Bress.png',
            desc:
              "撸猫教程",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bress.xyz/zh/author/0x4b2498C70cd42dEF5e7cC47F0f2C90B33bad6dC0',
              }
            ],
          },
          {
            avator:
              'img/navigator/RabbitHole.png',
            title: 'RabbitHole兔子洞',
            desc:
              "web3任务平台,做任务给奖励",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://rabbithole.gg/',
              },
              {
                name:'twitter',
                link:'https://twitter.com/rabbithole_gg'
              },
              {
                 name: 'Discord',
                 link: 'https://discord.com/invite/rabbitholegg',
               }
            ],
          },
          {
            avator:
              'img/navigator/galxe.png',
            title: 'Galxe: 银河',
            desc:
              "Web3 任务奖励平台",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://galxe.com/',
              }
            ],
          },
          {
            avator:
              'img/navigator/Layer3.png',
            title: 'Layer3 任务平台',
            desc:
              "L3 任务平台",
            tags: ['AirDrop', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://layer3.xyz/',
              }
            ],
          }                                                                                
        ]
      },
      {
        type: 'link',
        label: '🏫 深度学习',
        href: '#learn',
        docId: 'learn',
        nextitems: [
          {
            avator:
              'img/navigator/btcstudy.png',
            title: 'btcstudy',
            type: 'ama',
            desc:
              "🚀 BTCStudy网站是一个专注于比特币和相关技术的在线资源。网站提供了有关比特币的各种话题的深入分析和讨论.比特币主网、Payjoin 、货币理念、闪电网络",
            tags: ['BTC', 'LN','Payjoin'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.btcstudy.org/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/btcstudy',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
              {
                name: 'telegram',
                link: 'https://t.me/btcstudyorg',
              },
              
            ],
          },
          {
            avator:
              'img/navigator/wtf.png',
            title: 'wtf',
            desc:
              "🚀 BTCStudy网站是一个专注于比特币和相关技术的在线资源。网站提供了有关比特币的各种话题的深入分析和讨论.比特币主网、Payjoin 、货币理念、闪电网络",
            tags: ['BTC', 'LN','Payjoin'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.wtf.academy/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/0xAA_Science',
              },
              {
                name: 'github',
                link: 'https://github.com/WTFAcademy',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/5akcruXrsk',
              },
              // {
              //   name: 'telegram',
              //   link: 'https://t.me/btcstudyorg',
              // },
              
            ],
          },
          {
            avator:
              'img/navigator/btcstudy.png',
            title: 'bitcointalk',
            desc:
              "🚀 这是一个论坛,汇集了比特币社区的成员,包括开发者、矿工和爱好者。这里有关于比特币开发的深入讨论和资源分享。",
            tags: ['BTC', 'talk'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bitcointalk.org/',
              },
              // {
              //   name: 'twitter',
              //   link: 'https://twitter.com/0xAA_Science',
              // },
              // {
              //   name: 'github',
              //   link: 'https://github.com/WTFAcademy',
              // },
              // {
              //   name: 'discord',
              //   link: 'https://discord.com/invite/5akcruXrsk',
              // },
              // {
              //   name: 'telegram',
              //   link: 'https://t.me/btcstudyorg',
              // },
              
            ],
          },
          
        ]
      },
    ],
  },
  {
    type: 'category', // category有二级目录 link只有一级
    label: '交易所',
    collapsed: true, // 是否折叠
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '📖 Ordinals',
        href: '#Ordinals',
        docId: 'Ordinals',
        nextitems: [
          {
            avator:
              'img/navigator/okx.png',
            href: '/docs/installation',
            title: 'OKX - Ordinals',
            desc:
              "🚀 欧易官方一站式交易、铭刻 BRC-20 和 BTC NFT 在欧易 Web3 市场探索 Ordinals 生态,交易市场,中心化交易所。",
            tags: ['Market', 'BRC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.okx.com/cn/web3/marketplace/ordinals/brc20',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/okxchinese',
              },
              {
                name: 'github',
                link: 'https://github.com/okx',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/hkCGKbbbqf',
              },
            ],
          },
          {
            avator:
              'img/navigator/bian.png',
            title: 'Binance',
            desc:
              "全球最大中心化交易所",
            tags: ['Market', 'BRC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.binance.com/en',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/binance',
              },
              {
                name: 'github',
                link: 'https://github.com/binance',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/jE4wt8g2H2',
              },
            ],
          },
          {
            avator:
              'img/navigator/unisat.png',
            title: 'Unisat',
            desc:
              "交易、Inscribe BRC-20 和 BTC NFT",
            tags: ['Unisat', 'BRC20','Market'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://unisat.io/market',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/unisat_wallet',
              },
              {
                name: 'github',
                link: 'https://github.com/unisat-wallet/extension',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/unisat',
              },
            ],
          },
          {
            avator:
              'img/navigator/kucoin.png',
            title: 'KUCOIN',
            desc:
              "交易各链加密货币、以及BRC20 火爆代币的中心化交易所",
            tags: ['BRC20', 'P2P','Chains'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.kucoin.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/kucoincom',
              },
              {
                name: 'github',
                link: 'https://github.com/Kucoin',
              },
              // {
              //   name: 'discord',
              //   link: 'https://discord.com/invite/unisat',
              // },
              
            ],
          },
          {
            avator:
              'img/navigator/gate.io.png',
            title: 'Gate.io',
            desc:
              "芝麻开门中心化交易所。",
            tags: ['BRC20', 'Chains','Market'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.gate.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/gate_io',
              },
              {
                name: 'github',
                link: 'https://github.com/gateion',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/QZWFkuQvzP',
              },
            ],
          },
          {
            avator:
              'img/navigator/ordinals wallet.png',
            title: 'Ordinals wallet',
            desc:
              "集BTC和DogeChain两者的Market。BTC 模块支持Inscribe功能。支持原生 Ordinals Wallet和Unisat、Xverse、Leather钱包。",
            tags: ['Market', 'BTC','DogeChain'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://ordinalswallet.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/ordinalswallet',
              },
              {
                name: 'github',
                link: 'https://ordinals-wallet.gitbook.io/api/',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/ordinalswallet',
              },
            ],
          },
          {
            avator:
              'img/navigator/nxhub.svg',
            title: 'Nxhub',
            desc:
              "通过 NxHub 轻松捕获和管理多家交易平台的 Brc-20 订单。聚合多家交易平台（UniSat、OKX、MagicEden、OrdinalsWallet等）数据,实现多平台挂单。【暂未上线】",
            tags: ['Markets', 'BTC','BRC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.nxhub.io/#roadmap',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/NxHub_io',
              },
              // {
              //   name: 'github',
              //   link: 'https://ordinals-wallet.gitbook.io/api/',
              // },
              {
                name: 'discord',
                link: 'https://t.me/NxHubofficial',
              },
            ],
          },
          {
            avator:
              'img/navigator/megic.png',
            title: 'magiceden',
            desc:
              "集合多链NFT 交易、Inscribe BRC20 于一体的综合平台。",
            tags: ['Markets', 'BTC','BRC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://magiceden.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/MagicEden',
              },
              // {
              //   name: 'github',
              //   link: 'https://ordinals-wallet.gitbook.io/api/',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/magiceden',
              },
            ],
          },
          {
            avator:
              'img/navigator/idclub.png',
            title: 'idclub',
            desc:
              "idclub是铭文代打,btc域名交易,铭文交易最活跃平台之一",
            tags: ['Markets', 'BRC420','BRC20','Inscribe'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://idclub.io/home',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/idclub_ord',
              },
              // {
              //   name: 'github',
              //   link: 'https://ordinals-wallet.gitbook.io/api/',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/ordinalswallet',
              },
            ],
          },
          
        ]
      },
      {
        type: 'link',
        label: '⚛ Atomicals',
        href: '#Atomicals',
        docId: 'Atomicals',
        nextitems: [
          {
            avator:
              'img/navigator/satsx.svg',
            title: 'SatsX',
            desc:
              "🚀 pipe protocol、Atomicals、等铭文综合查询、铸造、交易平台",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.satsx.io/marketplace',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/SatsXio',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
              {
                name: 'telegram',
                link: 'https://discord.com/invite/hkH4PRVPSZ',
              },
            ],
          },
          {
            avator:
              'img/navigator/atomicalMarket.svg',
            title: 'Atomical Market',
            desc:
              "🚀 Atomicals等铭文综合查询、铸造、交易平台",
            tags: ['Atomicals', 'ARC20','Relam'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://atomicalmarket.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/atomicalsxyz',
              },
              {
                name: 'github',
                link: 'https://github.com/atomicals/',
              },
              // {
              //   name: 'discord',
              //   link: '',
              // },
              // {
              //   name: 'telegram',
              //   link: 'https://discord.com/invite/hkH4PRVPSZ',
              // },
            ],
          },
        ]
      },
      {
        type: 'link',
        label: '🎫 STAMPS',
        href: '#STAMPS',
        docId: 'STAMPS',
        nextitems: [
          {
            avator:
              'img/navigator/stampscan.png',
            title: 'StampScan',
            desc:
              "铸造、部署、交易STAMP资产的平台。",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.stampscan.xyz/zh/trade',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/thestampwallet',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/DhnJW2fAtg',
              },
              {
                name: 'telegram',
                link: 'https://t.me/stampscan',
              },
            ],
          }
        ]
      },
      {
        type: 'link',
        label: '⚡️ LightningNetwork',
        href: '#LN',
        docId: 'LN',
        nextitems: [
          {
            avator:
              'img/navigator/lnmarkets.png',
            title: 'lnmarkets',
            desc:
              "🚀 LNmarkets是一个基于比特币的闪电网络(Lightning Network)的金融交易平台。它特别针对比特币衍生品交易,如期货和期权交易.",
            tags: ['LN', 'BitCoin','Market'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://lnmarkets.com/en/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/LNMarkets',
              },
              {
                name: 'github',
                link: 'https://github.com/ln-markets',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/rndgWdPNd8',
              },
              {
                name: 'telegram',
                link: 'https://t.me/lnmarkets',
              },
            ],
          },
          {
            avator:
              'img/navigator/uxuy.png',
            title: 'UXUY Exchange',
            desc:
              "UXUY以MPC为基础,为用户提供了无助记词和安全导向的去中心化交易所应用,UXUY 基于 Taproot Assets 协议正式上线 $TAPROOT,并开放LN节点.",
            tags: ['LN', 'BitCoin','Market'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://uxuy.com/zh-Hans',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/uxuycom',
              },
              {
                name: 'github',
                link: 'https://github.com/uxuycom',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/BZwZA27Zkv',
              },
              {
                name: 'telegram',
                link: 'https://t.me/uxuycom',
              },
            ],
          }
          
        ]
      },
    ],
  },
  {
    type: 'link', // category有二级目录 link只有一级
    label: '钱包',
    href: '#Wallet',
    docId: 'Wallet',
    items: [
      {
        type: 'link',
        label: '',
        href: '#Wallet',
        docId: 'Wallet',
        nextitems: [
          {
            avator:     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABC1BMVEVHcExyLwD8kgD7kAD9qgdhJwDvdQC8eg1lKQA8FwD5ugD8iAD7tgzMYwB+MwAvEQHcaQATBQA0EwFiKADbZwCIOgADAAATBQH8hwD6hAD9oARqKwDTagDrcQBTIQAZBwH5fgAeBwH2lgwYCAH/qho3FQH8nACpSwD0eABpKgDQYQDkbQC9VwArEAH0fgD8txL5sAD/pBVlKQCGNwAwEgKUQABEGgH5rgD5vACgRwB4MQCpTAAUBgDGXAB5MQBfJgC3UwD8iAD8jwD9lQD7ggBJHAH9mwAUBgBTIQA/GAH9ogHxdQBbJAAjDAEuEQE3FQFyLgD5egD7qAW0UgDOYAChRwCQPQDqcADibwAGaZfDAAAAQXRSTlMAHLcuFUUbBv4P/uI3DvyH/LqyK0f8FZuQ0t7sJ+bpSzw7VuD72vmFxWnH025dc6n8j8vV+bu+18fJmttr5dqXpbQX8okAAAHjSURBVDiNdZPpdppAFIAHVEAMiOJat6gx7iZNmqR7CwyIDIZFEvP+T9KL6TkZBefPwNyP7y5nQIhekppT8+j8Wnyryq273LlwZbZ7ea36gvuYLrlUoh0Qsu/a5TRiFeyVX3/HDzIozFGSyGBM5m2E+KkMwCbhaBc0zEqHR7Ul2KY3qh0Dnw0Nc7DX4DzXAsVz6Yjgry29AVtREIo8Ylr2xtsOaeLCsYwVQn3hTen2wdEFxZZ2DELHYBHq+ZgIACCma3rbdYkyXIEig2qP1Wr5cNDveqCgargKLaNwidCyx69IMwOOkTfs0V2AQi/EfVQUEsSEulSP2riBHHrsWET7QLu+SEwy+8kxdA0c3OyNaMZTCsGCAoODnxOsO7eZFAcocIdD7UmgWeHXLBXL/6z3Ygcogk4FoQk2QvGGAorr7Zd+7AAF6UiIaxqOKPIfwHANxDJ2aDjYg4LTrVuRqrMOwPMG7mK2oAUkngYLOSiArwPgmVO41o3GofyGHop0lXxpDYD9cZ8nuvN03GQdcpju9P/bAIY5OBlDOQaEd0elQzDLnwCoCDlc/zsjMYtIIc1EHBwb2xX8+4cfu0iZJycdOyCHL7++7KJZyvcHwn4HxlJ6HO7Rn7vf9+P2uXC88szJP/UPeTlPDcmNVGcAAAAASUVORK5CYII=',
            title: 'Unisat Wallet',
            desc:
              "The first open-source browser extension wallet for Bitcoin NFTs!",
            tags: ['NFT', 'Wallet', 'BRC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://unisat.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/unisat_wallet',
              },
              {
                name: 'github',
                link: 'https://github.com/unisat-wallet/extension',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/unisat',
              },
            ],
          },
		  {
            avator:
              'https://atomicalswallet.com/assets/logo-8fe490a4.svg',
            title: 'ATOM Wallet',
            desc:
              "The first Atomicals wallet that can safeguard your ARC-20, Realms and NFTs.",
            tags: ['NFT', 'Wallet', 'ARC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://atomicalswallet.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/atomicalswallet',
              },
              {
                name: 'github',
                link: 'https://github.com/atomicalswallet/atomicals-wallet-extension',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/atomicalsxyz',
              },
            ],
          },
		  {
			avator:
			  'img/navigator/alby.png',
			title: 'Alby',
			desc:
			  "Your Bitcoin & Nostr companion for the web.",
			tags: [ 'Wallet', 'Bitcoin', 'Nostr', 'LN'],
			exterlink: [
			  {
				name: 'internet',
				link: 'https://getalby.com/',
			  },
			  {
				name: 'twitter',
				link: 'https://twitter.com/getAlby',
			  },
			  {
				name: 'github',
				link: 'https://github.com/getAlby/lightning-browser-extension',
			  },
			  // {
				// name: 'discord',
				// link: 'https://discord.com/invite/atomicalsxyz',
			  // },
			  {
				name: 'Telegram',
				link: 'https://t.me/getAlby',
			  },
			],
		  },
		  {
            avator:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAAAgICAYGBgYGBgZGRkZGRkYGBgYGBgZGRkYGBgbGxv////T09MmJiYmHxrGaCzuejAZGRmpqamQTybUbi3Tbi0mHhqeVSc1NTXi4uIYGBjFxcW3t7dubm5hYWGampo7SO6uAAAAG3RSTlMAEGCfz+//II/fMP///////5D//////////6Ao7SrLAAAA7UlEQVR4AYWTBZLEMAwEJcPEy8z0/1ceWavorGxlilTVbbaoD4eYMpBTDEw+XcnoE7sGc0GTwpZ3E7hMzCRTw40xHR7v52Dlzqj7KPiY8rdArWez2XxRy+VqvV7X8neRKIIYwkXYEDFEEEO4CJkpiLB9G7v9/oevUBMoojWAw3p1RE2kBG8clCNRhjdOypFJS2uYWOF8mXmDcsMbI1Oy3BuJrv/5ttlH1IsS/t7pTS+Ks7nqu57lIgITbYzwQDVUiP1zX37zrPXrcrnpc+sUQ9mMfrmxTzv67ccbR8Mbtz9um/dqaN505MPhOtD+39S4Gqf6Mc9hAAAAAElFTkSuQmCC',
            title: 'Xverse',
            desc:
              "The Bitcoin Wallet for everyone.",
            tags: ['BRC20', 'Wallet', 'LN', 'Ordinals', 'Stacks'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.xverse.app/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/xverseApp',
              },
              {
                name: 'github',
                link: 'https://github.com/secretkeylabs/xverse-web-extension',
              },
              // {
                // name: 'discord',
                // link: 'https://discord.com/invite/atomicalsxyz',
              // },			  
            ],
      },
		  {
			avator:
			  'https://avatars.githubusercontent.com/u/124768502?s=200&v=4',
			title: 'uxuy Wallet',
			desc:
			  "UXUY是一个安全的非托管钱包,采用多方计算（MPC）技术,通过无需密钥签名和无需种子恢复,提供极致的安全性和便捷性。",
			tags: ['Wallet', 'ERC', 'BEP20', 'TRX20', 'LN'],
			exterlink: [
			  {
				name: 'internet',
				link: 'https://uxuy.com/zh-Hans/wallet',
			  },
			  {
				name: 'twitter',
				link: 'https://twitter.com/uxuycom',
			  },
			  {
				name: 'github',
				link: 'https://github.com/uxuycom',
			  },
			  {
				name: 'discord',
				link: 'https://discord.com/invite/BZwZA27Zkv',
			  },
			  {
				name: 'Telegram',
				link: 'https://t.me/uxuycom',
			  },
			],
		  },	
      {
        avator:
          'img/navigator/tp Wallet.png',
        title: 'TokenPocket',
        desc:
          "同时开发了冷钱包、多签钱包等,多链钱包,支持BTC、ETH、BSC、TRON、Aptos、Polygon、Solana、Cosmos、Polkadot、EOS、IOST等",
        tags: ['Wallet', 'BTC','LN'],
        exterlink: [
          {
          name: 'internet',
          link: 'https://www.tokenpocket.pro/',
          },
          {
          name: 'twitter',
          link: 'https://twitter.com/TokenPocket_TP',
          },
          {
          name: 'github',
          link: 'https://github.com/TP-Lab',
          },
          {
          name: 'discord',
          link: 'https://discord.com/invite/NKPM8TXFQk',
          },
          {
          name: 'Telegram',
          link: 'https://t.me/tokenPocket_cn',
          },
        ],
        },	  
        ]
      },
    ],
  },
  {
    type: 'category', // category有二级目录 link只有一级
    label: '工具',
    collapsed: true, // 是否展开
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '🔎 链上数据分析',
        href: '#ChainTool',
        docId: 'ChainTool',
        nextitems: [
          {
            avator:
              'img/navigator/ord.io.png',
            title: 'Ord.io',
            desc:
              "Ordinal Inscriptions/collections 浏览器,界面友好,快速检索",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.ord.io/',
              },
              {
               name: 'twitter',
               link: 'https://twitter.com/ord_io',
              },
              //{
              //  name: 'github',
              //  link: '',
              //},
              //{
              //  name: 'discord',
              //  link: '',
              //},
            ],
          },
          {
            avator:
              'img/navigator/ordiscan.png',
            title: 'Ordiscan',
            desc:
              "搜索比特币生态铭文详情、查看Inscriptions及Collections。",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://ordiscan.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/t4t5',
              },
              {
                name: 'github',
                link: 'https://github.com/t4t5',
              },
              // {
              //   name: '作者作品主页',
              //   link: 'https://t4t5.com/',
              // },
            ],
          },
          {
            avator:
              'img/navigator/mempool.png',
            title: 'mempool',
            desc:
              "体验完整比特币生态查询（包括闪电网络）底层区块查询。",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://mempool.space/zh/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/mempool',
              },
              {
                name: 'github',
                link: 'https://github.com/mempool',
              },
              //{
              //  name: 'discord',
              //  link: '',
              //},
            ],
          },
          {
            avator:
              'img/navigator/btccom.png',
            title: 'BTC.com',
            desc:
              "BTC链浏览器",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://btc.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/btccom_official',
              },
              {
                name: 'telegram',
                link: 'https://t.me/btccom_pool',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/R8HzUvg2eR',
              },
            ],
          },
          {
            avator:
              'img/navigator/1ml.png',
            title: '1ML',
            desc:
              "闪电网络搜索和分析引擎",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://1ml.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/LNstats',
              },
              //{
              //  name: 'github',
              //  link: '',
              //},
              //{
              //  name: 'discord',
              //  link: '',
              //},
            ],
          },
          {
            avator:
              'img/navigator/oklink.png',
            title: 'OKLINK',
            desc:
              "全球领先的 Web3 数据分析平台.区块链浏览器、链上数据分析及服务",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.oklink.com/cn/',
              },
              {
               name: 'twitter',
               link: 'https://twitter.com/OKLink',
              },
              //{
              //  name: 'github',
              //  link: '',
              //},
              {
               name: 'discord',
               link: 'https://discord.com/invite/QcywHPgk4S',
              },
              {
                name: 'telegram',
                link: 'https://t.me/oukeyunlianoklink',
               },
            ],
          },
          {
            avator:
              'mg/navigator/oklink.png',
            title: 'GeniiData',
            desc:
              "实时铭文内存池统计",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://geniidata.com/ordinals/home',
              },
              //{
              //  name: 'twitter',
              //  link: '',
              //},
              //{
              //  name: 'github',
              //  link: '',
              //},
              //{
              //  name: 'discord',
              //  link: '',
              //},
            ],
          },
          {
            avator:
              'img/navigator/inbrc.png',
            title: 'InBRC|BRC-100 Indexer',
            desc:
              "BRC100铭刻、查询",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://inbrc.org/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/in_BRC',
              },
            ]
              //{
              //  name: 'github',
              //  link: '',
              //},
              //{
              //  name: 'discord',
              //  link: '',
              //},
          },
          {
            avator:
              'img/navigator/btctool.png',
            title: 'BTCTOOL',
            desc:
              "BRC20代币行情实时查看",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.btctool.pro/',
              },
              {
               name: 'twitter',
               link: 'https://twitter.com/btctoolpro',
              },
              //{
              //  name: 'github',
              //  link: '',
              //},
              //{
              //  name: 'discord',
              //  link: '',
              //}, 
              {
               name: 'telegram',
               link: 'https://t.me/btctoolgroup',
              }, 
                                        
            ],
          },
        ]
      },
      {
        type: 'link',
        label: '📉 行情分析',
        href: '#MarketAnalysis',
        docId: 'MarketAnalysis',
        nextitems: [
          {
            avator:
              'img/navigator/coinmarketcap.png',
            title: 'CoinMarketCarp',
            desc:
              "实时全链货币数据",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://coinmarketcap.com/',
              },
              {
               name: 'twitter',
               link: 'https://twitter.com/CoinMarketCap ',
              },
              //{
              //  name: 'github',
              //  link: '',
              //},
              //{
              //  name: 'discord',
              //  link: '',
              //},
              {
               name: 'telegram',
               link: 'https://t.me/CoinMarketCapAnnouncements',
              },
  
            ],
          },
          {
            avator:
              'img/navigator/coincarp.png',
            title: 'CoinCarp',
            desc:
              "各币种行情查询统计网站",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://coinmarketcap.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/coincarpcom',
              },
              //{
              //  name: 'github',
              //  link: '',
              //},
              {
                name: 'discord',
                link: 'https://discord.com/invite/tpQ5meK6gJ',
              },
            ],
          },
          {
            avator:
              'img/navigator/bnbproject.png',
            title: 'BNBProject',
            desc:
              "BSC链所有项目数据",
            tags: ['Tool', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bnbproject.org/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/BscProjectOrg',
              },
              {
                name: 'medium',
                link: 'https://bscproject.medium.com/',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/qWh4FrEGHD',
              },
              {
                name: 'telegram',
                link: 'https://t.me/BinanceDEXchange',
              },                             
            ],
          },
        ]
      },
    ],
  
  },
  {
    type: 'category', // category有二级目录 link只有一级
    label: 'NFT',
    collapsed: true, // 是否展开
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '项目方',
        href: '#NFTProject',
        docId: 'NFTProject',
        nextitems: [
          {
            avator:
              'img/navigator/bitcoinfrogs.jpeg',
            title: 'Bitcoin Frogs',
            desc:
              "🚀 比特币上最火NFT项目之一,使用Ordinals协议在比特币Bitcoin区块链网络上创造的NFT 项目,",
            tags: ['NFT', 'Frogs'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bitcoinfrogs.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/BitcoinFrogs',
              },
              {
                name: 'github',
                link: '',
              },
              {
                name: 'discord',
                link: '',
              },
            ],
          }
        ]
      },
      {
        type: 'link',
        label: '平台',
        href: '#NFTExchange',
        docId: 'NFTExchange',
        nextitems: [
          {
            avator:
              'img/navigator/element.webp',
            title: 'Element Market',
            desc:
              "🔥第一个社区驱动的聚合市场,NFT交易市场,支持多个公链,多种钱包。用户可以获得最好的流动性、最低的交易成本和最高效的交易功能。",
            tags: ['NFT', 'BTC','ETH'],
            href: '/docs/navigation/Element',
            exterlink: [
              {
                name: 'internet',
                link: 'https://element.market/btc',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/Element_Market',
              },
              {
                name: 'github',
                link: 'https://docs.element.market/developer',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/elementmarket',
              },
            ],
          },
          {
            avator:
              'img/navigator/opensea.svg',
            title: 'OpenSea:',
            desc:
              "🚀知名的区块链市场和数字资产交易平台,专门用于购买、出售和交易非同质化代币(NFTs)。用户可以在OpenSea上创建个人资料,关注其他用户,评论和喜欢他们喜欢的NFTs",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://opensea.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/opensea',
              },
              {
                name: 'github',
                link: 'https://github.com/ProjectOpenSea',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/opensea',
              },
            ],
          },
          {
            avator:
              'img/navigator/ordzaar.png',
            title: 'ordzaar',
            desc:
              "🚀Ordinals 上线第一个带有版税的 launchpad,可以交易并具有创建和mint功能。",
            tags: ['NFT', 'Ordinals'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://ordzaar.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/ordzaar',
              },
              {
                name: 'github',
                link: 'https://docs.ordzaar.com/',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/ordzaar',
              },
            ],
          },
          {
            avator:
              'img/navigator/megic.png',
            title: 'magiceden',
            desc:
              "集合多链NFT 交易、Inscribe BRC20 于一体的综合平台。",
            tags: ['Markets', 'BTC','BRC20'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://magiceden.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/MagicEden',
              },
              // {
              //   name: 'github',
              //   link: 'https://ordinals-wallet.gitbook.io/api/',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/magiceden',
              },
            ],
          },
          {
            avator:
              'img/navigator/ordinals market.png',
            title: 'Ordinals Market',
            desc:
              "支持导入用户所链接的钱包在其他市场所挂单资产的清单。聚合挂单功能比较实用。",
            tags: ['NFT', 'Ordinals'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://ordinals.market/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/ordinalsmarket_',
              },
              {
                name: 'github',
                link: 'https://docs.ordinals.market/',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/ordinalsmarket',
              },
            ],
          }
          
        ]
      },
    ],
  
  },
  {
    type: 'category', // category有二级目录 link只有一级
    label: 'GameFi',
    collapsed: true, // 是否展开
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '项目方',
        href: '#GameFiProject',
        docId: 'GameFiProject',
        nextitems: [
          {
            avator:
              'img/navigator/btcpixelwar.png',
            title: 'PIXE WAR',
            desc:
              "比特币生态Ordinals上首个递归铭文游戏。",
            tags: ['GAMEFI', 'Web3', 'BTC', 'Ordinals'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://btcpixelwar.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/btcpixelwar',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              {
                name: 'Telegram',
                link: 'https://t.me/BTCPixelWar',
              },
            ],
          }, 		  		  
        ]
      },
      {
        type: 'link',
        label: '平台',
        href: '#GameFiExchange',
        docId: 'GameFiExchange',
        nextitems: [
          {
            avator:
              'img/navigator/naga.png',
            title: 'NAGA',
            desc:
              "Discover The Best Web3 Gaming.",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.naga.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/GamefiNaga',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/jgxjRqyfXR',
              },
            ],
          },
          {
            avator:
              'https://sihuo-1309822528.file.myqcloud.com/2022/03/eddbe-www.playtoearn.online.png',
            title: 'Gamefi国外资讯',
            desc:
              "Play to Earn Online Magazine is the number one source for news and information about blockchain gaming, NFTs, play-to-earn, earning crypto through gaming, crypto art and gamified DeFi.",
            tags: ['GAMEFI', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.playtoearn.online/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/playtoearn',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/ze33Nrwj',
              },
            ],
          },
          {
            avator:
              'https://api.iowen.cn/favicon/playtoearn.net.png',
            title: 'PlayToEarn',
            desc:
              "国外最全gamefi资讯网站。",
            tags: ['GAMEFI', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://playtoearn.net/blockchaingames',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/playtoearn_net',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/playtoearn',
              },
              {
                name: 'Telegram',
                link: 'https://t.me/playtoearn_net',
              },			  
            ],
          },
          {
            avator:
              'https://sihuo-1309822528.file.myqcloud.com/2021/12/58bdf-dappradar.com.png',
            title: 'DappRadar',
            desc:
              "发现、跟踪和交易 DeFi、NFT 和游戏的一切。",
            tags: ['GAMEFI', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://dappradar.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/dappradar',
              },
              {
                name: 'github',
                link: 'https://github.com/dappradar',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/4ybbssrHkm',
              },
              {
                name: 'Telegram',
                link: 'https://t.me/joinchat/GdhNjQ8PMhCZ_a0CZutmXg',
              },			  
            ],
          }, 
        ]
      }		  
    ],
  },
  {
    type: 'category', // category有二级目录 link只有一级
    label: 'SocialFi',
    collapsed: true, // 是否展开
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '项目方',
        href: '#SocialFiProject',
        docId: 'SocialFiProject',
        nextitems: [
          {
            avator:
              'img/navigator/damus.png',
            title: 'Damus(达摩)',
            desc:
              "🚀 Damus(达摩)是一个基于开源协议Nostr的社交媒体应用程序。Nostr是一个新兴的分散式社交网络协议,旨在提供一个开放、无审查的平台。 Nostr, Jack Dorsey’s Favorite Decentralized Social Network。",
            tags: ['SocialFi', 'Nostr','Alby'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://damus.io/',
              },
              // {
              //   name: 'twitter',
              //   link: '',
              // },
              {
                name: 'github',
                link: 'https://github.com/damus-io/damus/pulls',
              },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          }, 
          {
            avator:
              'img/navigator/sphinx.jpeg',
            title: 'Sphinx Chat ',
            desc:
              "🚀 这是一个利用比特币的闪电网络的通讯应用程序。Sphinx Chat允许用户通过微支付来发送消息和内容,同时也支持加密通信",
            tags: ['SocialFi', 'LightningNetwork',],
            exterlink: [
              {
                name: 'internet',
                link: 'https://sphinx.chat/',
              },
              // {
              //   name: 'twitter',
              //   link: '',
              // },
              {
                name: 'github',
                link: 'https://github.com/stakwork',
              },
              {
                name: 'telegram',
                link: 'https://t.me/joinchat/Fb4OcRo4LrRD6NXfsNdeeQ',
              },
            ],
          }, 
          {
            avator:
              'img/navigator/taprootassets.webp',
            title: 'TaprootAssets(Taro)',
            desc:
              "🔥 闪电实验室(ightning Labs)推出的协议,旨在在比特币的闪电网络上创建、发送和接收任何类型的资产。尽管Taro本身不是一个社交媒体平台,但它为未来可能出现的基于比特币的SocialFi应用提供了基础设施。",
            tags: ['LightningNetwork','Protocol','TaprootAssets'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://docs.lightning.engineering/the-lightning-network/taproot-assets/faq',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/lightning',
              },
              {
                name: 'github',
                link: 'https://github.com/lightningnetwork',
              },
              // {
              //   name: 'telegram',
              //   link: 'https://t.me/joinchat/Fb4OcRo4LrRD6NXfsNdeeQ',
              // },
            ],
          }
        ]
      },
      {
        type: 'link',
        label: '平台',
        href: '#SocialFiExchange',
        docId: 'SocialFiExchange',
        nextitems: [
          {
            avator:
              'img/navigator/nostr.jpeg',
            title: 'NostrAssets',
            desc:
              "🔥 通过 NostrAsset 网页客户端传输 Taproot Assets和其他资产,无 Gas 费。",
            tags: ['Market', 'LN','TREAT','TRICK'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://mainnet.nostrassets.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/nostrassets',
              },
              {
                name: 'github',
                link: 'https://github.com/nostrassets',
              },
              // {
              //   name: 'discord',
              //   link: '',
              // },
              {
                name: 'telegram',
                link: 'https://t.me/nostrassets',
              },
            ],
          },
          // {
          //   avator:
          //     'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
          //   title: 'Join us for a #GasHero',
          //   desc:
          //     "🚀 We'll be discussing and sharing tips about the game and upcoming community test.",
          //   tags: ['NFT', 'Web3'],
          //   exterlink: [
          //     {
          //       name: 'internet',
          //       link: '',
          //     },
          //     {
          //       name: 'twitter',
          //       link: '',
          //     },
          //     {
          //       name: 'github',
          //       link: '',
          //     },
          //     {
          //       name: 'discord',
          //       link: '',
          //     },
          //   ],
          // }
        ]
      },
    ],
  
  },
  {
    type: 'category', // category有二级目录 link只有一级
    label: 'DeFi',
    collapsed: true, // 是否展开
    collapsible: true, // 是否显示折叠图标
    items: [
      {
        type: 'link',
        label: '项目方',
        href: '#DeFiProject',
        docId: 'DeFiProject',
        // Sovryn
        nextitems: [
          {
            avator:
              'img/navigator/sovrynb.png',
            title: 'Sovryn',
            desc:
              "Sovryn是一个在RSK上运行的去中心化交易和借贷平台,允许用户利用比特币进行各种金融交易,包括借贷、保证金交易和交换.",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://sovryn.app/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/SovrynBTC',
              },
              {
                name: 'github',
                link: 'https://github.com/DistributedCollective',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/sovryn',
              },
              {
                name: 'telegram',
                link: 'https://t.me/SovrynBitcoin',
              },
              
            ],
          }
        ]
      },
      {
        type: 'link',
        label: '平台',
        href: '#DeFiExchange',
        docId: 'DeFiExchange',
        nextitems: [
          {
            avator:
              'img/navigator/rootstock.jpeg',
            title: 'Rootstock (RSK)',
            desc:
              "RSK是一个侧链平台,它使比特币区块链能够支持智能合约,类似于以太坊。RSK通过二元锚定机制与比特币区块链相连,使用户可以在比特币和RSK平台之间转移资产.",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://rootstock.io/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/rootstock_io',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/fPerbqcWGE',
              },
              {
                name: 'telegram',
                link: 'https://t.me/rskofficialcommunity',
              },
              
            ],
          },
          {
            avator:
              'img/navigator/badger.svg',
            title: 'Badger DAO',
            desc:
              "Badger DAO 专注于将比特币带入DeFi,通过一系列产品和服务将比特币作为抵押品来提供各种去中心化金融服务.",
            tags: ['NFT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://legacy.badger.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/BadgerDAO',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/badgerdao',
              },
              {
                name: 'telegram',
                link: 'https://t.me/badger_dao',
              },
              
            ],
          },
          // {
          //   avator:
          //     'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
          //   title: 'Join us for a #GasHero',
          //   desc:
          //     "🚀 We'll be discussing and sharing tips about the game and upcoming community test.",
          //   tags: ['NFT', 'Web3'],
          //   exterlink: [
          //     {
          //       name: 'internet',
          //       link: '',
          //     },
          //     {
          //       name: 'twitter',
          //       link: '',
          //     },
          //     {
          //       name: 'github',
          //       link: '',
          //     },
          //     {
          //       name: 'discord',
          //       link: '',
          //     },
          //   ],
          // }
        ]
      },
    ],
  
  },
  {
    type: 'link', // category有二级目录 link只有一级
    label: '新闻资讯',
    href: '#news',
    docId: 'news',
    items: [
      {
        type: 'link',
        label: '',
        href: '#news',
        docId: 'news',
        nextitems: [
          {
            avator:
              'img/navigator/marsbit.svg',
            title: '火星财经',
            desc:
              "火星财经是中国领先的区块链产业信息服务平台,由资深区块链团队倾力打造,为中国区块链爱好者提供全球最新的区块链新闻资讯。",
            tags: ['BTCNEXT', 'Web3','News'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.marsbit.co/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/Marsbit2022',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://t.me/jinse2017',
              // },			  
            ],
          },
          {
            avator:
              'https://sihuo-1309822528.file.myqcloud.com/2021/12/WX20211217-154049@2x-e1639726894612.png',
            title: '金色财经',
            desc:
              "金色财经是集行业新闻、资讯、行情、数据等一站式区块链产业服务平台,我们追求及时、全面、专业、准确的资讯与数据,致力于为区块链创业者以及数字货币投资者提供最好的产品和服务。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.jinse.com/',
              },
              // {
                // name: 'twitter',
                // link: '',
              // },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              {
                name: 'Telegram',
                link: 'https://t.me/jinse2017',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/nulltx.png',
            title: 'NullTX',
            desc:
              "Null TX（前身为The Merkle）提供加密的最新消息以及有关比特币,以太坊和其他加密货币的教育文章",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://nulltx.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/nulltxnews',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://t.me/jinse2017',
              // },			  
            ],
          },
          
          {

            avator:
              'img/navigator/AINewWorld.png',
            title: 'AI新智界',
            desc:              "AI新智界始建于2011年,是国内最早的区块链（blockchain）资讯社区门户,为区块链创业者、投资者提供信息、交流与投融资服务。开放是我们的广度,中立是我们的态度,敏锐是我们的深度,欢迎一切区块链技术的探讨争鸣。目前有200多位区块链意见领袖、研究者入驻平台。如果您是我们的同类,欢迎加入我们！",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.aixinzhijie.com/',
              },
              // {
                // name: 'twitter',
                // link: 'https://twitter.com/coin_voice',
              // },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://t.me/jinse2017',
              // },			  
            ],
          },
          {
            avator:
              'img/navigator/feixiaohao.png',
            title: '非小号',
            desc:              
			"区块链数据资料大全！",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.feixiaohaozh.info/',
              },
              // {
                // name: 'twitter',
                // link: 'https://twitter.com/coin_voice',
              // },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://t.me/jinse2017',
              // },			  
            ],
          },
          {
            avator:
              'img/navigator/cointelegraph.png',
            title: 'CoinTelegraph',
            desc:              
			"CoinTelegraph提供有关比特币,以太坊和其他加密货币的新内容,以及有关区块链技术和加密市场的分析和评论",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://cointelegraph.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/cointelegraph',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              {
                name: 'Telegram',
                link: 'https://telegram.me/cointelegraph',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/ccn.png',
            title: 'CCN',
            desc:              
			"CCN是在挪威注册的媒体公司的一部分。 CCN的网站提供有关加密货币的新闻和文章,如比特币,以太坊,以及区块链领域的工业新闻",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.ccn.com/',
              },
              // {
                // name: 'twitter',
                // link: 'https://twitter.com/cointelegraph',
              // },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://telegram.me/cointelegraph',
              // },			  
            ],
          },
          {
            avator:
              'img/navigator/newsbtc.png',
            title: 'NewsBTC',
            desc:              
			"NewsBTC是区块链和加密的新闻和资源平台,自2013年开始运营。NewsBTC向区块链和加密货币社区提供新闻,评论,技术分析和其他信息。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.newsbtc.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/newsbtc',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              {
                name: 'Telegram',
                link: 'https://t.me/s/newsbtcofficial',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/cryptoslate.png',
            title: 'CryptoSlate',
            desc:              
			"CryptoSlate是一家区块链媒体,其使命是“提供关于加密货币和区块链的透明、准确的报道”。这家媒体成立于2017年,总部设在西雅图。 CryptoSlate的网站提供与区块链和加密货币相关的定期更新的新闻和文章。它还提供ICO,加密货币排名等内容。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://cryptoslate.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/CryptoSlate',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              {
                name: 'Telegram',
                link: 'https://t.me/cryptoslatenews',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/bitcoinist.png',
            title: 'Bitcoinist',
            desc:              
			"Bitcoinist成立于2013年。Bitcoinist不仅涵盖比特币,还提供有关其他加密货币和区块链技术的新闻和消息来源。Bitcoinist每天发布几篇文章和新闻,涵盖加密和区块链中的一系列主题。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bitcoinist.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/bitcoinist',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              {
                name: 'Telegram',
                link: 'https://t.me/bitcoinistnews',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/magazine.svg',
            title: 'Bitcoin Magazine',
            desc:              
			"Bitcoin Magazine是第一本专门用于比特币的出版物。它的创始人包括V神Vitalik Buterin,以太坊的创造者。现在Bitcoin Magazine不仅涵盖比特币,还涵盖其他加密货币和区块链技术。比特币杂志在金融和技术的交叉点提供分析,研究,教育和思想领导力。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://bitcoinmagazine.com/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/bitcoinmagazine',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: '',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://t.me/bitcoinistnews',
              // },			  
            ],
          },
          {
            avator:
              'img/navigator/odaily.png',
            title: 'ODAILY星球日报',
            desc:              
			"ODAILY是36氪独家战略合作的区块链媒体,通过全面、深度的信息资讯服务为区块链爱好者与项目决策者提供每日必备的前沿区块链技术资讯、区块链游戏、元宇宙、Web3.0行业动态。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.odaily.news/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/OdailyChina',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              {
                name: 'discord',
                link: 'https://discord.com/invite/nQrCTu9Ekd',
              },
              {
                name: 'Telegram',
                link: 'https://t.me/Odaily_CryptoPunk',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/bi123.png',
            title: 'Bi123',
            desc:              
			"Bi123的目标是成为最有价值的区块链信息和数据平台,为数字货币行业用户提供包括比特币、以太坊、币安币等相关行情、信息和数据服务、量化资管、问答社区以及投资教育等内容和服务。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.bi123.co/',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/Bi123pro',
              },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: 'https://discord.com/invite/nQrCTu9Ekd',
              // },
              {
                name: 'Telegram',
                link: 'https://t.me/bi123_official',
              },			  
            ],
          },
          {
            avator:
              'img/navigator/odatainfo.png',
            title: 'Odata',
            desc:              
			"一站式web3项目库。",
            tags: ['BTCNEXT', 'Web3'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.odata.info/',
              },
              // {
                // name: 'twitter',
                // link: 'https://twitter.com/Bi123pro',
              // },
              // {
                // name: 'github',
                // link: '',
              // },
              // {
                // name: 'discord',
                // link: 'https://discord.com/invite/nQrCTu9Ekd',
              // },
              // {
                // name: 'Telegram',
                // link: 'https://t.me/bi123_official',
              // },			  
            ],
          }		  
        ]
      },
    ],
  },
  {
    type: 'link', // category有二级目录 link只有一级
    label: 'KOL',
    href: '#KOL',
    docId: 'KOL',
    items: [
      {
        type: 'link',
        label: '',
        href: '#KOL',
        docId: 'KOL',
        nextitems: [
          {
            avator:
              'img/navigator/wangfeng.png',
            title: '小隐新十年（王峰）',
            desc:
              "🚀 加密公民｜NFT|@element_market|媒体|Marsbit2022|投资@Lkventure|Web3游戏门户|@gamefinaga｜蓝港在线CEO、香港IPO｜前金山软件高级副总裁",
            tags: ['BTCNEXT', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/i/communities/1722516678070972815',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/wangfeng_0128',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/elonmusk.png',
            title: 'Elon Musk',
            desc:
              "SpaceX创始人、Twitter CEO",
            tags: ['话痨博主', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/elonmusk',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/elonmusk',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/cishanjia.png',
            title: '币圈慈善家',
            desc:
              "话痨博主,土狗冲击者,傻逼韭菜,不构成投资建议。若想有所改变,应真诚面对自己和他人。投资核心：玩得早,买的多,拿得住。",
            tags: ['话痨博主', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/cryptocishanjia',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/cryptocishanjia',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/Jademont.png',
            title: 'Jademont',
            desc:
              "CEO @waterdripfund|Managing partner of Pacific Waterdrip Digital Assets Fund|Evangelist of #Bitcoin|Ph.D in EE,  Prev. chip design engineer",
            tags: ['@shanshan521', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/shanshan521',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/shanshan521',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/jack孔.png',
            title: 'Jack孔@iPollo',
            desc:
              "关注Web3、元宇宙。Twitter 仅代表个人观点,不代表公司立场,不构成投资建议。",
            tags: ['@Jack孔@iPollo', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/punk8185',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/punk8185',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/williamcasarin.png',
            title: 'William Casarin',
            desc:
              "#bitcoin core,⚡️& #nostr dev. Building @damusapp|I don’t post much here. find me on nostr 🔎 nostr:jb55@jb55.com",
            tags: ['William Casarin', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/jb55',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/jb55',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          {
            avator:
              'img/navigator/jack.png',
            title: 'jack',
            desc:
              "推特创始人,前CEO",
            tags: ['Jack Dorsey', 'KOL'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/jack',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/jack',
              },
              // {
              //   name: 'github',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: '',
              // },
            ],
          },
          
          
        ]
      },
    ],
  },
  {
    type: 'link', // category有二级目录 link只有一级
    label: '社区',
    href: '#Community',
    docId: 'Community',
    items: [
      {
        type: 'link',
        label: '',
        href: '#Community',
        docId: 'Community',
        nextitems: [
          {
            avator:
              'img/navigator/btcnext.png',
            title: 'BTC NEXT 学习小组',
            desc:
              "🚀 （比特币网络生态第一社群）",
            tags: ['🔥','BTC NEXT', '🔥','Scoial'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/i/communities/1722516678070972815',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/i/communities/1722516678070972815',
              },
              // {
              //   name: 'telegram',
              //   link: '',
              // },
              // {
              //   name: 'discord',
              //   link: 'https://discord.com/invite/okx',
              // },
            ],
          },
          {
            avator:
              'img/navigator/bqtjdyjt.png',
            title: '币圈淘金第一军团',
            desc:
              "🚀 Web3领域各路大神",
            tags: ['🔥','Web3','Scoial'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://twitter.com/i/communities/1669482029468250112',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/i/communities/1669482029468250112',
              },
              // {
              //   name: 'telegram',
              //   link: '币圈淘金第一军团',
              // },
              // {
              //   name: 'discord',
              //   link: 'https://discord.com/invite/okx',
              // },
            ],
          },
          {
            avator:
              'img/navigator/okx.png',
            title: '欧易社区',
            desc:
              "🚀 欧易社区",
            tags: ['OKX', 'Scoial'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.okx.com/cn/community',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/okx',
              },
              {
                name: 'telegram',
                link: 'https://t.me/OKXOfficial_English',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/okx',
              },
            ],
          },
          {
            avator:
              'img/navigator/bian.png',
            title: '币安社区',
            desc:
              "🚀 币安社区",
            tags: ['BIANCE', 'Scoial'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.binance.com/en/community',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/binance',
              },
              {
                name: 'telegram',
                link: 'https://t.me/BinanceChinese',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/jE4wt8g2H2',
              },
            ],
          },
          {
            avator:
              'img/navigator/kucoin.png',
            title: 'KUCOIN社区',
            desc:
              "🚀 KUCOIN社区",
            tags: ['KUCOIN', 'Scoial'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.kucoin.com/zh-hant/land/community-collect',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/KuCoinCom',
              },
              {
                name: 'telegram',
                link: 'https://t.me/KuCoin_Exchange_CHN',
              },
              // {
              //   name: 'discord',
              //   link: 'https://discord.com/invite/jE4wt8g2H2',
              // },
            ],
          },
          {
            avator:
              'img/navigator/gate.io.png',
            title: 'Gate.io社区',
            desc:
              "🚀 Gate.io社区",
            tags: ['Gate.io', 'Scoial'],
            exterlink: [
              {
                name: 'internet',
                link: 'https://www.gate.io/zh/community',
              },
              {
                name: 'twitter',
                link: 'https://twitter.com/gateio_zh',
              },
              {
                name: 'telegram',
                link: 'https://t.me/gate_zh',
              },
              {
                name: 'discord',
                link: 'https://discord.com/invite/QZWFkuQvzP',
              },
            ],
          }
          
        ]
      },
    ],
  },
  // {
  //   type: 'link',
  //   label: 'INTERFACES2',
  //   href: '#naga-2',
  //   docId: 'interfaces2',
  // },
];
