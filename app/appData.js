twsApp.factory('products',['$localStorage', function($localStorage){

  var o = {
    products: [{
      id: '98',
      name: "hibiscus travel blanket",
      img: "hedgehog-blanket-front.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 30,
      status: 'active',
      qtyAvailable: 0,
      collection: 'moms',
      category: 'blankets',
      mainColor: 'blue',
      features: [
        'feature 1',
        'feature 2',
        "dimentions: 9'x11'"
      ],
      longDescription: 'this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description this is a long description '
    }, {
      id: '94',
      name: "blue hedgehog baby quilt",
      img: "hedgehog-blanket-front.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 55,
      discount: 10,
      collection: 'moms',
      status: 'active',
      qtyAvailable: 3,
      category: 'quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '92',
      name: "baby girl tied patchwork quilt",
      img: "hedgehog-blanket-front.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms',
      status: 'active',
      category: 'quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '88',
      name: "tied patchwork neutral baby quilt",
      img: "elephant-flower-blanket-front.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms',
      status: 'active',
      category: 'quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '106',
      name: "blue tied patchwork baby quilt",
      img: "blue-blanket.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 10,
      collection: 'moms',
      status: 'active',
      category: 'quilts',
      mainColor: 'blue',
      mainPattern: 'plaid',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '86',
      name: "trucks and cars travel blanket",
      img: "road-car-blanket.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms',
      status: 'active',
      category: 'blankets',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '80',
      name: "frog travel blanket",
      img: "bear-with-balloons-blanket.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms',
      status: 'active',
      category: 'blankets',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '76',
      name: "striped travel blanket",
      img: "bear-with-balloons-blanket.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms',
      status: 'active',
      category: 'blankets',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '72',
      name: "butterflies and polka dots travel blanket",
      img: "bear-with-balloons-blanket.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms',
      status: 'active',
      category: 'blankets',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }]
  }

  return o;
}]);


twsApp.factory('bag',['$localStorage', function($localStorage){

  var o = {
    bag: []
  }

  var bagContentsCheck = function() {
    //house keeping for local storage
    if ($localStorage.unpurchasedBag == null) {
      $localStorage.unpurchasedBag = []
    }else {
      o.bag = $localStorage.unpurchasedBag
    }
  }
  bagContentsCheck()

  return o
}]);
