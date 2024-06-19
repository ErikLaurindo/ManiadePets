package com.belval.maniadepets.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.belval.maniadepets.model.InfoPet;



@Repository
public interface InfoPetRepository extends CrudRepository<InfoPet, Integer> {
	
	

}
