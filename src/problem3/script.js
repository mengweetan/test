$(document).ready(function() {



  class MyClass {
    constructor(url) {
      this.url = url
    }

    getPrices() {
      return fetch(this.url).then(
          p => {
            return (p.json())
          }
        ).then(
          d => {
            return (d.data.prices)
          }
        )
        .catch(error => {
          return (error);
        });
    }
  }


  function NewPrice(p) {

    this.pair = p.pair;
    this.buy = p.buy;
    this.sell = p.sell;


  }

  NewPrice.prototype.mid = function() {
    return (this.buy + this.sell) / 200
  };

  NewPrice.prototype.quote = function() {


      return (this.pair.substr(this.pair.length - 3))

  };




  const ds = new MyClass('https://static.ngnrs.io/test/prices')
  ds.getPrices()
    .then(prices => {
      prices.forEach(price => {
        price = new NewPrice(price)
        console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
      });
    }).catch(error => {
      console.err(error);
    });
})
