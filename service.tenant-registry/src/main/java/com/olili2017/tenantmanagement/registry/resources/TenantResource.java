package com.olili2017.tenantmanagement.registry.resources;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/registry")
public class TenantResource {

    @GetMapping("/test")
    public String testRes(){
        return "tested well";
    }
}
