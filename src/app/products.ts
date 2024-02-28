export interface Category {
  id: number;
  type: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  images: Images[];
  link: string;
  description: string;
  likes: number;
  rating: number;
  isRemoved?: boolean;
}

export interface Images {
  id: number;
  link: string;
}

export const categories: Category[] = [
  { 
    id: 1,
    type: 'Smartphones',
    products: [
      {
        id: 1,
        name: 'Apple iPhone 15 Pro Max 256Gb серый',
        price: 631643,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'
          }
        ],
        description: 'A large phone with one of the best screens',
        likes: 0,
        rating: 4.8,
      },
      {
        id: 2,
        name: 'Apple iPhone 14 128Gb черный',
        price: 388789,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h0b/64400500097054.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h52/hab/64400511893534.jpg?format=gallery-medium'
          }
        ],
        description: 'A great phone with one of the best cameras',
        likes: 0,
        rating: 4.8
      },
      {
        id: 3,
        name: 'Apple iPhone 13 128Gb midnight черный',
        price: 294734,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.8
      },
      {
        id: 4,
        name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
        price: 66030,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hac/81335343939614.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h7e/81335344136222.png?format=gallery-medium'
          }
        ],
        description: 'A large phone with one of the best screens',
        likes: 0,
        rating: 5.0
      },
      {
        id: 5,
        name: 'Samsung Galaxy A24 6 ГБ/128 ГБ черный',
        price: 86988,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h81/80750151434270.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h71/80750151630878.jpg?format=gallery-medium'
          }
        ],
        description: 'A large phone with one of the best screens',
        likes: 0,
        rating: 4.5
      },
    ]
  },
  { 
    id: 2,
    type: 'Laptops',
    products: [
      {
        id: 1,
        name: 'Apple MacBook Air 13 MGN93 серебристый',
        price: 433992,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium'
          }
        ],
        description: 'Nice',
        likes: 0,
        rating: 4.8
      },
      {
        id: 2,
        name: 'HP 15s-fq0017ci 9R257EA темно-серый',
        price: 159810,
        link: 'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h2d/84818607341598.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h96/84818607407134.jpg?format=gallery-medium'
          }
        ],
        description: 'Nice',
        likes: 0,
        rating: 4.8
      },
      {
        id: 3,
        name: 'Ноутбук ASUS ASUS Vivobook 16 X1605ZA-MB233W 90NB0ZA3-M00Z30 черный',
        price: 259990,
        link: 'https://kaspi.kz/shop/p/asus-asus-vivobook-16-x1605za-mb233w-90nb0za3-m00z30-chernyi-115765487/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h7a/84824062033950.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/hc4/84824062165022.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hbf/84824062230558.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.8
      },
      {
        id: 4,
        name: 'ASUS TUF Gaming F15 FX507ZC4-HN143 черный',
        price: 428989,
        link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hd0/83606464462878.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h41/83606465249310.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.9
      },
      {
        id: 5,
        name: 'HP 15s-eq2017ci 9L6Q8EA серебристый',
        price: 188000,
        link: 'https://kaspi.kz/shop/p/hp-15s-eq2017ci-9l6q8ea-serebristyi-115757149/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h48/84821068873758.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6a/84821068939294.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hbb/84821069004830.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 3.4
      }
    ]
  },
  { 
    id: 2,
    type: 'Laptops',
    products: [
      {
        id: 1,
        name: 'Apple MacBook Air 13 MGN93 серебристый',
        price: 433992,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium'
          }
        ],
        description: 'Nice',
        likes: 0,
        rating: 4.8
      },
      {
        id: 2,
        name: 'HP 15s-fq0017ci 9R257EA темно-серый',
        price: 159810,
        link: 'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h2d/84818607341598.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h96/84818607407134.jpg?format=gallery-medium'
          }
        ],
        description: 'Nice',
        likes: 0,
        rating: 4.8
      },
      {
        id: 3,
        name: 'Ноутбук ASUS ASUS Vivobook 16 X1605ZA-MB233W 90NB0ZA3-M00Z30 черный',
        price: 259990,
        link: 'https://kaspi.kz/shop/p/asus-asus-vivobook-16-x1605za-mb233w-90nb0za3-m00z30-chernyi-115765487/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h7a/84824062033950.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/hc4/84824062165022.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hbf/84824062230558.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.8
      },
      {
        id: 4,
        name: 'ASUS TUF Gaming F15 FX507ZC4-HN143 черный',
        price: 428989,
        link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hd0/83606464462878.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h41/83606465249310.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.9
      },
      {
        id: 5,
        name: 'HP 15s-eq2017ci 9L6Q8EA серебристый',
        price: 188000,
        link: 'https://kaspi.kz/shop/p/hp-15s-eq2017ci-9l6q8ea-serebristyi-115757149/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h48/84821068873758.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6a/84821068939294.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hbb/84821069004830.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 3.4
      }
    ]
  },
  { 
    id: 2,
    type: 'Laptops',
    products: [
      {
        id: 1,
        name: 'Apple MacBook Air 13 MGN93 серебристый',
        price: 433992,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium'
          }
        ],
        description: 'Nice',
        likes: 0,
        rating: 4.8
      },
      {
        id: 2,
        name: 'HP 15s-fq0017ci 9R257EA темно-серый',
        price: 159810,
        link: 'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h2d/84818607341598.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h96/84818607407134.jpg?format=gallery-medium'
          }
        ],
        description: 'Nice',
        likes: 0,
        rating: 4.8
      },
      {
        id: 3,
        name: 'Ноутбук ASUS ASUS Vivobook 16 X1605ZA-MB233W 90NB0ZA3-M00Z30 черный',
        price: 259990,
        link: 'https://kaspi.kz/shop/p/asus-asus-vivobook-16-x1605za-mb233w-90nb0za3-m00z30-chernyi-115765487/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h7a/84824062033950.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/hc4/84824062165022.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hbf/84824062230558.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.8
      },
      {
        id: 4,
        name: 'ASUS TUF Gaming F15 FX507ZC4-HN143 черный',
        price: 428989,
        link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hd0/83606464462878.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h41/83606465249310.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 4.9
      },
      {
        id: 5,
        name: 'HP 15s-eq2017ci 9L6Q8EA серебристый',
        price: 188000,
        link: 'https://kaspi.kz/shop/p/hp-15s-eq2017ci-9l6q8ea-serebristyi-115757149/?c=750000000',
        images: [
          {
            id: 1,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h48/84821068873758.jpg?format=gallery-medium'
          },
          {
            id: 2,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6a/84821068939294.jpg?format=gallery-medium'
          },
          {
            id: 3,
            link: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hbb/84821069004830.jpg?format=gallery-medium'
          }
        ],
        description: 'Just amazing',
        likes: 0,
        rating: 3.4
      }
    ]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/