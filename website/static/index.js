function deleteBird(birdId){
    fetch('/delete-bird', {
        method: 'POST',
        body: JSON.stringify({birdId: birdId}),
    }).then((_res)=> {
        window.location.href="/";
    });
}