package com.sol.dght003.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sol.dght003.dao.AnswerRepository;
import com.sol.dght003.dao.AppropriationRepository;
import com.sol.dght003.dao.CandidateRepository;
import com.sol.dght003.dao.MajorRepository;
import com.sol.dght003.dao.QuestionRepository;
import com.sol.dght003.dao.ResultDetailRepository;
import com.sol.dght003.dao.ResultRepository;
import com.sol.dght003.data.RandomNumber;
import com.sol.dght003.dto.request.Answered;
import com.sol.dght003.dto.response.TestResult;
import com.sol.dght003.entities.Answer;
import com.sol.dght003.entities.Candidate;
import com.sol.dght003.entities.Result;
import com.sol.dght003.entities.ResultDetail;

@Service
public class TestService {

	@Autowired
	CandidateRepository candidateRepository;

	@Autowired
	AnswerRepository answerRepository;

	@Autowired
	QuestionRepository questionRepository;

	@Autowired
	MajorRepository majorRepository;

	@Autowired
	ResultRepository resultRepository;

	@Autowired
	ResultDetailRepository resultDetailRepository;

	@Autowired
	AppropriationRepository appropriationRepository;

	// Save test information: candidate, answered and return test result
	public List<TestResult> testProcessing(Answered answered) {

//		saveTest(answered);

		Candidate candidate = new Candidate();
		candidate = candidateRepository
				.save(new Candidate(answered.getCandidate().getName(), answered.getCandidate().getPhone(),
						answered.getCandidate().getSchool(), answered.getCandidate().getAddress()));
		
		
		System.out.println("This is the id: " + candidate.getId());
		Result result = resultRepository.save(new Result(new Date(), candidate));
		answered.getArrInt().forEach(answeredId -> {
			ResultDetail resultDetail = new ResultDetail();
			resultDetail.setResult(result);
			resultDetail.setAnswer(new Answer(answeredId));
			resultDetailRepository.save(resultDetail);
		});

		
		
		List<TestResult> testResults = new ArrayList<>();

		majorRepository.findAll().forEach(major -> {
			testResults.add(new TestResult(major.getName(), 0));
		});
		;

//		List<Integer> UDPM = new ArrayList<Integer>();
//		List<Integer> LTDD = new ArrayList<Integer>();
//		List<Integer> TKW = new ArrayList<Integer>();
//		List<Integer> TKDH = new ArrayList<Integer>();
//		List<Integer> CNTT = new ArrayList<Integer>();

		if (answered.getArrInt().isEmpty()) {
			return Collections.emptyList();
		}

		answered.getArrInt().forEach(id -> {
			if (id > 0) {
				answerRepository.findById(id).get().getAppropriations().forEach(appropriation -> {
					testResults.forEach(testResult -> {
						appropriation.getMajor().getName();
						if (testResult.getMajor().equals(appropriation.getMajor().getName())) {
							testResult.addScore(appropriation.getPercent());
						}
					});
				});
			}
		});

		return testResults;
	}

	public Result saveTest(Answered answered) {

		Candidate candidate = new Candidate(answered.getCandidate().getName(), answered.getCandidate().getPhone(),
				answered.getCandidate().getSchool(), answered.getCandidate().getAddress());
		candidateRepository.save(candidate);
		Result result = resultRepository.save(new Result(new Date(), candidate));
		answered.getArrInt().forEach(answeredId -> {
			ResultDetail resultDetail = new ResultDetail();
			resultDetail.setResult(result);
			resultDetail.setAnswer(new Answer(answeredId));
			result.getResultDetails().add(resultDetail);
			resultDetailRepository.save(resultDetail);
		});

		return result;
	}

	int i = 0;

	public Map<Integer, Integer> fakeAnswer() {

		Map<Integer, Integer> answeredsId = new HashMap<Integer, Integer>();

		questionRepository.findAll().forEach(question -> {
			i += 1;
			answeredsId.put(i, question.getAnswers().get(RandomNumber.randomNumberSpecificRange(0, 3)).getId());

		});

		i = 0;
		return answeredsId;
	}

}
