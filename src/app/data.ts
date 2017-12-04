const composant = [
  {
    'motherboard': {
      'asus_atx': {
        'name': 'asus atx',
        'size': 'ATX',
        'price': 300,
        'MaxGPu': 3,
        'Chipset': 1151
      },
      'msi_atx': {
        'size': 'ATX',
        'price': 150,
        'MaxGPu': 3,
        'Chipset': 1151
      },
      'evga_atx': {
        'size': 'ATX',
        'price': 250,
        'MaxGPu': 4,
        'Chipset': 1151
      },
      'asus_mATX': {
        'size': 'mATX',
        'price': 250,
        'MaxGPu': 2,
        'Chipset': 1151
      },
      'msi_mATX': {
        'size': 'mATX',
        'MaxGPu': 1,
        'Chipset': 1151
      },
      'asus_ITX': {
        'size': 'ITX',
        'price': 300,
        'MaxGPu': 1,
        'Chipset': 1151
      },
      'msi_ITX': {
        'size': 'ITX',
        'price': 50,
        'MaxGPu': 1,
        'Chipset': 1151
      },
      'evga_ITX': {
        'size': 'ITX',
        'price': 200,
        'MaxGPu': 1,
        'Chipset': 1151
      }
      }
  },
  {
    'CPU': {
  'i7': {
    'price': 300,
    'power': 80
  },
  'i5': {
    'price': 200,
    'power': 50
  },
  'i3': {
    'price': 100,
    'power': 30
  }
}
  },
  {
    'GPU': {
    '1080': {
      'price': 500,
      'size': 350,
      'power': 300
    },
    '1080ti': {
      'price': 800,
      'size': 400,
      'power': 300
    },
    '1070': {
      'price': 400,
      'size': 300,
      'power': 250
    },
    '1060': {
      'price': 200,
      'size': 250,
      'power': 200
    },
    '1050': {
      'price': 400,
      'size': 200,
      'power': 250
    },
    'R9': {
      'price': 200,
      'size': 200,
      'power': 400
    }
  }


},
  {
    'case': {
    'the_ultra_mini_case': {
      'price': 50,
      'gpusize': 0,
      'ventirad': 1
    },
    'the_mini_case':{
      "price":100,
      "gpusize":200,
      "ventirad": 1
    },
    'the_case': {
      'price': 75,
      'gpusize': 250,
      'ventirad': 2
    },
    'the_big_case': {
      'price': 50,
      'gpusize': 300,
      'ventirad': 3
    },
    'the_ultrawide_case': {
      'price': 400,
      'gpusize': 500,
      'ventirad': 3
    }
    }
  }
];

export default composant;
