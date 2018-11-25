package com.aibibang.service;

import com.aibibang.model.Ammeter;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * Description here...
 *
 * @author yanan
 * @since 2018/11/21
 */
@Mapper
public interface AmmeterMapper {
    @Select("SELECT * FROM ammeter where userNo=#{queryNo} or idCard=#{queryNo}")
    public Ammeter queryAmmeter(String  queryNo);
}
