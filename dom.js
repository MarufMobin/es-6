document.getElementById('add-border').addEventListener("click",function(){
  const container = document.getElementById('friend-container');
    container.style.backgroundColor = 'green';
    container.style.padding = '20px';
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

    const friendContainer = document.getElementById('friend-container');

    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML=`
    <h3 class="friend-name">New Friend</h3>
    <p>Voluptatem quos quisquam perspiciatis placeat.</p>
    `;
    friendContainer.appendChild(friendDiv);

});