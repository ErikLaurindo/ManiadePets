package com.belval.maniadepets.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.belval.maniadepets.model.InfoPet;
import com.belval.maniadepets.repository.InfoPetRepository;

@RestController
public class InfoPetController {
	
	@Autowired
	private InfoPetRepository infopetRepository;
	
	@GetMapping("/InfoPet")
	public ResponseEntity<Iterable<InfoPet>> obterInfoPet() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body( infopetRepository.findAll());
	}

}
