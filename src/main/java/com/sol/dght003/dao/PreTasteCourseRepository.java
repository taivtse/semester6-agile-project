package com.sol.dght003.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sol.dght003.entities.PreTasteCourse;

@Repository
public interface PreTasteCourseRepository extends JpaRepository<PreTasteCourse, Long>{

	@Query(nativeQuery = true, value = "select * from pre_taste_course where major_id = :id")
	List<PreTasteCourse> findPreTasteCourseByMajorId(@Param("id") Long id);
	
}
