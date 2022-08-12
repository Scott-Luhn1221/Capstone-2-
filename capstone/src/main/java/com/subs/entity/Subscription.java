package com.subs.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="subscription")
public class Subscription {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name ="name")
	private String name;
	
	@Column(name ="plan")
	private String plan;
	
	@Column(name ="cost")
	private Double cost;
	
	@Column(name ="payment_date")
	private String paymentDate;
	
	@Column(name ="cancel_link")
	private String cancelLink;
	
	@Column(name="user_email")
	private String userEmail;
	

	
	public Subscription() {
		
	}

	public Subscription(Integer id, String name, String plan, Double cost, String paymentDate, String cancelLink, String userEmail)  {
		this.id = id;
		this.name = name;
		this.plan = plan;
		this.cost = cost;
		this.paymentDate = paymentDate;
		this.cancelLink = cancelLink;
	
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPlan() {
		return plan;
	}

	public void setPlan(String plan) {
		this.plan = plan;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public String getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getCancelLink() {
		return cancelLink;
	}

	public void setCancelLink(String cancelLink) {
		this.cancelLink = cancelLink;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}



}
