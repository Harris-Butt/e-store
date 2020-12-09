import ProductList from "./Componenents/ProductList";

const products = [
  {
    type: "jackets",
    gender: "men",
    title: "SELVEDGE DENIM JACKET",
    price: 49.95,
    id: "DARK BLUE - 7215/381",
    description: `Collared jacket featuring long sleeves with
       buttoned cuffs, chest flap pockets,
    welt pockets at the hip and a metal button-up front.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_1_1_1.jpg?ts=1605614617313`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_1_1_1.jpg?ts=1605614617313`,
      `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_2_2_1.jpg?ts=1605614625089`,
      `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_2_3_1.jpg?ts=1605614626368`,
      `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_2_4_1.jpg?ts=1605614621417`,
      `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_6_1_1.jpg?ts=1600353243848`,
      `https://static.zara.net/photos///2020/I/0/2/p/7215/381/407/2/w/810/7215381407_6_2_1.jpg?ts=1600353263087`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% cotton",
      InnerLayer: "",
    },
  },
  {
    type: "jackets",
    gender: "men",
    title: "COLOUR BLOCK JACKET",
    price: 49.95,
    id: "BEIGE - 3918/309",
    description: `Lightweight jacket with an adjustable hood
    and long sleeves with elastic cuffs. Hip welt pockets.
    Adjustable drawstring hem. Zip-up front.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/375/3918309710_1_1_1.jpg?ts=1601974808662`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/810/3918309710_1_1_1.jpg?ts=1601974808662`,
      `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/810/3918309710_2_2_1.jpg?ts=1601974956156`,
      `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/810/3918309710_2_3_1.jpg?ts=1601974911431`,
      `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/810/3918309710_6_1_1.jpg?ts=1602174940665`,
      `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/810/3918309710_6_2_1.jpg?ts=1602174942015`,
      `https://static.zara.net/photos///2020/I/0/2/p/3918/309/710/2/w/810/3918309710_6_3_1.jpg?ts=1602175281411`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "88% nylon, 12% elastane",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "jackets",
    gender: "men",
    title: "OVERSIZED PUFFER JACKET",
    price: 69.95,
    id: "TOFFEE - 3286/300",
    description: `Loose-fitting puffer jacket with a high neck and a detachable hood.
     Long sleeves with ribbed inner cuffs. Welt pockets at the hip. Adjustable drawstring hem.
      Zip-up front hidden by a snap-button placket.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/62/w/325/3286300745_2_1_1.jpg?ts=1605013238969`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/62/w/810/3286300745_1_1_1.jpg?ts=1605013229807`,
      `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/62/w/810/3286300745_2_1_1.jpg?ts=1605013238969`,
      `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/62/w/810/3286300745_2_2_1.jpg?ts=1605013237999`,
      `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/62/w/810/3286300745_2_3_1.jpg?ts=1605013247375`,
      `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/2/w/810/3286300745_6_1_1.jpg?ts=1602173938764`,
      `https://static.zara.net/photos///2020/I/0/2/p/3286/300/745/2/w/810/3286300745_6_2_1.jpg?ts=1602173935113`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% polyester",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "bombers",
    gender: "men",
    title: "FAUX SUEDE BOMBER JACKET",
    price: 59.95,
    id: "BRANDY - 6318/401",
    description: `Jacket with a ribbed collar and long sleeves.
      Zip pockets at the hip and inside pocket detail.
      Front snap-button fastening.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/325/6318401778_2_1_1.jpg?ts=1603276507076`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/810/6318401778_1_1_1.jpg?ts=1603352183018`,
      `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/810/6318401778_2_1_1.jpg?ts=1603276507076`,
      `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/810/6318401778_2_2_1.jpg?ts=1603276737495`,
      `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/810/6318401778_2_4_1.jpg?ts=1603276479875`,
      `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/810/6318401778_6_1_1.jpg?ts=1603120042831`,
      `https://static.zara.net/photos///2020/I/0/2/p/6318/401/778/2/w/810/6318401778_6_2_1.jpg?ts=1603120051486`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "94% polyester, 6% elastane",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "bombers",
    gender: "men",
    title: "TECHNICAL BOMBER JACKET",
    price: 89.95,
    id: "GREY GREEN - 6518/370",
    description: `Jacket made of technical fabric.
     Elastic collar and long sleeves with ribbed cuffs.
      Welt pockets at the hip. Elastic hem. Front zip fastening.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/62/w/325/6518370916_2_1_1.jpg?ts=1604591221247`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/62/w/810/6518370916_1_1_1.jpg?ts=1604591201701`,
      `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/62/w/810/6518370916_2_1_1.jpg?ts=1604591221247`,
      `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/62/w/810/6518370916_2_2_1.jpg?ts=1604591235793`,
      `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/62/w/810/6518370916_2_3_1.jpg?ts=1604591246640`,
      `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/2/w/810/6518370916_6_1_1.jpg?ts=1603722789651`,
      `https://static.zara.net/photos///2020/I/0/2/p/6518/370/916/2/w/810/6518370916_6_2_1.jpg?ts=1603722788170`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% nylon",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "jackets",
    gender: "women",
    title: "BELTED OVERSHIRT",
    price: 49.95,
    id: "BEIGE - 3046/305",
    description: `Collared overshirt with long sleeves.
      Featuring front patch pockets with flaps,
      in-seam side pockets, a belt in the same fabric and
      front fastening with contrast buttons.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/1/p/3046/305/710/2/w/663/3046305710_1_1_1.jpg?ts=1603878805824`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/1/p/3046/305/710/2/w/810/3046305710_1_1_1.jpg?ts=1603878805824`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/305/710/2/w/810/3046305710_2_1_1.jpg?ts=1603878826675`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/305/710/2/w/810/3046305710_6_1_1.jpg?ts=1599491078131`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/305/710/2/w/810/3046305710_6_2_1.jpg?ts=1599491052462`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/305/710/2/w/810/3046305710_6_3_1.jpg?ts=1599491036863`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% nylon",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "jackets",
    gender: "women",
    title: "QUILTED GILET WITH WATER AND WIND PROTECTION",
    price: 49.95,
    id: "ECRU - 3046/252",
    description: `Puffer gilet with a high collar and adjustable
     drawstring hood. Front zip pockets. Front zip and snap-button fastening.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/1/p/3046/252/712/2/w/810/3046252712_1_1_1.jpg?ts=1603878827232`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/1/p/3046/252/712/2/w/810/3046252712_1_1_1.jpg?ts=1603878827232`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/252/712/2/w/810/3046252712_6_1_1.jpg?ts=1597336117752`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/252/712/2/w/810/3046252712_6_2_1.jpg?ts=1597336112976`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/252/712/2/w/810/3046252712_6_3_1.jpg?ts=1597336113086`,
      `https://static.zara.net/photos///2020/I/0/1/p/3046/252/712/2/w/810/3046252712_6_4_1.jpg?ts=1597336147331`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% polyester",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "jackets",
    gender: "women",
    title: "WOOL BLEND COAT",
    price: 139.0,
    id: "BLACK - 8876/738",
    description: `Coat made of a wool blend. Lapel collar, long sleeves,
     front flap pockets and a chest welt pocket. Lining. Button fastening at the front.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/1/p/8876/738/800/2/w/810/8876738800_1_1_1.jpg?ts=1607087926721`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/1/p/8876/738/800/2/w/810/8876738800_1_1_1.jpg?ts=1607087926721`,
      `https://static.zara.net/photos///2020/I/0/1/p/8876/738/800/2/w/810/8876738800_2_1_1.jpg?ts=1607087918754`,
      `https://static.zara.net/photos///2020/I/0/1/p/8876/738/800/2/w/810/8876738800_6_1_1.jpg?ts=1607011093349`,
      `https://static.zara.net/photos///2020/I/0/1/p/8876/738/800/2/w/810/8876738800_6_2_1.jpg?ts=1607011095993`,
      `https://static.zara.net/photos///2020/I/0/1/p/8876/738/800/2/w/810/8876738800_6_3_1.jpg?ts=1607011138333`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% polyester",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "jackets",
    gender: "women",
    title: "CHECK OVERSHIRT",
    price: 49.95,
    id: "BEIGE - 8342/702",
    description: `Collared overshirt featuring long sleeves with cuffs,
     front patch pockets with flaps and side pockets hidden in-seam.`,
    mainImage: `https://static.zara.net/photos///2020/I/0/1/p/8342/705/710/3/w/810/8342705710_2_1_1.jpg?ts=1606904987548`,
    secondaryImages: [
      `https://static.zara.net/photos///2020/I/0/1/p/8342/705/710/3/w/810/8342705710_2_1_1.jpg?ts=1606904987548`,
      `https://static.zara.net/photos///2020/I/0/1/p/8342/705/710/3/w/810/8342705710_2_2_1.jpg?ts=1606904977665`,
      `https://static.zara.net/photos///2020/I/0/1/p/8342/705/710/3/w/810/8342705710_2_3_1.jpg?ts=1606904988154`,
      `https://static.zara.net/photos///2020/I/0/1/p/8342/702/710/2/w/810/8342702710_6_1_1.jpg?ts=1603981873778`,
      `https://static.zara.net/photos///2020/I/0/1/p/8342/702/710/2/w/810/8342702710_6_2_1.jpg?ts=1603981942119`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% polyester",
      InnerLayer: "100% polyester",
    },
  },
  {
    type: "jackets",
    gender: "women",
    title: "CHECK OVERSHIRT",
    price: 39.95,
    id: "MAROON - 2036/125",
    description: `Collared overshirt made of a wool blend. Featuring long sleeves,
     front patch pockets with flaps and a front button fastening.`,
    mainImage: `https://static.zara.net/photos///2021/V/0/1/p/2036/125/605/2/w/810/2036125605_1_1_1.jpg?ts=1606477361394`,
    secondaryImages: [
      `https://static.zara.net/photos///2021/V/0/1/p/2036/125/605/2/w/810/2036125605_1_1_1.jpg?ts=1606477361394`,
      `https://static.zara.net/photos///2021/V/0/1/p/2036/125/605/2/w/810/2036125605_2_1_1.jpg?ts=1606477361641`,
      `https://static.zara.net/photos///2021/V/0/1/p/2036/125/605/2/w/810/2036125605_2_2_1.jpg?ts=1606477360648`,
      `https://static.zara.net/photos///2021/V/0/1/p/2036/125/605/2/w/810/2036125605_6_1_1.jpg?ts=1605805329693`,
      `https://static.zara.net/photos///2021/V/0/1/p/2036/125/605/2/w/810/2036125605_6_2_1.jpg?ts=1605805253224`,
    ],
    sizes: [
      `
    EU M / US M
    `,
      `EU L / US L`,
    ],
    composition: {
      outerLayer: "100% polyester",
      InnerLayer: "100% polyester",
    },
  },
];
export default products;
