package com.belval.maniadepets.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.belval.maniadepets.model.Produto;
import com.belval.maniadepets.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	
	

}
