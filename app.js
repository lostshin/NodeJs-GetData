var request=http.get("http://60.249.48.94/gwjs.json",function(response){
var body="";
response.on('data',function(chunk){
     body+=chunk;
})

response.on('end',function(chunk){
  if(response.statusCode===200){
  try{
       var bickMessage=JSON.parse(body);
       bikeMessage(bikeMessage)
  
  }
  catch(error){
  
    prentError(error)
  
  }
  
  }else{
  
     printError({message:"there was an error getting the youbike"})
  
  }
  
  
  
  request.on("error",printError)