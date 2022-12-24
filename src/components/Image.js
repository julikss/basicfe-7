import React from 'react';
import kyivImg from '../assets/kyiv.jpg';

function Image() {
    function addImage() {
        const copy = document.getElementById('copyImg');
        const imgPlace = document.getElementById('img-placeholder');
        if (!copy) {
            let img = document.createElement('img');
                img.id = 'copyImg';
                img.src = kyivImg;
                img.alt = 'Kyiv';
                img.width = '500';
                imgPlace.append(img);
        }
    }

    let zoomValue = 1;
    function zoomIn() {
        const copy = document.getElementById('copyImg');
        zoomValue+=0.1;
        if (!copy || zoomValue < 1) return;
        copy.style.transform = `scale(${zoomValue})`;
    }

    function zoomOut() {
        const copy = document.getElementById('copyImg');
        zoomValue-=0.1;
        if (!copy || zoomValue < 1) return;
        copy.style.transform = `scale(${zoomValue})`;
    }

    function removeImage() {
        const copy = document.getElementById('copyImg');
        if (copy) copy.remove();
    }

    return (
        <div>
            <div id="img-placeholder"></div>
            <button onClick={addImage}>Додати</button>
            <button onClick={zoomIn}>Збільшити</button>
            <button onClick={zoomOut}>Зменшити</button>
            <button onClick={removeImage}>Видалити</button>
        </div>
    )
}

export default Image;