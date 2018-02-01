$.ajax({

    headers: {
      Authorization: 'Basic' + btoa('AMontea8182:Tranc34ndes$$$.')
    },
    url: 'https://gateway.marvel.com/v1/public/characters',
    complete: function(data,ms,settings){
          console.log(data,ms,settings)
          }

      })