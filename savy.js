(function($) {
  $.fn.savy = function(order,fn) {
    if (order == "load") {
      $(this).each(function() {

        if ($(this).is(":radio")) {
          if(localStorage.getItem("savy-"+$(this).attr("name"))){
            if (localStorage.getItem("savy-"+$(this).attr("name")) == this.id) {
              this.checked = true;
            }else{
              this.checked = false
            }
          }
          $(this).change(function() {
            localStorage.setItem("savy-"+$(this).attr("name"), this.id);
          });

        }
        else if($(this).is(":checkbox")){
          if(localStorage.getItem("savy-"+this.id)){
            this.checked = (localStorage.getItem("savy-"+this.id) == "1" ? true : false);
          }
          $(this).change(function() {
            localStorage.setItem("savy-"+this.id, (this.checked ? "1" : "0"));
          });
        }
        else if($(this).is("input") || $(this).is("textarea")) {
          if(localStorage.getItem("savy-"+this.id)){
            this.value = localStorage.getItem("savy-"+this.id);
          }
          $(this).keyup(function() {
            localStorage.setItem("savy-"+this.id, this.value);
          });
        }
        else if($(this).is("select")) {
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
