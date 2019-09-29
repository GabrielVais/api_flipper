<?php

class ClassFipe{

	private $url;

	// setando a url
	public function setUrl($url){


        $this->url=file_get_contents($url);

	}

	// retornando a url em json encode
	public function getUrl(){

		return json_encode($this->url);

	}

}