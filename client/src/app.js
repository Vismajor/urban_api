var app = function(){
  // console.log("we're here")
  // unirest.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat")
  // .header("X-Mashape-Key", "7lne6a46f9mshz9SqlGevo7fGpydp1fe6ZWjsnUlKIUWcpaARx")
  // .header("Accept", "text/plain")
  // .end(function (result) {
  //   console.log(result.status, result.headers, result.body);
  // });

  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("X-Mashape-Key", "7lne6a46f9mshz9SqlGevo7fGpydp1fe6ZWjsnUlKIUWcpaARx");
    request.setRequestHeader("Accept", "text/plain");
    request.onload = callback;
    request.send();
  };

  makeRequest("https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat", function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse(jsonString);
    console.log(results)
  })

  
}

window.onload = app;