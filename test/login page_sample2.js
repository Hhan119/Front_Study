$(document).ready(function(){

    //--------- change color value of the form text/password inputs -----
    
      const textInputs =  $("input[type='textbox']");
      const passwordsInputs =  $("input[type='password']");
      //--------- Login screen swicth -----
        $("send").click(function(event){
            let info = document.querySelector("#inputText").value;
            document.querySelector("#info2").innerText=info;
        
        });
        $("button").click(function(event){  //  prevent buttons in form to reload
            event.preventDefault();
        });
        
        $("a").click(function(event){  //  prevent 'a' links in form to reload
            event.preventDefault();
        });
    
        $("#sign_up").click(function(){ // when click Sign Up button, hide the Log In elements, and display the Sign Up elements
            $("#title-login").toggleClass("hidden",true);
            $("#login-fieldset").toggleClass("hidden",true);
            $("#login-form-submit").toggleClass("hidden",true);
            $("#lost-password-link").toggleClass("hidden",true);
            $("#sign_up").toggleClass("btn btn-primary",false);
            $("#log_in").removeAttr("disabled");
            
            $("#title-signup").toggleClass("hidden",false);
            $("#signup-fieldset").toggleClass("hidden",false);
            $("#signup-form-submit").toggleClass("hidden",false);
            $("#login-form-submit").toggleClass("btn btn-default",true);
            $("#signup-form-submit").prop('disabled', true);
        });
        
        $("#log_in").click(function(){ // when click Log In button, hide the Sign Up elements, and display the Log In elements
            $("#title-login").toggleClass("hidden",false);
            $("#login-fieldset").toggleClass("hidden",false);
            $("#login-form-submit").toggleClass("hidden",false);
            $("#lost-password-link").toggleClass("hidden",false);
            $("#sign_up").toggleClass("btn btn-primary",true);
            $("#log_in").prop('disabled', true);
            
            $("#title-signup").toggleClass("hidden",true);
            $("#signup-fieldset").toggleClass("hidden",true);
            $("#signup-form-submit").toggleClass("hidden",true);
            $("#log_in").toggleClass("btn btn-default",false);
            $("#sign_up").removeAttr("disabled");
            


            
        });
    });