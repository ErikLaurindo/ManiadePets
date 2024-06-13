package com.belval.maniadepets.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.belval.maniadepets.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	
	

}
