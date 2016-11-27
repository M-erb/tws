twsApp.factory('products',['$localStorage', function($localStorage){
  var directoryCheck = function() {
    //house keeping for local storage
    if ($localStorage.directory == null) {
      $localStorage.directory = {}
    }
  }
  directoryCheck()

  var o = {
    products: [{
      id: '98',
      name: "hibiscus travel blanket",
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 30,
      status: 'active',
      collection: 'moms blankets',
      category: 'blankets and quilts',
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
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 55,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '92',
      name: "baby girl tied patchwork quilt",
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '88',
      name: "tied patchwork neutral baby quilt",
      img: "blanket.png",//TEST image
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
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
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'blue',
      mainPattern: 'plaid',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '86',
      name: "trucks and cars travel blanket",
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '80',
      name: "frog travel blanket",
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '76',
      name: "striped travel blanket",
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      features: ['feature 1', 'feature 2'],
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: '72',
      name: "butterflies and polka dots travel blanket",
      img: "",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=600%C3%97200&w=600&h=400"},
      ],
      price: 50,
      discount: 0,
      collection: 'moms blankets',
      status: 'active',
      category: 'blankets and quilts',
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
    bag: [{
      proID: '72',
      qty: 1,
      name: "test product",
      img: "blue-blanket.png",
      price: "",
      link: "0"
    }, {
      proID: '76',
      qty: 2,
      name: "test product2",
      img: "blue-blanket.png",
      price: "",
      link: "1"
    }]
  }

  return o;
}]);
