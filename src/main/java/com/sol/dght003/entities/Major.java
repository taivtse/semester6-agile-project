package com.sol.dght003.entities;

import java.util.List;

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
@Table(name = "major")
@JsonFilter("majorFilter")
public class Major {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String name;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "major")
	private List<Appropriation> appropriations; 
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "major")
	private List<PreTasteCourse> preTasteCourses;
	
	public Major() {}

	
	
	public Major(String name) {
		super();
		this.name = name;
	}



	public Major(int id, String name) {
		super();
		this.id = id;
		this.name = name;
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

	public List<Appropriation> getAppropriations() {
		return appropriations;
	}

	public void setAppropriations(List<Appropriation> appropriations) {
		this.appropriations = appropriations;
	}
	
	
}
