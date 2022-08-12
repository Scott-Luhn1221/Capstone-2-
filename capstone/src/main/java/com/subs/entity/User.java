package com.subs.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;



@Entity
@Table(name = "user")
public class User {

	@Id
	@Column(name = "email")
	private String email;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "password")
	private String password;

	@Column(name = "age")
	private int age;
	
	@OneToMany(fetch = FetchType.LAZY)
	@Fetch(FetchMode.SUBSELECT)
	@JoinColumn(name = "id", insertable = false, updatable = false)
	private List <Subscription> subscription;
	


	public User() {

	}



	public User(String email, String firstName, String lastName, String password, int age,
			List<Subscription> subscription) {

		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.age = age;
		this.subscription = subscription;
	}



	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public List<Subscription> getSubscription() {
		return subscription;
	}

	public void setSubscription(List<Subscription> subscription) {
		this.subscription = subscription;
	}

}
