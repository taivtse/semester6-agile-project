package com.sol.dght003.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.stereotype.Service;

import com.sol.dght003.dao.MajorRepository;
import com.sol.dght003.utils.CustomJsonFilter;

@Service
public class MajorService {

	@Autowired
	MajorRepository majorRepository;
	
	@Autowired
	CustomJsonFilter cJsonFilter;
	
	public MappingJacksonValue getAllMajor() {
		
		String[] allowedValues = {"id","name"};
		
		return cJsonFilter.getMappingJacksonValue(allowedValues, "majorFilter", majorRepository.findAll());
		
	}
	
}
