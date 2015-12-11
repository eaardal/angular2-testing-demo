System.config({
      packages: {
        'app': {
          defaultExtension: 'js'
        }
      }
    });
    
    Promise.all([
      System.import('app/foo.spec')
    ])
    .then(window.onload)
    .catch(console.error.bind(console));