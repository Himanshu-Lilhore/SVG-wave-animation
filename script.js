const mainSVG = document.getElementById('displayImage');
const svgContainer = document.getElementById('svgContainer');
const mainPaths = mainSVG.querySelectorAll('path');
const totalPaths = mainPaths.length;
const totalSvgs = svgContainer.childElementCount;
let offsetVal = 0;
let currentPathIndex = 1;
let keyframes = [];
let animations = [];
let allPaths = [];
let thisSvgThisPath;


for (let svgCount = 1; svgCount <= totalSvgs; svgCount++) {
    let paths = document.querySelector(`#svgContainer > svg:nth-child(${svgCount})`).querySelectorAll('path');
    let pathList = [];
    paths.forEach(path => {
        pathList.push(path);
    });
    allPaths.push(pathList);
}

function animatePaths() {
    for(let pathCount = 0; pathCount < totalPaths; pathCount++){
        keyframes = [];
        for (let svgCount = 0; svgCount < totalSvgs; svgCount++) {
            thisSvgThisPath = allPaths[svgCount][pathCount];
            let localOffset = (1/(totalSvgs-1))*svgCount;
            console.log(localOffset);
            keyframes.push({ d: 'path("'+thisSvgThisPath.getAttribute('d')+'")', offset: localOffset });
        }

        animations.push(mainPaths[pathCount].animate(keyframes, {
            duration: 2000*totalSvgs,
            iterations: Infinity,
            direction: "alternate",
            animationTimingFunction: "ease-in-out"
        }));
    }
}


animatePaths();
// mainSVG.addEventListener('click', animatePaths);

