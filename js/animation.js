let value = document.getElementsByClassName('required');

for(var index = 0; index < value.length; index ++){
    if(value[index].required == false){
        value[index].required = true;
       
    }

}
