var tabBox = {
	onTabClicked: function(event){
		//var lisSelected = document.getElementsByClassName("selected");
		//(lisSelected.length == 1) && (lisSelected[0].className = "");
		$(".selected").removeClass('selected');
		//this.className = "selected";
		$(this).addClass('selected');
		
	},		
	init: function(){
		$(".tab-box ul li").click(this.onTabClicked);
		
		}		
	}
