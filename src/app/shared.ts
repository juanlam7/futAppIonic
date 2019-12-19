
const Jornadas = [
    '&league= 74&from= 2019-11-22&to= 2019-11-24',
    '&league= 74&from= 2019-11-08&to= 2019-11-10',
    '&league= 74&from= 2019-11-02&to= 2019-11-03',
    '&league= 74&from= 2019-10-29&to= 2019-10-31',
    '&league= 74&from= 2019-10-25&to= 2019-10-27',
    '&league= 74&from= 2019-10-18&to= 2019-10-20',
    '&league= 74&from= 2019-10-04&to= 2019-10-06',
    '&league= 74&from= 2019-09-27&to= 2019-09-29',
    '&league= 74&from= 2019-09-24&to= 2019-09-26',
    '&league= 74&from= 2019-09-20&to= 2019-09-22',
    '&league= 74&from= 2019-09-13&to= 2019-09-15',
    '&league= 74&from= 2019-08-30&to= 2019-09-01',
    '&league= 74&from= 2019-08-23&to= 2019-08-25',
    '&league= 74&from= 2019-08-16&to= 2019-08-18',
    '&league= 74&from= 2019-11-29&to= 2019-12-01',
  ];



  function buildName () { 
    var result = Jornadas;
    for (let index = 0; index < Jornadas.length; index++) {
      const element = Jornadas[index];
      console.log(element)
    } return result
  }

  const Jornad = buildName();

  export {Jornad}

