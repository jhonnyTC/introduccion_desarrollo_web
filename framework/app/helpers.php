<?php

if(! function_exists('view')){

    function view($view) {

       return   new app\http\response($view);

    }

    if(! function_exists('viewpath')){

        function viewpath($view) {
    
           return  __DIR__ . "/../views/$view.php";
           
        }
}

}