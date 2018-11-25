package com.aibibang.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aibibang.model.Ammeter;
import com.aibibang.service.AmmeterMapper;

/**
 * Description here...
 *
 * @author yanan
 * @since 2018/11/21
 */
@Controller
public class IndexController {
    @Autowired
    AmmeterMapper ammeterMapper;

    @RequestMapping(method = RequestMethod.GET, value = {"","/"})
    public String index() {
        return "index";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/ammeter")
    @ResponseBody
    public Ammeter query(@RequestBody Map<String,String> params) {
        String queryNo = params.get("queryNo");
       Ammeter ammeters =  ammeterMapper.queryAmmeter(queryNo);
        return ammeters;
    }
}
