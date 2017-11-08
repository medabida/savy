(function($) {
  $.fn.savy = function(order) {
    if (order == "load") {
      $(this).each(function() {
        if(localStorage.getItem("savy-"+this.id)){
          this.value = localStorage.getItem("savy-"+this.id);
        }
        $(this).keyup(function() {
          localStorage.setItem("savy-"+this.id, this.value);
        });
      });
    }else if (order == "destroy") {
      $(this).each(function() {
        if(localStorage.getItem("savy-"+this.id)){
          localStorage.removeItem("savy-"+this.id)
        }
      });
    }else{
      console.error("savy action not defined please use $('.classname').savy('load') to trigger savy to save all inputs")
    }
  };
})(jQuery);
