package com.sol.dght003.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sol.dght003.service.MajorService;

@RestController
public class MajorAPI {
//	
	@Autowired
	MajorService majorService;
	
	@GetMapping("majors")
	public ResponseEntity<MappingJacksonValue> returnAllMajors() {
		return ResponseEntity.ok(majorService.getAllMajor());
	}
	
}
