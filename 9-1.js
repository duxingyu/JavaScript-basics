
function doMove ( obj, attr, dir, target,endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {

		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 30);
}

function modOpacity(obj,dir,sec,endFn) {
	var opa = setInterval(function(){
	var speed = parseFloat(getStyle(obj,'opacity'))-dir;
	if (speed == 0) {
		clearInterval(opa);
		endFn && endFn();
	}
	obj.style.opacity = speed;
	},sec);
}

function getStyle(obj,attr) {return getComputedStyle?getComputedStyle(obj)[attr]:obj.currentStyle[attr];}