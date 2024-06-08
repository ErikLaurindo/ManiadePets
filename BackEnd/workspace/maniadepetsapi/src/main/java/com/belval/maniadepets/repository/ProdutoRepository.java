package com.belval.maniadepets.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.belval.maniadepets.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Integer> {
	
	//Select * from Produto where descricao = <parametro>
	List<Produto> findByDescricao(String descricao);

}
