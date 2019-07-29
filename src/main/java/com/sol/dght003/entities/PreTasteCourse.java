package com.sol.dght003.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFilter;

@Entity
@Table(name = "pre_taste_course")
@JsonFilter("preTasteCourseFilter")
public class PreTasteCourse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 255)
	private String name;
	
	@Column
	private String link;
	
	@Column(name = "order_number")
	private int orderNumber;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "major_id")
	private Major major;
	
	
	public PreTasteCourse() {
		
	}

	public PreTasteCourse(Long id, String name, String link, int orderNumber) {
		super();
		this.id = id;
		this.name = name;
		this.link = link;
		this.orderNumber = orderNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public int getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}

	public Major getMajor() {
		return major;
	}

	public void setMajor(Major major) {
		this.major = major;
	}

	
}
