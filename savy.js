(function($) {
  $.fn.savy = function(order,fn) {
    if (order == "load") {
      $(this).each(function() {
        if($(this).is("input") || $(this).is("textarea")) {
          if(localStorage.getItem("savy-"+this.id)){
            this.value = localStorage.getItem("savy-"+this.id);
          }
          $(this).keyup(function() {
            localStorage.setItem("savy-"+this.id, this.value);
          });
        }
        if($(this).is("select")) {
          if ($(this).is("[multiple]")) {
            if(localStorage.getItem("savy-"+this.id)){
              $(this).val(localStorage.getItem("savy-"+this.id).split(","));
            }
            $(this).change(function() {
              localStorage.setItem("savy-"+this.id, $(this).val());
            });
          }else{
            if(localStorage.getItem("savy-"+this.id)){
              $(this).val(localStorage.getItem("savy-"+this.id));
            }
            $(this).change(function() {
              localStorage.setItem("savy-"+this.id, $(this).val());
            });
          }
        }
      });
      if ($.isFunction(fn)) {
        fn();
      }
    }else if (order == "destroy") {
      $(this).each(function() {
        if(localStorage.getItem("savy-"+this.id)){
          localStorage.removeItem("savy-"+this.id)
        }
      });
      if ($.isFunction(fn)) {
        fn();
      }
    }else{
      console.error("savy action not defined please use $('.classname').savy('load') to trigger savy to save all inputs")
    }
  };
})(jQuery);
