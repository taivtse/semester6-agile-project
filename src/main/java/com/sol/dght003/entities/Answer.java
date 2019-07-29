package com.sol.dght003.entities;

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

import com.fasterxml.jackson.annotation.JsonFilter;

@Entity
@Table(name = "answer")
@JsonFilter("answerFilter")
public class Answer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column
	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "question_id")
	private Question question;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "answer")
	private List<ResultDetail> resultDetails;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "answer")
	private List<Appropriation> appropriations;
	
	public Answer() {
		
	}
	
	public Answer(int id) {
		super();
		this.id = id;
	}

	public Answer(String content, Question question) {
		super();
		this.content = content;
		this.question = question;
	}

	public Answer(int id, String content) {
		super();
		this.id = id;
		this.content = content;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public List<ResultDetail> getResultDetails() {
		return resultDetails;
	}

	public void setResultDetails(List<ResultDetail> resultDetails) {
		this.resultDetails = resultDetails;
	}

	public List<Appropriation> getAppropriations() {
		return appropriations;
	}

	public void setAppropriations(List<Appropriation> appropriations) {
		this.appropriations = appropriations;
	}
	
	
	
}
