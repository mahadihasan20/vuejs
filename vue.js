var app= new Vue({
  el:'#app',
  data :{
    
      firstNumber: '',
      secondNumber:'',
      summetion:'',
      operation:'',
    sub:'',
    mul:'',
    div:''
    
    
      
    
    
    
      
  },
  methods: {
    getFormvalue: function(){
      var firstNumber= parseInt( this.firstNumber)
      var secondNumber= parseInt( this.secondNumber)
      this.operation=this.operation
      this.summetion=firstNumber + secondNumber
      this.sub=firstNumber-secondNumber
       this.mul=firstNumber*secondNumber
      this.div=firstNumber/secondNumber
      
   
      
    }
    
  }
  
})