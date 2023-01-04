const ADULT_ACT_LVL = [
  ['Weight Loss', '1'],
  ['Inactive & Obese Prone', '1.2'],
  ['Inactive', '1.4'],
  ['Neutered & Low Act.', '1.6'],
  ['Intact & Low Act.', '1.8'],
  ['Young Adult & Average Act.', '2'],
  ['Energetic', '2.5'],
  ['Above Average', '3'],
];
const PUPPY_SIZES = {
  SML: {
    description: 'Corgi or Pug',
    weight: '5-11kg',
    eaw: '8kg',
  },
  MED: {
    description: 'Collie or Cocker',
    weight: '12-18kg',
    eaw: '15kg',
  },
  'MED/LRG': {
    description: 'Boxer or Dalmatian',
    weight: '19-32kg',
    eaw: '25.5kg',
  },
  LRG: {
    description: 'Labrador or Staffie',
    weight: '32-40kg',
    eaw: '36kg',
  },
};
const PUPPY_ACT_LVL = [
  ['2 - 4 Months', '3 - 2.8', '2 - 4 Months', '3 - 2.8'],
  ['4 - 6 Months', '2.8 - 2.6', '4 - 6 Months', '2.8 - 2.6'],
  ['6 - 8 Months', '2.6 - 2.4', '6 - 8 Months', '2.6 - 2.4'],
  ['8 - 10 Months', '2.4 - 2.2', '8 - 10 Months', '2.4 - 2.2'],
  ['10 - 12 Months', '2.2 - 2', '10 - 12 Months', '2.2 - 2'],
  ['', '', '12 - 14 Months', '2 - 1.8'],
  ['', '', '14 - 16 Months', '1.8 - 1.6'],
];

const PUPPY_BARF_PERC = {
  'Muscle Meat': 58,
  'Raw Bone': 17,
  Veggies: 7,
  Liver: 7,
  'Other Organs': 7,
  Seeds: 3,
  Fruit: 1,
};

const ADULT_BARF_PERC = {
  'Muscle Meat': 70,
  'Raw Bone': 10,
  Veggies: 7,
  Liver: 5,
  'Other Organs': 5,
  Seeds: 2,
  Fruit: 1,
};

export {
  ADULT_ACT_LVL,
  ADULT_BARF_PERC,
  PUPPY_BARF_PERC,
  PUPPY_ACT_LVL,
  PUPPY_SIZES,
};
