<<<<<<< HEAD
export interface Product {
  id: number;
  link: string;
  link1: string;
  link2: string;
  link3: string;
  name: string;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    link: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h79/hb5/63949926924318.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h87/h90/63841427882014.jpg?format=preview-large",
    name: 'Phone 11',
    description: 'Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу. Изображение на экране смартфона диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей. Олеофобное покрытие исключает сильное загрязнение экрана.',
    rating: 4.8
  },
  {
    id: 2,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h21/h45/64083958562846.jpg?format=gallery-medium",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h12/h13/63952841605150.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/ha9/h53/64083673776158.jpg?format=preview-large",
    name: 'Phone 12',
    description: 'Невероятно прочная передняя панель Ceramic Shield. Великолепный яркий дисплей OLED. Мощный чип. И система двух камер. Всё это есть в Apple iPhone 12.',
    rating: 4.87
  },
  {
    id: 3,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-pro-max-512gb-serebristyi-100658069/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h3d/hbe/64083803635742.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h42/h5f/63952897409054.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/yml/static/assets/badges/b5.svg",
    name: 'Phone 12 Pro Max',
    description: 'Apple iPhone 12 Pro отличается новым элегантным дизайном без закругления граней в корпусе из нержавеющей стали. Дисплей Super Retina XDR 6.1 дюйма от края до края обеспечивает превосходную цветопередачу.',
    rating: 4.89
  },
  {
    id: 4,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-mini-256gb-krasnyi-100657860/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/hb5/hc2/64084263043102.jpg?format=gallery-medium",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h29/h0f/64083334463518.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h89/h68/64084587970590.jpg?format=preview-large",
    name: 'Phone 12 mini',
    description: 'Apple iPhone 12 mini отличается новым элегантным дизайном без закругления граней.',
    rating: 1.1
  },
  {
    id: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=preview-large",
    name: 'Phone 13',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 3.6
  },
  {
    id: 6,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/he8/h04/64205807222814.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h97/h06/64205643022366.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hfc/h30/63998596677662.jpg?format=preview-large",
    name: 'Phone 13 mini',
    description: 'Apple iPhone 13 mini получил дисплей 5.4 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 4.49
  },
  {
    id: 7,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zolotistyi-102298917/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/he6/h2c/64109907345438.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h69/h5c/63998183637022.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h3f/h00/64117436088350.jpg?format=preview-large",
    name: 'Phone 13 Pro Max',
    description: 'Apple iPhone 13 Pro Max получил дисплей 6.7 дюйма Super Retina XDR1 с адаптивной частотой обновления до 120 Гц и технологией ProMotion для более быстрого и плавного взаимодействия. Благодаря передней панели Ceramic Shield экран защищен от трещин, царапин и других мелких повреждений.',
    rating: 5
  },
  {
    id: 8,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=preview-large",
    name: 'Phone 14',
    description: 'Apple iPhone 14 - один из самых многофункциональных смартфонов. Отличается щикарной камерой и титанический корпусом.',
    rating: 4.3
  },
  {
    id: 9,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h6a/h70/64434420088862.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hd6/h0f/64428189384734.jpg?format=preview-large",
    name: 'Phone 14 Pro Max',
    description: 'Отличный телефон!',
    rating: 4.4
  },
  {
    id: 10,
    link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h07/83559339032606.png?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hac/h5f/83559340867614.png?format=preview-large",
    name: 'Phone 15',
    description: '',
    rating: 4.51
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
=======
export interface Product {
  id: number;
  link: string;
  link1: string;
  link2: string;
  link3: string;
  name: string;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    link: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h79/hb5/63949926924318.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h87/h90/63841427882014.jpg?format=preview-large",
    name: 'Phone 11',
    description: 'Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу. Изображение на экране смартфона диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей. Олеофобное покрытие исключает сильное загрязнение экрана.',
    rating: 4.8
  },
  {
    id: 2,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h21/h45/64083958562846.jpg?format=gallery-medium",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h12/h13/63952841605150.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/ha9/h53/64083673776158.jpg?format=preview-large",
    name: 'Phone 12',
    description: 'Невероятно прочная передняя панель Ceramic Shield. Великолепный яркий дисплей OLED. Мощный чип. И система двух камер. Всё это есть в Apple iPhone 12.',
    rating: 4.87
  },
  {
    id: 3,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-pro-max-512gb-serebristyi-100658069/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h3d/hbe/64083803635742.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h42/h5f/63952897409054.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/yml/static/assets/badges/b5.svg",
    name: 'Phone 12 Pro Max',
    description: 'Apple iPhone 12 Pro отличается новым элегантным дизайном без закругления граней в корпусе из нержавеющей стали. Дисплей Super Retina XDR 6.1 дюйма от края до края обеспечивает превосходную цветопередачу.',
    rating: 4.89
  },
  {
    id: 4,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-mini-256gb-krasnyi-100657860/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/hb5/hc2/64084263043102.jpg?format=gallery-medium",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h29/h0f/64083334463518.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h89/h68/64084587970590.jpg?format=preview-large",
    name: 'Phone 12 mini',
    description: 'Apple iPhone 12 mini отличается новым элегантным дизайном без закругления граней.',
    rating: 1.1
  },
  {
    id: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=preview-large",
    name: 'Phone 13',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 3.6
  },
  {
    id: 6,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/he8/h04/64205807222814.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h97/h06/64205643022366.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hfc/h30/63998596677662.jpg?format=preview-large",
    name: 'Phone 13 mini',
    description: 'Apple iPhone 13 mini получил дисплей 5.4 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    rating: 4.49
  },
  {
    id: 7,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zolotistyi-102298917/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/he6/h2c/64109907345438.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h69/h5c/63998183637022.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h3f/h00/64117436088350.jpg?format=preview-large",
    name: 'Phone 13 Pro Max',
    description: 'Apple iPhone 13 Pro Max получил дисплей 6.7 дюйма Super Retina XDR1 с адаптивной частотой обновления до 120 Гц и технологией ProMotion для более быстрого и плавного взаимодействия. Благодаря передней панели Ceramic Shield экран защищен от трещин, царапин и других мелких повреждений.',
    rating: 5
  },
  {
    id: 8,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=preview-large",
    name: 'Phone 14',
    description: 'Apple iPhone 14 - один из самых многофункциональных смартфонов. Отличается щикарной камерой и титанический корпусом.',
    rating: 4.3
  },
  {
    id: 9,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/h6a/h70/64434420088862.jpg?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hd6/h0f/64428189384734.jpg?format=preview-large",
    name: 'Phone 14 Pro Max',
    description: 'Отличный телефон!',
    rating: 4.4
  },
  {
    id: 10,
    link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    link1: "https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=preview-large",
    link2: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h07/83559339032606.png?format=preview-large",
    link3: "https://resources.cdn-kaspi.kz/img/m/p/hac/h5f/83559340867614.png?format=preview-large",
    name: 'Phone 15',
    description: '',
    rating: 4.51
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
>>>>>>> 8e72d5cc64febcd492ec2484183a1735d0a146b8
*/