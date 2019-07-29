//package com.sol.dght003.data;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import com.sol.dght003.dao.AnswerRepository;
//import com.sol.dght003.dao.AppropriationRepository;
//import com.sol.dght003.dao.CandidateRepository;
//import com.sol.dght003.dao.MajorRepository;
//import com.sol.dght003.dao.QuestionRepository;
//import com.sol.dght003.dao.ResultDetailRepository;
//import com.sol.dght003.dao.ResultRepository;
//import com.sol.dght003.entities.Answer;
//import com.sol.dght003.entities.Appropriation;
//import com.sol.dght003.entities.Candidate;
//import com.sol.dght003.entities.Major;
//import com.sol.dght003.entities.Question;
//import com.sol.dght003.entities.Result;
//import com.sol.dght003.entities.ResultDetail;
//
//@Component
//public class FakeData implements CommandLineRunner{
//	
//	@Autowired
//	QuestionRepository questionRepository;
//
//	@Autowired
//	AnswerRepository answerRepository;
//
//	@Autowired
//	AppropriationRepository appropriationRepository;
//
//	@Autowired
//	MajorRepository majorRepository;
//	
//	@Autowired
//	ResultRepository resultRepository;
//	
//	@Autowired
//	ResultDetailRepository resultDetailRepository;
//	
//	@Autowired
//	CandidateRepository candidateRepostitory;
//	
//	private static List<Candidate> candidates = new ArrayList<>();
//	private static List<Question> questions = new ArrayList<>();
//	private static List<Major> majors = new ArrayList<>();
//
//	public void run(String... args) throws Exception {
//		//Candidate initial
//		for(int i = 0; i < 100; i++) {
//			
//			candidates.add(candidateRepostitory.save(new Candidate(
//					"Candidate no."+i,
//					RandomNumber.randomPhoneNumber(11),
//					"School "+RandomNumber.randomNumberSpecificRange(1, 99),
//					"Province No."+RandomNumber.randomNumberSpecificRange(1, 12)
//				)));
//		}
//		
//		candidates.forEach(e -> {
//			System.out.println(e.getId());
//		});
//		
//		for(int i = 0; i < 4; i++) {
//			
//			majors.add(majorRepository.save(new Major("Major ."+i)));
//			System.out.println("Major created: Major ."+i);
//		}
//		//Question initial
//		for(int i = 0; i < 40; i ++) {
//			questions.add(questionRepository.save(
//						new Question("Question ."+i)
//					));
//			System.out.println("Question created: Question ."+i);
//		}
//		
//		questions.forEach(e -> {
//			List<Answer> answers = new ArrayList<Answer>();
//			for(int i = 0 ; i < 4; i++) {
//				answers.add(answerRepository.save(new Answer("Answer Q"+e.getId()+"A"+i, e)));
//				System.out.println("Answer created: Answer .Q"+e.getId()+"A"+i);
//			}
//			e.setAnswers(answers);
//		});
//		
//		questions.forEach(e -> {
//			e.getAnswers().forEach(a -> {
//				
//				Appropriation appropriation1 = new Appropriation(RandomNumber.randomNumberSpecificRange(0, 100));
//				appropriation1.setAnswer(a); appropriation1.setMajor(majors.get(0));
//				Appropriation appropriation2 = new Appropriation(RandomNumber.randomNumberSpecificRange(0, 100));
//				appropriation2.setAnswer(a); appropriation2.setMajor(majors.get(1));
//				Appropriation appropriation3 = new Appropriation(RandomNumber.randomNumberSpecificRange(0, 100));
//				appropriation3.setAnswer(a); appropriation3.setMajor(majors.get(2));
//				Appropriation appropriation4 = new Appropriation(RandomNumber.randomNumberSpecificRange(0, 100));
//				appropriation4.setAnswer(a); appropriation4.setMajor(majors.get(3));
//				
//				appropriationRepository.save(appropriation1);
//				System.out.println("Appropriation Q"+e.getId()+"A"+a.getId()+"P"+appropriation1.getPercent()+"M"+appropriation1.getMajor().getName());
//				appropriationRepository.save(appropriation2);
//				System.out.println("Appropriation Q"+e.getId()+"A"+a.getId()+"P"+appropriation2.getPercent()+"M"+appropriation2.getMajor().getName());
//				appropriationRepository.save(appropriation3);
//				System.out.println("Appropriation Q"+e.getId()+"A"+a.getId()+"P"+appropriation3.getPercent()+"M"+appropriation3.getMajor().getName());
//				appropriationRepository.save(appropriation4);
//				System.out.println("Appropriation Q"+e.getId()+"A"+a.getId()+"P"+appropriation4.getPercent()+"M"+appropriation4.getMajor().getName());
//				
//			});
//		});
//		
//		candidates.forEach(candidate -> {
//			Result result = resultRepository.save(new Result(new Date(), candidate));
//			System.out.println("Result created: Result C."+candidate.getId());
//			questions.forEach(question1 -> {
//				ResultDetail resultDetail = new ResultDetail();
//				resultDetail.setAnswer(question1.getAnswers().get(
//						RandomNumber.randomNumberSpecificRange(0, 3)));
//				resultDetail.setResult(result);
//				resultDetailRepository.save(resultDetail);
//				System.out.println("Candidate "+candidate.getName()+" choose answer Q"+resultDetail.getAnswer().getContent());
//			});
//			
//		});
//	}
//	
//	
//}
