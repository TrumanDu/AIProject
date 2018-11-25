package com.aibibang.model;

/**
 * Description here...
 *
 * @author yanan
 * @since 2018/11/21
 */
public class Ammeter {
    private int id;
    private String manager;
    private String name;
    private String userNo;
    private String idCard;
    private int julyMonth;
    private int augMonth;
    private int sepMonth;
    private String comment;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserNo() {
        return userNo;
    }

    public void setUserNo(String userNo) {
        this.userNo = userNo;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public int getJulyMonth() {
        return julyMonth;
    }

    public void setJulyMonth(int julyMonth) {
        this.julyMonth = julyMonth;
    }

    public int getAugMonth() {
        return augMonth;
    }

    public void setAugMonth(int augMonth) {
        this.augMonth = augMonth;
    }

    public int getSepMonth() {
        return sepMonth;
    }

    public void setSepMonth(int sepMonth) {
        this.sepMonth = sepMonth;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
