const  clicker = document.getElementById( 'cookie' );
let  counter = 0;
function click(){
    counter++;
    document.getElementById( 'clicker__counter' ).textContent = counter;
    if (counter % 2 !== 0){
        document.getElementById( 'cookie' ).width += 24;
        document.getElementById( 'cookie' ).height += 24;
    }
    if (counter % 2 === 0){
        document.getElementById( 'cookie' ).width -= 24;
        document.getElementById( 'cookie' ).height -= 24;
    }


}



clicker.addEventListener("click", () => click());