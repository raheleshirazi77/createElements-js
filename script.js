window.onload = function displayData() {
    //create div1
    mainDiv = document.createElement('div');
    mainDiv.id = 'container';
    // create div2
    let myDiv2 = document.createElement('div')
    myDiv2.id = 'boxPage';
    mainDiv.appendChild(myDiv2);
    // create div3
    let mydiv3 = document.createElement('div')
    mydiv3.id = 'elementBoxLeft';
    myDiv2.appendChild(mydiv3);
    // create div4 to div 3
    let mydiv4 = document.createElement('div')
    mydiv4.id = 'elementBoxOne';
    // definde variable id insta
    let idInstagram = document.createElement('h5')
    idInstagram.id = 'id_insta'
    idInstagram.innerText = 'id Instagram:  frontend_rsh77';
    mydiv4.appendChild(idInstagram);
    mydiv3.appendChild(mydiv4);
    // create div5 to div 3
    let mydiv5 = document.createElement('div')
    mydiv5.id = 'elementBoxTwo';
    let idGithub = document.createElement('h4')
    idGithub.id = 'id_git'
    idGithub.innerText = 'idGithub: raheleshirazi77'
    mydiv5.appendChild(idGithub)
    mydiv3.appendChild(mydiv5);
    //create div 3 right
    let mydiv3Two = document.createElement('div')
    mydiv3Two.id = 'elementBoxRight';
    myDiv2.appendChild(mydiv3Two);
    document.body.appendChild(mainDiv);
    // create div 6 to div3two
    let div6One = document.createElement('div')
    div6One.id = 'elementOne';
    mydiv3Two.appendChild(div6One);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivOne = document.createElement('img')
    imgDivOne.id = 'img_box'
    imgDivOne.setAttribute('src', 'stitch.png')
    div6One.appendChild(imgDivOne);
    // create div 7 to div3two
    let div6Two = document.createElement('div')
    div6Two.id = 'elementTwo';
    mydiv3Two.appendChild(div6Two);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivTwo = document.createElement('img')
    imgDivTwo.id = 'img_box'
    imgDivTwo.setAttribute('src', 'stitch.png')
    div6Two.appendChild(imgDivTwo);
    // create div 8 to div3two
    let div6Three = document.createElement('div')
    div6Three.id = 'elementThree';
    mydiv3Two.appendChild(div6Three);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivThree = document.createElement('img')
    imgDivThree.id = 'img_box'
    imgDivThree.setAttribute('src', 'stitch.png')
    div6Three.appendChild(imgDivThree);
    // create div 9 to div3two
    let div6Fore = document.createElement('div')
    div6Fore.id = 'elementFore';
    mydiv3Two.appendChild(div6Fore);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivFore = document.createElement('img')
    imgDivFore.id = 'img_box'
    imgDivFore.setAttribute('src', 'stitch.png')
    div6Fore.appendChild(imgDivFore);
    // create div 10 to div3two
    let div6Five = document.createElement('div')
    div6Five.id = 'elementFive';
    mydiv3Two.appendChild(div6Five);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivFive = document.createElement('img')
    imgDivFive.id = 'img_box'
    imgDivFive.setAttribute('src', 'stitch.png')
    div6Five.appendChild(imgDivFive);
    // create div 11 to div3two
    let div6Six = document.createElement('div')
    div6Six.id = 'elementSix';
    mydiv3Two.appendChild(div6Six);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivSix = document.createElement('img')
    imgDivSix.id = 'img_box'
    imgDivSix.setAttribute('src', 'stitch.png')
    div6Six.appendChild(imgDivSix);
    // create div 12 to div3two
    let div6Seven = document.createElement('div')
    div6Seven.id = 'elementSeven';
    mydiv3Two.appendChild(div6Seven);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivSeven = document.createElement('img')
    imgDivSeven.id = 'img_box'
    imgDivSeven.setAttribute('src', 'stitch.png')
    div6Seven.appendChild(imgDivSeven);
    // create div 11 to div3two
    let div6Eight = document.createElement('div')
    div6Eight.id = 'elementEight';
    mydiv3Two.appendChild(div6Eight);
    document.body.appendChild(mainDiv);
    // insert img to div
    let imgDivEight = document.createElement('img')
    imgDivEight.id = 'img_box'
    imgDivEight.setAttribute('src', 'stitch.png')
    div6Eight.appendChild(imgDivEight);
    // display to console
    console.log(mainDiv)
}

