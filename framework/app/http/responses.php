<?php

namespace app\http;

class response

{
    protected $view;//array,json,pdf...

    public function __contructor($view)
    {
        $this->view =$view; //home,contact
    }
    
    public function getview()
    {
        return $this->view;
    }
    public function send()
    {
        $view = $this-> getview();

        $content= file_get_content(__DIR__ . "/../../views$view.php");
        
        require viewpath('layout') ;
    }

}