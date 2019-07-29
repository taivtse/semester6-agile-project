package com.sol.dght003.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFilter;

@Entity
@Table(name = "result")
@JsonFilter("resultFilter")
public class Result {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "created_date")
	@DateTimeFormat(pattern = "DD-MM-YYYY HH24:MI:SS")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdDate;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "candidate_id")
	private Candidate candidate;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "result")
	private List<ResultDetail> resultDetails;
	
	public Result() {}
	
	public Result(Date createdDate, Candidate candidate) {
		super();
		this.createdDate = createdDate;
		this.candidate = candidate;
	}

	public Result(int id, Date createdDate) {
		super();
		this.id = id;
		this.createdDate = createdDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public List<ResultDetail> getResultDetails() {
		return resultDetails;
	}

	public void setResultDetails(List<ResultDetail> resultDetails) {
		this.resultDetails = resultDetails;
	}
	
	
}
