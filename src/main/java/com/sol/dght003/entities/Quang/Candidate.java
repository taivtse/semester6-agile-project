package com.sol.dght003.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFilter;

@Entity
@Table(name = "candidate")
@JsonFilter("candidateFilter")
public class Candidate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 75)
	private String name;
	
	@Column(length = 12)
	private String phone;
	
	@Column(length = 150)
	private String school;
	
	@Column(length = 100)
	private String province;	

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "candidate")
	private List<Result> result;
	
	public Candidate() {
		
	}
	
	public Candidate(String name, String phone, String school, String province) {
		super();
		this.name = name;
		this.phone = phone;
		this.school = school;
		this.province = province;
	}

	public Candidate(int id, String name, String phone, String school, String province, List<Result> result) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.school = school;
		this.province = province;
		this.result = result;
	}



	public Candidate(int id, String name, String phone, String school, String province) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.school = school;
		this.province = province;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public List<Result> getResult() {
		return result;
	}

	public void setResult(List<Result> result) {
		this.result = result;
	}


	
}
