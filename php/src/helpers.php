<?php

if(! function_exists('upper') ){
function upper($value)
{
    return text\format::uppertext($value);
}

}
function lower($value)
{
    return text\format::lowertext($value);
}