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
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "appropriation",
	uniqueConstraints=
	@UniqueConstraint(columnNames={"answer_id", "major_id"}))
public class Appropriation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private double percent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "answer_id")
	private Answer answer;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "major_id")
	private Major major;
	
	public Appropriation() {}

	public Appropriation(double percent) {
		super();
		this.percent = percent;
	}
	
	public Appropriation(int id, double percent) {
		super();
		this.id = id;
		this.percent = percent;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPercent() {
		return percent;
	}

	public void setPercent(double percent) {
		this.percent = percent;
	}

	public Answer getAnswer() {
		return answer;
	}

	public void setAnswer(Answer answer) {
		this.answer = answer;
	}

	public Major getMajor() {
		return major;
	}

	public void setMajor(Major major) {
		this.major = major;
	}
}
