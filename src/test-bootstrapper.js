  System.config({
      packages: {
        'app': {
          defaultExtension: 'js'
        }
      }
    });
    
    Promise.all([
      System.import('app/foo')
    ])
    .then(function(){

    })
    .catch(console.error.bind(console));