<?php

namespace app\http;

class request
{
    protected $segmests = [];
    protected $controller;
    protected $methods;
    public function __construct()
    {
            //platzi.test/servicios/index
    $this->segments = explode('/', $_SERVER['REQUEST_URI']);

    $this->setcontroller();
    $this->setmethods();
    } 

    public function setcontroller()
    

    {

        $this -> controller = empty($this->segments[1])
        ?'home'
        :$this->segments[1];

    }
    public function setmethod()
    

    {

        $this -> method = empty($this->segments[1])
        ?'index'
        :$this->segments[1];

    }

    public function getcontroller()
    {
        //home,home
        $controller = ucfirst($this->controller);

        return"app\http\contollers\\{$controller}controllers";



    }
    public function getmethod()
    {
        return $this->method;
    }
    
    public function send()
    {

        $controller = $this->getcontroller();
        $method = $this->getmethod();
        $response = call_user_func([
            new $controller,
            $method

        ]);
        try{

            if($response instanceof response){

            }else{
                throw new \exception("error processing request");

            }
        }catch (\exception $e) {

            echo "details {$e->getmessage()}";
        }
    }

}
