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
      id: 98,
      name: "hibiscus travel blanket",
      img: "",
      price: 50,
      discount: -1,
      status: 'active',
      collection: '',
      category: 'blankets and quilts',
      mainColor: 'blue',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 94,
      name: "blue hedgehog baby quilt",
      img: "",
      price: 55,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 92,
      name: "baby girl tied patchwork quilt",
      img: "",
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 88,
      name: "tied patchwork neutral baby quilt",
      img: "blanket.png",//TEST image
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 106,
      name: "blue tied patchwork baby quilt",
      img: "blue-blanket.png",
      slides: [
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=200%C3%97200&w=200&h=200"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=200%C3%97200&w=200&h=200"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=200%C3%97200&w=200&h=200"},
        {img: "https://placeholdit.imgix.net/~text?txtsize=19&bg=ffffff&txt=200%C3%97200&w=200&h=200"},
      ],
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'blue',
      mainPattern: 'plaid',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 86,
      name: "trucks and cars travel blanket",
      img: "",
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 80,
      name: "frog travel blanket",
      img: "",
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 76,
      name: "striped travel blanket",
      img: "",
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 72,
      name: "butterflies and polka dots travel blanket",
      img: "",
      price: 50,
      discount: 0,
      status: 'active',
      category: 'blankets and quilts',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }]
  }

  return o;
}]);
