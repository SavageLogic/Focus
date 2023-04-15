document.addEventListener('DOMContentLoaded', function(){
    setTimeout(() => {
       const related = document.getElementById('secondary')
       related.parentNode.removeChild(related) 
    }, 1500);
})