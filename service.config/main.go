package main

import (
	"io/ioutil"
	"github.com/Olili2017/tenant-management-system/service.config/domain"
)

func main(){
	config := domain.Config{}

	data, err := ioutil.ReadFile("/config.yml")
	if err != nil {
		panic(err)
	}

	err = config.SetFromBytes(data)
	if err != nil {
		panic(err)
	}
}
