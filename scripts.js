const showInfo = (itemId) => {
    const tempList = ['what', 'why', 'where', 'how'] 

    tempList.forEach(i => {
        document.getElementById(i).style.display = 'none';
    })

    const showItem = (id) => {
        document.getElementById(id).style.display = 'flex'
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
