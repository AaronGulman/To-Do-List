document.querySelector('#push').onclick = function(){
	if (document.querySelector('#newtask input').value.length == 0){
		alert('Please Enter a Task');
	}
	else {
		document.querySelector('#tasks').innerHTML
		+= `
		<div class='task'>
			<span id ="taskname">
				${document.querySelector
				('#newtask input').value}
			</span>
			<button class="delete"><i class="fa-duotone fa-trash" style="--fa-primary-color: #4e1ac7; --fa-secondary-color: #4229c2;"></i>
			</button>
		</div>
		`;
	}
}