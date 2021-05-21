export const symbols = {
  oneCoin:
    '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
  twoCoin: '1111111111111111111111111111111111111111',
  threeCoin: '1111111111111111111111111111111111111111111',
  oneBag:
    '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
  twoBag:
    '111111111111111111111111111111111111111111111111111111111111111111111111',
  threeBag: '11111111111111111111111111111111111111',
  threeHammer: '11111111111111111111111111111',
  threeEnergy: '111',
  threeShield: '1111111111111111111',
  threePig: '11111111111111',
  nothing: '1111111111111',
  strawberry: '11',
};

// Sh13ptctsh3pc3d2c2h23d11tcec1c3cbt121dc1d212cd2nc212ttd131nc13pdc1s123chsc3nb1t22cnh3ce1h2d1tctch2c12d21c133d21c2cd2121dtp31d1t1htchpc1ct2cht3dhc2nc1bct1ct121c212cc1131np1hcchcpc1hh3ct1

export const min = 1500;
export const max = 3000;
export const timing = Math.random() * (max - min) + min;
export const oneCoin = 13600; // 13800 (20)
export const twoCoin = 16400; // 16700 (20)
export const threeCoins = 102900; // 104900 (20)
export const oneBag = 29100; // 29600 (20)
export const twoBag = 61000; // 62200 (20)
export const threeBag = 260000; // 270000 (20)
export const hammer = 825000; // 225000
export const threePig = 5912400; // 7495800 1770000 254000 678000 112000 260000 390000 756000 362000 370000 795000 260000
export const threeEnergy = 10;
export const strawberry = 10;

export const bonus = ['threeShield', 'threeHammer']; // x2/3/4 each, 5 (2/4) (50 energy) 10 (2) (700k) 15 (4) (1.5m) 20 (10m, 120 energy)

export const wheel = [
  250000, 12500000, 650000, 2500000, 400000, 50000000, 1200000, 4000000,
];
