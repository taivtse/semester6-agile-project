package com.sol.dght003.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sol.dght003.dao.AppropriationRepository;
import com.sol.dght003.utils.CustomJsonFilter;

@RestController
public class AppropriationAPI {
	
	@Autowired
	AppropriationRepository appropriationRepository;
	
	@Autowired
	CustomJsonFilter cJsonFilter;
	
	@GetMapping("appropriations")
	public ResponseEntity<Object> returnAllAppropriation() {
		
		String[][] allowedValues = {
				{"id","content"},
				{"id","name"}
		};
		
		return ResponseEntity.ok(
				cJsonFilter.getMappingJacksonValueMultiFilter(allowedValues, new String[]{"answerFilter","majorFilter"}, appropriationRepository.findAll())
				);
	}
}
