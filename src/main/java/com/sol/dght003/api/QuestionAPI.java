package com.sol.dght003.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sol.dght003.dao.QuestionRepository;
import com.sol.dght003.utils.CustomJsonFilter;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class QuestionAPI {
	
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	CustomJsonFilter cJsonFilter;
	
	@GetMapping("/questions")
	public ResponseEntity<Object> returnAllQuestion() {
		
		String[] valuesAllowed = {"id","content"};
		
		return ResponseEntity.ok(
				cJsonFilter.getMappingJacksonValue(valuesAllowed, "answerFilter", questionRepository.findAll())
				);
	}
	
}
