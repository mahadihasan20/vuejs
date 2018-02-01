var app = new Vue({

 
    el: '#app',
    data: {
        input:''
      
      
      
    },
  
    methods: {
      key: function(value){
       this.input += value;
      },
      equal: function(){
        // var number= this.input
        // var firstNumber=number.split('+')[0]|| number.split('-')[0] || number.split('*')[0] || number.split('/')[0]
        // var secondNumber=number.split('+')[1]|| number.split('-')[1] || number.split('*')[1] || number.split('/')[1]
        
        this.input= eval( this.input)
      },
      cut: function(){
        this.input='';
      },
      
      persent: function(){
      this.input= this.input * (this.input/100)

      },
      reverse: function(){
        var reverse= this.input
       this.input= -1* Math.abs(reverse)
      }
      
      
    
  })