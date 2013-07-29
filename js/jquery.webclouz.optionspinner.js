$.widget('webclouz.optionspinner', {
	_leftButtonId: null,
	_rightButtonId: null,
	_inputId: null,
	_label: null,
	_value: null,
	_index: 0,
	_optionArray: null,
	_arrayLength: 0,
	options: {
		index: 0,
		id: "optionspinner",
		optionArray: ["options"],
		label: "lable"
	},
	_create: function(){	
		this._leftButtonId = this.options.id + "-left-button";
		this._rightButtonId = this.options.id + "-right-button";
		this._inputId  = this.options.id + "-input";
		this._label  = this.options.label;
		this._optionArray  = this.options.optionArray;
		this._index = this.options.index;
		this._arrayLength = this.options.optionArray.length;
		this._value = this._optionArray[this._index ];
		this.element.html(' <label for="'+ this._inputId  + 
							'">' + this._label + 
							'</label> <div id="' + this._leftButtonId   + 
							'" class="inc button">+</div><input type="text"  size="30" name="'
							+ this._inputId  + '" id="' + this._inputId  + 
							'" value="' + this._value + '"><div id="' + 
							this._rightButtonId  + '" class="dec button">-</div>');			
		$("#" + this._leftButtonId  ).on("click", function() {
			var myE = $(this).parent();
			var o = $(myE).data("webclouz-optionspinner");
			o.increaseIndexAndSetValue();
		}); 		
		$("#" + this._rightButtonId ).on("click", function() {
			var myE = $(this).parent();
			var o = $(myE).data("webclouz-optionspinner");
			o.decreaseIndexAndSetValue();
		}); 			
	},
	increaseIndexAndSetValue: function(){
		if(this._index < (this._arrayLength-1)){
			this._index++;
			this._setInputValue();
		}
	},
	decreaseIndexAndSetValue: function(){				
		if(this._index > 0){
			this._index--;
			this._setInputValue();
		}
	},
	_setInputValue: function(){
		this._value = this._optionArray[this._index ];		
		$("#" + this._inputId  ).val(this._value);
	},
	_setOption: function( key, value ) {
	},
	_update: function() {
	}
		
});