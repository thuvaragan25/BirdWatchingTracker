function deleteBird(birdId){
    fetch('/delete-bird', {
        method: 'POST',
        body: JSON.stringify({birdId: birdId}),
    }).then((_res)=> {
        window.location.href="/";
    });
}

function addBird(birdName) {
    fetch('/add-bird', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({birdName: birdName}),
    });
}

function infoBird(birdName) {
    window.location.href = "/" + birdName;
}