package com.sol.dght003.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sol.dght003.dto.response.CandidateDto;
import com.sol.dght003.service.CandidateService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class CandidateAPI {
	
	@Autowired
	CandidateService candidateService;
	
	@GetMapping("/candidates")
	public ResponseEntity<MappingJacksonValue> returnAllCandidated() {
		return ResponseEntity.ok(candidateService.getAllCandidate());
	}
	
	
}
