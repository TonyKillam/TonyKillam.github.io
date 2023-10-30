const submarine = document.getElementById('submarine');
const trash = document.getElementById('trash');

let submarineX = 50;
let submarineY = 50;
let trashX = 200;
let trashY = 200;

submarine.style.left = submarineX + 'px';
submarine.style.top = submarineY + 'px';
trash.style.left = trashX + 'px';
trash.style.top = trashY + 'px';

document.addEventListener('keydown', moveSubmersible);

function moveSubmersible(e) {
    switch(e.key) {
        case 'ArrowUp':
            submarineY -= 10;
            break;
        case 'ArrowDown':
            submarineY += 10;
            break;
        case 'ArrowLeft':
            submarineX -= 10;
            break;
        case 'ArrowRight':
            submarineX += 10;
            break;
    }

    submarine.style.left = submarineX + 'px';
    submarine.style.top = submarineY + 'px';

    checkTrashCollection();
}

function checkTrashCollection() {
    const submarineRect = submarine.getBoundingClientRect();
    const trashRect = trash.getBoundingClientRect();

    if (
        submarineRect.left < trashRect.right &&
        submarineRect.right > trashRect.left &&
        submarineRect.top < trashRect.bottom &&
        submarineRect.bottom > trashRect.top
    ) {
        trashX = Math.random() * window.innerWidth;
        trashY = Math.random() * window.innerHeight;
        trash.style.left = trashX + 'px';
        trash.style.top = trashY + 'px';
    }
}
