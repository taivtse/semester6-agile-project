package com.sol.dght003.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sol.dght003.entities.Major;

@Repository
public interface MajorRepository extends JpaRepository<Major, Integer>{

}
