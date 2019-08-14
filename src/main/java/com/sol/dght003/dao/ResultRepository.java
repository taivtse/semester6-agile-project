package com.sol.dght003.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sol.dght003.entities.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Integer>{

}
