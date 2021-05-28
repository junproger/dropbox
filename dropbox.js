			let i = 0;
			let j = 0;
			let vert = 10;
			let clicks = 0;
			let dropbox = document.querySelector('#dropElement');
			let dragbox = document.querySelectorAll('div[data-color-value]');
			
// Setup styles for dragbox
			while(i<dragbox.length) {
			dragbox[i].style.top += vert + 'px';
			console.log(dragbox[i].style.top);
			dragbox[i].style.background = dragbox[i].dataset.colorValue;
			vert += 160;
			i++;
			}
			
			
// Disable default drag&drop
			document.ondragstart = function() {
					return false;
			}
			
// Finding for coordinate
			
	dragbox.forEach(function(drag) {
	console.log('forEach ' + drag)
	drag.onclick = function() {
			clicks += 1;
			console.log('Click to drag');
				if (clicks% 2 !== 0) {
					document.addEventListener('mousemove', eventHandler);
						console.log(clicks + 'odd');
						drag.style.zIndex = 100100;
					}
				if (clicks% 2 == 0) {
					document.removeEventListener('mousemove', eventHandler);
					console.log(clicks + 'even');
					drag.style.zIndex = 100000;
					} 
			}
					
			function eventHandler(event) {
					let x = event.clientX - 75;
					let y = event.clientY - 75;
					
					drag.style.top = y + 'px';
					drag.style.left = x + 'px';
					
					drag.style.position = 'absolute';
					drag.style.cursor = 'pointer';
					
					if (x >= dropbox.getBoundingClientRect().left+10 && x <= dropbox.getBoundingClientRect().right-160 && y >= dropbox.getBoundingClientRect().top+10 && y <= dropbox.getBoundingClientRect().bottom-160) {
					drag.style.display = 'none';
					let postclick = new Event('click');
					drag.dispatchEvent(postclick);
					dropbox.style.background = drag.style.background;
					j += 1;
					if (j==4) {
					document.querySelector('#places').innerHTML = '<h1 class="display-1">Bingo!</h1>';
					}
				}
			}
		});
//			
//				let drag = document.querySelector('#dragElement');
//				drag.style.background = 'darkorange';
//				drag.addEventListener('click', dragHandler);
//				
//				function dragHandler() {
//				console.log('Calling Function dragHandler');
//						if (drag.style.background == 'darkorange') {
//						drag.style.background = 'deeppink';
//						console.log('Change color to Green');
//						} else {
//						drag.style.background = 'darkorange';
//						console.log('Change color to Blue');
//						}
//				}
//				
//				let drop = document.querySelector('#dropElement');
//				drop.style.background = 'blue';
//				drop.addEventListener('click', dropHandler);
//				
//				function dropHandler() {
//				console.log('Calling Function dropHandler');
//						let red = Math.round(Math.random()*255);
//						let green = Math.round(Math.random()*255);
//						let blue = Math.round(Math.random()*255);
//						drop.style.background = `rgb(${red},${green},${blue})`;
//				}
//				
//				dragElement.onclick = function() {
//						console.log('Click to dragElement');
//				}
//
//				dragElement.onmousedown = function() {
//						console.log('Mousedown to dragElement');
//				}
//
