package com.sol.dght003.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.stereotype.Service;

import com.sol.dght003.dao.CandidateRepository;
import com.sol.dght003.dao.MajorRepository;
import com.sol.dght003.dto.response.CandidateDto;
import com.sol.dght003.entities.Candidate;
import com.sol.dght003.utils.CustomJsonFilter;

@Service
public class CandidateService {
	
	@Autowired
	CandidateRepository candidateRepository;
	
	@Autowired
	MajorRepository majorRepository;
	
	@Autowired
	CustomJsonFilter cJsonFilter;
	
	public List<CandidateDto> returnAllCandidateInfoAndResult() {
		
		List<CandidateDto> candidateDtos = new ArrayList<>();
		candidateRepository.findAll().forEach(canidate -> {
			candidateDtos.add(converseCandidateToCandidateDto(canidate));
		});
		
		return candidateDtos;
		
	}
	
	public MappingJacksonValue getAllCandidate() {
		String[] allowedValues = {"name","phone","school","province"};
		return cJsonFilter.getMappingJacksonValue(allowedValues, "candidateFilter", candidateRepository.findAll());
	}
	
	private CandidateDto converseCandidateToCandidateDto(Candidate candidate) {
	
		CandidateDto candidateDto = new CandidateDto(
				candidate.getName(), candidate.getPhone(), candidate.getSchool(), candidate.getPhone()
				);
		
		candidateDto.createResult(candidate, majorRepository.findAll());
		
		return candidateDto;
		
	}
	
	public MappingJacksonValue returnAllCandidateInfoAndAnswered() {
		
		String[][] allowedValues = {
				{"id","createdDate","resultDetails"},
				{"id","answer"},
				{"id","content"}
		};
		
		return cJsonFilter.getMappingJacksonValueMultiFilter(allowedValues, 
				new String[] {"resultFilter","resultDetailFilter","answerFilter"},
				candidateRepository.findAll());
		
	}
}
