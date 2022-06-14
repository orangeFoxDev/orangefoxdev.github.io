const showInfo = (itemId) => {
    
    const tempList = ['what', 'why', 'where', 'how'] 

    tempList.forEach(i => {
        document.getElementById(i).style.display = 'none';
        document.getElementById(i).style.height = '0%';
        document.getElementById(i).style.opacity = 0;
    })

    const showItem = (id) => {
        document.getElementById(id).style.display = 'flex';
        document.getElementById(id).style.height = '100%';
        document.getElementById(id).style.opacity = 1;
    }  


    switch(itemId) {     
        case 'what':
            showItem(itemId);
            break;
        case 'why':
            showItem(itemId);
            break;
        case 'where':
            showItem(itemId);
            break;
        case 'how':
            showItem(itemId);
            break;
            
    }
}
