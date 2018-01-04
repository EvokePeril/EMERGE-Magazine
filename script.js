function load(doc){
    alert("Pressed it")
    switch(doc){
        case 1:     // First Issue
            alert("First issue selected")
            break;
        case 2:     // Second Issue
            alert("Second issue selected")
            break;
        case 3:     // Online Exclusives
            alert("Online exclusives selected")
            break;
        case 4:     // Doodles
            alert("Doodles selected")
            break;
        default:    // Unknown input
            alert("Invalid request")
            break;
    }
}

function close() {
    // We manipulate the z-index of our tray to make it "close"
    let tray = document.getElementByClassName("outerTray");
    
    alert("Clicked it!");
    tray.z-index = -1;
    
}