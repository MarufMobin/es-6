document.getElementById('add-border').addEventListener("click",function(){
  const container = document.getElementById('friend-container');
    container.style.backgroundColor = 'green';
});


function addBackgroundColor(){

    const friends = document.getElementsByClassName('friend');

    for( const friend of friends){
        friend.style.backgroundColor = 'lightblue';
        friend.style.padding = '10px';
        friend.style.margin = '10px';
        friend.style.borderRadius = '10px';
    }
}

document.getElementById('add-friend').addEventListener('click',function(){
    
})