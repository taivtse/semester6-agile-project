package com.sol.dght003.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sol.dght003.dto.request.Answered;
import com.sol.dght003.dto.response.TestResult;
import com.sol.dght003.service.TestService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TestAPI {

	@Autowired
	TestService testService;
	
	@PostMapping("/test")
	public ResponseEntity<List<TestResult>> testProcess(@RequestBody Answered answered) {
//		answered.setAnsweres(testService.fakeAnswer());
		return ResponseEntity.ok(testService.testProcessing(answered));
	}
	
}
