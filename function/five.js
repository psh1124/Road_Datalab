let isPairSelected = false;
let isRankSelected = false;
let currentPair = null;
let csvData = [];
let currentCSVFile = null;

const csvFiles = {
    'pair-1': '../p=1.csv',
    'pair-2': '../p=2.csv',
    'pair-3': '../p=3.csv'
};

// 페어데이터 &을 줄 바꿈으로, .을 쉼표로 변환
function loadCSV(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            const rows = text.split('\n');
            csvData = rows.slice(1).map(row => 
                row.trim().split(',').map(cell => cell.replace(/&/g, '\n\n').replace(/\./g, ',')) //문자변환
            );            
        })
        .catch(error => console.error('Error loading CSV:', error));
}

//맵 함수 ㅇㅇㅇ
function formatString(input) {
    const numbers = input.split('.').map(num => num.trim());
    const formattedNumbers = numbers.map(num => num + '');
    return formattedNumbers.join(', ');
}

function toggleContent() {
    const pair1 = document.getElementById('pair-1');
    const pair2 = document.getElementById('pair-2');
    const pair3 = document.getElementById('pair-3');

    if (pair1.checked) {
        currentPair = 'pair-1';
        currentCSVFile = csvFiles['pair-1'];
        isPairSelected = true;
    } else if (pair2.checked) {
        currentPair = 'pair-2';
        currentCSVFile = csvFiles['pair-2'];
        isPairSelected = true;
    } else if (pair3.checked) {
        currentPair = 'pair-3';
        currentCSVFile = csvFiles['pair-3'];
        isPairSelected = true;
    } else {
        isPairSelected = false;
    }
    loadCSV(currentCSVFile);
    checkDisplayContent();
}

//랭크 선택???
function handleSelection() {
    const selectElement = document.getElementById("rankSelect");
    const selectedValue = selectElement.value;
    const selectedRow = parseInt(selectElement.options[selectElement.selectedIndex].getAttribute('data-row'));

    if (selectedValue !== "") {
        isRankSelected = true;
        changeImage(selectedValue);
        updateData(selectedRow);
    } else {
        isRankSelected = false;
    }
    checkDisplayContent();
}

//pair선택에 따른 이미지 경로 설정
function changeImage(imageName) {
    const radarImage = document.getElementById("radarImage");

    let folder = '';
    if (currentPair === 'pair-1') {
        folder = 'radarchart1';
    } else if (currentPair === 'pair-2') {
        folder = 'radarchart2';
    } else if (currentPair === 'pair-3') {
        folder = 'radarchart3';
    }

    radarImage.src = `./${folder}/` + imageName;
}

//pair및 순위 선택 전까지 표랑 iframe가리기
function checkDisplayContent() {
    const radarImage = document.getElementById('radarImage');
    const table = document.querySelector('.tb');
    const mapIframe = document.getElementById('mapIframe');

    if (isPairSelected && isRankSelected) {
        radarImage.style.display = 'block';
        table.style.display = 'table';
        mapIframe.style.display = 'block';
    } else {
        radarImage.style.display = 'none';
        table.style.display = 'none';
        mapIframe.style.display = 'none';
    }
}

document.getElementById('radarImage').style.display = 'none';
document.querySelector('.tb').style.display = 'none';

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
       function addExitAnimation() {
      header.style.animation = "slideUpOut 1s ease-in-out forwards";
      footer.style.animation = "slideDownOut 1s ease-in-out forwards";
    }
    window.addEventListener("beforeunload", addExitAnimation);
    document.querySelectorAll("a").forEach(function (link) {
         link.addEventListener("click", function (event) {
            event.preventDefault();
            addExitAnimation();
            setTimeout(() => {
                window.location.href = link.href;
            }, 700);
        });
    });
});