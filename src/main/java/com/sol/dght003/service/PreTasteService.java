package com.sol.dght003.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.stereotype.Component;

import com.sol.dght003.dao.PreTasteCourseRepository;
import com.sol.dght003.entities.PreTasteCourse;
import com.sol.dght003.utils.CustomJsonFilter;

@Component
public class PreTasteService {

	@Autowired
	PreTasteCourseRepository preTasteCourseRepository;
	
	@Autowired
	CustomJsonFilter cJsonFilter;
	
	public MappingJacksonValue getAllCourse() {
		List<PreTasteCourse> list = preTasteCourseRepository.findAll();
		
		return cJsonFilter.getMappingJacksonValue(new String[] {"id","name"}, "majorFilter", list);
		
	}
	
	public MappingJacksonValue getCourseByMajorId(Long id) {
		List<PreTasteCourse> list = preTasteCourseRepository.findPreTasteCourseByMajorId(id);
		
		return cJsonFilter.getMappingJacksonValue(new String[] {"id","name"}, "majorFilter", list);
	}
}
